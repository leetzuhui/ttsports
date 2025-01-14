<template>
  <div class="news-detail-wrapper">

    <!-- 标题和发布时间 -->
    <section class="news-header">
      <!-- 导航条 -->
      <div class="breadcrumb">
        <a href="/news">新闻动态</a>
        <span> / 文章详情</span>
      </div>
      <h1>{{ newsDetail.title }}</h1>
      <p class="news-date">发布时间：{{ newsDetail.date }}</p>
    </section>

    <!-- 文章内容 -->
    <section class="news-content" v-if="!isLoading && !hasError">
      <div v-html="newsContent"></div>
    </section>

    <!-- 加载中提示 -->
    <div class="loading" v-if="isLoading">
      <p>文章加载中...</p>
    </div>

    <!-- 加载失败提示 -->
    <div class="error" v-if="hasError">
      <p>加载文章失败！</p>
    </div>
  </div>

  <!-- 推荐文章 -->
  <section class="related-articles" v-if="!isLoading && !hasError">
    <h2>最新文章推荐</h2>
    <div class="article-cards">
      <div v-for="article in latestArticles" :key="article.id" class="article-card"
        @click="handleArticleClick(article.id)">
        <img :src="article.image" alt="文章图片" />
        <h3>{{ article.title }}</h3>
        <p class="card-date">{{ article.date }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { marked } from "marked";

export default {
  name: "NewsDetail",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      newsDetail: {},
      newsContent: "",
      isLoading: true,
      hasError: false,
      latestArticles: [], // 存储最新文章
    };
  },
  methods: {
    handleArticleClick(articleId) {
      // 例如使用 vue-router 跳转到文章详情页
      this.$router.push({ name: 'news-detail', params: { id: articleId } });
    },
  },
  async created() {
    try {
      const response = await fetch("/data/newslist.json");
      if (!response.ok) throw new Error("JSON 文件加载失败");

      const data = await response.json();

      // 获取当前文章详情
      const detail = data.find((news) => news.id.toString() === this.id.toString());
      if (!detail) {
        throw new Error("文章未找到");
      }
      this.newsDetail = detail;

      // 加载 Markdown 文件
      const markdownResponse = await fetch(detail.markdownPath);
      if (!markdownResponse.ok) throw new Error("Markdown 文件加载失败");

      const markdown = await markdownResponse.text();
      this.newsContent = marked(markdown);

      // 获取最新三篇文章（排除当前文章）
      this.latestArticles = data
        .filter((news) => news.id.toString() !== this.id.toString())
        .slice(0, 3);
    } catch (error) {
      console.error("Error loading news detail:", error);
      this.hasError = true;
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<style scoped>
.news-detail-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 100px;
}

/* 导航条样式 */
.breadcrumb {
  font-size: 0.9em;
  margin-bottom: 20px;
  color: #666;
}

.breadcrumb a {
  color: rgba(245, 183, 38, 0.8);
  text-decoration: none;
}

.breadcrumb a:hover {
  color: rgba(232, 100, 0, 0.8);
}

/* 标题和发布时间 */
.news-header {
  margin-bottom: 30px;
  text-align: left;
}

.news-header h1 {
  font-size: 2.5em;
  font-weight: bold;
  color: #222;
}

.news-header .news-date {
  font-size: 0.9em;
  color: #888;
}

/* 文章内容 */
.news-content {
  font-size: 1.1em;
  line-height: 1.8;
  color: #444;
  padding-bottom: 100px;
}

.news-content p {
  margin-bottom: 20px;
}

/* 加载中和加载失败 */
.loading,
.error {
  padding: 100px 0;
}

.loading p {
  font-size: 1.2em;
}

.error p {
  font-size: 1.2em;
}

/* 推荐文章 */
.related-articles {
  margin: 0 300px;
  margin-bottom: 100px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.related-articles h2 {
  font-size: 1.8em;
  margin-bottom: 20px;
  color: #222;
  text-align: center;
}

.article-cards {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.article-card {
  width: 30%;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 15px;
  cursor: pointer;
}

.article-card img {
  max-width: 100%;
  border-radius: 8px;
}

.article-card h3 {
  font-size: 1.2em;
  margin: 10px 0;
  color: #222;
}

.article-card .card-date {
  font-size: 0.9em;
  color: #888;
}
</style>
