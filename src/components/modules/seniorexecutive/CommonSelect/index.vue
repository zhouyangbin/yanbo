<template>
  <el-select
    v-model="workcode"
    @change="handlerSelect"
    filterable
    remote
    clearable
    reserve-keyword
    placeholder="请输入姓名或工号"
    :remote-method="searchME"
    :disabled="isDisabled"
    :loading="loading"
  >
    <el-option
      v-for="item in userOptions"
      :key="item.workcode"
      :label="item.workcode + '-' + item.name"
      :value="item.workcode"
    >
    </el-option>
  </el-select>
</template>
<script>
import { getExecutiveSearchEmployees } from "@/constants/API";
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    },
    code: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      userOptions: [],
      loading: false,
      workcode: this.code || ""
    };
  },
  methods: {
    searchME(query) {
      if (query !== "") {
        this.loading = true;
        getExecutiveSearchEmployees({
          name_or_workcode: query
        })
          .then(res => {
            this.loading = false;
            this.userOptions = res;
          })
          .catch(e => {});
      } else {
        this.userOptions = [];
      }
    },
    handlerSelect() {
      this.$emit("selectedUser", this.workcode);
    }
  }
};
</script>
