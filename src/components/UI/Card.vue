<script setup>
import { card } from '@/config';
import { onMounted, ref } from 'vue';

// const count = ref(card.values.length)
const cards = ref(card)
// const count = ()=>{
//   return cards.value.length
// }
const emit = defineEmits(['zxc'])
onMounted(() =>{
  emit('zxc', cards.value.length)
})
</script>

<template>
  <div class="card" v-for="cards in card" :key="cards">
    <div class="card_top">
      <router-link :to="{path:`/cardDetail/${cards.alias}`}">
        <img :src="cards.img" alt="">
      </router-link>
      <div class="card_hit" v-if="cards.hit">
        {{ cards.hit }}
      </div>
    </div>
    <div class="card_article">
      Артикул: {{ cards.article }}
    </div>
    <div class="card_title">
      <router-link :to="{path:`/cardDetail/${cards.alias}`}">
        <p>{{ cards.title }}</p>
      </router-link>
    </div>
    <div class="card_prices">
      <div class="old-price" v-if="cards.oldPrice">{{ cards.oldPrice }} ₽</div>
      <div class="price">{{ cards.price }} ₽</div>
      <div class="percent" v-if="cards.oldPrice">{{ cards.percent }}</div>
    </div>
    <div class="card_bottom">
      <div class="to-basket">
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 0.759277H3.1407C3.98715 0.759277 4.74194 1.29213 5.0253 2.08975L5.60526 3.72224M5.60526 3.72224L8.56647 12.0575C8.91539 13.0396 9.96005 13.5892 10.967 13.3203L21.016 10.637C21.8912 10.4033 22.5 9.61058 22.5 8.70472V5.72224C22.5 4.61767 21.6046 3.72224 20.5 3.72224H5.60526Z" stroke="white" stroke-width="1.3" />
          <path d="M5.41843 16.2408C5.41843 17.1244 6.13477 17.8408 7.01843 17.8408C7.90208 17.8408 8.61843 17.1244 8.61843 16.2408C8.61843 15.3571 7.90208 14.6408 7.01843 14.6408C6.13477 14.6408 5.41843 15.3571 5.41843 16.2408ZM6.20361 16.5408H7.01843V15.9408H6.20361V16.5408Z" fill="white" />
          <path d="M16.0112 16.2408C16.0112 17.1244 16.7275 17.8408 17.6112 17.8408C18.4949 17.8408 19.2112 17.1244 19.2112 16.2408C19.2112 15.3571 18.4949 14.6408 17.6112 14.6408C16.7275 14.6408 16.0112 15.3571 16.0112 16.2408ZM16.7964 16.5408H17.6112V15.9408H16.7964V16.5408Z" fill="white" />
        </svg>
        <span>
          Купить
        </span>
      </div>
      <div class="indicators">
        <div class="indicators_like indicators_svg">
          <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5C10 5 11.0373 1.5 14.322 1.5C16.8807 1.5 18.5 3.50662 18.5 5.88382C18.5 9.17155 15.1265 11.3485 10 15.5C4.87353 11.3485 1.5 9.17155 1.5 5.88382C1.5 3.50662 3.11932 1.5 5.67797 1.5C8.96271 1.5 10 5 10 5Z" stroke="#16191E" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div class="indicators_comparison indicators_svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
            <line x1="0.8" y1="4.8" x2="0.799999" y2="17.2" stroke="#16191E" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="7.8" y1="0.8" x2="7.8" y2="17.2" stroke="#16191E" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="14.8" y1="9.8" x2="14.8" y2="17.2" stroke="#16191E" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>