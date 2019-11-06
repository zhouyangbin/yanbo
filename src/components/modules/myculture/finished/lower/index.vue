<template>
  <div class="finished">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column
        v-for="(v, i) of columns"
        :key="i"
        :prop="v.prop"
        :label="v.label"
      ></el-table-column>
      <el-table-column prop="address" :label="constants.OPERATIONS">
        <template slot-scope="scope">
          <el-button @click="goDetail(scope.row)" type="text" size="small">{{
            constants.DETAILS
          }}</el-button>
          <el-button @click="exportMore(scope.row)" type="text" size="small">{{
            constants.EXPORT_DETAILS
          }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br />
  </div>
</template>
<script>
import {
  DETAILS,
  GRADE_NAME,
  FINISHED_DATE,
  OPERATIONS,
  EXPORT_DETAILS,
  DOWN_MEMBERS_GRADE_LIST
} from "@/constants/TEXT";
import {
  PATH_MEMBER_CULTURE_LIST,
  PATH_EXPORT_CULTURE_GRADE
} from "@/constants/URL";
import { getMyTeamEndCultureList } from "@/constants/API";
export default {
  created() {
    this.getList();
  },
  data() {
    return {
      tableData: [],
      constants: {
        DETAILS,
        OPERATIONS,
        EXPORT_DETAILS
      },
      columns: [
        {
          prop: "name",
          label: GRADE_NAME
        },
        {
          prop: "end_time",
          label: FINISHED_DATE
        }
      ]
    };
  },
  methods: {
    getList() {
      getMyTeamEndCultureList({ page: 1 }).then(res => {
        // console.log(res);
        this.tableData = res.data;
      });
    },
    goDetail(row) {
      this.$router.push(PATH_MEMBER_CULTURE_LIST(row.id,0));
    },
    exportMore(row) {
      window.open(PATH_EXPORT_CULTURE_GRADE(row.id, 1), "_blank", "noopener");
    }
  }
};
</script>
<style scoped></style>
