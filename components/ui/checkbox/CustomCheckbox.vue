<template>
  <div>
    <label
    >
      <input
          @input="onInput"
          type="checkbox"
          :checked="isChecked"
          :value="props.value"
          :disabled="disabled"
          class="checkbox-input"
      />

      <div class="checkbox-body" :class="{'checkbox-checked': isChecked}">
        <img v-if="isChecked" src="@/components/ui/checkbox/check1.svg" alt="">
      </div>
      <span
          v-if="props.label"
          class="checkbox-label"
      >
        {{ label }}
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">

import {computed, ref} from 'vue';

interface Props {
  value?: string | number;
  label?: string | number;
  modelValue?: unknown;
  trueValue?: unknown;
  falseValue?: unknown;
  size?: 400 | 500 | 600;
  disabled?: boolean;
  indeterminate?: boolean;
  checkEmptyArray?: undefined;
}

const props = defineProps<Props>();

const emit = defineEmits(['check']);

const trueValue = ref(typeof props.trueValue === 'undefined' ? true : props.trueValue);
const falseValue = ref(typeof props.falseValue === 'undefined' ? false : props.falseValue);

const isChecked = computed(() => {
  if (props.checkEmptyArray && props.modelValue instanceof Array) {
    return props.modelValue.length === 0;
  }
  if (props.modelValue instanceof Array) {
    return props.modelValue.includes(props.value);
  }

  return props.modelValue === trueValue.value;
});

const onInput = (event: any) => {
  if (props.modelValue instanceof Array) {
    if (event.target.checked) {
      emit('check', props.value);
    }
  } else {
    emit('update:modelValue', event.target.checked ? trueValue.value : falseValue.value);
  }
};

</script>
<style lang="sass">
@import "@/assets/variables/_colors.sass"
.checkbox
  margin-top: 8px
  display: flex

  &-label
    font-size: 15px
    color: #0E0829
    line-height: 24px
    margin-left: 8px

  &-body
    display: flex
    justify-content: center
    align-items: center
    width: 20px
    height: 20px
    border: 2px solid #607B96
    border-radius: 2px

    img
      width: 16px
      height: 16px

  &-input
    display: none

.checkbox-checked
  background: #607B96
</style>