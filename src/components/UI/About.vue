<script setup>

</script>

<template>
  <div class="comp-about">
    <div class="container">
      <div class="comp-about_inner">
        <div class="comp-about_content">
          <h2>О нашем магазине</h2>
          <p class="desc">Цель и главная задача компании- создать сервис, который не ограничится продажей строительных и отделочных материалов, а будет решать задачи и трудности, с которыми сталкиваются люди во время ремонта.</p>
          <div class="block">
            <ul class="list">
              <li>
                <div>17 805,3 м²</div>
                <p>торговых и складских помещений</p>
              </li>
              <li>
                <div>50 000+</div>
                <p>наименований товара</p>
              </li>
              <li>
                <div>2 500+</div>
                <p>постоянных клиентов</p>
              </li>
              <li>
                <div>440</div>
                <p>опытных сотрудников</p>
              </li>
            </ul>
          </div>
          <p class="desc-little">Уже второе десятилетие мы готовы воплотить в реальность Вашу мечту о красивом, комфортабельном доме, благоустроенном современном офисе, уютной теплой даче, помочь реализовать любые строительные и дизайнерские фантазии и с минимальными затратами времени и денежных средств.</p>
          <div class="nav">
            <router-link to="/about">
              <span>Подробнее о компании</span>
              <img src="../../assets/svg/LittleArrowRight.svg" alt="">
            </router-link>
          </div>
        </div>
        <div class="comp-about_img">
          <img src="../../assets/images/fon/background.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>