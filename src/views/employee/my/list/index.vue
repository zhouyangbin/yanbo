<template>
    <div class="my-grade-list">
        <nav-bar :list="nav"></nav-bar>
        <br>
        <br>
        <section class="content-container">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="date" label="评分名称" width="180">
                </el-table-column>
                <el-table-column prop="name" label="周期类型" width="180">
                </el-table-column>
                <el-table-column prop="address" label="截止时间">
                </el-table-column>
                <el-table-column prop="address" label="目标状态">
                </el-table-column>
                <el-table-column prop="address" label="评分状态">
                </el-table-column>
                <el-table-column prop="address" label="操作">
                    <template slot-scope="scope">
                        <el-button @click="goDetail(scope.row)" type="text" size="small">{{constants.DETAILS}}</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </section>

    </div>

</template>


<script>
import { MY_GRADE, DETAILS } from "@/constants/TEXT";
import { PATH_EMPLYEE_MY_DETAIL } from "@/constants/URL";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      nav: [
        {
          label: MY_GRADE,
          active: true
        }
      ],
      constants: { DETAILS }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue"),
    card: () => import("@/components/modules/employee/gradeCard/index.vue")
  },
  methods: {
    goDetail(row) {
      this.$router.push(PATH_EMPLYEE_MY_DETAIL(row.id));
    }
  }
};
</script>
<style scoped>
.my-grade-list .content-container {
  padding: 20px;
}
</style>
