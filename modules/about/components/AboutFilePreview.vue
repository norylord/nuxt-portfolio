<template>
  <section class="file-preview" v-if="activeFile">
    <div class="file-preview__files">
      <div class="file-preview__files-file file-file" v-for="file in activeFiles"
           @click.stop="emit('selectFile', file)"
           :class="{'active-tab': JSON.stringify(activeFile) === JSON.stringify(file)}">
        {{ file.title }}
        <img src="@/assets/icons/close-icon.svg" alt="" class="file-file__close-icon"
             @click.stop="emit('closeFile', file)">
      </div>
    </div>
    <div class="file-preview__body">
      <div class="file-preview__body-lines" v-if="activeFile">
        <p class="file-preview__body-line" v-for="(line, index) in lines()">{{ index + 1 }}</p>
      </div>
      <textarea disabled name="" id="textarea" class="file-preview__description" :value="activeFile.description">

    </textarea>
    </div>

  </section>
</template>

<script lang="ts" setup>
import {IFile} from "~/types/about";
import {watch} from "vue";

const emit = defineEmits(['closeFile'])

interface IProps {
  activeFile: IFile
  activeFiles: IFile[]
}

const props = defineProps<IProps>()
let lines = function () {
  if (!props.activeFile.description) return
  return props.activeFile.description.split(/\r*\n/);
}
let lineCount = function () {
  return lines().length;
}
</script>

<style lang='sass'>
.file-preview
  height: 100%
  display: flex
  flex-direction: column
  align-items: flex-start
  max-width: 40%
  flex: 1
  border-right: 1px solid #1E2D3D

  &__files
    display: flex
    overflow-x: auto
    width: 100%

    &-file
      font-size: 16px
      padding: 12px 24px
      color: $text-lightgray
      border-right: 1px solid #1E2D3D
      border-bottom: 1px solid #1E2D3D
      display: flex
      gap: 8px
      align-items: center
      justify-content: space-between
      transition: .2s ease-in-out all
      white-space: nowrap

  &__body
    height: 100%
    width: 100%

    flex: 1
    display: flex
    overflow-y: auto

    &-lines
      border-right: 1px solid #1E2D3D
      padding: 24px

    &-line
      font-size: 18px
      color: $text-lightgray

  &__description
    height: 100%
    width: 100%
    background: transparent
    outline: none
    border: none
    padding: 24px
    resize: none
    color: $text-lightgray
    font-size: 18px


.file-file
  &__close-icon
    cursor: pointer
    border-radius: 100%

    &:hover
      background: #1E2D3D


.active-tab
  color: #eeeeee !important
  border-bottom: 1px solid #FEA55F !important

@media (max-width: 768px)
  .file-preview
    max-width: 100%
    min-height: 100vh

    &__body
      &-lines
        display: none
</style>