<script setup>
import { newsBlocks } from '@/config';
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  article: String,
  date: String,
  title: String,
  desc: String,
  subtitle: String,
  img: String,
  imgArticle: String,
  typeTitle: String,
  tupeText: String,
  list: String,
  sublist1: String,
  sublist2: String,
  power: String,
  powerdrsc: String,
  additionally: String,
  additionallyList: String,
  additionallySubList1: String,
  additionallySubList2: String,
  additionallySubList3: String,
  reviewsTitle: String,
  reviewsDesc: String
})

const paginationNumbers = ref(null);
const paginatedList = ref(null);
const listItems = ref([]);
const nextButton = ref(null);
const prevButton = ref(null);
const paginationLimit = ref(12);
const currentPage = ref(1);
const pageCount = ref(0); // Используем ref для доступности

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);
  paginationNumbers.value.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  paginationNumbers.value.innerHTML = ''; // Очистка старых кнопок
  for (let i = 1; i <= pageCount.value; i++) {
    appendPageNumber(i);
  }
};

const setCurrentPage = (pageNum) => {
  if (pageNum < 1 || pageNum > pageCount.value) return; // Проверка на допустимость

  currentPage.value = pageNum;

  const prevRange = (pageNum - 1) * paginationLimit.value;
  const currRange = pageNum * paginationLimit.value;

  listItems.value.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });

  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.toggle("active", Number(button.getAttribute("page-index")) === currentPage.value);
  });
};

// Обработчики событий для кнопок пагинации
const addPaginationListeners = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));
    button.addEventListener("click", () => {
      setCurrentPage(pageIndex);
    });
  });
};

onMounted(() => {
  paginationNumbers.value = document.getElementById("pagination-numbers");
  paginatedList.value = document.getElementById("paginated-list");
  nextButton.value = document.getElementById("next-button");
  prevButton.value = document.getElementById("prev-button");
  
  if (paginatedList.value) {
    listItems.value = paginatedList.value.querySelectorAll("li");
    pageCount.value = Math.ceil(listItems.value.length / paginationLimit.value); // Пересчет здесь
    getPaginationNumbers();
    setCurrentPage(1); // Устанавливаем первую страницу
    addPaginationListeners(); // Добавляем обработчики событий
  }

  // Обработчики для кнопок "Назад" и "Далее"
  nextButton.value.addEventListener("click", () => {
    if (currentPage.value < pageCount.value) {
      setCurrentPage(currentPage.value + 1);
    }
  });

  prevButton.value.addEventListener("click", () => {
    if (currentPage.value > 1) {
      setCurrentPage(currentPage.value - 1);
    }
  });
});

// Отслеживание изменения текущей страницы (если потребуется)
watch(currentPage, (newPage) => {
  setCurrentPage(newPage);
});
</script>

<template>
  <div class="news_content">
    <ul id="paginated-list" data-current-page="1" aria-live="polite">
      <li class="block" v-for="newsBlock in newsBlocks" :key="newsBlock.id">
        <router-link class="src-img" :to="{ path:`/newsDetail/${newsBlock.alias}` }"><img :src="newsBlock.img" alt=""></router-link>
        <router-link :to="{ path:`/newsDetail/${newsBlock.alias}` }"><p class="text-medium">{{ newsBlock.title }}</p></router-link>
        <p class="text-little">
          {{ newsBlock.desc }}
        </p>
        <p>{{ newsBlock.date }}</p>
      </li>
    </ul>
    <nav class="pagination-container">
      <button class="pagination-button" id="prev-button" aria-label="Previous page">
        <svg width="23" height="10" viewBox="0 0 23 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.54038 4.54038C0.286539 4.79422 0.286539 5.20578 0.54038 5.45962L4.67695 9.59619C4.9308 9.85003 5.34235 9.85003 5.59619 9.59619C5.85003 9.34235 5.85003 8.9308 5.59619 8.67696L1.91924 5L5.59619 1.32304C5.85003 1.0692 5.85003 0.657647 5.59619 0.403806C5.34235 0.149965 4.9308 0.149965 4.67695 0.403806L0.54038 4.54038ZM23 4.35L1 4.35V5.65L23 5.65V4.35Z" fill="#25282C" />
        </svg>
        <span>Назад</span>
      </button>
      <div id="pagination-numbers"></div>
      <button class="pagination-button" id="next-button" aria-label="Next page">
        <span>Далее</span>
        <svg width="23" height="10" viewBox="0 0 23 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.4596 4.54038C22.7135 4.79422 22.7135 5.20578 22.4596 5.45962L18.323 9.59619C18.0692 9.85003 17.6576 9.85003 17.4038 9.59619C17.15 9.34235 17.15 8.9308 17.4038 8.67696L21.0808 5L17.4038 1.32304C17.15 1.0692 17.15 0.657647 17.4038 0.403806C17.6576 0.149965 18.0692 0.149965 18.323 0.403806L22.4596 4.54038ZM0 4.35L22 4.35V5.65L0 5.65L0 4.35Z" fill="#25282C" />
        </svg>
      </button>
    </nav>
  </div>
</template>