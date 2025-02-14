<script setup>
import { slides } from '@/config';

let count = 0
function toRight(){
  
  const images = document.querySelectorAll('.slide-img')
  if(count < images.length - 1){
    images[count].classList.add('d-none')
    images[count + 1].classList.remove('d-none')

    ++count
  }
}

function toLeft(){
  const images = document.querySelectorAll('.slide-img')
  if(count > 0){
    images[count - 1].classList.remove('d-none')
    images[count].classList.add('d-none')

    --count
  }
}
</script>

<template>
  <div class="slider">
    <div class="container">
      <div class="slider-inner">
        <div class="slider-arrows">
          <div class="left" @click="toLeft">
            <!-- <img src="../../assets/svg/ArrowLeft.svg" alt=""> -->
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z" fill="#2C333D" />
            </svg>
          </div>
          <div class="right" @click="toRight">
            <!-- <img src="../../assets/svg/ArrowRight.svg" alt=""> -->
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z" fill="#2C333D" />
            </svg>
          </div>
        </div>
        <h1>Электроинструмент для любых нужд</h1>
        <p>У нас обновился ассортимент сантехники, мебели для ванной комнаты, а так же других сопутствующих товаров.</p>
        <div class="slider-button">
          <p>перейти к товарам</p>
          <img src="../../assets/svg/LittleArrowRight.svg" alt="">
        </div>
        <ul class="slider-block">
          
          <li class="slider-images" v-for="slide in slides" :key="slide">
            <img :class="slide.class" :src="slide.img" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>