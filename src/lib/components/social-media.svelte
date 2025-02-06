<script lang="ts">
import { Github, Linkedin, Twitter } from "lucide-svelte";
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
      <Github class="w-7 h-7" />
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
      <Linkedin class="w-7 h-7 text-[#0A66C2]" />
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
      <Twitter class="w-7 h-7 text-[#1DA1F2]" />
    </a>
  </li>
</ul>
<div class="flex space-x-1 sm:space-x-4"></div>
