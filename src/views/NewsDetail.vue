<template>
  <div class="news-detail">
    <h1>{{ newsItem.title }}</h1>
    <p>{{ newsItem.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  data() {
    return {
      newsItem: {
        title: 'News Title Example',
        content: 'Here goes the detailed content of the news article...'
      }
    }
  }
}
</script>

<style scoped>
.news-detail {
  padding: 40px;
  background-color: #fff;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
}

.news-detail h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.news-detail p {
  font-size: 18px;
  line-height: 1.6;
  color: #333;
}
</style>
