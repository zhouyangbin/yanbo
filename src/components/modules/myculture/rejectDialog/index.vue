<template>
  <div>
    <el-dialog
      @close="$emit('update:visible', false)"
      :visible="visible"
      :close-on-click-modal="false"
      width="30%"
    >
      <case-area
        placeholder="请您填写驳回理由"
        v-model="rejectReason"
      ></case-area>
      <br />
      <el-row type="flex" justify="center">
        <el-button type="primary" @click="submit" round>
          {{ constants.CONFIRM }}
        </el-button>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import { postConfirm } from "@/constants/API";
import { CONFIRM, CONST_OPERATIONS_SUCCESS } from "@/constants/TEXT";
import { postReject } from "@/constants/API";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    callback: {
      type: Function,
      default: function() {
        this.$router.back();
      }
    }
  },
  data() {
    return {
      rejectReason: "",
      constants: {
        CONFIRM
      }
    };
  },
  destroyed() {
    this.rejectReason = "";
  },
  methods: {
    submit() {
      if (!this.rejectReason.trim()) {
        this.$message({
          message: "请填写理由!",
          type: "warning"
        });
        return;
      }
      postReject({
        ids: [this.$route.params.uid],
        type: 1,
        reason: this.rejectReason
      })
        .then(res => {
          console.log(res,"rees");
          // this.$message({
          //   message: "操作成功!",
          //   type: "success"
          // });
          this.callback();
          this.$emit("update:visible", false);
        })
        .catch(e => {});
    }
  },
  components: {
    "case-area": () => import("@/components/common/CaseArea/index.vue")
  }
};
</script>
<style lang="scss" scoped></style>
