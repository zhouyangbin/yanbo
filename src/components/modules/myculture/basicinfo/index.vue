
<template>
  <div class="basicinfo-page">
    <el-row justify="space-between" type="flex">
      <div class="org-info">
        <span class="name">
          甄凯欣
        </span>
        <span class="number">
          079097
        </span>
        <span v-show="!forMember" class="number">
          我的上级:
        </span>
        <span v-show="!forMember" class="name">
          甄凯欣
        </span>
        <span v-show="!forMember" class="number">
          079097
        </span>
        <span v-show="!forMember" class="number">
          隔级上级:
        </span>
        <span v-show="!forMember" class="name">
          甄凯欣
        </span>
        <span v-show="!forMember" class="number">
          079097
        </span>
      </div>
      <div class="finished-time">
        {{unConfirmed?'待确认截止时间':'自评截止时间：'}} 2018年10月10日
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    forMember: {
      type: Boolean,
      default: false
    },
    unConfirmed: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
.basicinfo-page {
  line-height: 28px;
  font-size: 16px;
  color: #4a4a4a;
  margin-right: 20px;
  .org-info {
    & span {
      margin-right: 8px;
    }
  }
  .name {
    font-size: 28px;
    font-weight: bold;
  }

  .number {
    color: #000000;
  }
  .finished-time {
    text-align: right;
  }
}
</style>
