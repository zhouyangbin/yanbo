<template>
  <section>
      <section v-if="overview.length" class="progress-header">
          <el-col>
            分布情况汇总
            <span>
              <el-popover
                placement="right"
                width="331"
                >
                <div class="tip_A">
                </div>
                <el-button slot="reference" type="text" class="Badge_logo"></el-button>
              </el-popover>
            </span> 
          </el-col>
      </section>
      <section v-if="overview.length" class="progress-header" align="center">
        <template>
          <el-row :gutter="3">
            <el-col :span="6">
              <div class="overview_info">
                <template v-if="overview[1].child" class="clo_bg_1" >
                  <div class="overview_info_number_head">
                    <div class="overview_head1 overview_info_number_head_title">
                      {{ overview[0].name + '(' + overview[0].threshold+'%' +",最多"+ overview[0].expected + ')' }}人
                    </div>
                  </div>
                  <div class="overview_info_number_info">
                    <span class="overview_info_number_info_des clo_bg_1">
                      <span>
                        {{overview[0].count }}人
                       <span v-if="overview[0].expected - overview[0].count < 0" class="arrow_up"></span>
                     </span>
                      <span v-if="overview[0].expected -  overview[0].count < 0" class="overview_tip_color">
                          超出{{ Math.abs(overview[1].child[0].expected -  overview[1].child[0].count) }}人
                      </span>
                    </span>
                  </div>
                </template>
              </div>
              <div class="display_flex">
                <template>
                  <el-popover class="overview_info_number_users"
                    placement="top-start"
                    width="200"
                    trigger="hover"
                    :content=" getUserInfo(overview[0].users) ">
                    <el-button class="overview_info_number_users clo_bg_1" slot="reference">{{ getUserInfo(overview[0].users) }}</el-button>
                  </el-popover>
                </template>
              </div>
            </el-col>
            <el-col :span="9" align="center">
              <div class="overview_info">
                <template v-if="overview[1].child" class="clo_bg_2" >
                  <div class="overview_info_number_head">
                    <div class="overview_head2 overview_info_number_head_title margin_right_3">
                      {{ overview[1].child[0].name + '(' + overview[1].child[0].threshold+'%' +",最多"+ overview[1].child[0].expected + ')' }}人
                    </div>
                    <div class="overview_head2 overview_info_number_head_title">
                      {{ overview[1].child[1].name + '(' + overview[1].child[1].threshold+'%' +",最多"+ overview[1].child[1].expected + ')' }}人
                    </div>
                  </div>
                  <div class="overview_info_number_info">
                    <span class="overview_info_number_info_des margin_right_3 clo_bg_2">
                      <span>
                        {{ overview[1].child[0].count }}人
                       <span v-if="overview[1].child[0].expected -  overview[1].child[0].count < 0" class="arrow_up"></span>
                     </span>
                      <span v-if="overview[1].child[0].expected -  overview[1].child[0].count < 0" class="overview_tip_color">
                          超出{{ Math.abs(overview[1].child[0].expected -  overview[1].child[0].count) }}人
                      </span>
                    </span>
                    <span class="overview_info_number_info_des clo_bg_2">
                      <span>
                        {{ overview[1].child[1].count }}人
                       <span v-if="overview[1].child[1].expected -  overview[1].child[1].count < 0" class="arrow_up"></span>
                     </span>
                      <span v-if="overview[1].child[1].expected -  overview[1].child[1].count < 0"class="overview_tip_color">
                          超出{{ Math.abs(overview[1].child[1].expected -  overview[1].child[1].count) }}人
                      </span>
                    </span>
                  </div>
                </template>
              </div>
              <div class="display_flex">
                <template>
                  <el-popover class="overview_info_number_users margin_right_3"
                    placement="top-start"
                    width="200"
                    trigger="hover"
                    :content=" getUserInfo(overview[1].child[0].users) ">
                    <el-button class="overview_info_number_users clo_bg_2" slot="reference">{{ getUserInfo(overview[1].child[0].users) }}</el-button>
                  </el-popover>
                </template>
                <template >
                  <el-popover class="overview_info_number_users"
                    placement="top-start"
                    width="200"
                    trigger="hover"
                    :content=" getUserInfo(overview[1].child[1].users) ">
                    <el-button class="overview_info_number_users clo_bg_2" slot="reference">{{ getUserInfo(overview[1].child[1].users) }}</el-button>
                  </el-popover>
                </template>
              </div>
            </el-col>
            <el-col :span="9">
              <div class="overview_info">
                <template v-if="overview[2].child" class="clo_bg_3" >
                  <div class="overview_info_number_head">
                    <div class="overview_head2 overview_info_number_head_title margin_right_3">
                      {{ overview[2].child[0].name + '(' + overview[2].child[0].threshold+'%' +",至少"+ overview[2].child[0].expected + ')' }}人
                    </div>
                    <div class="overview_head3 overview_info_number_head_title">
                      {{ overview[2].child[1].name + '(' + overview[2].child[1].threshold+'%' +",至少"+ overview[2].child[1].expected + ')' }}人
                    </div>
                  </div>
                  <div class="overview_info_number_info">
                    <span class="overview_info_number_info_des margin_right_3 clo_bg_2">
                      <span>
                        {{ overview[2].child[0].count }}人
                       <span v-if="overview[2].child[0].expected -  overview[2].child[0].count > 0" class="arrow_down"></span>
                     </span>
                      <span v-if="overview[2].child[0].expected -  overview[2].child[0].count > 0"class="overview_tip_color">
                          缺少{{ Math.abs(overview[2].child[0].expected -  overview[2].child[0].count) }}人
                      </span>
                    </span>
                    <span class="overview_info_number_info_des clo_bg_3">
                      <span>
                        {{ overview[2].child[1].count }}人
                       <span v-if="overview[2].child[1].expected -  overview[2].child[1].count > 0" class="arrow_down"></span>
                     </span>
                      <span v-if="overview[2].child[1].expected -  overview[2].child[1].count > 0"class="overview_tip_color">
                          缺少{{ Math.abs(overview[2].child[1].expected -  overview[2].child[1].count) }}人
                      </span>
                    </span>
                  </div>
                </template>
              </div>
              <div class="display_flex">
                <template>
                  <el-popover class="overview_info_number_users margin_right_3"
                    placement="top-start"
                    width="200"
                    trigger="hover"
                    :content=" getUserInfo(overview[2].child[0].users) ">
                    <el-button class="overview_info_number_users clo_bg_2" slot="reference">{{ getUserInfo(overview[2].child[0].users) }}</el-button>
                  </el-popover>
                </template>
                <template >
                  <el-popover class="overview_info_number_users"
                    placement="top-start"
                    width="200"
                    trigger="hover"
                    :content=" getUserInfo(overview[2].child[1].users) ">
                    <el-button class="overview_info_number_users clo_bg_3" slot="reference">{{ getUserInfo(overview[2].child[1].users) }}</el-button>
                  </el-popover>
                </template>
              </div>
            </el-col>
          </el-row>
        </template> 
      </section>
      <section v-if="overview.length" class="progress-header">
        <span class="text_tip">请注意: 所有直属下级的评分结束后，还需要点击页面上方的【整体提交】按钮，将所有评分统一提交至下一节点审批。</span>
      </section>
  </section>
</template>
<script>
export default {
  props: {
    overview: {
      type: Array,
      default: () => ({})
    }
  },
  data() {
    return {
    };
  },
  methods: {
    getUserInfo(data){
      let users=[];
      data.map(item=>{
        users.push(item.name+'('+item.score_level+' '+item.superior_score+')');
      });
      return users.join(',') ? users.join(',') : "--"
    },
  },
  computed: {
  },
  watch: {
  }
};
</script>
<style scoped>
.progress-header {
  background-color: white;
  padding: 20px 10px 10px 10px;
}
.Badge_logo{
  width: 12px;
  height: 12px;
  padding: 0;
  border:none;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("../../../../assets/img/what.png");
}
.tip_A{
  width: 331px;
  height: 254px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("../../../../assets/img/level_A.png");
}
.display_flex{
  display: flex;

}
.paading_right_3{
  padding-right: 3px;
}
.margin_right_3{
  margin-right: 3px !important;

}
.clo_bg_1{
  background: rgb(243, 251, 245);
}
.clo_bg_2{
  background: rgb(255, 247, 241);
}
.clo_bg_3{
  background:rgba(246,247,249);
}
.overview_tip_color{
  color: #EB0C00;
}
.overview_head1{
  background:rgba(209,241,217,1);
  color:rgba(7,171,48,1);
  border-top:solid 2px rgba(61,195,95,1);
  height: 57px;
  line-height: 57px;
  text-align: center;
}
.overview_head2{
  background:rgba(255,230,213,1);
  color:#F45900;
  border-top:solid 2px rgba(255,134,51,1);
  line-height: 57px;
  text-align: center;
}
.overview_head3{
  background:rgba(225,229,236,1);
  color:#566686;
  border-top:solid 2px rgba(127,140,164,1);
  line-height: 57px;
}
.overview_info{
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 3px;
}
.overview_info_head{
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.overview_info_number_head{
  display: flex;
}
.overview_info_number_head_title{
  flex: 1;
}
.overview_info_number_info{
  height: 92px;
  display: flex; 
}
.overview_info_number_info_des{
  height: 92px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.overview_info_number_users{
  height: 80px;
  margin: 0;
  border-top: solid 1px #fff;
  flex: 1;
  justify-content: center;
  align-items: left;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  border: none;
  border-radius: 0;
}

.arrow_up{
  width: 6px;
  height: 12px;
  display: inline-block;
  top: 0px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("../../../../assets/img/arrow_up.png");
}
.arrow_down{
  width: 6px;
  height: 12px;
  display: inline-block;
  top: 0px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("../../../../assets/img/arrow_down.png");
}
.text_tip{
  color: #FF8519;
  font-size: 12px;
}
</style>