<!-- YourComponent.vue -->

<template>
    <main>
      <div v-if="!loadingNews.loading">
        <NavBar></NavBar>
      </div>
      <HeadlineNews></HeadlineNews>
    </main>
  </template>
  
  <script lang="ts">
  import { ref, inject } from 'vue';
  import HeadlineNews from '@/components/HeadlineNews.vue';
  import NavBar from "@/components/NavBar.vue";
  
  export default {
    components: {
      HeadlineNews,
      NavBar
    },
  
    setup() {
      const loadingStore = inject('loadingStore');
      const loadingNews = ref(loadingStore) as any;
      return {
        loadingNews
      };
    }
  }
  </script>
  
  <style></style>
  