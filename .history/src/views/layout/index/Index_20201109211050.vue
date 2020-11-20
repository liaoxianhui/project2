<template>
  <div class="bcolor">
    <div class="fixed">
      <child1></child1>
    </div>
    <div class="rotation-height">
      <child2></child2>
    </div>
    <div>
      <child3></child3>
    </div>
    <div>
      <child4></child4>
    </div>
    <div>
      <child5></child5>
    </div>
  </div>
</template>

<script>
import child1 from '../../../components/index/Child1'
import child2 from '../../../components/index/Child2'
import child3 from '../../../components/index/Child3'
import child4 from '../../../components/index/Child4'
import child5 from '../../../components/index/Child5'
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    child1,
    child2,
    child3,
    child4,
    child5,
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.bcolor {
  background: #fff;
}
.rotation-height{
  width: 100%;
  height: 166px;
  margin-top: 47px;
}
.fixed{
  position: fixed;
  z-index: 999;
  top: 0;
}
</style>