<script setup lang="ts">
  const header = usePageHeader()
</script>

<template>
  <div class="flex min-h-screen bg-[#0a0c0e] text-[#e8ebed] text-[14px]">
    <LayoutsSidebar />
    <div class="flex flex-1 flex-col">
      <LayoutsHeader
        :title="header.title || 'タイトルがありません。'"
        :subtitle="header.subtitle"
      />
      <slot />
    </div>
  </div>
</template>
