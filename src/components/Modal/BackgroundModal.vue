<script setup lang="ts">
import type { ModalFilter } from '@/types/modal.ts'
import { ref } from 'vue'
import ModalContainer from '@/components/Modal/ModalContainer.vue'
import ModalFilterBadge from '@/components/Modal/ModalFilterBadge.vue'

const filters: ModalFilter[] = [
  {
    label: 'qwd',
    icon: 'i-carbon-filter',
  },
  {
    label: 'qwd',
    icon: 'i-carbon-filter',
  },
]

const current = ref('')
</script>

<template>
  <ModalContainer>
    <ModalFilterBadge v-model:filter="current" :filter-options="filters" />
  </ModalContainer>
</template>
