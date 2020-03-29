<template>
  <div>
    <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
            <!-- <div>username : {{ info.id }}</div> -->
            <slot name="username"></slot>

            <!-- <router-link :to="`/user/${info.id}`">
                {{ info.id }}
            </router-link> -->
            <div class="time">
                <slot name="time"></slot>
                <!-- time : {{ info.created }} -->
            </div>
            <slot name="karma"></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      info: Object
  },
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