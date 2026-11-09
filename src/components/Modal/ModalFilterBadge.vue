<script setup lang="ts">
import type { ModalFilter } from '@/types/modal.ts'

interface Prop {
  filterOptions: ModalFilter[]
  withClear?: boolean
}

const { withClear = true } = defineProps<Prop>()
const filterModel = defineModel('filter', {
  type: String,
  required: true,
})

function setModel(value: string) {
  filterModel.value = value
}
</script>

<template>
  <ul class="grid grid-flow-col">
    <li v-for="(filter, i) in filterOptions" :key="`${i}-${filter.label}`" class="px-2 py-1 border flex gap-3 items-center" @click="setModel(filter.label)">
      <template v-if="withClear && i === 0">
        <div class="i-carbon-close" />
      </template>
      <template v-else>
        <div :class="filter.icon" />
        <div>{{ filter.label }}</div>
      </template>
    </li>
  </ul>
</template>
