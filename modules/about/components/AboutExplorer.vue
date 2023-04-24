<template>
  <div class="about-explorer">
    <CustomAccordion title="personal-info">
      <CustomFolder :active-file="props.activeFile" :title="folder.title" :key="folder.id" :files="folder.files"
                    v-for="folder in state.folders" @select-file="selectFile"/>
    </CustomAccordion>
    <CustomAccordion title="contacts">
      <div class="about-explorer-contacts__item">
        <img src="~/assets/icons/mail-icon.svg" alt="">
        norylord@icloud.com
      </div>
      <div class="about-explorer-contacts__item">
        <img src="~/assets/icons/telegram.svg" alt="">
        @norylord
      </div>
    </CustomAccordion>
  </div>
</template>

<script lang="ts" setup>
import {computed, onBeforeMount, onMounted, reactive, ref} from 'vue'
import CustomAccordion from "~/components/ui/accordion/CustomAccordion.vue";
import CustomFolder from "~/components/ui/folder/CustomFolder.vue";
import aboutFolders from "~/static/about/aboutFolders";

const emit = defineEmits(['selectFile'])

interface IProps {
  activeFile: string,
}

const selectFile = (file) => {
  emit('selectFile', file)
}
const props = defineProps<IProps>()
const state = reactive({
  folders: aboutFolders.folders
})
</script>

<style lang='sass'>
.about-explorer
  display: flex
  flex-direction: column
  height: 100%
  border-right: 1px solid #1E2D3D
  width: 220px

  &-contacts
    &__item
      display: flex
      align-items: center
      font-size: 14px
      font-weight: 400
      line-height: 21px
      color: $text-lightgray
      margin: 8px 0
      cursor: pointer
      transition: color .2s ease-in-out

      img
        width: 12px
        margin-right: 8px


</style>