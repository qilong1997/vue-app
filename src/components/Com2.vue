<template>
  <div>我是模块{{ userName }} -- {{ age }}</div>
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
};
</script>

<style>
</style>