<template>
  <div class="basicinfo-page">
    <el-row justify="space-between" type="flex">
      <div class="org-info">
        <span class="name">{{ data.name }}</span>
        <span class="number">{{ data.workcode }}</span>
        <span v-show="data.leaderLabel" class="number"
          >{{ data.leaderLabel }}:</span
        >
        <span v-show="data.superior_name" class="name">{{
          data.superior_name | placeholder("无")
        }}</span>
        <span v-show="data.superior_workcode" class="number">{{
          data.superior_workcode | placeholder("无")
        }}</span>
        <span v-show="data.hightlevelLabel" class="number"
          >{{ data.hightlevelLabel }}:</span
        >
        <span v-show="data.highlevel_name" class="name">{{
          data.highlevel_name | placeholder("无")
        }}</span>
        <span v-show="data.highlevel_workcode" class="number">{{
          data.highlevel_workcode | placeholder("无")
        }}</span>
        <span v-if="data.breakStatus" class="name">{{ data.breakStatus }}</span>
      </div>
      <div v-if="data.finishedTime" class="finished-time">
        {{ data.finishedTime }}
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
