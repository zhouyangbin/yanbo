<template>
    <div class="my-manager-levels">
        <nav-bar :list="nav"></nav-bar>
        <br>
        <br>
        <section class="content-container">
            <div class="levels-header">
                <span>{{gradeName}}</span>&nbsp;
                <span class="tips">{{constants.FINISHED_DATE}} {{finishedDate}}</span>
                <hr>
                <br>
                <el-form :model="searchForm" class="search-form" :inline="true" ref="searchForm">
                    <el-form-item prop="name">
                        <el-input placeholder="请输入员工姓名" v-model="searchForm.name"></el-input>
                    </el-form-item>
                    <el-form-item prop="superior_name">
                        <el-input placeholder="请输入上级姓名" v-model="searchForm.superior_name"></el-input>
                    </el-form-item>
                    <el-form-item prop="_271_level">
                        <el-select v-model="searchForm._271_level" placeholder="271等级">
                            <el-option v-for="(k,v) of constants.LEVELMAP" :key="k" :label="v" :value="k"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-button @click="exportFile" style="margin-left:30px" type="primary" round>导出</el-button>
                </el-form>
                <br>
                <br>
                <el-table :data="tableData" stripe style="width: 100%">

                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="self_score" label="自评分数"></el-table-column>
                    <el-table-column prop="superior_name" label="上级姓名"></el-table-column>
                    <el-table-column prop="superior_score" label="上级评分数"></el-table-column>
                    <el-table-column prop="_271_level" label="271等级">
                        <template slot-scope="scope">
                            {{constants.LEVEL_ALIAS[scope.row._271_level]}}
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" label="操作">
                        <template slot-scope="scope">
                            <el-button @click="goDetail(scope.row)" type="text" style="margin-right:15px;" size="small">查看详情</el-button>
                            <el-popover v-model="showLvForm" placement="top">
                                <el-form :model="levelForm" :inline="true" ref="searchForm">
                                    <el-form-item prop="levels">
                                        <el-select v-model="levelForm.level" placeholder="271等级">
                                            <el-option v-for="(k,v) of constants.LEVELMAP" :key="k" :label="v" :value="k"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-form>
                                <el-row v-show="levelForm.level" type="flex" justify="center">
                                    <el-button @click="updateLv(scope.row)" type="primary" round>提交</el-button>
                                </el-row>
                                <el-button @click="openLevelForm(scope.row)" slot="reference" type="text" size="small">修改</el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                </el-table>
                <br>
                <el-row type="flex" justify="end">
                    <pagination @current-change="currentChange" :currentPage="currentPage" :total="total"></pagination>
                </el-row>
            </div>

        </section>
    </div>
</template>
<script>
import { FINISHED_DATE, LEVELMAP, LEVEL_ALIAS } from "@/constants/TEXT";
import { getManagerLvList, changeManagerLv } from "@/constants/API";
import { PATH_CULTURE_LV_EXPORT, PATH_GRADE_EMP_DETAIL } from "@/constants/URL";

export default {
  data() {
    return {
      total: 0,
      currentPage: 1,
      showLvForm: false,
      evaluation_name_id: "",
      id: "",

      searchForm: {
        name: "",
        superior_name: "",
        _271_level: ""
      },
      levelForm: {
        level: ""
      },
      gradeName: "",
      finishedDate: "",
      nav: [
        {
          label: "事业部271",
          active: true
        }
      ],
      constants: {
        FINISHED_DATE,
        LEVELMAP,
        LEVEL_ALIAS
      },
      tableData: []
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  methods: {
    openLevelForm(row) {
      this.levelForm.level = row._271_level;
    },
    fetchList(data) {
      getManagerLvList(data).then(res => {
        const { info, list } = res;
        const { evaluation_name_id, id, name, end_time } = info;
        this.tableData = list.data;
        this.evaluation_name_id = evaluation_name_id;
        this.finishedDate = end_time;
        this.gradeName = name;
        this.id = id;
      });
    },
    currentChange(v) {
      this.fetchList({ page: v, ...this.searchForm });
    },
    updateLv(row) {
      changeManagerLv(row.id, { _271_level: this.levelForm.level }).then(
        res => {
          this.showLvForm = false;
          this.$message({
            message: "等级修改成功!",
            type: "success"
          });
          this.fetchList({ page: 1, ...this.searchForm });
        }
      );
    },
    exportFile() {
      window.open(
        PATH_CULTURE_LV_EXPORT(this.searchForm),
        "_blank",
        "noopener"
      );
    },
    goDetail(row) {
      this.$router.push(
        PATH_GRADE_EMP_DETAIL(this.evaluation_name_id, this.id, row.id)
      );
    }
  },
  watch: {
    searchForm: {
      handler: function(v) {
        this.currentPage = 1;
        this.fetchList({ page: 1, ...v });
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style lang="scss" scoped>
.my-manager-levels {
  .levels-header {
    background-color: white;
    padding: 20px 10px 10px 10px;
  }
  .search-form {
    background-color: #f8f8f8;
    padding: 20px;
    padding-bottom: 0px;
  }
  .tips {
    font-size: 10px;
    color: #afafaf;
  }
}
</style>
