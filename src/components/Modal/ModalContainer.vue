<script setup lang="ts">
import useModal from '@/composables/useModal.ts'

const { isOpen } = useModal()
</script>

<template>
  <div class="text-black p-4 rounded-xl bg-white">
    <div class="text-3xl border-b flex items-center justify-between">
      <h1>Title</h1>
      <div class="text-black flex items-center justify-center hover:bg-black/25">
        <button class="i-carbon-close cursor-pointer" @click="isOpen = false" />
      </div>
    </div>
    <slot />
  </div>
</template>
