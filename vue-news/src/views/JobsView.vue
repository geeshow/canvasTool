<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.jobs" v-bind:key="item.id" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>

        <div>
          <p class="news-title">
            <a :href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }}, 
            <a :href="item.url">{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
}

</script>

<style>

</style>