<script setup>
import { newsBlocks } from '@/config';
</script>

<template>
  <div>
    <h1>TEST</h1>
    <ul>
      <li v-for="block in newsBlocks" :key="block.id">
        <RouterLink :to="{ path:`/newsDetail/${block.alias}`}">{{ block.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>