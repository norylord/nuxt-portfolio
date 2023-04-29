<template>
  <button class="ui-button" @disabled="props.disabled">
    <slot/>
  </button>
</template>

<script lang="ts" setup>


interface IProps {
  disabled?: boolean
}

const props = defineProps<IProps>()
</script>

<style lang='sass'>
.ui-button
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  padding: 10px 14px
  gap: 10px
  background: #1C2B3A
  border-radius: 8px
  border: 0
  cursor: pointer
  transition: all .2s ease-in-out

  &:hover
    background: #263b4f
</style>