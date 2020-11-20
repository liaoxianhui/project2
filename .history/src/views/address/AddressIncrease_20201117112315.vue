<template>
  <div>
    <div class="m-header df jc-sb ai-c">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>添加地址</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <div>
      <van-address-edit
        :area-list="area"
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
    <div></div>
  </div>
</template>

<script>
import area from "../../js/area";
export default {
  name: "",
  props: {},
  data() {
    return {
      area,
      searchResult: [],
      id: "",
    };
  },
  components: {},
  methods: {
    clickMy() {
      this.$router.push("/address");
    },
    getdata(){
      this.$api.getAddress(this.id).then(res=>{
        console.log(res);
      })
    },
    onSave(content) {
      this.$api
        .postAddress({
          name: content.name,
          tel: content.tel,
          address: `${content.province}${content.city}${content.county}${content.addressDetail}`,
          isDefault: content.isDefault,
          province: content.province,
          city: content.city,
          county: content.county,
          addressDetail: content.addressDetail,
          areaCode: content.areaCode,
          id: content.id,
        })
        .then((res) => {
          console.log(res);
          this.$router.push("/address");
        })
        .catch((err) => {
          console.log(err);
        });
      //  参数：name:用户名,tel:电话，address:(省+市+区+详情地址)，isDefault：是否默认
      //  *                                province：省，city：市，county：区，addressDetail：详情地址，
      //  *                                areaCode：地区代码，id：修改地址时候要传id
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  mounted() {
    this.id = this.$route.query.id;
    // console.log(this.id);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.m-header {
  height: 50px;
  line-height: 50px;
  background: #eee;
}
</style>