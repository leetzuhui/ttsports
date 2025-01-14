<template>
  <div class="home">

  </div>
</template>

<script>
export default {
  name: 'ViewHome'
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 60px 20px;
}

.hero {
  background-color: #0071e3;
  color: white;
  padding: 80px 20px;
}

.hero h1 {
  font-size: 36px;
  font-weight: 700;
}

.hero p {
  font-size: 18px;
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 40px 20px;
}

.feature {
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.feature h2 {
  font-size: 22px;
  color: #0071e3;
}

.feature p {
  color: #555;
}
</style>
