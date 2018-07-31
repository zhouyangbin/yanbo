<template>
    <div class="rules-setting">
        <nav-bar :list="nav"></nav-bar>
        <section class="content-container">
            <el-row type="flex" justify="space-between">
                <el-cascader placeholder="选择事业部" :options="options " style="width:400px;" v-model="dp" change-on-select></el-cascader>
            </el-row>
            <br>
            <el-table :data="tableData" stripe style="width: 100%;margin-top:20px">
                <el-table-column prop="date" label="模板名称">
                </el-table-column>
                <el-table-column prop="name" label="适用事业部">
                </el-table-column>
                <el-table-column prop="address" label="绩效类型">
                </el-table-column>
                <el-table-column prop="address" label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="updateRule(scope.row)" size="small">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <br>
            <pagination @current-change="handleCurrentChange" :total="total"></pagination>
        </section>
    </div>
</template>
<script>
import { RULES_SETTING } from "@/constants/TEXT";
export default {
  data() {
    return {
      dp: [],
      currentPage: 1,
      total: 0,
      tableData: [{}],
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        }
      ],
      nav: [
        {
          label: RULES_SETTING,
          active: true
        }
      ]
    };
  },
  methods: {
    updateRule(row) {
      // TODO: update
      console.log(row);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.refreshList();
    },
    refreshList(data) {
      this.currentPage = 1;
      // TODO: ajax list
    }
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  watch: {
    // 筛选watch
    dp: {
      handler: function(v) {
        // TODO: refresh list
        this.refreshList();
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style scoped>
</style>
