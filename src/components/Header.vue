<script setup>
import { links, profile } from '../config'
</script>

<template>
  <div class="header">
    <div class="header-hr"></div>
    <div class="container">
      <div class="header-inner">
        <div class="header-upper">
          <div class="header-upper__left">
            <ul>
              <li v-for="link in links" :key="link">
                <RouterLink :to="link.url">{{ link.title }}</RouterLink>
              </li>
            </ul>
          </div>
          <div class="header-upper__right">
            <ul>
              <li>Ежедневно, с 8:00 до 18:00</li>
              <li><RouterLink to="" class="header-phone">8 800 444 00 65</RouterLink></li>
              <li class="header-call">Заказать звонок</li>
            </ul>
          </div>
        </div>
        <div class="header-lower">
          <ul>
            <li>
              <router-link to="/"><img src="../assets/svg/logo 1.svg" alt=""></router-link>
            </li>
            <li class="header-lower__katalog">
              <div class="header-lower__lines">
                <div></div>
                <div></div>
              </div>
              каталог
            </li>
            <li class="header-lower__finder">
              <div class="header-lower__find">
                <input type="search" placeholder="Найти среди 50000 товаров. Например: Дрель Bosch">
                <img class="" src="../assets/svg/Search.svg" alt="">
              </div>
            </li>
            <li class="header-lower__block-profile">
              <ul>
                <li v-for="profile in profile" :key="profile">
                  <div class=""><img :src="profile.url" alt=""></div>
                  <div>{{ profile.title }}</div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

