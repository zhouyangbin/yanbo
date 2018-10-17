
<template>
  <div class="basicinfo-page">
    <el-row justify="space-between" type="flex">
      <div class="org-info">
        <span class="name">
          {{data.name}}
        </span>
        <span class="number">
          {{data.workcode}}
        </span>
        <span v-show="!forMember && downMember||isReport" class="number">
          {{downMember ? '他的上级' : '我的上级' }}:
        </span>
        <span v-show="downMember&&!forMember ||isReport" class="name">
          {{data.superior_name}}
        </span>
        <span v-show="!forMember && downMember ||isReport" class="number">
          {{data.superior_workcode}}
        </span>
        <span v-show="!forMember && !downMember||isReport" class="number">
          隔级上级:
        </span>
        <span v-show="!forMember && !downMember||isReport" class="name">
          {{data.highlevel_name}}
        </span>
        <span v-show="!forMember && !downMember||isReport" class="number">
          {{data.highlevel_workcode}}
        </span>
      </div>
      <div v-if="!isReport" class="finished-time">
        {{unConfirmed?'待确认': downMember?'隔级评':forMember?'上级评':'自评'}}截止时间: {{data.finishedTime}}
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
    },
    downMember: {
      type: Boolean,
      default: false
    },
    isReport: {
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
