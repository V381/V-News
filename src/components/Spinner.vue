<template>
    <div v-if="loading" class="spinner">
      Loading...
    </div>
  </template>
  
  <script setup>
  import { ref, watchEffect } from 'vue';
  import { useLoadingStore } from '@/stores/loading';
  
  const loadingStore = useLoadingStore();
  const loading = ref(loadingStore.loading);
  
  watchEffect(() => {
    loading.value = loadingStore.loading;
  });
  </script>
  
  <style scoped>
.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
  margin: 50px auto; 
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
  </style>
  @/stores/loading