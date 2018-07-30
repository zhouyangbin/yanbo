<template>
    <el-table v-if="errorData.length>0" class="err-table" max-height="250" :data="errorData" style="width: 100%">
        <el-table-column prop="workcode" label="工号">
        </el-table-column>
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="reason" label="原因">
            <template class="reason" slot-scope="scope">
                {{scope.row.reason.join(" ")}}
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
export default {
  props: {
    errorData: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style scoped>
.err-table >>> .cell {
  font-size: 12px;
}
</style>
