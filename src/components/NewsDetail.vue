<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import {newsBlocks} from '../config'

import Rubrics from './UI/Rubrics.vue';
import NewsSlider from '../components/UI/NewsSlider.vue'
import Subscribe from './UI/Subscribe.vue';

const route = useRoute();
const product = ref(null);

const updateProduct = () => {
  const productAlias = route.params.alias;
  product.value = newsBlocks.find(item => item.alias === productAlias);
};

onMounted(updateProduct);

watch(() => route.params.alias, updateProduct);
</script>

<template>
  
  <div class="detail">
    <div class="container">
      <div class="detail_inner">
        <div class="detail_article" v-if="product">
          <h1>{{ product.title }}</h1>
          <div class="article_top">
            <div class="article_badge">
              <span>{{ product.article }}</span>
            </div>
            <div class="article_date">
              {{ product.date }}
            </div>
          </div>
          <p class="subtitle">{{ product.subtitle }}</p>
          <div class="images">
            <img class="img" :src="product.imgArticle" alt="">
          </div>
          <div>
            <h3 class="heading">{{ product.typeTitle }}</h3>
            <p class="text">{{ product.tupeText }}</p>
            <ul>
              {{ product.list }}
              <li class="before"><span>Электродрели с проводом: </span>{{ product.sublist1 }}</li>
              <li class="before"><span>Аккумуляторные дрели: </span>{{ product.sublist2 }}</li>
            </ul>
            <h3 class="heading">{{ product.power }}</h3>
            <p class="text">{{ product.powerdrsc }}</p>
            <h3>{{ additionally }}</h3>
            <ul>
              {{ product.additionallyList }}
              <li class="before_power">{{ product.additionallySubList1 }}</li>
              <li class="before_power">{{ product.additionallySubList2 }}</li>
              <li class="before_power">{{ product.additionallySubList3 }}</li>
            </ul>
            <h3 class="heading">{{ product.reviewsTitle }}</h3>
            <p class="text">{{ product.reviewsDesc }}</p>
          </div>
        </div>
        <div class="right-block">
          <Rubrics/>
          <Subscribe/>
        </div>
      </div>
      <NewsSlider :itemsToShow="6" titles="Другие новости"/>
      
    </div>
  </div>
</template>

