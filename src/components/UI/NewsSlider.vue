<script setup>
import { ref, onMounted } from 'vue';
import { newsBlocks, blocksTitles } from '@/config';

const props = defineProps({
  itemsToShow: {
    type: Number
  },
  titles:{
    type: String,
  }
});

const news = ref([]);

// const moveSlide = (direction) => {
//   if (direction === 'next' && currentIndex.value < news.value.length - 4) {
//     currentIndex.value++;
//   } else if (direction === 'prev' && currentIndex.value > 0) {
//     currentIndex.value--;
//   }
// };

onMounted(() => {
  news.value = newsBlocks.slice(0, props.itemsToShow);
});
</script>

<template>
  <div>
    <div class="slide">
      <div class="container" >
        <h3>{{ titles}}</h3>
        <div class="slide_inner">
          <div class="left-arrow" v-if="news.length > 4" @click="qwe">
            <svg width="9" height="16" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.469996 6.53033C0.177103 6.23744 0.177103 5.76256 0.469996 5.46967L5.24297 0.696699C5.53586 0.403806 6.01073 0.403806 6.30363 0.696699C6.59652 0.989592 6.59652 1.46447 6.30363 1.75736L2.06099 6L6.30363 10.2426C6.59652 10.5355 6.59652 11.0104 6.30363 11.3033C6.01073 11.5962 5.53586 11.5962 5.24297 11.3033L0.469996 6.53033ZM1.66699 6.75H1.00033V5.25H1.66699V6.75Z" fill="#2C333D" />
            </svg>
          </div>
          <div class="right-arrow" v-if="news.length > 4">
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z" fill="#2C333D" />
            </svg>
          </div>
          <div class="slide_images">
            <ul class="slide_list">
              <li v-for="newsBlock in news" :key="newsBlock.alias">
                <router-link :to="{ path:`/newsDetail/${newsBlock.alias}` }">
                  <img class="slide_img" :src="newsBlock.img" alt="">
                </router-link>
                <router-link :to="{ path:`/newsDetail/${newsBlock.alias}` }"><p class="slide_text">{{ newsBlock.title }}</p></router-link>
                <p class="slide_text">{{ newsBlock.desc }}</p>
                <div>
                  {{ newsBlock.date }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>