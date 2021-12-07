<template>
  <div>
    我是模块{{ name }} -- {{ age.num }} --- {{ $store.state.user.name }}
    <ul>
      <li v-for="item in age.num" :key="item.a">
        {{ item.a }}----{{ item.b }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    dataMap: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      ...this.dataMap,
    };
  },
  // 使用watch来进行监听，因为解构后data中的数据不会响应，需要动态进行赋值
  watch: {
    dataMap: {
      handler(newVal) {
        console.log(newVal);
        Object.keys(newVal).forEach((key) => {
          this[key] = newVal[key];
        });
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>