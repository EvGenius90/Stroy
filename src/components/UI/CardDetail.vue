<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { card } from '@/config';

const route = useRoute()
const cards = ref(null)
const cardAlias = route.params.alias

onMounted(() => {
  cards.value = card.find(item => item.alias === cardAlias)
})

function cahge(event){
  const miniImg = event.target.src
  const mainImg = document.querySelector('.front_main')
  mainImg.src = miniImg
}

function activated(event){
  const list = document.querySelectorAll('.actived')
  const parent = event.target.closest('.actived')

  for(let i of list){
    i.classList.remove('active')
  }
  
  parent.classList.add('active')
}
</script>

<template>
  <div class="cardDetail">
    <div class="container">
      <div class="cardDetail_inner">
        <div class="cardDetail_block" v-if="cards">
          <div class="cardDetail_top">
            <div class="cardDetail_titles">
              <h1>{{ cards.title }}</h1>
            </div>
            <div class="cardDetail_front front">
              <div class="front_left">
                <div class="front_slider" v-if="cards.img1">
                  <div class="images">
                    <div class="actived active" @click="activated"><img @click="cahge" :src="cards.img1" alt=""></div>
                    <div class="actived" @click="activated"><img @click="cahge" :src="cards.img2" alt=""></div>
                    <div class="actived" @click="activated"><img @click="cahge" :src="cards.img3" alt=""></div>
                    <div class="actived" @click="activated"><img @click="cahge" :src="cards.img4" alt=""></div>
                    <div class="actived" @click="activated"><img @click="cahge" :src="cards.img5" alt=""></div>
                    <div class="actived" @click="activated"><img @click="cahge" :src="cards.img6" alt=""></div>
                    <div class="actived" @click="activated"><img @click="cahge" :src="cards.img7" alt=""></div>
                    <div class="actived" @click="activated"><img @click="cahge" :src="cards.img8" alt=""></div>
                    <div class="actived" @click="activated"><img @click="cahge" :src="cards.img9" alt=""></div>
                    <div class="actived" @click="activated"><img @click="cahge" :src="cards.img10" alt=""></div>
                  </div>
                  <svg  class="arrow-bottom" width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.7" d="M6.79289 8.70711C7.18342 9.09763 7.81658 9.09763 8.20711 8.70711L14.5711 2.34315C14.9616 1.95262 14.9616 1.31946 14.5711 0.928932C14.1805 0.538408 13.5474 0.538408 13.1569 0.928932L7.5 6.58579L1.84315 0.928932C1.45262 0.538408 0.819457 0.538408 0.428932 0.928932C0.0384081 1.31946 0.038408 1.95262 0.428932 2.34315L6.79289 8.70711ZM6.5 7L6.5 8L8.5 8L8.5 7L6.5 7Z" fill="#2F343A" />
                  </svg>
                </div>
                <div class="front_img">
                  <img class="front_main" :src="cards.img" alt="">
                </div>
              </div>
              <div class="front_center">
                <ul class="list">
                  <li>Тип товара<span>Дрель-шуруповерт</span></li>
                  <li>Бренд<span>MAKITA</span></li>
                  <li>Назначение инструмента<span>профессиональный</span></li>
                  <li>Мощность (Вт)<span>18</span></li>
                  <li>Емкость АКБ (А/ч)<span>1,5</span></li>
                  <li>Крутящий момент макс. (Н/м)<span>30</span></li>
                  <li>Напряжение аккумулятора (В)<span>14,4</span></li>
                  <span class="more">Больше характеристик</span>
                </ul>
                <ul class="list-second">
                  <li>
                    <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6.71429H22M5.66667 12.4286H5.67833M10.3333 12.4286H12.6667M1 4.42857C1 3.51926 1.36875 2.64719 2.02513 2.00421C2.6815 1.36122 3.57174 1 4.5 1H18.5C19.4283 1 20.3185 1.36122 20.9749 2.00421C21.6313 2.64719 22 3.51926 22 4.42857V13.5714C22 14.4807 21.6313 15.3528 20.9749 15.9958C20.3185 16.6388 19.4283 17 18.5 17H4.5C3.57174 17 2.6815 16.6388 2.02513 15.9958C1.36875 15.3528 1 14.4807 1 13.5714V4.42857Z" stroke="#9BA4AB" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Оплата любым удобным способом</span>
                  </li>
                  <li>
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 2H19M11 6H16M11 12H19M11 16H16M1 2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H6C6.26522 1 6.51957 1.10536 6.70711 1.29289C6.89464 1.48043 7 1.73478 7 2V6C7 6.26522 6.89464 6.51957 6.70711 6.70711C6.51957 6.89464 6.26522 7 6 7H2C1.73478 7 1.48043 6.89464 1.29289 6.70711C1.10536 6.51957 1 6.26522 1 6V2ZM1 12C1 11.7348 1.10536 11.4804 1.29289 11.2929C1.48043 11.1054 1.73478 11 2 11H6C6.26522 11 6.51957 11.1054 6.70711 11.2929C6.89464 11.4804 7 11.7348 7 12V16C7 16.2652 6.89464 16.5196 6.70711 16.7071C6.51957 16.8946 6.26522 17 6 17H2C1.73478 17 1.48043 16.8946 1.29289 16.7071C1.10536 16.5196 1 16.2652 1 16V12Z" stroke="#9BA4AB" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>Большой выбор товаров в каталоге</span>
                  </li>
                  <li>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 5.5L9 1L1 5.5M17 5.5V14.5L9 19M17 5.5L9 10M9 19L1 14.5V5.5M9 19V10M1 5.5L9 10M5.2 7.8L12.8 3.2" stroke="#9BA4AB" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Осуществляем быструю доставку</span>
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 13L13 7M8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5ZM13 12.5C13 12.7761 12.7761 13 12.5 13C12.2239 13 12 12.7761 12 12.5C12 12.2239 12.2239 12 12.5 12C12.7761 12 13 12.2239 13 12.5ZM1 10C1 11.1819 1.23279 12.3522 1.68508 13.4442C2.13738 14.5361 2.80031 15.5282 3.63604 16.364C4.47177 17.1997 5.46392 17.8626 6.55585 18.3149C7.64778 18.7672 8.8181 19 10 19C11.1819 19 12.3522 18.7672 13.4442 18.3149C14.5361 17.8626 15.5282 17.1997 16.364 16.364C17.1997 15.5282 17.8626 14.5361 18.3149 13.4442C18.7672 12.3522 19 11.1819 19 10C19 8.8181 18.7672 7.64778 18.3149 6.55585C17.8626 5.46392 17.1997 4.47177 16.364 3.63604C15.5282 2.80031 14.5361 2.13738 13.4442 1.68508C12.3522 1.23279 11.1819 1 10 1C8.8181 1 7.64778 1.23279 6.55585 1.68508C5.46392 2.13738 4.47177 2.80031 3.63604 3.63604C2.80031 4.47177 2.13738 5.46392 1.68508 6.55585C1.23279 7.64778 1 8.8181 1 10Z" stroke="#9BA4AB" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Делаем скидки на крупные покупки</span>
                  </li>
                </ul>
              </div>
              <div class="front_right">
                <ul class="list">
                  <li class="article">Артикул: {{ cards.article }}</li>
                  <li class="availability">
                    <svg v-if="cards.availability" width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L5 8L11 2" stroke="#1B9665" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                    <span v-if="cards.availability">В наличии</span>
                    <span v-if="!cards.availability">Нет в наличии</span>
                  </li>
                  <li class="block-price">
                    <div class="price">{{ cards.price }}</div>
                    <div class="old-price">{{ cards.oldPrice }}</div>
                    <div class="percent" v-if="cards.oldPrice">{{ cards.percent }}</div>
                  </li>
                  <li class="buy" v-if="cards.availability">
                    Количество:
                    <div class="buttons">
                      <div>-</div>
                      <span>1</span>
                      <div>+</div>
                    </div>
                  </li>
                  <li class="add" v-if="cards.availability">Добавить в корзину</li>
                  <li class="one-click">Купить в 1 клик</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="cardDetail_bottom">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>