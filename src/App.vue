<script setup lang="ts">
import { useIDBKeyval } from '@vueuse/integrations/useIDBKeyval'
import { onMounted, toRaw, useTemplateRef } from 'vue'
import { RouterView } from 'vue-router'
import BackgroundModal from '@/components/Modal/BackgroundModal.vue'
import ModalComponent from '@/components/ModalComponent.vue'
import useModal from '@/composables/useModal.ts'

const inputFile = useTemplateRef<HTMLInputElement>('inputFile')

/**
const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
  // specify the types of data to be received.
  dataTypes: ['image/jpeg'],
  // control multi-file drop
  multiple: true,
  // whether to prevent default behavior for unhandled events
  preventDefaultForUnhandled: false,
})
**/
const { toggleOpen, setComponent } = useModal()

const { data: storedImages, set, isFinished, isSupported } = useIDBKeyval<StoredImage[]>('bg', [])

interface StoredImage {
  id: string
  file: File
  name: string
  type: string
  size: number
  lastModified: number
}

async function handleUpload(event: Event) {
  const target = event.target as HTMLInputElement
  const files = Array.from(target.files ?? [])

  if (!files.length)
    return

  const existingImages = Array.isArray(storedImages.value)
    ? toRaw(storedImages.value)
    : []

  const newImages: StoredImage[] = files.map(file => ({
    id: crypto.randomUUID(),
    file,
    name: file.name,
    type: file.type,
    size: file.size,
    lastModified: file.lastModified,
  }))

  await set([
    ...existingImages,
    ...newImages,
  ])

  target.value = ''
}

async function deleteImage(id: string) {
  const raw = toRaw(storedImages.value)
  const updatedImages = raw.filter(image => image.id !== id)

  await set(updatedImages)
}

onMounted(() => {
  if (!isSupported.value) {
    // eslint-disable-next-line no-alert
    alert('IndexedDB are not supported in this browser! Some features may be unavailable.')
  }
})
</script>

<template>
  <button @click="toggleOpen(); setComponent(BackgroundModal)">
    toggle modal
  </button>
  <input ref="inputFile" type="file" @change="handleUpload">
  <pre>{{ inputFile?.name }}</pre>
  <button @click="inputFile?.click()">
    upload file
  </button>
  <ul>
    <li v-for="item in storedImages" :key="item.id">
      <pre @click="deleteImage(item.id)">{{ item.file }}</pre>
    </li>
  </ul>
  <pre>{{ isFinished }}</pre>
  <ModalComponent />
  <RouterView />
</template>
