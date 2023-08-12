<template>
  <div class="about-explorer">
    <CustomAccordion title="personal-info">
      <CustomFolder :active-file="props.activeFile" :title="folder.title" :key="folder.id" :files="folder.files"
                    v-for="folder in state.folders" @select-file="selectFile"/>
    </CustomAccordion>
    <CustomAccordion title="contacts">
      <div class="about-explorer-contacts__item">
        <img src="~/assets/icons/mail-icon.svg" alt="">
        <a href="mailto:norylord@icloud.com"> norylord@icloud.com
        </a>
      </div>
      <div class="about-explorer-contacts__item">
        <img src="~/assets/icons/telegram.svg" alt="">
        <a href="https://t.me/Norylord">
          @norylord
        </a>
      </div>
    </CustomAccordion>
  </div>
</template>

<script lang="ts" setup>
import {computed, onBeforeMount, onMounted, reactive, ref} from 'vue'
import CustomAccordion from "~/components/ui/accordion/CustomAccordion.vue";
import CustomFolder from "~/components/ui/folder/CustomFolder.vue";
import aboutFolders from "~/static/about/aboutFolders";
import {IFile} from "~/types/about";

const emit = defineEmits(['selectFile'])

interface IProps {
  activeFile: IFile | null,
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
  border-right: 1px solid $primary-color
  width: 220px

  &-contacts
    &__item
      display: flex
      align-items: center
      font-size: 14px
      font-weight: 400
      line-height: 21px
      margin: 8px 0
      cursor: pointer
      transition: color .2s ease-in-out

      a
        color: $text-lightgray
        text-decoration: none

      img
        width: 12px
        margin-right: 8px

@media (max-width: 768px)
  .about-explorer
    height: auto
    width: 100%
</style>