<script setup>
import {cards} from '../config'
import { departments, regions } from '@/contacts';
import Form from '@/components/UI/Form.vue';

</script>

<template>
  <div class="contacts">
    <div class="container">
      <div class="contacts_inner">
        <h1>Контакты</h1>
        <section class="section-first">
          <div class="contacts_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22882.66211874231!2d42.04176707208118!3d44.20021240243935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4058011f35964541%3A0x6c14249c4e5e5193!2z0J7QutGC0Y_QsdGA0YzRgdC60LDRjyDRg9C7LiwgMzAxLCDQp9C10YDQutC10YHRgdC6LCDQmtCw0YDQsNGH0LDQtdCy0L4t0KfQtdGA0LrQtdGB0YHQutCw0Y8g0KDQtdGB0L_Rg9Cx0LvQuNC60LAsIDM2OTAxMg!5e0!3m2!1sru!2sru!4v1740147051997!5m2!1sru!2sru" width="100%" height="611px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="contacts_card">
            <ul>
              <li v-for="card in cards" :key="card">
                  <img :src="card.svg" alt="">
                <div class="contacts_box">
                  <p class="box_title">{{ card.title }}:</p>
                  <p class="box_text">{{ card.text }}</p>
                  <a class="box_link" href="#">{{ card.email }}</a>
                </div>
              </li>
            </ul>
            <div class="contacts_button">Заказать звонок</div>
          </div>
          <a href=""></a>
        </section>
        <section class="section-second">
          <div class="contact-places">
            <ul class="contact-places_items">
              <li class="contact-places_item" v-for="department in departments" :key="department">
                <p>{{ department.title }}:</p>
                <div>
                  <a href="#">{{ department.phone }}</a>
                </div>
              </li>
            </ul>
            <div class="requisites">
              <p class="requisites_title">Реквизиты:</p>
              <div class="requisites_text">
                <p>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "СТРОЙОПТТОРГ"ИНН 0901051787КПП 090101001369000, Карачаево-Черкесская республика, город Черкесск, Октябрьская улица, 301р/с 40702810360000102415 в Ставропольское отделение №5230 ПАО Сбербанк, БИК 040702615</p>
              </div>
            </div>
          </div>
          <div class="regions">
            <div class="regions_title">
              Работаем по регионам:
            </div>
            <div class="regions_contacts">
              <ul class="regions_list">
                <li class="regions_list__item" v-for="region in regions" :key="region">
                  <div class="regions_list__title">{{ region.title }}</div>
                  <div class="regions_list__phone">{{ region.phone }}</div>
                  <div class="regions_list__email"><a href="#">{{ region.email }}</a></div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Form/>
  </div>
</template>