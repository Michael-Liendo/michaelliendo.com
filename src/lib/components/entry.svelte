<script lang="ts">
import LL, { locale } from "$i18n/i18n-svelte";
import { baseLocale } from "$i18n/i18n-util";
import { formatDate } from "$lib/utils";
import { ChevronRight } from "@lucide/svelte";

interface Props {
	title?: string;
	description?: string;
	date: string;
	tags?: string[];
	slug?: string;
	previewImageUrl?: string | null;
}

const {
	title = "",
	description = "",
	date,
	slug = "",
}: Props = $props();

const href = $derived(
	`${$locale === baseLocale ? "" : `/${$locale}`}/notes/${slug}`,
);
</script>

<li class="list-none pb-12 last:pb-0">
  <article>
    <a
      {href}
      class="group flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-8"
    >
      <time
        class="shrink-0 text-xs font-normal tabular-nums text-ink-muted sm:w-24 sm:pt-1 sm:text-right sm:text-sm"
        datetime={formatDate(date, undefined, $locale)}
      >
        {formatDate(date, undefined, $locale)}
      </time>
      <div
        class="min-w-0 flex-1 border-t border-border pt-4 sm:border-t-0 sm:border-l sm:border-border sm:pl-8 sm:pt-0.5"
      >
        <h2
          class="text-base font-semibold leading-snug text-ink transition-colors group-hover:text-link sm:text-lg"
        >
          {title}
        </h2>
        <p class="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-muted">
          {description || ""}
        </p>
        <span
          class="mt-4 inline-flex items-center gap-0.5 text-sm font-medium text-link transition-colors group-hover:text-link-hover"
        >
          {$LL.NOTES.READ_NOTE()}
          <ChevronRight class="h-4 w-4 shrink-0" aria-hidden="true" />
        </span>
      </div>
    </a>
  </article>
</li>
