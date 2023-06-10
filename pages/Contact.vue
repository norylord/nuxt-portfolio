<template>
  <div class="contacts">
    <ContactExplorer/>
    <ContactForm @set-form="setFormData"/>
    <ContactReview :form-data="state.formData"/>
  </div>
</template>

<script lang="ts" setup>
import ContactExplorer from "~/modules/contact/components/ContactExplorer.vue";
import ContactForm from "~/modules/contact/components/ContactForm.vue";
import {computed, onMounted, reactive, ref, watch} from "vue";
import ContactReview from "~/modules/contact/components/ContactReview.client.vue";

const date = new Date()

export interface IFormData {
  name: string,
  email: string,
  message: string
}

interface IState {
  formData: IFormData
}

const state = reactive<IState>({
  formData: {
    name: '',
    email: '',
    message: ''
  }
})

const setFormData = (formData) => {
  state.formData = formData
}


</script>

<style lang='sass'>
.contacts
  display: flex
  width: 100%
  height: 100%

@media (max-width: 768px)
  .contacts
    flex-direction: column
    overflow-y: auto
</style>