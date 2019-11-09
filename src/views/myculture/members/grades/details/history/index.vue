<template>
  <div>
    <history-page ref="history"></history-page>
  </div>
</template>
<script>
import {
  MEMBERS_GRADE_LIST,
  MY_MEMBERS,
  CHANGE_RECORDS
} from "@/constants/TEXT";
import {
  PATH_MEMEBER_CULTURE_GRADE,
  PATH_MEMBER_CULTURE_LIST,
  PATH_MEMBER_CULTURE_DETAILS
} from "@/constants/URL";
import history from "@/views/myculture/levels/history/index.vue";

export default {
  data() {
    return {
      nav: [
        {
          label: MEMBERS_GRADE_LIST,
          href: PATH_MEMEBER_CULTURE_GRADE
        },
        {
          label: MY_MEMBERS,
          href: PATH_MEMBER_CULTURE_LIST(
            this.$route.params.id,
            this.$route.params.type
          )
        },
        {
          label: "下级详情",
          href: PATH_MEMBER_CULTURE_DETAILS(
            this.$route.params.id,
            this.$route.params.type,
            this.$route.params.uid
          )
        },
        {
          label: CHANGE_RECORDS,
          active: true
        }
      ]
    };
  },
  components: {
    "history-page": history
  },
  mounted() {
    this.$refs["history"].nav = this.nav;
  }
};
</script>
<style lang="scss" scoped></style>
