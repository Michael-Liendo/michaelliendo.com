<script lang="ts">
import { Bird, Briefcase, GitBranch } from "@lucide/svelte";
</script>

<ul class="flex mx-auto md:mx-0" itemprop="sameAs">
  <li class="mr-4">
    <a
      title="Github"
      target="_blank"
      rel="noreferrer"
      href="https://github.com/Michael-Liendo"
      aria-label="Github"
    >
      <GitBranch class="w-7 h-7" />
    </a>
  </li>
  <li class="mr-4">
    <a
      title="LinkedIn"
      target="_blank"
      rel="noreferrer"
      href="https://www.linkedin.com/in/michaelliendo/"
      aria-label="LinkedIn"
    >
      <Briefcase class="w-7 h-7 text-[#0A66C2]" />
    </a>
  </li>
  <li class="mr-4">
    <a
      title="Twitter"
      target="_blank"
      rel="noreferrer"
      href="https://twitter.com/mykeliendo"
      aria-label="Twitter"
    >
      <Bird class="w-7 h-7 text-[#1DA1F2]" />
    </a>
  </li>
</ul>
<div class="flex space-x-1 sm:space-x-4"></div>
