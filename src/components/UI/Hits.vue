<script setup>
import { computed } from 'vue';
import Card from './Card.vue';
import { card } from '@/config';

const hotCards = computed(() =>{
  return card.filter(item => item.hit)
})

const plumbing = computed(() =>{
  return card.filter(item => item.category && item.hit)
})

const tools = computed(() => {
  return card.filter(item => item.tools && item.hit)
})

function showTab(event){
  const eventTarget = event.target
  const tabsBlock = document.querySelectorAll('.tabs_block')
  const items = document.querySelectorAll('.tabs_item')
  // console.log(event.target)
  for(let i of items){
    i.classList.remove('active')
  }
  eventTarget.classList.add('active')

  for(let k of tabsBlock){
    k.classList.remove('show')
  }
  // eventTarget
}

</script>

<template>
  <div class="hits">
    <div class="container">
      <div class="hits_inner">
        <div>
          <h2>Хиты продаж</h2>
        </div>
        <div class="tabs">
          <div class="tabs_items">
            <a class="tabs_item active" href="#hit_01" @click="showTab">Все товары</a>
            <a class="tabs_item" href="#hit_02" @click="showTab">Инструменты</a>
            <a class="tabs_item" href="#hit_03" @click="showTab">Сантехника</a>
            <a class="tabs_item" href="#hit_04" @click="showTab">Для дома</a>
            <a class="tabs_item" href="#hit_05" @click="showTab">Для сада</a>
          </div>
          <div class="tabs_body">
            <div class="tabs_block show" id="hit_01" >
                <div class="left-arrow">
                  <svg width="9" height="16" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.469996 6.53033C0.177103 6.23744 0.177103 5.76256 0.469996 5.46967L5.24297 0.696699C5.53586 0.403806 6.01073 0.403806 6.30363 0.696699C6.59652 0.989592 6.59652 1.46447 6.30363 1.75736L2.06099 6L6.30363 10.2426C6.59652 10.5355 6.59652 11.0104 6.30363 11.3033C6.01073 11.5962 5.53586 11.5962 5.24297 11.3033L0.469996 6.53033ZM1.66699 6.75H1.00033V5.25H1.66699V6.75Z" fill="#2C333D" />
                  </svg>
                </div>
                <div class="card-wrapper" v-for="item in hotCards.slice(0, 9)" :key="item">
                  <Card
                  :title="item.title"
                  :hit="item.hit"
                  :img="item.img"
                  :price="item.price"
                  :old-price="item.oldPrice"
                  :percent="item.percent"
                  :alias="item.alias"
                  :article="item.article"
                  />
                </div>
                <div class="right-arrow">
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z" fill="#2C333D" />
                  </svg>
                </div>
            </div>
            <div class="tabs_block" id="hit_02">
              <div class="left-arrow">
                  <svg width="9" height="16" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.469996 6.53033C0.177103 6.23744 0.177103 5.76256 0.469996 5.46967L5.24297 0.696699C5.53586 0.403806 6.01073 0.403806 6.30363 0.696699C6.59652 0.989592 6.59652 1.46447 6.30363 1.75736L2.06099 6L6.30363 10.2426C6.59652 10.5355 6.59652 11.0104 6.30363 11.3033C6.01073 11.5962 5.53586 11.5962 5.24297 11.3033L0.469996 6.53033ZM1.66699 6.75H1.00033V5.25H1.66699V6.75Z" fill="#2C333D" />
                  </svg>
                </div>
                <div class="card-wrapper" v-for="item in tools.slice(0, 9)" :key="item" >
                    <Card
                    :title="item.title"
                    :hit="item.hit"
                    :img="item.img"
                    :price="item.price"
                    :old-price="item.oldPrice"
                    :percent="item.percent"
                    :alias="item.alias"
                    :article="item.article"
                    />
                </div>
                <div class="right-arrow">
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z" fill="#2C333D" />
                  </svg>
                </div>
            </div>
            <div class="tabs_block" id="hit_03">
              <div class="left-arrow">
                  <svg width="9" height="16" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.469996 6.53033C0.177103 6.23744 0.177103 5.76256 0.469996 5.46967L5.24297 0.696699C5.53586 0.403806 6.01073 0.403806 6.30363 0.696699C6.59652 0.989592 6.59652 1.46447 6.30363 1.75736L2.06099 6L6.30363 10.2426C6.59652 10.5355 6.59652 11.0104 6.30363 11.3033C6.01073 11.5962 5.53586 11.5962 5.24297 11.3033L0.469996 6.53033ZM1.66699 6.75H1.00033V5.25H1.66699V6.75Z" fill="#2C333D" />
                  </svg>
                </div>
                <div class="card-wrapper" v-for="item in plumbing.slice(0, 9)" :key="item">
                  <Card
                  :title="item.title"
                  :hit="item.hit"
                  :img="item.img"
                  :price="item.price"
                  :old-price="item.oldPrice"
                  :percent="item.percent"
                  :alias="item.alias"
                  :article="item.article"
                  />
                </div>
                <div class="right-arrow">
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z" fill="#2C333D" />
                  </svg>
                </div>
            </div>
            <div class="tabs_block" id="hit_04"></div>
            <div class="tabs_block" id="hit_05"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
