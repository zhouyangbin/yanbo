<template>
  <div class="tpl-setting">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <el-row type="flex" justify="space-between">
        <el-form :inline="true" :model="tplForm" ref="tplForm">
          <el-form-item>
            <el-input v-model="tplForm.name" placeholder="模板名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-cascader placeholder="选择事业部" :options="options " style="width:400px; " v-model="tplForm.dp " change-on-select></el-cascader>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="showDialog=true" round>新增</el-button>
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
            <el-button type="text" @click="updateTpl(scope.row)" size="small">修改</el-button>
            <el-popover placement="top" width="160" v-model="delVisible">
              <p>确定要删除这个模板么?</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="delVisible = false">取消</el-button>
                <el-button type="primary" size="mini" @click="delTpl(scope.row)">确定</el-button>
              </div>
              <el-button style="margin-left:10px" type="text" size="small" slot="reference">删除</el-button>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <pagination @current-change="handleCurrentChange" :total="total"></pagination>
    </section>
    <tpl-dialog v-if="showDialog" :initData="initData" @close="tplDialogClose" :visible="showDialog" :infoType="infoType"></tpl-dialog>
  </div>
</template>
<script>
import { TPL } from "@/constants/TEXT";
import { AsyncComp } from "@/utils/asyncCom";
export default {
  data() {
    return {
      currentPage: 1,
      total: 0,
      delVisible: false,
      tableData: [{ id: 99 }],
      initData: {},
      tplForm: { name: "", dp: [] },
      infoType: "add",
      showDialog: false,
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
          label: TPL,
          active: true
        }
      ]
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "tpl-dialog": AsyncComp(
      import("@/components/modules/performance/TplDialog/index.vue")
    ),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  methods: {
    tplDialogClose() {
      this.showDialog = false;
      // TODO: refresh list
      this.refreshList();
    },
    updateTpl(row) {
      this.infoType = "modify";
      // TODO: set init data
      this.initData = {};
      this.showDialog = true;
    },
    delTpl(row) {
      console.log(row);
      // TODO: del ajax
      // TODO: refresh list
      this.refreshList();
      this.delVisible = false;
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
  watch: {
    // 筛选watch
    tplForm: {
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
.tpl-setting >>> .el-form-item {
  margin-bottom: 0;
}
</style>
