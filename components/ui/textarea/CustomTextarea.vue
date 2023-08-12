<template>
  <div class="ui-textarea">
    <p class="ui-textarea-label">{{ props.title }}</p>
    <textarea :maxlength="props.maxLength" class="ui-textarea-input" :value="props.modelValue" @input="onInput"
              type="text"/>
  </div>
</template>

<script lang="ts" setup>


interface IProps {
  title?: string;
  modelValue: any;
  placeholder?: string;
  type: 'text' | 'number'
  disabled?: boolean,
  maxLength?: number
}

const props = defineProps<IProps>()

const emit = defineEmits(['update:modelValue'])
const onInput = (e?: any) => {
  emit('update:modelValue', e.target.value)
}
</script>

<style lang='sass'>
.ui-textarea
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
    font-size: 12px
    resize: none

    &:focus
      border: 1px solid #273a4f
</style>