<template>
  <client-only>
    <div class="contacts__review">
      <div class="contacts__review-container" ref="code">
        <div class="contacts__review-nums">
          <p class="code-gray" v-for="num in linesCount">{{ num }}</p>
        </div>
        <div class="contacts__review-code" id="content" ref="content" style="line-height: 20px">
          <span class="code-gray">

          <span class="code-pink">const </span><span class="code-blue">button</span><span
              class="code-pink"> = </span><span class="code-blue">document.querySelector</span>(<span
              class="code-orange">'#sendBtn'</span>);
          <br>
          <br>
          <span class="code-pink">const</span> <span class="code-blue">message</span> <span
              class="code-pink">=</span> { <br>
          &nbsp;&nbsp;<span class="code-blue">name</span>: <span class="code-orange">"{{
              props.formData.name
            }}"</span>,<br>
          &nbsp;&nbsp;<span class="code-blue">email</span>: <span class="code-orange">"{{
              props.formData.email
            }}"</span>,<br>
          &nbsp;&nbsp;<span class="code-blue">message</span>: <span class="code-orange">"{{
              props.formData.message
            }}"</span>,<br>
          &nbsp;&nbsp;date: <span class="code-orange">"{{ date.toLocaleString().slice(0, 10) }}"</span><br>
          }
          <br>
          <br>
          <span class="code-blue">button.addEventListener</span>(<span class="code-orange">'click'</span>, () <span
              class="code-pink">&#8658;</span> {<br>
          &nbsp;&nbsp;<span class="code-blue">form.send(message)</span>;
          <br>})          </span>

        </div>
      </div>
    </div>
  </client-only>
</template>

<script lang="ts" setup>


import {onMounted, onUnmounted, ref, watch} from "vue";
import {IFormData} from "~/pages/Contact.vue";
import {countLines} from "~/composables/lineCount";
import {createResizeObserver} from "~/utils/resizeObserver";

const date = new Date()

interface IProps {
  formData: IFormData
}

const props = defineProps<IProps>()

const linesCount = ref([])

watch(() => props.formData, () => {
  getLinesCount()
}, {deep: true})


onMounted(() => {
  setTimeout(() => {
    getLinesCount()
    createResizeObserver('content', getLinesCount)
  }, 30)
})

const getLinesCount = () => {
  linesCount.value = countLines('content')
}

onUnmounted(() => {

})
</script>

<style lang='sass'>
.contacts
  &__review
    flex: 4
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    padding: 24px

    &-code

      max-width: 480px

    &-nums
      padding: 0 16px

    &-container
      align-items: flex-start
      line-height: 20px
      color: #607B96
      display: flex

.code
  &-pink
    color: #C98BDF !important

  &-blue
    color: #5565E8

  &-gray
    color: #607B96

  &-orange
    color: #FEA55F
    word-break: break-all
</style>

