<template>
  <div>
    <!-- 标题 -->
    <div class="m-header df jc-sb ai-c">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>编辑地址</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <!-- 内容 -->
    <div>
      <van-address-edit
        :address-info="list"
        :area-list="area"
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
      />
    </div>
    <div></div>
  </div>
</template>

<script>
import area from "../../js/area";
import { Toast } from 'vant';

export default {
  name: "",
  props: {},
  data() {
    return {
      area,
      searchResult: [],
      list: {},
    };
  },
  components: {},
  methods: {
    // 返回上一页
    clickMy() {
      this.$router.push("/address");
    },
    getdata() {
      this.list = this.$route.query.msg;
      console.log(this.list);
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
          id: this.list._id,
        })
        .then((res) => {
          console.log(res);
          Toast.success(res.msg);
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
      // console.log(this.list._id);
      this.$api
        .deleteAddress(this.list._id)
        .then((res) => {
          console.log(res);
          Toast.success(res.msg);
          this.$router.go(-1);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getdata();
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