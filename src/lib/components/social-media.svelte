<script lang="ts">
import { Bird, Briefcase, GitBranch } from "@lucide/svelte";
</script>

<ul class="mx-auto flex gap-2 md:mx-0" itemprop="sameAs">
  <li>
    <a
      title="Github"
      target="_blank"
      rel="noreferrer"
      href="https://github.com/Michael-Liendo"
      aria-label="Github"
      class="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-ink shadow-sm transition hover:border-accent/40 hover:bg-accent-muted/80 hover:text-ink hover:shadow-soft"
    >
      <GitBranch class="h-[1.35rem] w-[1.35rem]" />
    </a>
  </li>
  <li>
    <a
      title="LinkedIn"
      target="_blank"
      rel="noreferrer"
      href="https://www.linkedin.com/in/michaelliendo/"
      aria-label="LinkedIn"
      class="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-[#0A66C2] shadow-sm transition hover:border-[#0A66C2]/35 hover:bg-[#0A66C2]/10 hover:shadow-soft"
    >
      <Briefcase class="h-[1.35rem] w-[1.35rem]" />
    </a>
  </li>
  <li>
    <a
      title="Twitter"
      target="_blank"
      rel="noreferrer"
      href="https://twitter.com/mykeliendo"
      aria-label="Twitter"
      class="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-[#1DA1F2] shadow-sm transition hover:border-[#1DA1F2]/35 hover:bg-[#1DA1F2]/10 hover:shadow-soft"
    >
      <Bird class="h-[1.35rem] w-[1.35rem]" />
    </a>
  </li>
</ul>
