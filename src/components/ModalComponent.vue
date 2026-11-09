<script setup lang="ts">
import useModal from '@/composables/useModal.ts'

const { isOpen, currentComponent } = useModal()
</script>

<template>
  <teleport to="body">
    <Transition mode="out-in" name="fade">
      <div
        v-if="isOpen"
        class="p-4 bg-black/50 flex items-center inset-0 justify-center fixed z-50"
        @click.self="isOpen = false"
      >
        <component :is="currentComponent" />
      </div>
    </Transition>
  </teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
