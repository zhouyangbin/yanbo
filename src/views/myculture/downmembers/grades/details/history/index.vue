<template>
  <div>
    <history-page ref="history"></history-page>
  </div>
</template>
<script>
import {
  DOWN_MEMBERS_GRADE_LIST,
  MY_DOWN_MEMBER,
  CHANGE_RECORDS
} from "@/constants/TEXT";
import {
  PATH_DOWN_MEMEBER_CULTURE_GRADE,
  PATH_DOWN_MEMBER_CULTURE_LIST,
  PATH_DOWN_MEMBER_CULTURE_DETAILS,
  PATH_DOWN_MEMBER_CULTURE_DETAILS_HISTORY
} from "@/constants/URL";
import history from "@/views/myculture/levels/history/index.vue";

export default {
  data() {
    return {
      nav: [
        {
          label: DOWN_MEMBERS_GRADE_LIST,
          href: PATH_DOWN_MEMEBER_CULTURE_GRADE
        },
        {
          label: MY_DOWN_MEMBER,
          href: PATH_DOWN_MEMBER_CULTURE_DETAILS_HISTORY(
            this.$route.params.id,
            this.$route.params.type,
            this.$route.params.uid
          )
        },
        {
          label: "隔级详情",
          href: PATH_DOWN_MEMBER_CULTURE_DETAILS(
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
