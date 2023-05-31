<template>
  <section class="home">
    <div class="home__desc">
      <h2 class="home__desc-subtitle">Hi all. I am</h2>
      <h1 class="home__desc-title">Alexandr Pletnev</h1>
      <p class="home__desc-info">> Front-end developer</p>
      <p class="home__desc-comment">// you can also see it on my Github page</p>
      <p class="home__desc-link">

        const githubLink = <a class="home__desc-link" href='https://github.com/norylord' target="_blank">“https://github.com/Norylord”</a>
      </p>
    </div>

    <div class="home__slider">

      <HomeSlider/>
    </div>
    <div class="blurred">
      <img class="home__blurred-img blurred-blue" src="@/assets/img/Blue.svg" alt="">
      <img class="home__blurred-img blurred-green" src="@/assets/img/Green.svg" alt="">
    </div>
  </section>


</template>

<script lang="ts" setup>
import HomeSlider from "@/modules/home/components/HomeSlider.vue";
</script>

<style lang="sass">
.home
  display: flex
  max-width: 1400px
  width: 100%
  //height: 100%
  justify-content: space-around
  align-items: center
  padding: 0 32px
  z-index: 10
  position: relative


  &__slider
    flex: 1
    align-items: center
    display: flex
    //height: 100%
    height: 500px
    max-width: 600px
    //box-shadow: 0px 99px 20px -63px rgb(1, 22, 39) inset, 0px -99px 20px -63px rgb(1, 22, 39) inset
    position: relative

    &:after
      content: ''
      width: 600px
      height: 600px
      position: absolute
      background: rgb(73, 218, 201)
      background: radial-gradient(circle, rgb(34, 100, 91) 0%, rgba(1, 22, 39, 0) 70%)
      background-repeat: no-repeat
      left: -100px
      top: -100px
      z-index: 0
      transform: rotate(30deg)

    &:before
      content: ''
      width: 600px
      height: 400px
      position: absolute
      background: rgb(73, 218, 201)
      background: radial-gradient(circle, rgba(77, 91, 206, 0.8) 0%, rgba(1, 22, 39, 0) 50%)
      background-repeat: no-repeat
      left: 200px
      top: 280px
      z-index: 0
      transform: rotate(30deg)

  &__desc
    flex: 1
    z-index: 10

    &-title
      font-size: 62px
      font-weight: 400

    &-subtitle
      font-size: 18px
      font-weight: 400

    &-info
      color: $text-link
      font-size: 32px
      font-weight: 400

    &-comment
      color: $text-lightgray
      margin-top: 80px
      margin-bottom: 8px

    &-link
      color: $text-link
      font-weight: 400

  &__blurred-img
    display: none
    position: absolute
    z-index: -1


.blurred
  display: none
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  width: 100%
  height: 100px
  z-index: -1

  &-blue
    top: 200px
    left: 0
    bottom: 0
    right: 120px
    width: 100%

  &-green
    top: 0
    left: 0
    right: 0
    width: 100%

@media (max-width: 768px)
  .home
    height: 100%
    padding: 0
    justify-content: center
    align-items: center

    &__desc
      padding: 32px

    &__slider
      display: none

    &__blurred-img
      display: block
  .blurred
    display: block
</style>
