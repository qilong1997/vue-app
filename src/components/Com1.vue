<template>
  <div class="wrapper">
    我是模块{{ name }} -- {{ age.num }} --- {{ $store.state.user.name }}
    <ul>
      <li v-for="item in age.num" :key="item.a">
        {{ item.a }}----{{ item.b }}
      </li>
    </ul>
    <div class="box" ref="card">
      <div class="card front" @click.stop="handleZhengmian">
        <p>我是定位的文字</p>
      </div>
      <div class="card back" @click.stop="handleFanmian">
        <p>我是背面的定位文字</p>
      </div>
    </div>
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
  methods: {
    handleZhengmian() {
      this.$refs.card.style.transform = `rotateY(180deg)`;
    },
    handleFanmian() {
      this.$refs.card.style.transform = `rotateY(0deg)`;
    },
  },
};
</script>

<style scoped>
.wrapper {
  perspective: 800px;
}
.box {
  margin: 50px auto;
  width: 239px;
  height: 334px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 5s;
}
.card {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
}
.front {
  position: absolute;
  background-color: chartreuse;
}
.front p {
  width: 100px;
  position: absolute;
  top: 100px;
  left: 30px;
}
.back {
  position: absolute;
  transform: rotateY(180deg);
  background-color: coral;
}
.back p {
  width: 100px;
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>