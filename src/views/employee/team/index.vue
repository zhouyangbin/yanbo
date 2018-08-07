<template>
    <div>
        <nav-bar :list="nav"></nav-bar>
        <section class="content-container">
            <section>
                <el-form :inline="true" :model="filterForm" ref="filterForm">
                    <el-form-item>
                        <el-input placeholder="请输入姓名" v-model="filterForm.name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="filterForm.status" placeholder="请选择">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </section>
            <section>
                <el-row type="flex" :gutter="10">
                    <el-col :span="18">
                        <el-table :data="tableData" stripe style="width: 100%">
                            <el-table-column prop="date" label="日期" width="180">
                            </el-table-column>
                            <el-table-column prop="name" label="姓名" width="180">
                            </el-table-column>
                            <el-table-column prop="address" label="地址">
                            </el-table-column>
                        </el-table>
                    </el-col>
                    <el-col :span="6"></el-col>
                </el-row>
            </section>
        </section>
    </div>
</template>
<script>
import { TEAM_GRADE } from "@/constants/TEXT";
export default {
  data() {
    return {
      filterForm: {
        status: "",
        name: ""
      },
      nav: [
        {
          label: TEAM_GRADE,
          active: true
        }
      ],
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
      ]
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue")
  }
};
</script>
<style scoped>
</style>
