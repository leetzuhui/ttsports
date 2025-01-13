<template>
  <header class="header">
    <router-link class="logo" to="/">
      <img src="images/logo.jpg" alt="田田体育" />
    </router-link>
    <nav>
      <ul>
        <li>
          <router-link to="/" class="nav-link home">首页</router-link>
        </li>
        <li>
          <router-link to="/news" class="nav-link news">新闻动态</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link about">关于我们</router-link>
        </li>
        <li>
          <router-link to="/contact" class="nav-link contact">联系我们</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.header {
  background-color: white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.logo {
  display: flex;
  align-items: center;

  img {
    width: 80px;
    height: auto;
  }
}

nav ul {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin: 0 20px;
}

.nav-link {
  position: relative;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 5px 0;
  color: black;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease, transform 0.3s ease;
  transform-origin: center;
}

.nav-link:hover {
  color: currentColor;
}

.nav-link:hover::after {
  width: 100%;
  transform-origin: right;
}

/* 主题色设置 */
.home {
  color: rgb(19, 175, 50);
  /* 绿色 */
}

.news {
  color: rgb(245, 183, 38);
  /* 黄色 */
}

.about {
  color: rgb(35, 171, 229);
  /* 蓝色 */
}

.contact {
  color: rgb(232, 100, 0);
  /* 橙色 */
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    padding: 20px;
  }

  .logo img {
    width: 100px;
    margin-bottom: 20px;
  }

  nav ul {
    flex-direction: column;
    align-items: center;
  }

  nav ul li {
    margin: 10px 0;
  }
}
</style>
