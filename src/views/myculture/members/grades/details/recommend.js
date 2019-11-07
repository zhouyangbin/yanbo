export default {
  data() {
    return {
      can_special_recommend: false,
      special_recommended: false
    };
  },
  methods: {
    initRecommend({ can_special_recommend, special_recommended }) {
      this.special_recommended = special_recommended;
      this.can_special_recommend = can_special_recommend;
    },
    showRecommend(fail_cb, pass_cb) {
      // const msg = this.can_special_recommend ==2? "当前团队仅有一个跟隔级推荐的名额，是否推荐？";
      this.$confirm(this.getRecommendMsg(), "提示", {
        confirmButtonText: "推荐",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.special_recommended = 1;
          this.$message({
            type: "success",
            //  一人或两人  确认推荐弹窗
            message: "员工当前等级为middel，但隔级将收到特殊推荐!"
          });
          pass_cb();
        })
        .catch(() => {
          fail_cb();
        });
    },
    getRecommendMsg() {
      let msg = "";
      if (this.canRecommended && this.can_special_recommend == 2) {
        msg =
          "当前团队仅有一个跟隔级推荐的名额，且已推荐，是否修改为该员工? 提交后生效.";
        //  团队（员工或高管）仅有两人，且已特殊推荐一人
      } else {
        //  团队只有一人或两人，第一次特殊推荐某个人
        msg = "当前团队仅有一个跟隔级推荐的名额，是否推荐? 提交后生效.";
      }
      return msg;
    },
    setSpecialRecommended(v) {
      this.special_recommended = v;
    },
    getSpecialRecommended() {
      return this.special_recommended;
    }
  },
  computed: {
    // 自己是否被推荐
    isRecommended() {
      return this.special_recommended == 1;
    },
    // 能否推荐,1,2都是能推荐, 1是没推荐过 2是推荐过
    canRecommended() {
      return !this.can_special_recommend == 0;
    }
  }
};
