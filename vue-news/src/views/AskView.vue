<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="item in fetchedAsk" v-bind:key="item.id" class="post">
        <div class="points">
          {{ item.points }}
        </div>

        <div>
          <p class="news-title">
            <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }}by 
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem,
    // ...mapGetters([
    //   'fetchedAsk'
    // ]),

    // #2
    // ...mapState({
    //   asks: state => state.asks
    // })

    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
}
</script>

<style>
</style>