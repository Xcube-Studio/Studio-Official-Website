<script setup lang="ts">
import { RouterView } from "vue-router";
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";

import "@fluentui/web-components/button.js";
import { ButtonDefinition, FluentDesignSystem } from "@fluentui/web-components";
import { initThemeService } from "./services/ThemeService";

ButtonDefinition.define(FluentDesignSystem.registry);

initThemeService(document.documentElement);
</script>

<template>
  <main class="flex flex-col h-screen">
    <div class="flex flex-col grow">
      <div class="bg-neutral-50 dark:bg-neutral-900 h-16"></div>
      <RouterView class="bg-neutral-50 dark:bg-neutral-900" />
      <PageFooter />
    </div>
    <PageHeader class="fixed" style="width: 100%" />
  </main>
</template>
