<script setup lang="ts">
  interface Props {
    title: string,
    subtitle?: string
  }
  defineProps<Props>()
</script>

<template>
  <header class="flex items-center justify-between border-b border-[#1a1f24] px-8 py-4.5">
    <div>
      <p class="text-[18px] font-semibold">{{ title }}</p>
      <p v-if="subtitle" class="mt-0.5 text-[12px] text-[#6c747d]">{{ subtitle }}</p>
    </div>
  </header>
</template>
