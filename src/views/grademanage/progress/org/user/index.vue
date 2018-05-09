<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container whiteBG detail-container">
      <div class="header">
        <el-row type="flex">
          <img src="@assets/img/icon_pic.png" alt="">
          <div class="info">
            <div class="me">
              被评分人 | {{info.name}} | 等级 {{info.feed_back._271_level}}
            </div>
            <div class="leader">
              {{constants.LEADER_NAME}} - {{info.superior_name}}
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
          <el-card v-for="(v,i) of info.self_evaluation" :key="i" class="box-card">
            <div slot="header" class="clearfix">
              <span>{{v.topic}} - {{v.score}}分</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
            </div>
            <div v-for="o in (v.cases||[])" :key="o" class="text item">
              {{ o }}
            </div>
          </el-card>
        </div>
        <br>
        <h1>
          {{constants.LEADER_EVALUATION}}
        </h1>
        <hr>
        <div class="card-container">
          <el-card v-for="(v,i) of info.superior_evaluation" :key="i" class="box-card">
            <div slot="header" class="clearfix">
              <span>{{v.topic}} - {{v.score}}分</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
            </div>
            <div v-for="o in (v.cases||[])" :key="o" class="text item">
              {{ o }}
            </div>
          </el-card>
        </div>
        <br>
        <h1>
          {{constants.EVALUATION_FEEDBACK}}
        </h1>
        <hr>
        <div class="card-container">
          <el-card v-for="(v,i) of feedbackInfo" :key="i" class="box-card">
            <div slot="header" class="clearfix">
              <span>{{v.title}}</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
            </div>
            <div class="text item">
              {{v.content}}
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
  } from "@/constants/TEXT"
  import {
    PATH_GRADE_MANAGE,
    PATH_GRADE_PROGRESS,
    PATH_GRADE_ORG_LIST
  } from "@/constants/URL"
  import { getUserGradeContent } from "@/constants/API"
  export default {
    data() {
      return {
        info: {
          end_time: "",
          feed_back: {},
          name: "",
          self_evaluation: [],
          superior_evaluation: [],
          superior_name: ""
        },
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
      }
    },
    components: {
      "nav-bar": () => import("@/components/common/Navbar/index.vue")
    },
    computed: {
      feedbackInfo() {
        return {
          advantage: {
            title: "优势",
            content: this.info.feed_back.advantage
          },
          promotion: {
            title: "劣势",
            content: this.info.feed_back.promotion
          }
        }
      }
    },
    created() {
      getUserGradeContent(this.$route.params.uid)
        .then(res => {
          // console.log(res)
          this.info = res
        })
        .catch(e => {})
    }
  }
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
