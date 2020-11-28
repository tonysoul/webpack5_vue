<template>
  <div>
    <h1 class="box1">{{ msg }}</h1>
    <hr />
    <h2 class="box2">22222222222</h2>
    <hr />
    <cmp1></cmp1>
  </div>
</template>

<script>
import cmp1 from "@/components/cmp1";

export default {
  components: { cmp1 },
  data() {
    return {
      msg: "message",
    };
  },
};
</script>
<style lang='less' scoped>
.box1 {
  color: red;
  width: 200px;
  height: 200px;
  background: url(./assets/img/1.png) no-repeat;
}
</style>