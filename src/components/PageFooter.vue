<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <footer
    class="bg-neutral-100 dark:bg-neutral-900 border-t-neutral-200 dark:border-t-neutral-800 border-t-1 p-8 md:p-16"
  >
    <div class="flex flex-col md:flex-row gap-8 md:gap-32">
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
          <a
            id="github-button"
            href="https://github.com/Xcube-Studio"
            class="px-2 py-1.5 rounded-sm transition hover:bg-neutral-200 dark:hover:bg-neutral-700"
          >
            <Icon icon="mdi:github" class="w-5 h-5" />
          </a>
          <fluent-tooltip
            positioning="below"
            anchor="github-button"
            class="p-2 mt-2"
          >
            GitHub
          </fluent-tooltip>
          <a
            id="email-button"
            href="mailto:xcubestudio@axing6.cn"
            class="px-2 py-1.5 rounded-sm transition hover:bg-neutral-200 dark:hover:bg-neutral-700"
          >
            <Icon icon="fluent:mail-20-filled" class="w-5 h-5" />
          </a>
          <fluent-tooltip
            positioning="below"
            anchor="email-button"
            class="p-2 mt-2"
          >
            邮箱
          </fluent-tooltip>
          <a
            id="qq-button"
            href="https://qm.qq.com/q/8AKSiUUrn2"
            class="px-2 py-1.5 rounded-sm transition hover:bg-neutral-200 dark:hover:bg-neutral-700"
          >
            <Icon icon="ri:qq-fill" class="w-5 h-5" />
          </a>
          <fluent-tooltip
            positioning="below"
            anchor="qq-button"
            class="p-2 mt-2"
          >
            QQ 群
          </fluent-tooltip>
        </div>
        <p
          class="text-md select-none font-semibold text-neutral-500 dark:text-neutral-400"
        >
          Copyright © Xcube Studio 2022-2025
        </p>
      </div>
      <div class="flex flex-col flex-auto gap-2">
        <p
          class="text-md select-none text-neutral-600 hover:text-neutral-400 dark:text-neutral-300 dark:hover:text-neutral-50 transition"
        >
          页面
        </p>
        <div class="flex">
          <div class="flex flex-col gap-2">
            <a
              href="/"
              style="margin-left: -12px"
              class="flex rounded-sm gap-1 px-3 py-1 select-none justify-start hover:bg-neutral-200 dark:hover:bg-neutral-700 text-blue-900 active:text-blue-800 dark:text-blue-200 dark:active:text-blue-300 transition"
            >
              主页
            </a>
            <a
              href="/projects"
              style="margin-left: -12px"
              class="flex rounded-sm gap-1 px-3 py-1 select-none hover:bg-neutral-200 dark:hover:bg-neutral-700 text-blue-900 active:text-blue-800 dark:text-blue-200 dark:active:text-blue-300 transition"
            >
              项目
            </a>
            <a
              href="/news"
              style="margin-left: -12px"
              class="flex rounded-sm gap-1 px-3 py-1 select-none hover:bg-neutral-200 dark:hover:bg-neutral-700 text-blue-900 active:text-blue-800 dark:text-blue-200 dark:active:text-blue-300 transition"
            >
              消息
            </a>
          </div>
          <div class="grow" />
        </div>
      </div>
      <div class="flex flex-col flex-auto gap-2">
        <p
          class="text-md select-none text-neutral-600 hover:text-neutral-400 dark:text-neutral-300 dark:hover:text-neutral-50 transition"
        >
          链接
        </p>
        <div class="flex">
          <div class="flex flex-col gap-2">
            <div class="flex">
              <a
                href="https://github.com/Xcube-Studio/Natsurainko.FluentLauncher"
                style="margin-left: -12px"
                class="rounded-sm gap-1 px-3 py-1 select-none hover:bg-neutral-200 dark:hover:bg-neutral-700 text-blue-900 active:text-blue-800 dark:text-blue-200 dark:active:text-blue-300 transition"
              >
                Fluent Launcher
              </a>
              <div class="grow"></div>
            </div>
            <div class="flex">
              <a
                href="https://github.com/Xcube-Studio/FluentLauncher.Localization"
                style="margin-left: -12px"
                class="rounded-sm gap-1 px-3 py-1 select-none hover:bg-neutral-200 dark:hover:bg-neutral-700 text-blue-900 active:text-blue-800 dark:text-blue-200 dark:active:text-blue-300 transition"
              >
                Fluent Launcher 本地化
              </a>
              <div class="grow"></div>
            </div>
            <div class="flex">
              <a
                href="https://github.com/Xcube-Studio/Natsurainko.FluentCore"
                style="margin-left: -12px"
                class="rounded-sm gap-1 px-3 py-1 select-none hover:bg-neutral-200 dark:hover:bg-neutral-700 text-blue-900 active:text-blue-800 dark:text-blue-200 dark:active:text-blue-300 transition"
              >
                Fluent Core
              </a>
              <div class="grow"></div>
            </div>
          </div>
          <div class="grow" />
        </div>
      </div>
      <div class="w-32 flex flex-col flex-auto gap-2">
        <p
          class="text-md select-none text-neutral-600 hover:text-neutral-400 dark:text-neutral-300 dark:hover:text-neutral-50 transition"
        >
          支持
        </p>
        <div class="flex">
          <div class="flex flex-col gap-2">
            <a
              href="/fluent-launcher/privacy"
              style="margin-left: -12px"
              class="flex rounded-sm gap-1 px-3 py-1 select-none hover:bg-neutral-200 dark:hover:bg-neutral-700 text-blue-900 active:text-blue-800 dark:text-blue-200 dark:active:text-blue-300 transition"
            >
              Fluent Launcher 隐私政策
            </a>
          </div>
          <div class="grow" />
        </div>
      </div>
    </div>
  </footer>
</template>
