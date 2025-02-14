<script setup>
import { listInfo } from '@/config';
</script>

<template>
  <div class="list-info">
    <div class="container">
      <ul class="list-info_list">
        <li v-for="list in listInfo" :key="list">
          <div class="">
            <img :src="list.img" alt="">
            <p>{{ list.title }}</p>
          </div>
          <!-- <div class="list-info_line"/> -->
        </li>
      </ul>
    </div>
  </div>
</template>