<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header>
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/scan">Scan</RouterLink>
      <RouterLink to="/image-capture">Image Capture</RouterLink>
      <RouterLink to="/full-calendar">Full Calendar</RouterLink>
      <RouterLink to="/qrcode">QR Code</RouterLink>
      <RouterLink to="/print-js">Print JS</RouterLink>
    </nav>
  </header>

  <article class="container">
    <RouterView />
  </article>
  <footer class="footer">
    <p>&copy; All rights reserved.</p>
  </footer>
</template>
<style scoped lang="scss">
.nav {
  background: #2c3e50;
  padding: 10px;
  a {
    display: inline-block;
    padding: 10px;
    text-decoration: none;
    color: #ecf0f1;
    &:hover {
      color: #3498db;
      opacity: 0.9;
    }
  }
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0rem;
}
.footer {
  background: #2c3e50;
  color: #ecf0f1;
  text-align: center;
  padding: 20px 0;
  p {
    margin: 5px 0;
  }
  a {
    color: #3498db;
    text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
