<script lang="ts">
import { PlayIcon, RotateCcwIcon } from "@lucide/svelte";
import { onDestroy, tick } from "svelte";

import type { HomeCase } from "$lib/types/Home";

type Chat = NonNullable<HomeCase["chat"]>;

const { chat, logo }: { chat: Chat; logo: string } = $props();

let shown = $state(0);
let typing = $state(false);
let running = $state(false);
let log = $state<HTMLDivElement | null>(null);

const done = $derived(shown === chat.messages.length && !running);
const visible = $derived(chat.messages.slice(0, shown));

// Pauses between steps, in ms: long enough to read, short enough to watch.
const DELAY = { customer: 1100, system: 900, botTyping: 1300, bot: 700 };

let timers: ReturnType<typeof setTimeout>[] = [];
let runId = 0;

function wait(ms: number) {
	return new Promise<void>((resolve) => {
		timers.push(setTimeout(resolve, ms));
	});
}

async function scrollToEnd() {
	await tick();
	log?.scrollTo({ top: log.scrollHeight, behavior: "smooth" });
}

async function play() {
	const id = ++runId;
	timers.forEach(clearTimeout);
	timers = [];
	shown = 0;
	typing = false;
	running = true;

	// Reduced motion: show the whole conversation at once.
	if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
		shown = chat.messages.length;
		running = false;
		await scrollToEnd();
		return;
	}

	for (const message of chat.messages) {
		if (message.from === "bot") {
			typing = true;
			await scrollToEnd();
			await wait(DELAY.botTyping);
			typing = false;
		} else {
			await wait(message.from === "customer" ? DELAY.customer : DELAY.system);
		}
		if (id !== runId) return;
		shown += 1;
		await scrollToEnd();
		if (message.from === "bot") await wait(DELAY.bot);
		if (id !== runId) return;
	}
	running = false;
}

onDestroy(() => {
	runId += 1;
	timers.forEach(clearTimeout);
});
</script>

<div class="flex items-center gap-2.5 border-b border-[#e7e7e3] px-4 py-3.5 font-medium">
  <img src={logo} alt="" width="30" height="30" class="size-[30px] rounded-full" />
  <div class="leading-tight">
    {chat.name}
    <span class="block text-[12.5px] font-normal text-[#22A05A]">
      {typing ? chat.typing : chat.status}
    </span>
  </div>
  <span class="ml-auto rounded-full bg-[#f4f4f2] px-2.5 py-1 text-[11.5px] font-normal text-[#6b6b66]">
    {chat.note}
  </span>
</div>

<div class="relative bg-[#EFEAE2]">
  <div
    bind:this={log}
    class="flex h-[440px] flex-col gap-2 overflow-y-auto p-4 text-[14.5px] leading-[1.4]"
    aria-live="polite"
  >
    {#each visible as m, i (i)}
      {#if m.from === 'system'}
        <p
          class="animate-fade-in-up m-0 self-center rounded-full bg-white/70 px-3 py-1 text-center text-[12px] text-[#54656f]"
        >
          {m.text}
        </p>
      {:else}
        <div
          class="animate-fade-in-up {m.from === 'customer'
            ? 'max-w-[80%] self-end rounded-[12px_12px_3px_12px] bg-[#DCF8C6] px-3 py-2'
            : 'max-w-[85%] self-start rounded-[12px_12px_12px_3px] bg-white px-3 py-2'}"
        >
          {#if m.attachment === 'photo'}
            <div
              class="mb-1.5 grid h-28 w-44 place-items-center rounded-md bg-[#c9d6c0] text-[30px]"
              aria-hidden="true"
            >
              👜
            </div>
          {:else if m.attachment === 'voice'}
            <div class="mb-1 flex items-center gap-2 text-[#54656f]" aria-hidden="true">
              <PlayIcon size={16} class="fill-current" />
              <span class="flex h-5 items-center gap-[3px]">
                {#each [6, 12, 9, 16, 7, 14, 10, 18, 8, 12, 6, 10, 15, 7] as h}
                  <span class="w-[3px] rounded-full bg-[#8696a0]" style="height: {h}px"></span>
                {/each}
              </span>
              <span class="text-[12px]">{m.attachmentLabel}</span>
            </div>
          {:else if m.attachment === 'link'}
            <div class="mb-1.5 rounded-md border-l-4 border-[#22A05A] bg-[#f4f4f2] px-2.5 py-2 text-[13px]">
              🔗 {m.attachmentLabel}
            </div>
          {/if}
          {m.text}
        </div>
      {/if}
    {/each}

    {#if typing}
      <div
        class="flex self-start gap-1 rounded-[12px_12px_12px_3px] bg-white px-3 py-3"
        aria-label={chat.typing}
      >
        {#each [0, 150, 300] as delay}
          <span
            class="size-1.5 animate-bounce rounded-full bg-[#8696a0]"
            style="animation-delay: {delay}ms"
          ></span>
        {/each}
      </div>
    {/if}
  </div>

  {#if shown === 0 && !running}
    <div class="absolute inset-0 grid place-items-center">
      <button
        type="button"
        onclick={play}
        class="inline-flex items-center gap-2 rounded-full bg-[#0b0b0b] px-5 py-3 text-[15px] font-medium text-white shadow-soft-lg transition-transform hover:-translate-y-0.5"
      >
        <PlayIcon size={16} class="fill-current" />
        {chat.start}
      </button>
    </div>
  {:else if done}
    <button
      type="button"
      onclick={play}
      class="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[13px] font-medium text-[#0b0b0b] shadow-soft transition-colors hover:bg-white"
    >
      <RotateCcwIcon size={14} />
      {chat.replay}
    </button>
  {/if}
</div>
