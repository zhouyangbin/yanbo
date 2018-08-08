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
        <el-row type="flex" :gutter="20" align="top">
          <el-col :span="18">
            <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column prop="date" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="name" label="自评" width="180">
              </el-table-column>
              <el-table-column prop="address" label="上级评">
              </el-table-column>
              <el-table-column prop="address" label="对应等级">
              </el-table-column>
              <el-table-column prop="address" label="操作">
                <template slot-scope="scope">
                  <el-button @click="goDetail(scope.row)" type="text" size="small">{{constants.DETAILS}}</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="6">
            <peformance-bar></peformance-bar>
          </el-col>
        </el-row>
      </section>
    </section>
  </div>
</template>
<script>
import { TEAM_GRADE, DETAILS } from "@/constants/TEXT";
import { PATH_EMPLOYEE_TEAM_MEMEBER } from "@/constants/URL";
import { AsyncComp } from "@/utils/asyncCom";

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
        },
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
      constants: {
        DETAILS
      }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "peformance-bar": AsyncComp(
      import("@/components/modules/performance/GradeBar/index.vue")
    )
  },
  methods: {
    goDetail(row) {
      this.$router.push(
        PATH_EMPLOYEE_TEAM_MEMEBER(this.$route.params.id, row.id)
      );
    }
  }
};
</script>
<style scoped>
</style>
