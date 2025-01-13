<template>
  <div class="news-list">
    <div class="news-item" v-for="(item, index) in news" :key="index">
      <h2>{{ item.title }}</h2>
      <p>{{ item.date }}</p>
      <p>{{ item.summary }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsList',
  data() {
    return {
      news: [
        { title: 'New Product Launch', date: '2025-01-01', summary: 'We are excited to announce the launch of our new product.' },
        { title: 'Company Expansion', date: '2024-12-15', summary: 'We are expanding our operations to new regions.' },
      ]
    }
  }
}
</script>

<style scoped>
.news-list {
  margin: 20px;
}

.news-item {
  background-color: #f9f9f9;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
}
</style>
