<script setup>

</script>

<template>
  <div class="subscribe">
    <div class="subscribe_inner">
      <!-- <h3>Подпишитесь на рассылку</h3> -->
      <!-- <p>Регулярные скидки и спецпредложения, а так же новости компании.</p> -->
      <form class="subscribe_form" action="#">
        <div class="subscribe_labels">
          <label class="label-title" for="email">Подпишитесь на рассылку</label>
          <label class="label-little" for="email">Регулярные скидки и спецпредложения, а так же новости компании.</label>
        </div>
        <input class="subscribe_email" id="email" type="email" placeholder="Email">
        <button class="subscribe_button">Подписаться</button>
        <div class="subscribe_switch">
          <input class="subscribe_checkbox" id="checkbox" type="checkbox">
          <label class="label-check" for="checkbox"></label>
          <label class="label-text" for="checkbox">Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности</label>
        </div>
      </form>
    </div>
  </div>
</template>