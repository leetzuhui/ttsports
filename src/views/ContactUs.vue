<template>
  <div class="contact-us">
    <!-- About Header keeps original style -->
    <section class="about-header">
      <div class="header-content">
        <h1>联系我们</h1>
        <p>田田体育：为青少年提供更好、更健康的运动选择</p>
      </div>
    </section>

    <section class="contact-details">
      <div class="contact-info">
        <h2>微信平台</h2>
        <div class="contact-list">
          <div class="contact-card">
            <h3>微信公众号</h3>
            <img class="wechat-qr" src="images/official_account_qr.jpg" alt="微信公众号二维码" />
            <p>微信号：tiantiansportsofficial</p>
          </div>
          <div class="contact-card">
            <h3>张老师</h3>
            <img class="wechat-qr" src="images/teacher1_qr.jpg" alt="张老师微信二维码" />
            <p>微信号：zhanglaoshi123</p>
          </div>
          <div class="contact-card">
            <h3>李老师</h3>
            <img class="wechat-qr" src="images/teacher2_qr.jpg" alt="李老师微信二维码" />
            <p>微信号：lilaoshi456</p>
          </div>
          <div class="contact-card">
            <h3>王老师</h3>
            <img class="wechat-qr" src="images/teacher3_qr.jpg" alt="王老师微信二维码" />
            <p>微信号：wanglaoshi789</p>
          </div>
        </div>
      </div>

      <!-- Contact Information Section -->
      <div class="contact-address">
        <h2>地址</h2>
        <p>安徽省合肥市XX区XX路XX号</p>
      </div>

      <div class="contact-phone">
        <h2>电话</h2>
        <p>+86 123-4567-8900</p>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "ContactUs",
  mounted() {

  },
  methods: {
  }
};
</script>

<style scoped>
.contact-us {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

/* About Header keeps original style */
.about-header {
  background: linear-gradient(135deg, rgba(35, 171, 229, 0.8), rgba(232, 100, 0, 0.8));
  color: white;
  padding: 80px 60px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.header-content h1 {
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

/* Contact Details */
.contact-details {
  padding: 60px 40px;
  background-color: #f9f9f9;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  margin-top: 40px;
}

/* Contact Info */
.contact-info h2,
.contact-address h2,
.contact-phone h2 {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 40px;
  text-align: center;
  color: #333;
}

/* Contact Cards */
.contact-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 40px;
}

.contact-card {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.contact-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: translateY(-10px);
}

.contact-card .wechat-qr {
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
}

.contact-card p {
  font-size: 18px;
  color: #666;
}

/* Contact Address & Phone */
.contact-address,
.contact-phone {
  margin-top: 40px;
  text-align: center;
}

.contact-address p,
.contact-phone p {
  font-size: 18px;
  color: #666;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-header {
    padding: 60px 20px;
  }

  .contact-details {
    padding: 40px 20px;
  }
}
</style>
