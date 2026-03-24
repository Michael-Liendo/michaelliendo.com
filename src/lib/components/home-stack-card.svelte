<script lang="ts">
import { Cloud, Code2, Database, Wrench } from "@lucide/svelte";
import type {
	HomeStackItem,
	HomeStackSectionIcon,
} from "$lib/types/HomeStack";

/** Pinned Simple Icons release for stable SVG URLs (jsDelivr). */
const SIMPLE_ICONS_PKG = "simple-icons@13.16.0";

const { title, icon, items } = $props<{
	title: string;
	icon: HomeStackSectionIcon;
	items: HomeStackItem[];
}>();

const HeaderIcon = $derived.by(() => {
	switch (icon) {
		case "wrench":
			return Wrench;
		case "database":
			return Database;
		case "cloud":
			return Cloud;
		default:
			return Code2;
	}
});

function techIconUrl(slug: string): string {
	return `https://cdn.jsdelivr.net/npm/${SIMPLE_ICONS_PKG}/icons/${encodeURIComponent(slug)}.svg`;
}

function initialFor(name: string): string {
	const t = name.trim();
	return t ? t[0]!.toUpperCase() : "?";
}
</script>

<aside
	class="rounded-2xl border border-border bg-surface-elevated/90 p-5 shadow-soft ring-1 ring-white/[0.04] backdrop-blur-sm"
	aria-label={title}
>
  <div class="mb-4 flex items-center gap-2 border-b border-border pb-4">
    <HeaderIcon class="h-4 w-4 shrink-0 text-ink-muted" aria-hidden="true" />
    <h2 class="text-sm font-semibold tracking-tight text-ink">{title}</h2>
  </div>
  <ol class="space-y-0">
    {#each items as item (item.name)}
      <li
        class="flex gap-3 border-b border-border/70 py-4 last:border-b-0 last:pb-0 first:pt-0"
      >
        {#if item.icon_slug}
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface p-2"
            aria-hidden="true"
          >
            <img
              src={techIconUrl(item.icon_slug)}
              alt=""
              width="24"
              height="24"
              class="size-6 object-contain brightness-0 invert opacity-90"
              loading="lazy"
              decoding="async"
            />
          </div>
        {:else}
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-xs font-semibold uppercase text-ink-muted"
            aria-hidden="true"
          >
            {initialFor(item.name)}
          </div>
        {/if}
        <div class="min-w-0 flex-1">
          <p class="font-medium leading-snug text-ink">{item.name}</p>
          <p class="mt-1.5 text-pretty text-sm leading-relaxed text-ink-muted">
            {item.description}
          </p>
          {#if item.period}
            <p
              class="mt-2 text-right text-xs tabular-nums text-ink-muted/90"
            >
              {item.period}
            </p>
          {/if}
        </div>
      </li>
    {/each}
  </ol>
</aside>
