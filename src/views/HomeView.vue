<script setup lang="ts">
// import AnnounceBar from "@/components/AnnounceBar.vue";
import AtSomeOne from "@/components/AtSomeOne.vue";
import TokenItem from "@/components/TokenItem.vue";
import { Icon } from "@iconify/vue";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
document.title = `${t('xcube_studio_title')} • ${t('home')}`;

const currentWindow: Window & typeof globalThis = window;
</script>

<template>
  <div class="flex flex-col">
    <div style="min-height: 87.5vh" class="flex flex-col mb-16">
      <!-- <AnnounceBar>
        值此乙巳年新春佳节，Xcube Studio
        全体成员向每一位关注与支持我们的朋友致以最诚挚的新年祝福，愿新的一年，携手共进，共创无限精彩！
      </AnnounceBar> -->
      <div class="items-center flex flex-auto flex-col gap-8 p-8 sm:mt-8">
        <div class="flex justify-center">
          <a
            class="bg-neutral-200/40 select-none text-blue-900 dark:text-blue-300 dark:bg-neutral-700/40 px-4 py-0.5 rounded-2xl font-semibold"
          >
            <p>{{ t('welcome') }}</p>
          </a>
        </div>

        <div class="flex flex-col gap-8 grow">
          <div class="hidden h-32 md:flex"></div>
          <div class="flex flex-atuo flex-col gap-8 grow">
            <div class="flex flex-col items-center">
              <p class="font-bold text-2xl sm:text-4xl text-center">{{ t('here_is') }}</p>
              <p
                class="font-bold text-blue-900/90 dark:text-blue-300 text-3xl sm:text-5xl leading-12 sm:leading-16 text-center"
              >
                {{ t('xcube_studio') }}
              </p>
            </div>
            <p
              class="flex text-lg text-center text-neutral-700 dark:text-neutral-400 max-w-3xl"
            >
              {{ t('description') }}
            </p>

            <p
              class="flex text-lg text-center justify-center text-neutral-700 dark:text-neutral-400 max-w-3xl"
            >
              {{ t('looking_for_developers') }}
            </p>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-2">
          <TokenItem Glyph="fluent:cube-20-regular" Token="Minecraft" />
          <TokenItem Glyph="fluent:code-cs-16-regular" />
          <TokenItem
            Glyph="fluent:window-dev-tools-20-regular"
            Token="Windows Develop"
          />
          <TokenItem Glyph="fluent:app-generic-20-filled" Token="Desktop" />
          <TokenItem Glyph="fluent:slide-text-20-regular" Token="MIT" />
          <TokenItem Glyph="fluent:code-20-regular" Token="Open Source" />
          <TokenItem
            Glyph="fluent:design-ideas-20-filled"
            Token="Fluent Design"
          />
        </div>
      </div>
    </div>

    <div
      class="flex flex-col p-8 sm:p-16 bg-neutral-200/30 dark:bg-neutral-800/30 gap-4"
    >
      <p class="flex text-center font-bold text-3xl sm:text-5xl sm:leading-16">
        {{ t('popular_projects') }}
      </p>

      <div
        class="overflow-hidden flex flex-col sm:flex-row rounded-lg border-1 hover:shadow-lg border-neutral-300 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-800 gap-2 p-8 hover:border-blue-800 transition dark:hover:border-blue-200"
      >
        <div class="grow max-w-32"></div>
        <div class="flex flex-col gap-2 sm:gap-4 md:pl-8 justify-center">
          <a
            href="/fluent-launcher"
            class="font-semibold text-xl sm:text-2xl hover:underline text-blue-900 dark:text-blue-300 select-none"
          >
            <p>{{ t('fluent_launcher') }}</p>
          </a>

          <p
            class="flex flex-auto md:flex-none text-md sm:text-lg text-neutral-700 dark:text-neutral-400 max-w-3xl"
            v-html="t('fluent_launcher_home_desc')"
          >
          </p>

          <div class="flex flex-wrap justify-left gap-2 max-w-100 mt-4">
            <TokenItem
              Glyph="fluent:store-microsoft-20-filled"
              Token="Microsoft Store"
              href="https://apps.microsoft.com/detail/9P4NQQXQ942P?hl=zh-cn&gl=CN&ocid=pdpshare"
            />
            <TokenItem
              href="https://github.com/Xcube-Studio/Natsurainko.FluentLauncher"
              Glyph="mdi:github"
              Token="GitHub"
            />
            <TokenItem
              href="https://github.com/Xcube-Studio/Natsurainko.FluentLauncher/stargazers"
              Glyph="fluent:star-20-filled"
              Token="300+"
            />
            <TokenItem
              href="https://github.com/Xcube-Studio/Natsurainko.FluentLauncher/blob/main/LICENSE"
              Glyph="fluent:slide-text-20-regular"
              Token="MIT"
            />
            <TokenItem Glyph="fluent:code-cs-16-regular" />
            <TokenItem
              Glyph="fluent:app-generic-20-filled"
              Token="Windows 11"
            />
            <TokenItem Glyph="fluent:code-20-regular" Token="Open Source" />
            <TokenItem
              Glyph="fluent:design-ideas-20-filled"
              Token="Fluent Design"
            />
          </div>

          <div
            class="items-center hidden md:flex text-md text-neutral-700 dark:text-neutral-400 max-w-3xl mt-8"
          >
            {{ t('maintained_by') }}
            <AtSomeOne
              Name="natsurainko"
              href="https://github.com/natsurainko"
            />
            {{ t('and') }}
            <AtSomeOne Name="gaviny82" href="https://github.com/gaviny82" />
          </div>
        </div>

        <div
          style="
            margin-bottom: -32px;
            margin-right: -32px;
            background-position: left top;
          "
          class="hidden md:flex md:h-128 md:bg-no-repeat md:bg-cover grow ml-16 md:bg-[url('/imgs/launcher-about.png')] dark:md:bg-[url('/imgs/launcher-about-dark.png')]"
        ></div>

        <div class="grow max-w-32"></div>
      </div>

      <div
        class="overflow-hidden flex flex-col sm:flex-row rounded-lg border-1 hover:shadow-lg border-neutral-300 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-800 gap-2 p-8 hover:border-blue-800 transition dark:hover:border-blue-200"
      >
        <div class="grow max-w-32"></div>

        <div
          style="margin-bottom: -32px; margin-left: -32px"
          class="hidden md:flex md:h-128 md:bg-no-repeat md:bg-cover grow ml-16 md:bg-[url('/imgs/code-light.png')] dark:md:bg-[url('/imgs/code-dark.png')] bg-top"
        ></div>

        <div class="flex flex-col gap-2 sm:gap-4 md:pl-8 justify-center">
          <a
            href="https://github.com/Xcube-Studio/Natsurainko.FluentCore"
            class="font-semibold text-xl sm:text-2xl hover:underline text-blue-900 dark:text-blue-300 select-none"
          >
            <p>{{ t('fluent_core') }}</p>
          </a>

          <p
            class="flex flex-auto md:flex-none text-md sm:text-lg text-neutral-700 dark:text-neutral-400 max-w-3xl"
            v-html="t('fluent_core_desc')"
          >
          </p>

          <div class="flex flex-wrap justify-left gap-2 max-w-100 mt-4">
            <TokenItem
              href="https://github.com/Xcube-Studio/Natsurainko.FluentCore"
              Glyph="mdi:github"
              Token="GitHub"
            />
            <TokenItem
              href="https://github.com/Xcube-Studio/Natsurainko.FluentCore/stargazers"
              Glyph="fluent:star-20-filled"
              Token="30+"
            />
            <TokenItem
              href="https://github.com/Xcube-Studio/Natsurainko.FluentCore/blob/main/LICENSE"
              Glyph="fluent:slide-text-20-regular"
              Token="MIT"
            />
            <TokenItem Glyph="fluent:code-cs-16-regular" />
            <TokenItem Glyph="fluent:app-generic-20-filled" Token=".NET 8" />
            <TokenItem
              Glyph="fluent:window-console-20-filled"
              Token="AOT Compatible"
            />
            <TokenItem Glyph="fluent:code-20-regular" Token="Open Source" />
          </div>

          <div
            class="items-center hidden md:flex text-md text-neutral-700 dark:text-neutral-400 max-w-3xl mt-8"
          >
            {{ t('maintained_by') }}
            <AtSomeOne
              Name="natsurainko"
              href="https://github.com/natsurainko"
            />
            {{ t('and') }}
            <AtSomeOne Name="gaviny82" href="https://github.com/gaviny82" />
          </div>
        </div>

        <div class="grow max-w-32"></div>
      </div>
    </div>

    <div class="flex flex-col p-8 sm:p-16 gap-4 items-center">
      <div
        style="width: 85vw"
        class="items-center flex flex-col rounded-lg border-1 hover:shadow-lg border-neutral-300 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-800 gap-4 p-8 hover:border-blue-800 transition dark:hover:border-blue-200"
      >
        <div class="flex">
          <a
            class="bg-neutral-200/40 select-none text-blue-900 dark:text-blue-300 dark:bg-neutral-700/40 px-4 py-0.5 rounded-2xl font-semibold"
          >
            <p>{{ t('welcome') }}</p>
          </a>
        </div>

        <p class="font-bold text-3xl sm:text-5xl sm:leading-16 text-center" v-html="t('good_idea')">
        </p>

        <p
          class="flex text-lg text-center text-neutral-700 dark:text-neutral-400 max-w-3xl"
        >
          {{ t('looking_for_developers') }}
        </p>

        <fluent-button
          @click="
            () =>
              (currentWindow.location.href = 'https://qm.qq.com/q/8AKSiUUrn2')
          "
          appearance="primary"
          class="select-none rounded-md px-4 py-1.5 shadow"
        >
          <div class="flex gap-2 items-center">
            <Icon icon="fluent:chat-add-20-filled" class="w-6 h-6" />
            <p class="text-lg">{{ t('join_us') }}</p>
          </div>
        </fluent-button>
      </div>
    </div>

    <div
      class="h-screen bg-[url('/imgs/day.png')] dark:bg-[url('/imgs/night.png')] bg-cover bg-bottom bg-gradient-t from-current to-inherit"
    ></div>
  </div>
</template>
