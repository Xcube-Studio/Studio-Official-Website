<script setup lang="ts">
import { useRouter } from "vue-router";
import HyperlinkButton from "./HyperlinkButton.vue";
import IconButton from "./IconButton.vue";

const router = useRouter();

function navigate(path: string) {
  window.scrollTo(0, 0);
  router.push(path);
}
</script>

<template>
  <footer
    class="bg-neutral-100 dark:bg-neutral-900 border-t-neutral-200 dark:border-t-neutral-800 border-t-1 p-8 md:p-16"
  >
    <div class="flex flex-col flex-wrap md:flex-row gap-8 md:gap-32">
      <div class="flex flex-col gap-4">
        <div class="flex gap-4 flex-none items-center">
          <img
            class="border-1 border-neutral-500 dark:border-neutral-600 rounded-sm w-10 h-10"
            src="/xcube-studio.png"
          />
          <p
            class="text-3xl select-none font-semibold text-neutral-700 dark:text-white hover:text-neutral-500 dark:hover:text-neutral-300 transition"
          >
            Xcube Studio
          </p>
        </div>
        <div class="flex gap-2">
          <IconButton
            href="https://github.com/Xcube-Studio"
            Glyph="mdi:github"
            ToolTip="GitHub"
          />
          <IconButton
            href="mailto:xcubestudio@axing6.cn"
            Glyph="fluent:mail-20-filled"
            ToolTip="邮箱"
          />
          <IconButton
            href="https://qm.qq.com/q/8AKSiUUrn2"
            Glyph="ri:qq-fill"
            ToolTip="QQ 群"
          />
        </div>
        <p
          class="text-md select-none font-semibold text-neutral-500 dark:text-neutral-400"
        >
          Copyright © Xcube Studio 2022-2025
        </p>
      </div>
      <div class="flex flex-col gap-2 items-start">
        <p
          class="text-md select-none text-neutral-600 hover:text-neutral-400 dark:text-neutral-300 dark:hover:text-neutral-50 transition"
        >
          页面
        </p>
        <div class="flex flex-col gap-2 items-start" style="margin-left: -12px">
          <HyperlinkButton Content="主页" :OnClick="() => navigate('/')" />
          <HyperlinkButton
            Content="项目"
            :OnClick="() => navigate('/projects')"
          />
          <HyperlinkButton Content="消息" :OnClick="() => navigate('/news')" />
        </div>
      </div>
      <div class="flex flex-col gap-2 items-start">
        <p
          class="text-md select-none text-neutral-600 hover:text-neutral-400 dark:text-neutral-300 dark:hover:text-neutral-50 transition"
        >
          链接
        </p>
        <div class="flex flex-col gap-2 items-start" style="margin-left: -12px">
          <HyperlinkButton
            Content="Fluent Launcher"
            href="https://github.com/Xcube-Studio/Natsurainko.FluentLauncher"
          />
          <HyperlinkButton
            Content="Fluent Launcher 本地化"
            href="https://github.com/Xcube-Studio/FluentLauncher.Localization"
          />
          <HyperlinkButton
            Content="Fluent Core"
            href="https://github.com/Xcube-Studio/Natsurainko.FluentCore"
          />
        </div>
      </div>
      <div class="flex flex-col gap-2 items-start">
        <p
          class="text-md select-none text-neutral-600 hover:text-neutral-400 dark:text-neutral-300 dark:hover:text-neutral-50 transition"
        >
          链接
        </p>
        <div class="flex flex-col gap-2 items-start" style="margin-left: -12px">
          <HyperlinkButton
            Content="Fluent Launcher 隐私政策"
            :OnClick="() => navigate('/fluent-launcher/privacy')"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
