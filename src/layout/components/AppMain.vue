<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <transitionGroup name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="key" />
        </keep-alive>
      </transitionGroup>
    </router-view>

    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "AppMain",
  setup() {
    const route = useRoute();
    const key = computed(() => route.path);

    const test = (data: any) => {
      console.log(data);
    };
    return {
      key,
      test,
    };
  },
});
</script>

<style lang="scss" scoped>
.app-main {
  /* navbar 50px  */
  min-height: calc(100vh - 50px);
}

.fade-transform-enter-active,
.fade-transform-leave-active {
  transition: all 0.5s;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
