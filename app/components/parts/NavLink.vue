<script setup lang="ts">
  interface Props {
    to: string
  }
  defineProps<Props>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="block rounded-lg px-3 py-2 text-sm font-medium text-[#9aa5b1] transition-colors hover:bg-[#13171b] hover:text-white"
    exact-active-class="bg-[#45d4cf]/10 text-[#45d4cf] hover:text-[#45d4cf]"
  >
    <slot />
  </NuxtLink>
</template>
