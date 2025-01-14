<template>
  <div class="about-us">
    <section class="about-header">
      <div class="header-content">
        <h1>关于我们</h1>
        <p>田田体育：为青少年提供更好、更健康的运动选择</p>
      </div>
    </section>

    <section class="about-body">
      <div class="text-content">
        <h2>公司简介</h2>
        <p>
          田田体育是一家平台型体育公司，已与安徽省200多个体育俱乐部合作，是国家体育总局体育文化发展中心青少年体育文化培训综合考核的安徽省运营单位。我们专注于青少年体育赛事IP运营、赛事联合体和体育周边产品，致力于打造中国青少年体育赛事IP品牌，推动中国青少年体育赛事IP产业发展，让中国青少年成为世界的榜样。我们不仅提供专业的体育培训和赛事组织，还积极参与社区体育活动，推广全民健身理念。通过与各大体育机构和教育机构的合作，我们为青少年提供了丰富的体育资源和成长平台，帮助他们在体育中找到自信和乐趣。我们的目标是通过体育教育，培养青少年的团队合作精神、领导能力和健康的生活方式，为他们的未来发展奠定坚实的基础。
        </p>
      </div>

      <img src="images/logo.jpg" alt="田田体育LOGO" />
    </section>

    <!-- Gallery Section -->
    <section class="gallery">
      <h2>我们的成就与项目</h2>

      <!-- Gallery Cards Container -->
      <div class="gallery-container">
        <div class="gallery-cards-wrapper" ref="galleryWrapper">
          <div class="gallery-cards">
            <div class="gallery-item" v-for="(item, index) in galleryItems" :key="index" @click="openModal(item)">
              <div class="card-content">
                <img :src="item.thumbnail" alt="Thumbnail" />
                <h3>{{ item.title }}</h3>
                <button class="add-btn">+</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll Arrows -->
        <button class="scroll-btn left" @click="scrollLeft" :disabled="isLeftDisabled">←</button>
        <button class="scroll-btn right" @click="scrollRight" :disabled="isRightDisabled">→</button>
      </div>
    </section>

    <!-- Modal for Detailed View -->
    <div v-if="modalVisible" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h2>{{ modalData.title }}</h2>
        <img :src="modalData.image" alt="Modal Image" />
        <p>{{ modalData.description }}</p>
        <button class="close-btn" @click="closeModal">关闭</button>
      </div>
    </div>
  </div>

  <section class="vision">
    <h2>我们的愿景</h2>
    <p>
      我们致力于通过创新的体育文化教育，为青少年提供健康和活力的运动体验。让更多人感受到运动带来的快乐与成就感。
    </p>
  </section>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      modalVisible: false,
      modalData: null,
      galleryWrapperSize: { width: 0, height: 0 },
      galleryItems: [
        {
          title: "SURFBOX 室内恒温冲浪馆",
          thumbnail: "images/surfbox_thumb.jpg",
          image: "images/surfbox_large.jpg",
          description: "SURFBOX 室内恒温冲浪馆是我们的一项重要项目，提供专业的冲浪体验。"
        },
        {
          title: "我们的运动设施",
          thumbnail: "images/facility_thumb.jpg",
          image: "images/facility_large.jpg",
          description: "我们提供多种运动设施，包括篮球场、羽毛球场等。"
        },
        {
          title: "青少年体育培训",
          thumbnail: "images/training_thumb.jpg",
          image: "images/training_large.jpg",
          description: "我们为青少年提供各种体育培训，培养他们的运动兴趣和能力。"
        },
        {
          title: "体育赛事",
          thumbnail: "images/sport_game_thumb.jpg",
          image: "images/sport_game_large.jpg",
          description: "我们举办了多种体育赛事，吸引了大量运动爱好者。"
        },
        {
          title: "体育活动",
          thumbnail: "images/sport_event_thumb.jpg", image: "images/sport_event_large.jpg", description: "我们举办了多种体育活动，与商业机构合作，实现活动开展与品牌宣传共赢。"
        },
        {
          title: "健身工作坊",
          thumbnail: "images/workshop_thumb.jpg",
          image: "images/workshop_large.jpg",
          description: "我们的健身工作坊有助于提升个人的体能和健康。"
        },
        {
          title: "体育营地",
          thumbnail: "images/camp_thumb.jpg",
          image: "images/camp_large.jpg",
          description: "我们的体育营地为青少年提供了一个锻炼和交流的平台。"
        },
        {
          title: "体育培训课程",
          thumbnail: "images/course_thumb.jpg",
          image: "images/course_large.jpg",
          description: "我们提供多种体育培训课程，包括游泳、篮球、足球等。"
        },
        {
          title: "青少年篮球培训",
          thumbnail: "images/basketball_training_thumb.jpg",
          image: "images/basketball_training_large.jpg",
          description: "我们专为青少年设计的篮球培训课程，旨在提升他们的篮球技巧、团队合作和运动素质。"
        },
      ],
      galleryScrollPosition: 0,
      cardWidth: 300,
      gap: 25,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.getGalleryWrapperSize(); // 组件加载完后立即获取盒子的大小
    });
  },
  computed: {
    isLeftDisabled() {
      return this.galleryScrollPosition <= 0;
    },
    isRightDisabled() {
      if (this.galleryScrollPosition == 0)
        return false;
      else
        // card queue total length = this.galleryItems.length * (this.cardWidth + this.gap)
        // width of galleryWrapper = this.galleryWrapperSize.width
        return this.galleryScrollPosition >= this.galleryItems.length * (this.cardWidth + this.gap) - this.galleryWrapperSize.width;
    }
  },
  methods: {
    openModal(item) {
      this.modalData = item;
      this.modalVisible = true;
      // 禁用页面滚动
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.modalVisible = false;
      // 恢复页面滚动
      document.body.style.overflow = 'auto';
    },
    scrollLeft() {
      this.galleryScrollPosition -= this.cardWidth + this.gap;
      this.updateTranslateX();
    },
    scrollRight() {
      this.galleryScrollPosition += this.cardWidth + this.gap;
      this.updateTranslateX();
    },
    updateTranslateX() {
      this.$refs.galleryWrapper.style.setProperty('--translateX', `-${this.galleryScrollPosition}px`);
    },
    // get galleryWrapper size
    getGalleryWrapperSize() {
      const galleryWrapper = this.$refs.galleryWrapper;
      if (galleryWrapper) {
        const { width, height } = galleryWrapper.getBoundingClientRect();
        this.galleryWrapperSize = { width, height };
      }
    }
  },
};
</script>

<style scoped>
.about-us {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

/* About Us Header */
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

/* About Us Body */
.about-body {
  display: flex;
  justify-content: space-between;
  padding: 80px 100px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  margin-top: 40px;
}

.text-content {
  width: 55%;
}

.text-content h2 {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 50px;
  letter-spacing: 2px;
  line-height: 1.1;
}

.text-content p {
  font-size: 20px;
  line-height: 1.8;
  color: #333;
}

img {
  width: 30%;
  height: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.image-content img:hover {
  transform: scale(1.05);
}

/* Gallery Section */
.gallery {
  padding: 60px 40px;
  background-color: #f9f9f9;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
}

.gallery h2 {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 40px;
}

/* Gallery Container */
.gallery-container {
  position: relative;
  overflow-x: hidden;
  /* 隐藏超出容器的部分 */
}

.gallery-cards-wrapper {
  transform: translateX(var(--translateX));
  transition: transform 1.5s ease-in-out;
}

.gallery-cards {
  display: flex;
  gap: 25px;
  padding: 50px 0;
}

.gallery-item {
  width: 300px;
  min-width: 300px;
  height: 350px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.card-content {
  padding: 20px;
  text-align: center;
}

.card-content img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.card-content h3 {
  font-size: 20px;
  margin-top: 16px;
  color: #333;
  font-weight: 500;
}

.add-btn {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background-color: rgba(245, 183, 38, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-btn:hover {
  background-color: rgba(232, 100, 0, 0.8);
}

/* Scroll Arrows */
.scroll-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 12px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.scroll-btn:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

.scroll-btn.left {
  left: 10px;
}

.scroll-btn.right {
  right: 10px;
}

/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 40px;
  border-radius: 16px;
  max-width: 80%;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.modal-content h2 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
}

.modal-content img {
  width: 100%;
  border-radius: 16px;
  margin-bottom: 20px;
}

.modal-content p {
  font-size: 20px;
  color: #333;
  line-height: 1.6;
}

.close-btn {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-btn:hover {
  background-color: #d32f2f;
}

/* Vision Section */
.vision {
  background-color: #fff;
  padding: 60px 40px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  margin-top: 40px;
}

.vision h2 {
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.vision p {
  font-size: 18px;
  line-height: 1.8;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-header {
    padding: 60px 20px;
  }

  .about-body {
    flex-direction: column;
    padding: 40px 20px;
  }

  .text-content,
  .image-content {
    width: 100%;
    padding-right: 0;
  }

  .gallery-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
