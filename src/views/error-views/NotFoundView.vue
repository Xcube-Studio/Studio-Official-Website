<script setup lang="ts">
import { Icon } from "@iconify/vue";
document.title = "Xcube Studio • 未找到页面";
</script>

<template>
  <div
    class="flex p-8 sm:p-16 items-center justify-center gap-8"
    style="height: 70vh"
  >
    <Icon
      icon="fluent:warning-20-filled"
      class="w-32 h-32 text-blue-900 dark:text-blue-300 hidden sm:flex"
    />

    <div class="flex flex-col items-start gap-4">
      <p class="text-4xl sm:text-6xl font-bold">
        未找到此页面，<br class="sm:hidden" />请检查你的输入
      </p>
      <a
        class="flex text-md sm:text-xl gap-1 items-center text-blue-900 dark:text-blue-300 bg-neutral-200/40 select-none dark:bg-neutral-700/40 px-4 py-1 rounded-lg font-semibold"
      >
        <Icon icon="fluent:location-not-found-24-regular" class="w-5 h-5" />
        404 Not Found
      </a>
    </div>
  </div>
</template>
