<script lang="ts">
  import { enhance } from "$app/forms";
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  import { env as publicEnv } from "$env/dynamic/public";
  import LL, { locale } from "$i18n/i18n-svelte";
  import { PublicRoutesEnum } from "$lib/utils/routes";
  import SeoMeta from "$lib/seo/SeoMeta.svelte";
  import { SITE_ORIGIN } from "$lib/seo/site";
  import {
    ArrowRight,
    Bot,
    Briefcase,
    CheckCircle2,
    DollarSign,
    Link2,
    MessageCircle,
    PiggyBank,
    Sparkles,
    Timer,
    Users,
    Zap,
  } from "@lucide/svelte";

  function usdRange(minTotal: number, maxTotal: number): string {
    const fmt = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });
    return `${fmt.format(minTotal)} – ${fmt.format(maxTotal)}`;
  }

  /** ~10 agentes → 2–3 · US$300 c/u y mes */
  const chatPayroll = {
    agentsBefore: 10,
    agentsAfterMin: 2,
    agentsAfterMax: 3,
    usdPerAgentMonth: 300,
  } as const;

  const payrollSavingsRange = usdRange(
    chatPayroll.agentsBefore * chatPayroll.usdPerAgentMonth -
      chatPayroll.agentsAfterMax * chatPayroll.usdPerAgentMonth,
    chatPayroll.agentsBefore * chatPayroll.usdPerAgentMonth -
      chatPayroll.agentsAfterMin * chatPayroll.usdPerAgentMonth,
  );

  let { form } = $props();

  const baseLocaleUrl = $derived($locale === "es" ? "" : `/${$locale}`);

  const whatsappE164 = $derived(
    (publicEnv.PUBLIC_WHATSAPP_E164 ?? "").replace(/\D/g, ""),
  );

  const leadsJsonLd = $derived({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name:
      $locale === "es"
        ? "Michael Liendo — Automatizaciones y software para negocios en Venezuela"
        : "Michael Liendo — Automations for businesses in Venezuela",
    url: `${SITE_ORIGIN}${page.url.pathname}`,
    areaServed: [{ "@type": "Country", name: "Venezuela" }, "Worldwide"],
    availableLanguage: ["en", "es"],
  });

  function scrollToId(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
</script>

<SeoMeta
  title={$LL.SEO.AUTOMATIONS.TITLE()}
  description={$LL.SEO.AUTOMATIONS.DESCRIPTION()}
  keywords={$LL.SEO.AUTOMATIONS.KEYWORDS()}
  image={$LL.SEO.IMAGE()}
  ogType="website"
  locale={$locale}
  imageAlt="Michael Liendo"
  jsonLd={leadsJsonLd}
/>

{#if whatsappE164}
  <a
    href="https://wa.me/{whatsappE164}"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft-lg ring-2 ring-white/10 transition hover:scale-105 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    aria-label={$LL.LEADS.WHATSAPP_ARIA()}
    title={$LL.LEADS.WHATSAPP_LABEL()}
  >
    <MessageCircle class="h-7 w-7" aria-hidden="true" />
  </a>
{/if}

<section
  class="relative z-10 mt-8 md:mt-12"
  aria-labelledby="leads-hero-heading"
>
  <div
    class="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink-muted"
  >
    <Sparkles class="h-3.5 w-3.5 text-accent" aria-hidden="true" />
    {$LL.LEADS.HERO_BADGE()}
  </div>

  <h1
    id="leads-hero-heading"
    class="mt-5 max-w-3xl text-pretty text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-[2.35rem] md:leading-tight"
  >
    {$LL.LEADS.HERO_HEADLINE()}
  </h1>

  <p
    class="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg"
  >
    {$LL.LEADS.HERO_LEAD()}
  </p>

  <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
    <a
      href="#contacto"
      class="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft transition hover:brightness-110"
    >
      {$LL.LEADS.HERO_CTA_PRIMARY()}
      <ArrowRight class="h-4 w-4" aria-hidden="true" />
    </a>
    <button
      type="button"
      class="inline-flex items-center justify-center rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent/40 hover:bg-accent-muted/30"
      onclick={() => scrollToId("casos-exito")}
    >
      {$LL.LEADS.HERO_CTA_SECONDARY()}
    </button>
  </div>
</section>

<section
  id="casos-exito"
  class="relative mt-16 scroll-mt-28 overflow-hidden rounded-3xl border border-white/[0.08] bg-surface-elevated/40 p-6 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.05] sm:p-8 md:mt-20"
  aria-labelledby="casos-heading"
>
  <div
    class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0.5_0.02_265/0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.5_0.02_265/0.04)_1px,transparent_1px)] bg-[length:28px_28px] opacity-[0.65]"
    aria-hidden="true"
  ></div>
  <div
    class="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-accent/12 blur-[100px]"
    aria-hidden="true"
  ></div>
  <div
    class="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-600/15 blur-[90px]"
    aria-hidden="true"
  ></div>
  <div
    class="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/25 to-transparent"
    aria-hidden="true"
  ></div>

  <div class="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
    <div class="flex items-start gap-4">
      <div
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-accent/30 to-accent-muted/50 text-accent shadow-[0_8px_32px_-8px_oklch(0.72_0.13_195/0.35)] ring-1 ring-accent/30"
        aria-hidden="true"
      >
        <Sparkles class="h-6 w-6" />
      </div>
      <div class="min-w-0">
        <div class="flex flex-wrap items-center gap-2">
          <h2
            id="casos-heading"
            class="text-xl font-bold tracking-tight text-ink sm:text-2xl"
          >
            {$LL.LEADS.CASE_STUDIES_TITLE()}
          </h2>
          <span
            class="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent"
          >
            {$LL.LEADS.CASE_SIMPLE_BADGE()}
          </span>
        </div>
        <p
          class="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-ink-muted sm:text-[0.95rem]"
        >
          {$LL.LEADS.CASE_STUDIES_LEAD()}
        </p>
      </div>
    </div>
  </div>

  <div class="relative mt-10">
    <p
      class="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted/75"
    >
      <Timer class="h-3.5 w-3.5 text-accent/80" aria-hidden="true" />
      <span>{$LL.LEADS.CASE_SIMPLE_COMPARE_CAPTION()}</span>
    </p>

    <div class="relative grid gap-4 md:grid-cols-2 md:gap-0 md:pt-1">
      <div
        class="relative z-0 flex min-h-[12rem] flex-col justify-between rounded-3xl border border-orange-500/15 bg-linear-to-br from-orange-950/20 via-surface/70 to-surface/50 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg md:rounded-r-none md:border-r-0 md:pr-10"
      >
        <div
          class="pointer-events-none absolute inset-0 rounded-3xl md:rounded-r-none"
          style="background: radial-gradient(ellipse 80% 60% at 0% 0%, oklch(0.55 0.12 55 / 0.08), transparent 55%);"
          aria-hidden="true"
        ></div>
        <div class="relative flex items-start gap-4">
          <div
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-300/90 ring-1 ring-orange-400/20"
            aria-hidden="true"
          >
            <Users class="h-5 w-5" />
          </div>
          <div class="min-w-0 flex-1">
            <p
              class="text-[11px] font-bold uppercase tracking-widest text-orange-200/70"
            >
              {$LL.LEADS.CASE_SIMPLE_BEFORE_LABEL()}
            </p>
            <p
              class="mt-2 font-mono text-[2.35rem] font-bold leading-none tabular-nums tracking-tight text-ink sm:text-5xl"
            >
              {$LL.LEADS.CASE_SIMPLE_BEFORE_TIME()}
            </p>
          </div>
        </div>
        <p class="relative mt-5 text-sm leading-relaxed text-ink-muted/95">
          {$LL.LEADS.CASE_SIMPLE_BEFORE_DESC()}
        </p>
      </div>

      <div
        class="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden h-[3.25rem] w-[3.25rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/40 bg-linear-to-b from-surface-elevated to-surface shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_12px_40px_-8px_oklch(0.72_0.13_195/0.45)] ring-4 ring-surface-elevated/90 md:flex"
        aria-hidden="true"
      >
        <ArrowRight
          class="h-6 w-6 text-accent drop-shadow-[0_0_12px_oklch(0.72_0.13_195/0.5)]"
        />
      </div>

      <div
        class="relative z-0 flex min-h-[12rem] flex-col justify-between rounded-3xl border border-accent/35 bg-linear-to-br from-accent-muted/30 via-surface-elevated/95 to-surface/80 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-20px_oklch(0.72_0.13_195/0.25)] md:rounded-l-none md:border-l-0 md:pl-10"
      >
        <div
          class="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full bg-accent/15 blur-3xl"
          aria-hidden="true"
        ></div>
        <div class="relative flex items-start gap-4">
          <div
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/25 text-accent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] ring-1 ring-accent/35"
            aria-hidden="true"
          >
            <Bot class="h-5 w-5" />
          </div>
          <div class="min-w-0 flex-1">
            <p
              class="text-[11px] font-bold uppercase tracking-widest text-accent"
            >
              {$LL.LEADS.CASE_SIMPLE_AFTER_LABEL()}
            </p>
            <p
              class="mt-2 bg-linear-to-br from-accent to-oklch(0.82 0.1 195) bg-clip-text font-mono text-[2.35rem] font-bold leading-none tabular-nums tracking-tight text-transparent sm:text-5xl"
            >
              {$LL.LEADS.CASE_SIMPLE_AFTER_TIME()}
            </p>
          </div>
        </div>
        <p class="relative mt-5 text-sm leading-relaxed text-ink-muted">
          {$LL.LEADS.CASE_SIMPLE_AFTER_DESC()}
        </p>
      </div>
    </div>

    <div
      class="mt-4 flex items-center justify-center gap-3 md:hidden"
      aria-hidden="true"
    >
      <div class="h-px flex-1 max-w-[40%] bg-linear-to-r from-transparent via-border to-border/80"></div>
      <span
        class="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent"
        >vs</span
      >
      <div class="h-px flex-1 max-w-[40%] bg-linear-to-l from-transparent via-border to-border/80"></div>
    </div>
  </div>

  <div
    class="relative mt-8 overflow-hidden rounded-3xl border border-emerald-500/30 bg-linear-to-br from-emerald-950/40 via-surface-elevated/98 to-surface-elevated p-6 shadow-[0_20px_60px_-24px_rgba(16,185,129,0.2)] sm:p-8"
  >
    <div
      class="pointer-events-none absolute inset-0 opacity-40"
      style="background: radial-gradient(ellipse 70% 80% at 100% 0%, oklch(0.65 0.17 160 / 0.12), transparent 50%);"
      aria-hidden="true"
    ></div>
    <div
      class="pointer-events-none absolute -right-12 bottom-0 h-44 w-44 rounded-full bg-emerald-400/12 blur-3xl"
      aria-hidden="true"
    ></div>
    <div
      class="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/30 to-transparent"
      aria-hidden="true"
    ></div>

    <div
      class="relative flex flex-col gap-6 lg:flex-row lg:items-stretch lg:justify-between lg:gap-10"
    >
      <div class="flex min-w-0 flex-1 gap-4 sm:gap-5">
        <div
          class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/18 text-emerald-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] ring-1 ring-emerald-400/25"
          aria-hidden="true"
        >
          <PiggyBank class="h-7 w-7" />
        </div>
        <div class="min-w-0">
          <h3 class="text-base font-semibold text-ink">
            {$LL.LEADS.CASE_SIMPLE_PAYROLL_TITLE()}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-muted">
            {$LL.LEADS.CASE_SIMPLE_PAYROLL_BODY()}
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              class="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-ink-muted ring-1 ring-white/[0.04]"
            >
              <Users class="h-3.5 w-3.5 text-emerald-400/90" aria-hidden="true" />
              <span class="font-mono tabular-nums"
                >{chatPayroll.agentsBefore} → {chatPayroll.agentsAfterMin}–{chatPayroll.agentsAfterMax}</span
              >
            </span>
            <span
              class="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-ink-muted ring-1 ring-white/[0.04]"
            >
              <DollarSign
                class="h-3.5 w-3.5 text-emerald-400/90"
                aria-hidden="true"
              />
              <span class="font-mono tabular-nums"
                >{chatPayroll.usdPerAgentMonth} USD</span
              >
            </span>
          </div>
        </div>
      </div>
      <div
        class="flex shrink-0 flex-col justify-center border-t border-emerald-500/25 pt-5 sm:pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
      >
        <p
          class="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400/95"
        >
          {$LL.LEADS.CASE_SIMPLE_PAYROLL_SAVINGS_LABEL()}
        </p>
        <p
          class="mt-2 bg-linear-to-br from-emerald-300 to-emerald-500 bg-clip-text font-mono text-3xl font-bold tabular-nums tracking-tight text-transparent sm:text-4xl"
        >
          {payrollSavingsRange}
        </p>
        <p class="mt-3 max-w-xs text-xs leading-relaxed text-ink-muted/90">
          {$LL.LEADS.CASE_SIMPLE_PAYROLL_NOTE()}
        </p>
      </div>
    </div>
  </div>

  <p
    class="relative mt-8 text-center text-sm font-medium text-ink-muted/90 sm:text-left"
  >
    {$LL.LEADS.CASE_MORE()}
  </p>
</section>

<section class="mt-16 md:mt-20" aria-labelledby="services-heading">
  <h2
    id="services-heading"
    class="text-xl font-bold tracking-tight text-ink sm:text-2xl"
  >
    {$LL.LEADS.SERVICES_TITLE()}
  </h2>
  <ul
    class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
    role="list"
  >
    <li
      class="rounded-2xl border border-border bg-surface-elevated/50 p-5 shadow-soft"
    >
      <div
        class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-muted text-accent"
      >
        <Zap class="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 class="mt-4 font-semibold text-ink">{$LL.LEADS.SERVICE_1_TITLE()}</h3>
      <p class="mt-2 text-sm leading-relaxed text-ink-muted">
        {$LL.LEADS.SERVICE_1_DESC()}
      </p>
    </li>
    <li
      class="rounded-2xl border border-border bg-surface-elevated/50 p-5 shadow-soft"
    >
      <div
        class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-muted text-accent"
      >
        <Link2 class="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 class="mt-4 font-semibold text-ink">{$LL.LEADS.SERVICE_2_TITLE()}</h3>
      <p class="mt-2 text-sm leading-relaxed text-ink-muted">
        {$LL.LEADS.SERVICE_2_DESC()}
      </p>
    </li>
    <li
      class="rounded-2xl border border-border bg-surface-elevated/50 p-5 shadow-soft sm:col-span-2 lg:col-span-1"
    >
      <div
        class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-muted text-accent"
      >
        <Briefcase class="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 class="mt-4 font-semibold text-ink">{$LL.LEADS.SERVICE_3_TITLE()}</h3>
      <p class="mt-2 text-sm leading-relaxed text-ink-muted">
        {$LL.LEADS.SERVICE_3_DESC()}
      </p>
    </li>
  </ul>
</section>

<section class="mt-16 md:mt-20" aria-labelledby="proof-heading">
  <h2
    id="proof-heading"
    class="text-xl font-bold tracking-tight text-ink sm:text-2xl"
  >
    {$LL.LEADS.PROOF_TITLE()}
  </h2>
  <ul class="mt-8 space-y-4" role="list">
    {#each [$LL.LEADS.PROOF_1(), $LL.LEADS.PROOF_2(), $LL.LEADS.PROOF_3()] as line (line)}
      <li class="flex gap-3 text-pretty text-ink-muted">
        <CheckCircle2
          class="mt-0.5 h-5 w-5 shrink-0 text-accent"
          aria-hidden="true"
        />
        <span class="leading-relaxed">{line}</span>
      </li>
    {/each}
  </ul>
</section>

<section
  class="mt-16 scroll-mt-28 md:mt-20"
  aria-labelledby="magnet-heading"
>
  <div
    class="rounded-2xl border border-accent/35 bg-linear-to-br from-accent-muted/40 to-surface-elevated p-6 shadow-soft sm:p-8"
  >
    <h2
      id="magnet-heading"
      class="text-xl font-bold tracking-tight text-ink sm:text-2xl"
    >
      {$LL.LEADS.MAGNET_TITLE()}
    </h2>
    <p class="mt-3 max-w-2xl text-pretty leading-relaxed text-ink-muted">
      {$LL.LEADS.MAGNET_LEAD()}
    </p>
    <ul class="mt-5 space-y-2 text-sm text-ink-muted" role="list">
      <li class="flex gap-2">
        <span class="text-accent" aria-hidden="true">—</span>
        {$LL.LEADS.MAGNET_BULLET_1()}
      </li>
      <li class="flex gap-2">
        <span class="text-accent" aria-hidden="true">—</span>
        {$LL.LEADS.MAGNET_BULLET_2()}
      </li>
      <li class="flex gap-2">
        <span class="text-accent" aria-hidden="true">—</span>
        {$LL.LEADS.MAGNET_BULLET_3()}
      </li>
    </ul>
    <a
      href="#contacto"
      class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-link underline-offset-4 hover:text-link-hover hover:underline"
    >
      {$LL.LEADS.MAGNET_CTA()}
      <ArrowRight class="h-4 w-4" aria-hidden="true" />
    </a>
  </div>
</section>

<section class="mt-16 md:mt-20" aria-labelledby="content-heading">
  <h2
    id="content-heading"
    class="text-xl font-bold tracking-tight text-ink sm:text-2xl"
  >
    {$LL.LEADS.CONTENT_TITLE()}
  </h2>
  <p class="mt-3 max-w-2xl text-pretty leading-relaxed text-ink-muted">
    {$LL.LEADS.CONTENT_BODY()}
  </p>
  <a
    href={resolve(`${baseLocaleUrl}${PublicRoutesEnum.Notes}`)}
    class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-link underline-offset-4 hover:text-link-hover hover:underline"
  >
    {$LL.LEADS.CONTENT_CTA()}
    <ArrowRight class="h-4 w-4" aria-hidden="true" />
  </a>
</section>

<section
  id="contacto"
  class="mt-16 scroll-mt-28 pb-8 md:mt-24"
  aria-labelledby="form-heading"
>
  <h2
    id="form-heading"
    class="text-xl font-bold tracking-tight text-ink sm:text-2xl"
  >
    {$LL.LEADS.FORM_TITLE()}
  </h2>
  <p class="mt-3 max-w-2xl text-pretty text-ink-muted">
    {$LL.LEADS.FORM_SUBTITLE()}
  </p>

  {#if form?.success}
    <div
      class="mt-8 rounded-xl border border-accent/40 bg-accent-muted/25 p-5 text-sm leading-relaxed text-ink"
      role="status"
    >
      <p>{$LL.LEADS.FORM_SUCCESS()}</p>
      {#if form?.mailtoHref}
        <p class="mt-2 text-ink-muted">{$LL.LEADS.FORM_SUCCESS_MAILTO()}</p>
      {/if}
    </div>
  {:else}
    <form
      method="POST"
      class="mt-8 max-w-xl space-y-5"
      use:enhance={() => {
        return async ({ result }) => {
          if (
            result.type === "success" &&
            result.data &&
            "mailtoHref" in result.data &&
            typeof result.data.mailtoHref === "string"
          ) {
            window.location.href = result.data.mailtoHref;
          }
        };
      }}
    >
      {#if form?.invalid}
        <p class="text-sm text-red-400" role="alert">
          {$LL.LEADS.FORM_ERROR_VALIDATION()}
        </p>
      {/if}
      {#if form?.webhookFailed}
        <p class="text-sm text-red-400" role="alert">
          {$LL.LEADS.FORM_ERROR_GENERIC()}
        </p>
      {/if}
      {#if form?.storeFailed}
        <p class="text-sm text-red-400" role="alert">
          {$LL.LEADS.FORM_ERROR_STORE()}
        </p>
      {/if}

      <div class="space-y-1.5">
        <label for="lead-name" class="text-sm font-medium text-ink"
          >{$LL.LEADS.FORM_NAME()}</label
        >
        <input
          id="lead-name"
          name="name"
          type="text"
          required
          autocomplete="name"
          class="w-full rounded-xl border border-border bg-surface-elevated px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 outline-none ring-accent/0 transition focus:border-accent/50 focus:ring-2 focus:ring-accent/25"
        />
      </div>

      <div class="space-y-1.5">
        <label for="lead-email" class="text-sm font-medium text-ink"
          >{$LL.LEADS.FORM_EMAIL()}</label
        >
        <input
          id="lead-email"
          name="email"
          type="email"
          required
          autocomplete="email"
          class="w-full rounded-xl border border-border bg-surface-elevated px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 outline-none ring-accent/0 transition focus:border-accent/50 focus:ring-2 focus:ring-accent/25"
        />
      </div>

      <div class="space-y-1.5">
        <label for="lead-phone" class="text-sm font-medium text-ink"
          >{$LL.LEADS.FORM_PHONE()}</label
        >
        <input
          id="lead-phone"
          name="phone"
          type="tel"
          required
          autocomplete="tel"
          class="w-full rounded-xl border border-border bg-surface-elevated px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 outline-none ring-accent/0 transition focus:border-accent/50 focus:ring-2 focus:ring-accent/25"
        />
      </div>

      <div class="space-y-1.5">
        <label for="lead-process" class="text-sm font-medium text-ink"
          >{$LL.LEADS.FORM_PROCESS()}</label
        >
        <textarea
          id="lead-process"
          name="process"
          required
          rows="4"
          placeholder={$LL.LEADS.FORM_PROCESS_PLACEHOLDER()}
          class="w-full resize-y rounded-xl border border-border bg-surface-elevated px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted/50 outline-none ring-accent/0 transition focus:border-accent/50 focus:ring-2 focus:ring-accent/25"
        ></textarea>
      </div>

      <div class="flex items-start gap-3 rounded-xl border border-border/80 bg-surface-elevated/40 px-3 py-3">
        <input
          id="lead-guide"
          name="wantsGuide"
          type="checkbox"
          class="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent/30"
        />
        <label for="lead-guide" class="text-sm leading-snug text-ink-muted">
          {$LL.LEADS.FORM_GUIDE()}
        </label>
      </div>

      <button
        type="submit"
        class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-soft transition hover:brightness-110 sm:w-auto"
      >
        {$LL.LEADS.FORM_SUBMIT()}
        <ArrowRight class="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  {/if}
</section>
