<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="a in img" :key="a.id">
      <img :src="a.src" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
export default {
  name: "swiper-example-autoplay",
  title: "Autoplay",
  data() {
    return {
      img: [
        { id: 0, src: require("../../../assets/image/shouye/lunbotu/1.jpg") },
        { id: 1, src: require("../../../assets/image/shouye/lunbotu/2.jpg") },
        { id: 2, src: require("../../../assets/image/shouye/lunbotu/3.jpg") },
        { id: 3, src: require("../../../assets/image/shouye/lunbotu/4.jpg") },
      ],
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
      },
    };
  },
};
</script> 

<style  scoped>
.swiper {
  width: 70%;
}
img {
  width: 100%;
  height: 300px;
}
</style>