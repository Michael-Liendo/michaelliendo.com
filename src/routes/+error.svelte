<script lang="ts">
import { page } from "$app/state";
import { locale } from "$i18n/i18n-svelte";
import { baseLocale } from "$i18n/i18n-util";
import { WHATSAPP_URL } from "$lib/seo/site";
import { PublicRoutesEnum } from "$lib/utils/routes";

const en = $derived($locale === "en");
const prefix = $derived($locale === baseLocale ? "" : `/${$locale}`);
const notFound = $derived(page.status === 404);

const title = $derived(
	notFound
		? en
			? "This page doesn't exist."
			: "Esta página no existe."
		: en
			? "Something went wrong."
			: "Algo salió mal.",
);
const body = $derived(
	notFound
		? en
			? "The link may be old or mistyped. These are good places to start:"
			: "Puede que el enlace sea viejo o tenga un error. Estos son buenos lugares para empezar:"
		: en
			? "Try again in a moment, or write to me and I'll take a look."
			: "Intenta de nuevo en un momento, o escríbeme y lo reviso.",
);
</script>

<svelte:head>
  <title>{page.status} · Michael Liendo</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<section class="flex min-h-[60vh] flex-col justify-center py-20">
  <p class="m-0 text-[14px] font-medium text-accent">{en ? 'Error' : 'Error'} {page.status}</p>
  <h1
    class="mb-0 mt-3 max-w-[720px] text-balance text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[4rem]"
  >
    {title}
  </h1>
  <p class="mb-0 mt-5 max-w-[560px] text-[18px] leading-[1.55] text-ink-muted">{body}</p>

  <div class="mt-9 flex flex-wrap gap-2.5">
    <a
      href="{prefix}{PublicRoutesEnum.Home}"
      class="inline-flex min-h-12 items-center rounded-xl bg-ink px-5 text-[15.5px] font-medium text-white no-underline transition-colors hover:bg-accent"
      >{en ? 'Go to the home page' : 'Ir al inicio'}</a
    >
    <a
      href="{prefix}{PublicRoutesEnum.Projects}"
      class="inline-flex min-h-12 items-center rounded-xl bg-surface-sunken px-5 text-[15.5px] font-medium text-ink no-underline transition-colors hover:bg-[#e9e9e5]"
      >{en ? 'See projects' : 'Ver proyectos'}</a
    >
    <a
      href={WHATSAPP_URL}
      rel="noreferrer"
      class="inline-flex min-h-12 items-center rounded-xl bg-surface-sunken px-5 text-[15.5px] font-medium text-ink no-underline transition-colors hover:bg-[#e9e9e5]"
      >WhatsApp</a
    >
  </div>
</section>
