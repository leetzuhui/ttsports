<template>
  <div class="view-news">
    <section class="news-header">
      <div class="header-content">
        <h1>新闻动态</h1>
        <p>田田体育：为青少年提供更好、更健康的运动选择</p>
      </div>
    </section>

    <!-- 新闻列表 -->
    <div class="news-list">
      <div class="news-card" v-for="news in newsData" :key="news.id" @click="viewNewsDetail(news.id)">
        <img :src="news.image" alt="新闻图片" class="news-image" />
        <div class="news-info">
          <h3 class="news-title">{{ news.title }}</h3>
          <p class="news-date">{{ news.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "ViewNews",
  data() {
    return {
      newsData: [], // 初始化为空数组
    };
  },
  created() {
    // 使用 fetch 动态加载 JSON 数据
    fetch("/data/newslist.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load news data.");
        }
        return response.json();
      })
      .then((data) => {
        this.newsData = data;
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  },
  setup() {
    const router = useRouter();

    const viewNewsDetail = (id) => {
      router.push({ name: "news-detail", params: { id } });
    };

    return {
      viewNewsDetail,
    };
  },
};
</script>

<style scoped>
.view-news {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.news-header {
  background: linear-gradient(135deg, rgba(35, 171, 229, 0.8), rgba(232, 100, 0, 0.8));
  color: white;
  padding: 80px 60px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.news-header h1 {
  font-size: 48px;
  margin-bottom: 16px;
  font-weight: 600;
  letter-spacing: -1px;
}

.header-content p {
  font-size: 20px;
  margin-top: 0;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
}

/* 新闻卡片容器 */
.news-list {
  padding: 200px 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

/* 单个新闻卡片 */
.news-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.news-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.news-info {
  padding: 20px;
}

.news-title {
  font-size: 24px;
  font-weight: 600;
  color: #222;
  margin-bottom: 10px;
}

.news-date {
  font-size: 16px;
  color: #666;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .news-list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .news-list {
    grid-template-columns: 1fr;
  }
}
</style>
