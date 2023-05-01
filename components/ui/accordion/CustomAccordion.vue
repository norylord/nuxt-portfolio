<template>
  <div class="accordion">
    <h1 class="accordion__title" @click="isOpen = !isOpen">
      <img :class="{'is-open' : isOpen}" src="~/assets/icons/arrow-down.svg" alt="">
      {{ title }}
    </h1>
    <div class="accordion__body" :class="{collapse: isOpen}">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

interface IProps {
  title: string
}

const isOpen = ref(false)
const props = defineProps<IProps>()
</script>

<style lang='sass'>
.accordion
  width: 100%
  display: flex
  flex-direction: column

  &__title
    font-size: 16px
    padding: 12px
    border-bottom: 1px solid #1E2D3D
    border-top: 1px solid #1E2D3D
    cursor: pointer


    img
      transform: rotate(-90deg)
      transition: .3s ease-in-out transform

  &__body
    padding: 0 18px
    max-height: 0
    overflow: hidden
    transition: max-height .3s ease-in-out

    .folder
      &:nth-child(1)
        .folder__header-icon
          filter: invert(75%) sepia(79%) saturate(1475%) hue-rotate(306deg) brightness(105%) contrast(83%)

      &:nth-child(2)
        .folder__header-icon
          filter: invert(73%) sepia(66%) saturate(403%) hue-rotate(105deg) brightness(91%) contrast(90%)

      &:nth-child(3)
        .folder__header-icon
          filter: invert(33%) sepia(10%) saturate(4762%) hue-rotate(196deg) brightness(87%) contrast(95%)

.is-open
  transform: rotate(0) !important


.collapse
  max-height: 900px

@media (max-width: 768px)
  .accordion__title
    border-top: none
</style>