<template>
  <client-only>
    <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }"
        :slides-per-view="3"
        :direction="'vertical'"
        :observer="true"
        :observe-parents="true"
        :modules="modules"
        class="mySwiper"
        @activeIndexChange="setActiveSlide"
    >
      <swiper-slide :class="{'slide-active': state.activeSlide === 0}">{{ state.activeSlide }}</swiper-slide>
      <swiper-slide :class="{'slide-active': state.activeSlide === 1}">{{ state.activeSlide }}</swiper-slide>
      <swiper-slide :class="{'slide-active': state.activeSlide === 2}">{{ state.activeSlide }}</swiper-slide>
      <swiper-slide :class="{'slide-active': state.activeSlide === 3}">{{ state.activeSlide }}</swiper-slide>
      <swiper-slide :class="{'slide-active': state.activeSlide === 4}">{{ state.activeSlide }}</swiper-slide>
      <swiper-slide :class="{'slide-active': state.activeSlide === 5}">{{ state.activeSlide }}</swiper-slide>
      <swiper-slide :class="{'slide-active': state.activeSlide === 6}">{{ state.activeSlide }}</swiper-slide>
      <swiper-slide :class="{'slide-active': state.activeSlide === 7}">{{ state.activeSlide }}</swiper-slide>
      <swiper-slide :class="{'slide-active': state.activeSlide === 8}">{{ state.activeSlide }}</swiper-slide>


    </swiper>

  </client-only>
</template>
<script setup lang="ts">
import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue';
import {Autoplay, Pagination, Navigation} from 'swiper';
import {onMounted, reactive, ref, watch} from "vue";
import 'swiper/css';

interface IState {
  activeSlide: number
}

const state = reactive<IState>({
  activeSlide: 2
})


const setActiveSlide = (v) => {
  state.activeSlide = v.realIndex
}
const modules = [Autoplay]

onMounted(() => {
  setActiveSlide(1)
})


</script>

<style lang="sass">
@import "@/assets/variables/_colors.sass"
.swiper-wrapper
  max-height: 500px
  width: 100%


.swiper
  margin: 0 !important
  width: 100%


.swiper-slide
  background: #011221
  display: flex
  align-items: center
  justify-content: center
  font-size: 50px
  color: #fff
  font-weight: 500
  border-radius: 16px
  opacity: 0.4
  transition: opacity 0.2s ease-in-out
  filter: blur(6px)

.slide-active
  opacity: 1 !important
  filter: none !important

</style>