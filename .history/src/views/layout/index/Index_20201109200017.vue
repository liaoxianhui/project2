<template>
  <div class="bcolor">
    <div>
      <child1></child1>
    </div>
    <div class="rotation-height">
      <child2></child2>
    </div>
    <div>
      <child3></child3>
    </div>
  </div>
</template>

<script>
import child1 from '../../../components/index/Child1'
import child2 from '../../../components/index/Child2'
import child3 from '../../../components/index/Child3'
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
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.bcolor {
  background: #eee;
}
.rotation-height{
  width: 100%;
  height: 166px;
}
</style>