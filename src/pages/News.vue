<script setup>
  import News from '@/components/UI/News.vue';
  import Rubrics from '@/components/UI/Rubrics.vue';
  import Subscribe from '@/components/UI/Subscribe.vue';
</script>

<template>
  <div class="news">
    <div class="container">
      <div class="news_inner">
        <h1>Новости</h1>
        <div class="news_cont">
          <News/>
          <div class="rubrics">
            <Rubrics/>
            <Subscribe/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>