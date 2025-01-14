<template>
  <div class="news-detail">
    <h1>{{ newsDetail.title }}</h1>
    <p class="news-date">发布时间：{{ newsDetail.date }}</p>
    <div class="news-content" v-html="newsContent"></div>
  </div>
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
      newsDetail: {}, // 保存文章的元信息
      newsContent: "", // 保存渲染后的 HTML 内容
    };
  },
  created() {
    // 加载 JSON 文件
    fetch("/data/newslist.json")
      .then((response) => response.json())
      .then((data) => {
        // 根据 ID 查找对应文章
        const detail = data.find((news) => news.id === this.id);
        if (detail) {
          this.newsDetail = detail;

          // 加载 Markdown 文件
          return fetch(detail.markdownPath);
        } else {
          throw new Error("文章未找到");
        }
      })
      .then((response) => {
        if (!response.ok) throw new Error("Markdown 文件加载失败");
        return response.text();
      })
      .then((markdown) => {
        // 使用 marked 解析 Markdown 内容
        this.newsContent = marked(markdown);
      })
      .catch((error) => {
        console.error("Error loading news detail:", error);
        this.newsContent = "<p>文章内容加载失败。</p>";
      });
  },
};
</script>

<style scoped>
.news-detail {
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.news-date {
  font-size: 16px;
  color: #888;
  margin-bottom: 20px;
}

.news-content {
  line-height: 1.8;
  font-size: 18px;
  color: #333;
}

.news-content h2 {
  margin: 20px 0;
  font-size: 24px;
  color: #222;
}

.news-content p {
  margin: 10px 0;
}

.news-content ul {
  margin-left: 20px;
  list-style-type: disc;
}

.news-content blockquote {
  margin: 20px 0;
  padding: 10px 20px;
  background-color: #f9f9f9;
  border-left: 4px solid #ccc;
}
</style>
