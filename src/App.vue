<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
</script>

<template>
  <div class="wrapper">
    <Header/>
    <main class="main">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>