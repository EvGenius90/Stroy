<script setup>
import { ref } from 'vue';
import { newsBlocks, blocksTitles } from '@/config';

const displayCount = ref(-5)
</script>

<template>
  <div>
    
    <div class="slide">
      <h3>{{ blocksTitles[0].otherNews }}:</h3>
      <div class="slide_inner">
        <div class="slide_arrows">
          <div></div>
          <div></div>
        </div>
        <div class="slide_images">
          <ul class="slide_list">
            <li v-for="newsBlock in newsBlocks.slice(displayCount)" :key="newsBlock">
              <router-link :to="{ path:`/newsDetail/${newsBlock.alias}` }"><img class="slide_img" :src="newsBlock.img" alt=""></router-link>
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
</template>