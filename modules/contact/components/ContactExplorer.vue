<template>
  <div class="contacts__explorer">
    <CustomAccordion title="contacts" class="contacts__explorer-accordion">
      <div class="contacts__explorer-item">
        <img src="~/assets/icons/mail-icon.svg" alt="">
        <a href="mailto:norylord@icloud.com" target="_blank"> norylord@icloud.com
        </a>
      </div>
      <div class="contacts__explorer-item">
        <img src="~/assets/icons/telegram.svg" alt="">
        <a href="https://t.me/Norylord" target="_blank"> @norylord
        </a>
      </div>
    </CustomAccordion>
    <CustomAccordion title="find-me-also-in">
      <div class="contacts__explorer-item" :key="contact.id" v-for="contact in anotherContacts">
        <img src="~/assets/icons/link.svg" alt="">
        <a class="contacts__explorer-link" :href="contact.link" target="_blank">{{ contact.title }}</a>
      </div>
    </CustomAccordion>
  </div>
</template>

<script lang="ts" setup>


import CustomAccordion from "~/components/ui/accordion/CustomAccordion.vue";
import {anotherContacts} from '@/modules/contact/static/contacts'

interface IProps {
}

const props = defineProps<IProps>()
</script>

<style lang='sass'>
.contacts
  &__explorer
    border-right: 1px solid $primary-color
    flex: 1

    &-accordion
      .accordion__title
        border-top: none

    &-item
      display: flex
      align-items: center
      margin: 4px 0

      a
        color: $text-lightgray


      img
        width: 16px
        height: 16px
        margin-right: 8px

    &-link
      color: $text-lightgray
      text-decoration: none
      transition: all .2s ease-in-out

      &:hover
        color: $text-default
</style>
