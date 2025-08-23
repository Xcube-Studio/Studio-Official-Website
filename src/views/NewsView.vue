<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
document.title = `${t('xcube_studio_title')} • ${t('news')}`;

const router = useRouter();
router.push("/under-construction");
</script>

<template></template>
