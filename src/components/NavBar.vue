<template>
    <nav>
      <div class="navbar-container">
        <div class="logo"><span>V</span> Vesti</div>
        <ul class="nav-list">
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  nav {
    background-color: #181818; 
    color: #fff; 
    padding: 15px 0; 
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .logo span {
    color: red;
    font-size: 3rem;
    font-weight: bold;
  }
  
  .nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .nav-list li {
    margin-right: 20px;
  }
  
  .nav-list a {
    text-decoration: none;
    color: #fff; 
    font-weight: bold;
    transition: color 0.3s ease;
  }
  
  .nav-list a:hover {
    color: #ffa500;
  }
  </style>
  