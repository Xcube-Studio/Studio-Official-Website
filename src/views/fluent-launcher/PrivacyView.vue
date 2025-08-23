<script setup lang="ts">
import { changeFavicon } from '@/utils/utils';

import { useI18n } from 'vue-i18n';
const { t } = useI18n();
document.title = `${t('fluent_launcher_title')} • ${t('privacy_policy')}`;
</script>

<template>
  <div class="flex p-8 sm:p-16 justify-center items-center">
    <div style="width: 85vw" class="flex flex-col gap-4">
      <p class="text-4xl font-semibold">{{ t('privacy_policy') }}</p>
      <p
        class="text-neutral-600 hover:text-neutral-400 dark:text-neutral-300 dark:hover:text-neutral-50 transition"
      >
        {{ t('last_updated') }}: {{ t('last_updated_date') }}
      </p>
      <p v-html="t('privacy_intro')"></p>

      <p class="text-2xl font-semibold">{{ t('data_we_collect') }}</p>
      <p class="text-xl font-semibold">{{ t('diagnostic_info') }}</p>
      <p>{{ t('diagnostic_info_desc') }}</p>

      <p class="text-xl font-semibold">{{ t('usage_data') }}</p>
      <p v-html="t('usage_data_desc')"></p>

      <p>{{ t('data_note') }}</p>

      <p class="text-2xl font-semibold">{{ t('how_we_use_data') }}</p>
      <p class="text-xl font-semibold">{{ t('issue_resolution') }}</p>
      <p>{{ t('issue_resolution_desc') }}</p>
      <p class="text-xl font-semibold">{{ t('identify_usage_trends') }}</p>
      <p>{{ t('identify_usage_trends_desc') }}</p>

      <p class="text-2xl font-semibold">{{ t('changes_to_policy') }}</p>
      <p>{{ t('changes_to_policy_desc') }}</p>

      
    </div>
  </div>
</template>
