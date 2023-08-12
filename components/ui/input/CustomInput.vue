<template>
  <div class="ui-input">
    <p class="ui-input-label">{{ props.title }}</p>
    <input :maxlength="props.maxlength" class="ui-input-input" :value="props.modelValue" @input="onInput" type="text">
  </div>
</template>

<script lang="ts" setup>


interface IProps {
  title?: string;
  modelValue: any;
  placeholder?: string;
  type: 'text' | 'number'
  disabled?: boolean,
  maxlength?: number
}

const props = defineProps<IProps>()

const emit = defineEmits(['update:modelValue'])
const onInput = (e?: any) => {
  emit('update:modelValue', e.target.value)
}
</script>

<style lang='sass'>
.ui-input
  &-label
    color: $text-lightgray
    font-size: 16px
    line-height: 24px
    margin-bottom: 8px

  &-input
    background: #011221
    outline: none
    border: 1px solid $primary-color
    padding: 10px 15px
    transition: all .2s ease-in-out
    border-radius: 8px

    &:focus
      border: 1px solid #273a4f
</style>