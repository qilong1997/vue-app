<template>
  <div>
    我是模块{{ userName }} -- {{ age }} -- {{ formatDate() }}
    <button @click="handleChangeTime">改变时间</button>
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
      date: "2022-2-22 12:00:00",
    };
  },
  methods: {
    formatDate() {
      console.log(new Date(this.date).toLocaleDateString());
      return new Date(this.date).toLocaleDateString();
    },
    handleChangeTime() {
      this.date = `2022-2-${Math.ceil(Math.random() * 16)} 12:00:00`;
    },
  },
};
</script>

<style>
</style>