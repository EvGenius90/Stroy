<script setup>

</script>

<template>
  <div class="form">
    <div class="container">
      <div class="form_inner">
        <h2>У вас есть вопросы? С радостью ответим на них!</h2>
        <form class="form_form" action="">
          
          <div class="form_block">
            <fieldset class="box">
              <label class="box_label" for="">Ваше имя <span>*</span>:</label>
              <input class="box_input" type="text" placeholder="Введите ваше имя">
            </fieldset>
            <fieldset class="box">
              <label class="box_label" for="">Номер телефона <span>*</span>:</label>
              <input class="box_input" type="phone" placeholder="+7 (     )     -       -">
            </fieldset>
            <fieldset class="box box_grid">
              <label class="box_label" for="">Текст сообщения <span>*</span>:</label>
              <!-- <input  type="text" placeholder="Введите ваш вопрос"> -->
              <textarea class="box_input box_message" name="" id="" cols="40" rows="10" placeholder="Введите ваш вопрос"></textarea>
            </fieldset>
            <div class="block box_send box_grid">
              <button>Отправить</button>
              <div class="block_inner">
                <input class="block_input" id="checkbox-send" type="checkbox">
                <label class="block_check" for="checkbox-send"></label>
                <label class="block_label" for="checkbox-send">Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>