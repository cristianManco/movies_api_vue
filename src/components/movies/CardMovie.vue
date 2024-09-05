<template>
  <router-link :to="`/movie/${id}`">
    <div class="card-movie">
      <img :src="poster || 'src/assets/images/banner-bg.png'" alt="Movie poster" />
      <h2 class="title-movie">{{ title }}</h2>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    poster: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.card-movie {
  height: 100%;
  width: 300px;
  background: gray;
  padding: 10px;
  text-align: center;
  border: 2px solid blue;
  border-radius: 10px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .title-movie {
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    width: 90%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
}
</style>
