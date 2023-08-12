<template>
  <client-only>
    <section class="file-preview" v-if="activeFile" id="file-preview">
      <div class="file-preview__files">
        <div class="file-preview__files-file file-file"
             v-for="file in activeFiles"
             @click.stop="emit('selectFile', file)"
             :class="{'active-tab': JSON.stringify(activeFile) === JSON.stringify(file)}">
          {{ file.title }}
          <img src="@/assets/icons/close-icon.svg" alt="" class="file-file__close-icon"
               @click.stop="emit('closeFile', file)">
        </div>
      </div>
      <div class="file-preview__body">
        <div class="file-preview__body-lines" v-if="activeFile">
          <p class="file-preview__body-line" v-for="line in linesCount">{{ line }}</p>
        </div>
        <div class="" style="padding: 24px">
          <div class="file-preview__description" id="file-preview__description" v-html="props.activeFile.description">
          </div>
        </div>

      </div>
    </section>
  </client-only>
</template>

<script lang="ts" setup>
import {IFile} from "~/types/about";
import {onMounted, onUnmounted, ref, watch} from "vue";
import {createResizeObserver} from "~/utils/resizeObserver";
import {countLines} from "~/composables/lineCount";

const emit = defineEmits(['closeFile'])

interface IProps {
  activeFile: IFile | undefined
  activeFiles: IFile[]
}

const props = defineProps<IProps>()

const linesCount = ref([])
let resizeObserver = null

watch(() => props.activeFile, () => {
  setTimeout(() => {
    getLinesCount()
    resizeObserver = createResizeObserver('file-preview', getLinesCount)
  })
}, {deep: true})

onMounted(() => {
  setTimeout(() => {
    getLinesCount()
    if (props.activeFile) resizeObserver = createResizeObserver('file-preview', getLinesCount)
  }, 30)
})

const getLinesCount = () => {
  linesCount.value = countLines('file-preview__description')
}

onUnmounted(() => {
  if (resizeObserver) resizeObserver.disconnect()
})
</script>

<style lang='sass'>
.file-preview
  height: 100%
  display: flex
  flex-direction: column
  align-items: flex-start
  flex: 1
  border-right: 1px solid $primary-color

  &__files
    display: flex
    overflow-x: auto
    width: 100%
    border-bottom: 1px solid $primary-color


    &-file
      font-size: 16px
      padding: 12px 24px
      color: $text-lightgray
      border-right: 1px solid $primary-color
      display: flex
      gap: 8px
      align-items: center
      justify-content: space-between
      transition: .2s ease-in-out all
      white-space: nowrap

  &__body
    height: 100%
    width: 100%
    align-items: flex-start
    flex: 1
    display: flex

    &-lines
      border-right: 1px solid $primary-color
      padding: 24px
      align-self: stretch

    &-line
      font-size: 18px
      line-height: 20px
      color: $text-lightgray

  &__description
    height: auto
    width: 100%
    background: transparent
    outline: none
    border: none
    resize: none
    font-size: 18px
    line-height: 20px

    p
      color: $text-lightgray


.file-file
  &__close-icon
    cursor: pointer
    border-radius: 100%

    &:hover
      background: $primary-color


.active-tab
  color: #eeeeee !important
  border-bottom: 1px solid #FEA55F !important

@media (max-width: 768px)
  .file-preview
    max-width: 100%
    min-height: 100vh

    &__body
      overflow: hidden
      &-lines
        display: none
</style>