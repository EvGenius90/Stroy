<script setup>

</script>

<template>
  <div class="sidebar">
    <div class="sidebar_top">
      <h2>Цена, ₽</h2>
      <div class="price-input">
        <div class="filter">
          <div class="field">
            <input type="number" value="1000">
            <label for="">от</label>
          </div>
          <div class="field">
            <input type="number" value="10000">
            <label for="">до</label>
          </div>
        </div>
        <div class="sidebar_slider">
          <div class="progress"></div>
        </div>
        <div class="range-input">
          <input type="range" class="range-min" min="0" max="10000" value="1000">
          <input type="range" class="range-max" min="0" max="10000" value="10000">
        </div>
      </div>
    </div>
    <div class="sidebar_bottom"></div>
  </div>
</template>