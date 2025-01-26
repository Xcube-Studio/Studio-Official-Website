<script setup lang="ts">
import { RouterView } from "vue-router";
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";

import "@fluentui/web-components/button.js";
import { initThemeService } from "./services/ThemeService";
import {
  DrawerDefinition, TablistDefinition, MenuDefinition
  , MenuButtonDefinition, MenuItemDefinition, TooltipDefinition
  ,ButtonDefinition, DividerDefinition, FluentDesignSystem
} from "@fluentui/web-components";

ButtonDefinition.define(FluentDesignSystem.registry);
MenuDefinition.define(FluentDesignSystem.registry);
MenuButtonDefinition.define(FluentDesignSystem.registry);
MenuItemDefinition.define(FluentDesignSystem.registry);
TooltipDefinition.define(FluentDesignSystem.registry);
ButtonDefinition.define(FluentDesignSystem.registry);
DividerDefinition.define(FluentDesignSystem.registry);
DrawerDefinition.define(FluentDesignSystem.registry);
TablistDefinition.define(FluentDesignSystem.registry);

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
