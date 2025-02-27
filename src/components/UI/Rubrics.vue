<script setup>
import { rubrics } from '@/config';
</script>

<template>
  <div class="rubrics">
    <div class="rubrics_inner">
      <div class="rubrics_content">
        <h3>Рубрики</h3>
        <div class="list">
          <ul>
            <li v-for="rubric in rubrics" :key="rubric">
              <router-link to="">
                <p>{{ rubric.title }}</p>
                <div class="count">
                  <p>{{ rubric.count }}</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>