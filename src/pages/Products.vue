<script setup>
import Card from '@/components/UI/Card.vue';
import Sidebar from '@/components/UI/Sidebar.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { card } from '@/config';

const route = useRoute();
const category = route.params.category;

const props = defineProps({
  category: {
    type: String,
    required: false,
    default: 'Все продукты'
  },
});

const qwe = ref(0)

const updt = (cc)=>{
  qwe.value = cc
}
</script>

<template>
  <div class="products">
    <div class="container">
      <div class="products_inner">
        <div class="products_top">
          <h1>{{ category }}</h1>
          <span>{{ qwe }} товара(ов)</span>
        </div>
        <div class="products_main">
          <div class="products_sidebar">
            <Sidebar/>
          </div>
          <div class="products_content" >
            <div class="products_items" >
              <div v-for="item in card" :key="item">
                <Card
                :title="item.title"
                :article="item.article"
                :price="item.price"
                :old-price="item.oldPrice"
                :img="item.img"
                :hit="item.hit"
                :percent="item.percent"
                :alias="item.alias"
                @zxc="updt"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>