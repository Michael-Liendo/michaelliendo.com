<script lang="ts">
import { MoonIcon, SunIcon } from "@lucide/svelte";
import { onMount } from "svelte";

import { locale } from "$i18n/i18n-svelte";

let theme = $state<"light" | "dark">("light");

onMount(() => {
	const read = () => {
		theme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
	};
	read();
	// The device setting can change while the page is open.
	const observer = new MutationObserver(read);
	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ["data-theme"],
	});
	return () => observer.disconnect();
});

function toggle() {
	const next = theme === "dark" ? "light" : "dark";
	const system = matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
	try {
		// Matching the device again means "follow the device" from now on.
		if (next === system) localStorage.removeItem("theme");
		else localStorage.setItem("theme", next);
		window.__applyTheme?.();
	} catch {
		// Storage blocked: switch for this page view only.
		document.documentElement.dataset.theme = next;
	}
}

const label = $derived(
	theme === "dark"
		? $locale === "en"
			? "Switch to light mode"
			: "Cambiar a modo claro"
		: $locale === "en"
			? "Switch to dark mode"
			: "Cambiar a modo oscuro",
);
</script>

<button
  type="button"
  onclick={toggle}
  aria-label={label}
  title={label}
  class="inline-grid size-8 place-items-center rounded-lg sm:size-9 text-ink-muted transition-colors hover:bg-surface-sunken hover:text-ink"
>
  {#if theme === 'dark'}
    <SunIcon size={17} />
  {:else}
    <MoonIcon size={17} />
  {/if}
</button>
