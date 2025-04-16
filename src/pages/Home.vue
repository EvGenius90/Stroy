<script setup>
import Slider from '@/components/UI/Slider.vue';
import ListInformation from '@/components/UI/ListInformation.vue';
import About from '@/components/UI/About.vue';
import Categories from '@/components/UI/Categories.vue';
import Hits from '@/components/UI/Hits.vue';
import Brands from '@/components/UI/Brands.vue';
import NewsSlider from '@/components/UI/NewsSlider.vue';
</script>

<template>
  <div>
    <Slider/>
    <ListInformation/>
    <Categories/>
    <Hits/>
    <Brands/>
    <About/>
    <NewsSlider :itemsToShow="4" titles="Последние новости"/>
  </div>
</template>