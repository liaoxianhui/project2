<template>
  <div class="bcolor">
    <div>
      <child1></child1>
    </div>
    <div>
      <child2></child2>
    </div>
    <div></div>
  </div>
</template>

<script>
import child1 from '../../../components/index/Child1'
import child2 from '../../../components/index/Child2'
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    child1,
    child2,
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
</style>