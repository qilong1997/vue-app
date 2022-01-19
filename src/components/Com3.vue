<template>
  <div class="wrapper">
    <div ref="firework" class="mySprite"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.showAn();
  },
  methods: {
    showAn() {
      const { firework } = this.$refs;
      firework.addEventListener("animationend", () => {
        console.log(firework.className);
        firework.className = "";
      });
      firework.addEventListener("webkitAnimationend", () => {
        console.log(firework.className);
        firework.className = "";
      });
      setInterval(() => {
        firework.className = "mySprite";
        firework.style.top = Math.floor(Math.random() * 500) + "px";
        firework.style.left = Math.floor(Math.random() * 225) + "px";
      }, 2000);
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 600px;
}
.mySprite {
  position: absolute;
  background-image: url("../assets/烟花.png");
  width: 150px;
  height: 150px;
  animation: myAnimation 0.68s steps(1);
}
@keyframes myAnimation {
  0% {
    background-position: 0px 0px;
  }
  6.25% {
    background-position: -150px 0px;
  }
  12.50% {
    background-position: -300px 0px;
  }
  18.75% {
    background-position: -450px 0px;
  }
  25.00% {
    background-position: -600px 0px;
  }
  31.25% {
    background-position: -750px 0px;
  }
  37.50% {
    background-position: -900px 0px;
  }
  43.75% {
    background-position: -1050px 0px;
  }
  50.00% {
    background-position: -1200px 0px;
  }
  56.25% {
    background-position: -1350px 0px;
  }
  62.50% {
    background-position: -1500px 0px;
  }
  68.75% {
    background-position: -1650px 0px;
  }
  75.00% {
    background-position: -1800px 0px;
  }
  81.25% {
    background-position: -1950px 0px;
  }
  87.50% {
    background-position: -2100px 0px;
  }
  93.75% {
    background-position: -2250px 0px;
  }
  100.00% {
    background-position: -2400px 0px;
  }
}
</style>