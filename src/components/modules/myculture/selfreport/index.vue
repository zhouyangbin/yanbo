
<template>
  <div class="self-report-component">
    <div class="title">
      2018年文化评分
    </div>
    <hr>
    <br>
    <div>
      <span class="sub-title">
        优势: &nbsp;
      </span>
      <span class="content">
        评价人的优势评价人的优势评价人的优势评价人的优势评价人的
      </span>
    </div>
    <br>
    <div>
      <span class="sub-title">
        待提升: &nbsp;
      </span>
      <span class="content">
        评价人的优势评价人的优势评价人的优势评价人的优势评价人的
      </span>
    </div>
    <br>
    <case-item v-for="n in 3" :key="n"></case-item>
    <el-row type="flex" justify="end">
      <el-button type="primary">申诉</el-button>
      <el-button type="primary">确认</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  components: {
    "case-item": () => import("./caseitem/index.vue")
  }
};
</script>
<style lang='scss' scoped>
.self-report-component {
  .title {
    font-size: 36px;
    font-weight: bold;
    color: #4a4a4a;
  }
  .sub-title {
    font-size: 24px;
    color: #4bc8aa;
    line-height: 30px;
    font-weight: bold;
  }
  .content {
    font-size: 14px;
    color: #4a4a4a;
    line-height: 30px;
  }
}
</style>
