<script setup>
import { categories } from '@/config'
</script>

<template>
  <div class="categories">
    <div class="container">
      <div class="categories_inner">
        <ul class="categories_list">
          <router-link :to="{name: 'Products', params: {category: categorie.title}}" 
            v-for="categorie in categories" :key="categorie">
            <li class="li">
                <div class="block">
                  <div class="img"><img :src="categorie.img" alt=""></div>
                  <div class="text"><p>{{ categorie.title }}</p></div>
                </div>
            </li>
          </router-link>
          <router-link to="@/pages/Catalog">
            <li class="last">
                <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="29.5" cy="29.5" r="29.5" fill="#F6F7F9" />
                  <path d="M34.7071 29.7071C35.0976 29.3166 35.0976 28.6834 34.7071 28.2929L28.3431 21.9289C27.9526 21.5384 27.3195 21.5384 26.9289 21.9289C26.5384 22.3195 26.5384 22.9526 26.9289 23.3431L32.5858 29L26.9289 34.6569C26.5384 35.0474 26.5384 35.6805 26.9289 36.0711C27.3195 36.4616 27.9526 36.4616 28.3431 36.0711L34.7071 29.7071ZM33 30H34V28H33V30Z" fill="#7E8289" />
                </svg>
                <p>Перейти в каталог</p>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>