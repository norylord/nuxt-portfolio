<template>
  <div class="contacts__form">
    <div class="contacts__form-container">
      <CustomInput
          :maxlength="30" class="contacts__form-input" type="text" v-model="state.name" title="_name:"/>
      <CustomInput :maxlength="50" class="contacts__form-input" type="text" v-model="state.email" title="_email:"/>
      <CustomTextarea :max-length="200" class="contacts__form-input" type="text" v-model="state.message"
                      title="_message:"/>
      <CustomButton>
        submit-message
      </CustomButton>
    </div>
    {{ test }}
  </div>
</template>

<script lang="ts" setup>
import CustomButton from "~/components/ui/button/CustomButton.vue";
import CustomTextarea from "~/components/ui/textarea/CustomTextarea.vue";
import CustomInput from "~/components/ui/input/CustomInput.vue";
import {reactive, watch, ref} from "vue";


interface IProps {
}

const props = defineProps<IProps>()

interface IState {
  name: string,
  email: string,
  message: string
}

const state = reactive<IState>({
  name: '',
  email: '',
  message: ''
})
const test = ref('')
const emit = defineEmits(['set-form'])
watch(() => state,
    () => {
      emit('set-form', state)
    }, {deep: true})
</script>

<style lang='sass'>
.contacts__form
  flex: 3
  padding: 24px
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  border-right: 1px solid #1E2D3D

  &-container
    gap: 8px
    display: flex
    flex-direction: column
    align-items: flex-start
    max-width: 372px
    width: 100%

  &-input
    width: 100%

    input
      width: 100%

    textarea
      height: 120px
      width: 100%
</style>