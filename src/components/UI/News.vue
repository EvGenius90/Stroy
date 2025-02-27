<script setup>
import { newsBlocks } from '@/config';

const props = defineProps({
  article: String,
  date: String,
  title: String,
  desc: String,
  subtitle: String,
  img: String,
  imgArticle: String,
  typeTitle: String,
  tupeText: String,
  list: String,
  sublist1: String,
  sublist2: String,
  power: String,
  powerdrsc: String,
  additionally: String,
  additionallyList: String,
  additionallySubList1: String,
  additionallySubList2: String,
  additionallySubList3: String,
  reviewsTitle: String,
  reviewsDesc: String
})
</script>

<template>
  <div class="news_content">
    <ul>
      <li class="block" v-for="newsBlock in newsBlocks" :key="newsBlock.id">
        <router-link class="src-img" :to="{ path:`/newsDetail/${newsBlock.alias}` }"><img :src="newsBlock.img" alt=""></router-link>
        <router-link :to="{ path:`/newsDetail/${newsBlock.alias}` }"><p class="text-medium">{{ newsBlock.title }}</p></router-link>
        <p class="text-little">
          {{ newsBlock.desc }}
        </p>
        <p>{{ newsBlock.date }}</p>
      </li>
    </ul>
  </div>
</template>