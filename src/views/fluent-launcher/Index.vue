<script setup lang="ts">
import { changeFavicon } from "@/utils/utils";
import { Icon } from "@iconify/vue";
import IconButton from "../../components/IconButton.vue";
import { ref } from "vue";
document.title = "Fluent Launcher • 启动器";
const _window = window;
const arch = ref("x64");
</script>

<template>
  <div class="flex flex-col">
    <div
      style="min-height: 94vh"
      class="flex items-center flex-col justify-center bg-[url('/imgs/launcher/Light.png')] dark:bg-[url('/imgs/launcher/Dark.png')] bg-cover bg-center"
    >
      <div
        class="flex flex-col rounded-2xl shadow-xl hover:shadow-2xl transition items-center justify-center backdrop-blur-xl bg-neutral-50/50 dark:bg-neutral-800/50 md:py-16 md:px-32 px-10 py-24 gap-12"
      >
        <div
          class="flex flex-col md:flex-row items-center justify-center md:gap-8 gap-4"
        >
          <img
            class="border-4 shadow-lg border-neutral-100/50 dark:border-neutral-600 rounded-2xl md:w-36 md:h-36 w-24 h-24 select-none"
            src="/fluent-launcher-icon.png"
          />
          <div class="flex flex-col text-center md:text-left gap-4">
            <h
              class="font-bold text-neutral-900/80 dark:text-neutral-50 md:text-left drop-shadow-lg text-3xl md:text-5xl leading-10 text-center select-none transition"
            >
              Fluent Launcher
            </h>

            <p
              class="font-bold text-neutral-900/80 dark:text-neutral-50 drop-shadow-lg text-lg leading-6 select-none transition"
            >
              专为 Windows 11 设计的 Minecraft 启动器，提供简洁、流畅的视觉体验
            </p>

            <div
              class="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-0 items-center"
            >
              <fluent-button
                @click="
                  () => {
                    _window.location.href =
                      'ms-windows-store://pdp/?ProductId=9P4NQQXQ942P&mode=mini';
                  }
                "
                appearance="primary"
                class="hover:shadow-md shadow-sm transition"
              >
                <div class="px-4 py-2 gap-2 flex flex-row">
                  <Icon
                    icon="fluent:store-microsoft-20-filled"
                    class="w-5 h-5"
                  />
                  从 Microsoft Store 安装
                </div>
              </fluent-button>

              <fluent-menu split class="hover:shadow-md shadow-sm transition">
                <fluent-button
                  slot="primary-action"
                  @click="
                    () => {
                      _window.location.href =
                        'https://source.xcubestudio.net/FluentLauncher.Preview.Installer/FluentLauncher.UniversalInstaller-win-' + arch + '.exe@latest';
                    }
                  "
                >
                  <div class="px-4 py-2 gap-2 flex flex-row">
                    <Icon
                      icon="fluent:arrow-download-20-regular"
                      class="w-5 h-5"
                    />
                    安装 Fluent Launcher 预览版本 ({{ arch }})
                  </div>
                </fluent-button>
                <fluent-menu-button
                  slot="trigger"
                  aria-label="Open menu"
                  icon-only
                ></fluent-menu-button>

                <fluent-menu-list
                  class="w-16 rounded-md gap-1 p-1 mt-2 backdrop-blur-md bg-neutral-100/80 dark:bg-neutral-800/80"
                >
                  <fluent-menu-item
                    class="bg-transparent pl-2 pr-5 dark:text-neutral-200 text-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
                    @click="() => (arch = 'x64')"
                    >适用于 x64 架构</fluent-menu-item
                  >
                  <fluent-menu-item
                    class="bg-transparent pl-2 pr-5 dark:text-neutral-200 text-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
                    @click="() => (arch = 'arm64')"
                    >适用于 arm64 架构</fluent-menu-item
                  >
                </fluent-menu-list>
              </fluent-menu>

              <IconButton
                href="https://github.com/Xcube-Studio/Fluent-Launcher"
                Glyph="mdi:github"
                ToolTip="GitHub"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row px-8 py-16 md:py-32 sm:px-16 md:gap-4">
      <div class="flex items-start flex-col">
        <a
          class="bg-neutral-200/40 select-none text-blue-900 dark:text-blue-300 dark:bg-neutral-700/40 px-4 py-0.5 rounded-2xl font-bold mb-2"
        >
          <p>Design</p>
        </a>
        <p
          class="flex font-bold text-3xl sm:text-5xl sm:leading-16 text-neutral-800 dark:text-neutral-100 transition"
        >
          为 Windows 设计的用户界面
        </p>
        <p
          class="text-lg font-semibold mt-2 text-neutral-700 dark:text-neutral-300 transition"
        >
          从 Windows 任务栏、开始菜单快速启动游戏，而无需打开启动器
        </p>
      </div>
      <div class="flex flex-row grow items-center justify-end">
        <Icon
          icon="fluent:design-ideas-32-filled" 
          class="w-32 h-32 text-neutral-700 dark:text-neutral-400 transition hidden md:flex hover:drop-shadow-2xl drop-shadow-lg"
        />
      </div>
    </div>
    <div
      class="flex flex-row px-8 py-16 md:py-32 sm:px-16 bg-neutral-200/30 dark:bg-neutral-800/30 md:gap-4"
    >
      <div class="flex flex-row grow items-center justify-start">
        <Icon
          icon="fluent:flash-32-filled"
          class="w-32 h-32 text-neutral-700 dark:text-neutral-400 transition hidden md:flex hover:drop-shadow-2xl drop-shadow-lg"
        />
      </div>
      <div class="flex items-start md:items-end flex-col">
        <a
          class="bg-neutral-200/40 select-none text-blue-900 dark:text-blue-300 dark:bg-neutral-700/40 px-4 py-0.5 rounded-2xl font-bold mb-2"
        >
          <p>Feature</p>
        </a>
        <p
          class="flex font-bold text-3xl sm:text-5xl sm:leading-16 text-neutral-800 dark:text-neutral-100 transition"
        >
          切合 Windows 设计的便捷功能
        </p>
        <p
          class="text-lg font-semibold mt-2 text-neutral-700 dark:text-neutral-300 transition"
        >
          从 Windows 任务栏、开始菜单快速启动游戏，而无需打开启动器
        </p>
      </div>
    </div>
    <div class="flex flex-row px-8 py-16 md:py-32 sm:px-16 md:gap-4">
      <div class="flex items-start flex-col">
        <a
          class="bg-neutral-200/40 select-none text-blue-900 dark:text-blue-300 dark:bg-neutral-700/40 px-4 py-0.5 rounded-2xl font-bold mb-2"
        >
          <p>Storage</p>
        </a>
        <p
          class="flex font-bold text-3xl sm:text-5xl sm:leading-16 text-neutral-800 dark:text-neutral-100 transition"
        >
          使用 Windows 原生存储容器
        </p>
        <p
          class="text-lg font-semibold mt-2 text-neutral-700 dark:text-neutral-300 transition"
        >
          完全由 Windows 管理的文件容器，不在其他地方产生冗余文件
        </p>
      </div>
      <div class="flex flex-row grow items-center justify-end">
        <Icon
          icon="fluent:cube-32-filled"
          class="w-32 h-32 text-neutral-700 dark:text-neutral-400 transition hidden md:flex hover:drop-shadow-2xl drop-shadow-lg"
        />
      </div>
    </div>
    <div
      class="flex flex-row px-8 py-16 md:py-32 sm:px-16 bg-neutral-200/30 dark:bg-neutral-800/30 md:gap-4"
    >
      <div class="flex flex-row grow items-center justify-start">
        <Icon
          icon="fluent:store-microsoft-20-filled"
          class="w-32 h-32 text-neutral-700 dark:text-neutral-400 transition hidden md:flex hover:drop-shadow-2xl drop-shadow-lg"
        />
      </div>
      <div class="flex items-start md:items-end flex-col">
        <a
          class="bg-neutral-200/40 select-none text-blue-900 dark:text-blue-300 dark:bg-neutral-700/40 px-4 py-0.5 rounded-2xl font-bold mb-2"
        >
          <p>Update</p>
        </a>
        <p
          class="flex font-bold text-3xl sm:text-5xl sm:leading-16 text-neutral-800 dark:text-neutral-100 transition"
        >
          从 Microsoft Store 获取更新
        </p>
        <p
          class="text-lg font-semibold mt-2 text-neutral-700 dark:text-neutral-300 transition"
        >
          从 Microsoft Store 更新接受稳定版本更新，有效管理启动器更新
        </p>
      </div>
    </div>
  </div>
</template>
