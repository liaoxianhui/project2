<template>
  <div>
      <div class=" df ai-c jc-c mb10">
          <div class="stylef">1F</div>
          <div class=" cr">{{floorName.floor1}}</div>
      </div>
      <div class="df jc-sb">
          <div>
            <div><img :src="arr[0].image" alt=""></div>
            <div><img :src="arr[1].image" alt=""></div>
          </div>
          <div>
            <div><img :src="arr[2].image" alt=""></div>
            <div><img :src="arr[3].image" alt=""></div>
            <div><img :src="arr[4].image" alt=""></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
        arr:[],
        floorName:[]
    }
  },
  components: {},
  methods: {},
  mounted() {
      this.$api
      .getRecommend()
      .then((res) => {
        console.log(res.data.floor1);
        this.arr = res.data.floor1;
        this.floorName = res.data.floorName;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
img{
    width: 100%;
}
.stylef{
  background: red;
  border-radius: 50%;
  line-height: 20px;
  margin-right: 10px;
  padding: 2px 2px 0 2px;
  color: white;
  font-size: 14px;
}

</style>