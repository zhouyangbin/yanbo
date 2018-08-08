<template>
    <div class="team-member-detail">
        <nav-bar :list="nav"></nav-bar>
        <section class="content-container">
            <div>
                <span class="label">基本信息:</span>
                <span>上级工号:&nbsp; 00002 &nbsp;&nbsp; 上级姓名: &nbsp;开心</span>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <br>
            <card :config="markConfig" class="card" v-for="(v,i) of cards" v-model="cards[i].mark" :key="i"></card>
        </section>
    </div>
</template>
<script>
import { TEAM_GRADE } from "@/constants/TEXT";
export default {
  data() {
    return {
      cards: [{}, {}],
      nav: [
        {
          label: TEAM_GRADE,
          active: true
        }
      ],
      markConfig: {
        min: 0,
        max: 5,
        step: 0.5
      }
    };
  },
  components: {
    card: () => import("@/components/modules/employee/gradeCard/index.vue"),
    "nav-bar": () => import("@/components/common/Navbar/index.vue")
  }
};
</script>
<style scoped>
.team-member-detail .card {
  margin-bottom: 20px;
}
.team-member-detail .label {
  font-weight: 500;
  margin-right: 20px;
  font-size: 1.1em;
}
</style>
