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
                    <el-form-item prop="leader">
                        <el-input placeholder="请输入上级姓名" v-model="searchForm.leader"></el-input>
                    </el-form-item>
                    <el-form-item prop="levels">
                        <el-select v-model="searchForm.level" placeholder="271等级">
                            <el-option v-for="(k,v) of constants.LEVELMAP" :key="k" :label="v" :value="k"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-button style="margin-left:30px" type="primary" round>导出</el-button>
                </el-form>
                <br>
                <br>
                <el-table :data="tableData" stripe style="width: 100%">

                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="date" label="自评分数"></el-table-column>
                    <el-table-column prop="date" label="上级姓名"></el-table-column>
                    <el-table-column prop="date" label="上级评分数"></el-table-column>
                    <el-table-column prop="date" label="271等级"></el-table-column>
                    <el-table-column fixed="right" label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" style="margin-right:15px;" size="small">查看详情</el-button>
                            <el-popover placement="top">
                                <el-form :model="levelForm" :inline="true" ref="searchForm">
                                    <el-form-item prop="levels">
                                        <el-select v-model="levelForm.level" placeholder="271等级">
                                            <el-option v-for="(k,v) of constants.LEVELMAP" :key="k" :label="v" :value="k"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-form>
                                <el-row type="flex" justify="center">
                                    <el-button type="primary" round>提交</el-button>
                                </el-row>
                                <el-button @click="openLevelForm(scope.row)" slot="reference" type="text" size="small">修改</el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                </el-table>
            </div>

        </section>
    </div>
</template>
<script>
import { FINISHED_DATE, LEVELMAP } from "@/constants/TEXT";

export default {
  data() {
    return {
      searchForm: {
        name: "",
        leader: "",
        level: ""
      },
      levelForm: {
        level: ""
      },
      gradeName: "xxx",
      finishedDate: "xxx",
      nav: [
        {
          label: "事业部271",
          active: true
        }
      ],
      constants: {
        FINISHED_DATE,
        LEVELMAP
      },
      tableData: [{ id: 9 }]
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  methods: {
    openLevelForm(row) {
      console.log(row);
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
}
</style>
