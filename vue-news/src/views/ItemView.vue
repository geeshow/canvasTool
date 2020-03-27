<template>
  <div>
    <section>
      <!-- 질문 상세 영역 -->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>

        </div>
      </div>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content">
      </div>
    </section>
    <!-- <p>{{ fetchedItem.title }}</p>
      <p>{{ fetchedItem.content }}</p>
      <div v-for="comment in fetchedItem.comments" v-bind:key="comment.id">
        <p>{{ comment.content }}</p>
      </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed : {
    ...mapGetters(['fetchedItem'])
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', id);    
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.user-description {
  padding-left: 8px;
}
.fa-user {
  font-size: 2.5rem;
}
.time {
  font-size:0.7rem;
}
</style>