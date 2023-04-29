<template>
  <div class="contacts__explorer">
    <CustomAccordion title="contacts">
      <div class="contacts__explorer-item">
        <img src="~/assets/icons/mail-icon.svg" alt="">
        norylord@icloud.com
      </div>
      <div class="contacts__explorer-item">
        <img src="~/assets/icons/telegram.svg" alt="">
        @norylord
      </div>
    </CustomAccordion>
    <CustomAccordion title="find-me-also-in">
      <div class="contacts__explorer-item">
        <img src="~/assets/icons/link.svg" alt="">
        discord channel
      </div>
      <div class="contacts__explorer-item">
        <img src="~/assets/icons/link.svg" alt="">
        telegram account
      </div>
      <div class="contacts__explorer-item">
        <img src="~/assets/icons/link.svg" alt="">
        github account
      </div>
      <div class="contacts__explorer-item">
        <img src="~/assets/icons/link.svg" alt="">
        steam profile
      </div>
    </CustomAccordion>
  </div>
</template>

<script lang="ts" setup>


import CustomAccordion from "~/components/ui/accordion/CustomAccordion.vue";

interface IProps {
}

const props = defineProps<IProps>()
</script>

<style lang='sass'>
.contacts
  &__explorer
    border-right: 1px solid #1E2D3D
    flex: 1

    &-item
      display: flex
      align-items: center
      color: $text-lightgray
      margin: 4px 0

      img
        width: 16px
        height: 16px
        margin-right: 8px
</style>
