<template>
  <div class="folder">
    <div class="folder__header" @click="isOpen = !isOpen">
      <img src="@/assets/icons/folder.svg" class="folder__header-icon" alt="folder">
      <p class="folder__header-title">{{ title }}</p>
    </div>
    <div class="folder__body" :class="{'folder__open' : isOpen}">
      <div class="folder__body-file folder__file" v-for="file in files" :key="file.id"

           @click.prevent="() => emit('selectFile', file)">
        <img src="@/assets/icons/markdown.svg" class="folder__file-icon" alt="">
        <p class="folder__file-title"
           :class="{'active-file': JSON.stringify(props.activeFile) === JSON.stringify(file)}">{{ file.title }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref, watch} from 'vue'
import {IFile} from "~/types/about";

const emit = defineEmits(['selectFile'])


interface IProps {
  title: string,
  activeFile: IFile,
  files: IFile[]
}

const isOpen = ref(false)
const props = defineProps<IProps>()

const folderHeight = computed(() => {
  return props.files.length * 30 + 'px'
})
</script>

<style lang='sass'>
.folder
  display: flex
  flex-direction: column
  margin: 8px 0

  &__header
    display: flex
    align-items: center
    cursor: pointer

    &-icon
      width: 16px

    &-title
      margin-left: 8px

  &__body
    padding-left: 24px
    max-height: 0
    transition: .2s ease-in-out all
    overflow: hidden

  &__file
    display: flex
    align-items: center
    cursor: pointer
    margin: 4px 0

    &-icon
      width: 12px

    &-title
      color: $text-lightgray
      user-select: none
      font-size: 16px
      font-weight: 300
      margin-left: 8px
      transition: color .2s ease-in-out

.active-file
  color: $text-default !important

.folder__open
  max-height: v-bind(folderHeight)
</style>