<template>
  <div class="news">
    <h1>Latest News</h1>
    <div class="news-grid">
      <div class="news-item" v-for="(item, index) in newsItems" :key="index">
        <img :src="item.image" alt="News Image" class="news-image" />
        <div class="news-content">
          <h2>{{ item.title }}</h2>
          <p>{{ item.summary }}</p>
          <router-link :to="`/news/${item.id}`">Read More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewNews',
  data() {
    return {
      newsItems: [
        {
          id: 1,
          title: 'Our New Product Launch',
          summary: 'We are excited to announce the launch of our latest product...',
          image: '/images/news1.jpg'
        },
        {
          id: 2,
          title: 'Company Achieves Milestone',
          summary: 'Our company has just reached a major milestone...',
          image: '/images/news2.jpg'
        },
        {
          id: 3,
          title: 'CSR Initiative for Sustainability',
          summary: 'We are committed to sustainability, and here is what we’re doing...',
          image: '/images/news3.jpg'
        }
      ]
    };
  }
}
</script>

<style scoped>
.news {
  padding: 40px 20px;
  background-color: #f8f8f7;
  text-align: center;
}

.news h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.news-item {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 20px;
  text-align: left;
  transition: transform 0.3s ease;
}

.news-item:hover {
  transform: translateY(-5px);
}

.news-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.news-content h2 {
  font-size: 20px;
  color: #0071e3;
  margin: 10px 0;
}

.news-content p {
  font-size: 16px;
  color: #555;
}

.news-content router-link {
  font-size: 14px;
  color: #0071e3;
}
</style>
