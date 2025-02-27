<script setup>
import NewsSlider from './NewsSlider.vue';
</script>

<template>
  <div class="company">
    <div class="container">
      <div class="company_inner">
        <section class="why">
          <h3>Почему именно мы</h3>
          <div class="box">
            <ul class="list">
              <li>
                <img src="../../assets/svg/Card.svg" alt="">
                <div class="block">
                  <p class="medium">Оплата любым удобным способом</p>
                  <p class="regular">Выбирайте любой способ оплаты для максимального комфорта при покупках у нас.</p>
                </div>
              </li>
              <li>
                <img src="../../assets/svg/List.svg" alt="">
                <div class="block">
                  <p class="medium">Большой выбор товаров в каталоге</p>
                  <p class="regular">Наш каталог насыщен разнообразными товарами, чтобы удовлетворить ваши потребности.</p>
                </div>
              </li>
              <li>
                <img src="../../assets/svg/Box.svg" alt="">
                <div class="block">
                  <p class="medium">Осуществляем быструю доставку</p>
                  <p class="regular">Мы оперативно доставим ваш заказ, чтобы вы могли насладиться покупкой как можно скорее.</p>
                </div>
              </li>
              <li>
                <img src="../../assets/svg/Percent.svg" alt="">
                <div class="block">
                  <p class="medium">Делаем скидки на крупные покупки</p>
                  <p class="regular">Наша система скидок работает для вашей выгоды, чем больше купили - больше сэкономили.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section class="history">
          <h3 class="title">История ООО “Стройоптторг”</h3>
          <div class="history_content">
            <div class="box">
              <ul class="list">
                <li class="sublist">
                  <span class="year">2003</span>
                  <h3 class="title-medium">Компания ООО «Стройоптторг» была зарегистрирована в реестре и получила свидетельство о регистрации 1 октября 2003 года.</h3>
                  <div class="block">
                    <ul class="listing">
                      <li class="info">общая площадь земельного участка составляла <span>10 000 м²</span></li>
                      <li class="info">площадь складских помещений <span>850 м²</span></li>
                      <li class="info">численность сотрудников <span>10 человек</span></li>
                    </ul>
                  </div>
                </li>
                <li class="sublist">
                  <span class="year">2008</span>
                  <h3 class="title-medium">С годами компания динамично росла и развивалась и уже к 2008 г. мы достигли более высоких результатов:</h3>
                  <div class="block">
                    <ul class="listing">
                      <li class="info">общая площадь базы составила <span>58 000 м²</span></li>
                      <li class="info">площадь складских помещений <span>5 200 м²</span></li>
                      <li class="info">численность коллектива возросла до <span>300 человек</span></li>
                    </ul>
                  </div>
                </li>
                <li class="sublist">
                  <span class="year">2018</span>
                  <h3 class="title-medium">К своему 15-ти летнему юбилею компания расширила торговые площади 
                    до 17 805.3 м²
                  </h3>
                  <div class="block">
                    <ul class="listing">
                      <li class="info">Торговый центр №1 - <span>5 545 м²</span></li>
                      <li class="info">Торговый центр№2- <span>3 951,2 м²</span></li>
                      <li class="info">Складские помещения - <span>8 308,6 м²</span></li>
                    </ul>
                  </div>
                </li>
                <li class="last">
                  <div class="today">Сегодня</div>
                  <div class="block1">
                    <ul class="list1">
                      <li>
                        <p class="meaning">17 805,3 м²</p>
                        <p class="text">- торговых и складских помещений</p>
                      </li>
                      <li>
                        <p class="meaning">50 000+</p>
                        <p class="text">- наименований товаров</p>
                      </li>
                      <li>
                        <p class="meaning">2 500+</p>
                        <p class="text">- постоянных клиентов</p>
                      </li>
                      <li>
                        <p class="meaning">440</p>
                        <p class="text">- опытных сотрудников</p>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <NewsSlider/>
    </div>
  </div>
</template>