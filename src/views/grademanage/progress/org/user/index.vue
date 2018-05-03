<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container whiteBG detail-container">
      <div class="header">
        <el-row type="flex">
          <img src="@assets/img/icon_pic.png" alt="">
          <div class="info">
            <div class="me">
              被评分人 | 刘毅 | 等级 1
            </div>
            <div class="leader">
              {{constants.LEADER_NAME}} - 王斯婷
            </div>
          </div>
        </el-row>
      </div>
      <div class="content">
        <h1>
          {{constants.SELF_EVALUATION}}
        </h1>
        <hr>
        <div class="card-container">
          <el-card v-for="v of 4" :key="v" class="box-card">
            <div slot="header" class="clearfix">
              <span>评测{{v}} - 成就客户</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </div>

        <h1>
          {{constants.LEADER_EVALUATIO}}
        </h1>
        <hr>
        <div class="card-container">
          <el-card v-for="v of 4" :key="v" class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称{{v}}</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </div>

        <h1>
          {{constants.EVALUATION_FEEDBACK}}
        </h1>
        <hr>
        <div class="card-container">
          <el-card v-for="v of 4" :key="v" class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称{{v}}</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {
  GRADE_PROGRESS,
  GRADE_MANAGE,
  ORG_DETAIL,
  GRADE_DETAIL,
  SELF_EVALUATION,
  LEADER_EVALUATION,
  EVALUATION_FEEDBACK,
  LEADER_NAME
} from "@/constants/TEXT";
import {
  PATH_GRADE_MANAGE,
  PATH_GRADE_PROGRESS,
  PATH_GRADE_ORG_LIST
} from "@/constants/URL";
export default {
  data() {
    return {
      constants: {
        SELF_EVALUATION,
        LEADER_EVALUATION,
        EVALUATION_FEEDBACK,
        LEADER_NAME
      },
      nav: [
        {
          label: GRADE_MANAGE,
          href: PATH_GRADE_MANAGE
        },
        {
          label: GRADE_PROGRESS,
          href: PATH_GRADE_PROGRESS(this.$route.params.id)
        },
        {
          label: ORG_DETAIL,
          href: PATH_GRADE_ORG_LIST(
            this.$route.params.id,
            this.$route.params.orgID
          )
        },
        {
          label: GRADE_DETAIL,
          active: true
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
.whiteBG {
  background-color: white;
}
.detail-container {
  margin-top: 20px;
  padding: 20px;
}
.info {
  margin-left: 20px;
  display: flex;
  height: 100px;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
}
.info .me {
  font-weight: 700;
  color: #333;
}
.info .leader {
  color: gray;
  font-size: 10px;
}
.content {
  margin-top: 20px;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.box-card {
  flex-basis: 49%;
  margin-top: 20px;
}
hr {
  border: 0;
  border-top: 1px solid #eee;
}
</style>
