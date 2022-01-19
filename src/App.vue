<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <Barrage></Barrage>
    <Danmaku v-if="true == false"></Danmaku> -->
    <button @click="$store.commit('increment')">uygjhgjhgj</button>
    {{ $store.state.count }}
    <p>{{ userName }}</p>
    <transition mode="out-in">
      <component :is="currentTabComponent" :dataMap="cComData"></component>
    </transition>
    <button @click="handleChange">切换</button>
    <button @click="handleAdd">count++</button>
    <com-3></com-3>
  </div>
</template>

<script>
import modules from "./components/component";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("user");
export default {
  name: "App",
  components: {
    // Barrage,
    // Danmaku,
    ...modules,
  },
  data() {
    return {
      currentTabComponent: "Com1",
      count: {
        num: [
          { a: "asd", b: 12 },
          { a: "ccc", b: 12 },
        ],
      },
    };
  },
  created() {
    this.getData();
  },
  computed: {
    // ...mapGetters(["userName"]),
    ...mapState({
      userName: "name",
    }),
    cComData() {
      if (this.currentTabComponent === "Com1") {
        return {
          name: "Com1",
          age: this.count,
        };
      } else {
        return {
          userName: "Com2",
          age: 24,
        };
      }
    },
  },
  methods: {
    getData() {
      const mat = Math.random() * 10;
      if (mat > 5) {
        console.log(mat);
        return false;
      } else {
        console.log(123);
      }
    },
    handleChange() {
      this.currentTabComponent =
        this.currentTabComponent === "Com1" ? "Com2" : "Com1";
    },
    handleAdd() {
      this.count.num[1].a = Math.random() + "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.v-enter {
  opacity: 0;
  transform: translateX(150px);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-150px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
