import type { Component } from 'vue'
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modal.ts'

export default function useModal() {
  const store = useModalStore()
  const { isOpen, currentComponent } = storeToRefs(store)

  const toggleOpen = () => store.toggleOpen()
  const setComponent = (newComponent: Component) => store.setComponent(newComponent)

  return {
    isOpen,
    currentComponent,
    toggleOpen,
    setComponent,
  }
}
