<template>
    <div>
      <h1>Najnovije Vesti</h1>
      <Spinner v-show="loadingStore.loading" />
      <div class="two-column-container" v-if="!loadingStore.loading">
        <div class="column">
          <ul class="news-list">
            <li v-for="(article, index) in leftColumn" :key="index">
              <a :href="article.url" target="_blank" class="news-link">
                <h2>{{ article.title }}</h2>
                <p>Autor: {{ article?.author }}</p>
                <p>Datum objavljivanja: {{ formatPublishedDate(article.publishedAt) }}</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="column">
          <ul class="news-list">
            <li v-for="(article, index) in rightColumn" :key="index">
              <a :href="article.url" target="_blank" class="news-link">
                <h2>{{ article.title }}</h2>
                <p>Autor: {{ article?.author }}</p>
                <p>Datum objavljivanja: {{ formatPublishedDate(article.publishedAt) }}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, inject } from 'vue';
  import { useLoadingStore } from '@/stores/loading';
  import axios from 'axios';
  import Spinner from '@/components/Spinner.vue';
  
  const newsData = ref([]);
  const leftColumn = ref([]);
  const rightColumn = ref([]);
  const loadingStore = useLoadingStore();
  
  const formatPublishedDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };
  
  const fetchData = async () => {
    try {
      loadingStore.startLoading();
      const url =
        'https://newsapi.org/v2/top-headlines?' +
        'country=rs&' +
        'apiKey=65f5bf5de3ce404c853c0aac623504d6';
      const response = await axios.get(url);
      newsData.value = response.data.articles;
      const splitIndex = Math.ceil(newsData.value.length / 2);
      leftColumn.value = newsData.value.slice(0, splitIndex);
      rightColumn.value = newsData.value.slice(splitIndex);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      loadingStore.stopLoading();
    }
  };
  
  onMounted(fetchData);
  </script>
  
  
  <style scoped>
 .two-column-container {
  display: flex;
  justify-content: space-between;
  background-color: #181818;
  padding: 20px;
  flex-wrap: wrap; 
}

.column {
  flex: 1;
  max-width: 45%;
  box-sizing: border-box;
  margin-bottom: 15px; 
}

@media (max-width: 1024px) {
  .column {
    max-width: 100%; 
  }
}

  .news-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .news-list li {
    background-color: #1f1f1f;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
    padding: 15px;
    border: 1px solid darkred;
    transition: 0.5s;
  }

  .news-list li:hover {
    filter: brightness(85%);
    transition: 0.5s;
  }
  
  .news-link {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  
  .news-list h2 {
    margin-bottom: 10px;
  }
  
  .news-list p {
    margin: 5px 0;
  }
  </style>
  