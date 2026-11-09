import type { Component } from 'vue'
import { defineStore } from 'pinia'
import { ref, shallowRef } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const isOpen = ref(false)
  const currentComponent = shallowRef<Component>()
  const toggleOpen = () => {
    isOpen.value = !isOpen.value
  }

  const setComponent = (newComponent: Component) => {
    currentComponent.value = newComponent
  }

  return {
    currentComponent,
    isOpen,
    toggleOpen,
    setComponent,
  }
})
