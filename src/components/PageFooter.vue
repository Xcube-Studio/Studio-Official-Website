<script setup lang="ts">
import { useRouter } from "vue-router";
import HyperlinkButton from "./HyperlinkButton.vue";
import IconButton from "./IconButton.vue";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

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
            {{ t('xcube_studio_title') }}
          </p>
        </div>
        <div class="flex gap-2">
          <IconButton
            href="https://github.com/Xcube-Studio"
            Glyph="mdi:github"
            :ToolTip="t('github')"
          />
          <IconButton
            href="mailto:xcubestudio@axing6.cn"
            Glyph="fluent:mail-20-filled"
            :ToolTip="t('email')"
          />
          <IconButton
            href="https://qm.qq.com/q/8AKSiUUrn2"
            Glyph="ri:qq-fill"
            :ToolTip="t('qq_group')"
          />
        </div>
        <p
          class="text-md select-none font-semibold text-neutral-500 dark:text-neutral-400"
        >
          {{ t('copyright') }}
        </p>
      </div>
      <div class="flex md:flex-auto flex-col gap-2 items-start">
        <p
          class="text-md select-none text-neutral-600 hover:text-neutral-400 dark:text-neutral-300 dark:hover:text-neutral-50 transition"
        >
          {{ t('pages') }}
        </p>
        <div class="flex flex-col gap-2 items-start" style="margin-left: -12px">
          <HyperlinkButton :Content="t('home')" :OnClick="() => navigate('/')" />
          <HyperlinkButton
            :Content="t('projects')"
            :OnClick="() => navigate('/projects')"
          />
          <HyperlinkButton :Content="t('news')" :OnClick="() => navigate('/news')" />
        </div>
      </div>
      <div class="flex md:flex-auto flex-col gap-2 items-start">
        <p
          class="text-md select-none text-neutral-600 hover:text-neutral-400 dark:text-neutral-300 dark:hover:text-neutral-50 transition"
        >
          {{ t('links') }}
        </p>
        <div class="flex flex-col gap-2 items-start" style="margin-left: -12px">
          <HyperlinkButton
            :Content="t('fluent_launcher')"
            href="https://github.com/Xcube-Studio/Natsurainko.FluentLauncher"
          />
          <HyperlinkButton
            :Content="t('fluent_launcher_localization')"
            href="https://github.com/Xcube-Studio/FluentLauncher.Localization"
          />
          <HyperlinkButton
            :Content="t('fluent_core')"
            href="https://github.com/Xcube-Studio/Natsurainko.FluentCore"
          />
        </div>
      </div>
      <div class="flex md:flex-auto flex-col gap-2 items-start">
        <p
          class="text-md select-none text-neutral-600 hover:text-neutral-400 dark:text-neutral-300 dark:hover:text-neutral-50 transition"
        >
          {{ t('legal') }}
        </p>
        <div class="flex flex-col gap-2 items-start" style="margin-left: -12px">
          <HyperlinkButton
            :Content="t('fluent_launcher_privacy_policy')"
            :OnClick="() => navigate('/fluent-launcher/privacy')"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
