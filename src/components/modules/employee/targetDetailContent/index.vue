<template>
  <div class="target-content-detail">
    <el-row
      v-for="(targetItem, index) in allTarget"
      :key="index"
      class="target-content-component"
    >
      <el-row class="target-detail-title">
        <span class="target-title">{{ targetItem.type }}</span>
        <span class="target-weight">权重{{ targetItem.weight }}%</span>
      </el-row>
      <el-form :ref="`form${index}`" :model="targetItem">
        <el-table
          :data="targetItem.table"
          border
          :header-cell-style="{
            backgroundColor: '#F5F6F7',
            color: '#303133'
          }"
        >
          <el-table-column label="权重" width="180" align="center">
            <template slot-scope="scope">
              <div>{{ scope.row.weights }}%</div>
            </template>
          </el-table-column>
          <el-table-column
            v-if="targetItem.isMoney"
            label="指标名称"
            min-width="240"
            align="center"
            prop="target"
          ></el-table-column>
          <el-table-column
            v-if="!targetItem.isMoney"
            label="指标名称"
            min-width="240"
            align="center"
            :render-header="changeLabel"
            prop="target"
          >
          </el-table-column>
          <el-table-column
            label="具体工作/任务描述"
            min-width="300"
            header-align="center"
            prop="content"
            v-if="targetItem.table[0].content !== undefined"
          >
          </el-table-column>
          <el-table-column
            label="衡量标准"
            min-width="300"
            header-align="center"
          >
            <template slot-scope="scope">
              <ul>
                <li
                  class="flex"
                  v-for="(item, index) in scope.row.metrics"
                  :key="index"
                >
                  <el-col class="measure-title">
                    <span v-if="item.is_required" class="is-required">*</span>
                    <span>&nbsp;{{ item.name }}</span>
                  </el-col>
                  <el-col>{{ item.content }}</el-col>
                </li>
              </ul>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
    </el-row>
    <ul class="sub-total">
      <li>
        财务维度小计&nbsp;&nbsp;&nbsp;{{ this.handleSubTotal("finance") }}%
      </li>
      <li>工作维度小计&nbsp;&nbsp;&nbsp;{{ this.handleSubTotal("work") }}%</li>
      <li>团队维度小计&nbsp;&nbsp;&nbsp;{{ this.handleSubTotal("team") }}%</li>
      <li class="performance-total">
        业绩维度合计&nbsp;&nbsp;&nbsp;{{
          this.handleSubTotal("finance") +
            this.handleSubTotal("work") +
            this.handleSubTotal("team")
        }}%
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    allTarget: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    // 小计
    handleSubTotal(type) {
      let subTotal = 0;
      this.allTarget.forEach(v => {
        if (v.basicType === type) {
          v.table.forEach(value => {
            if (value.weights !== "") {
              subTotal += value.weights;
            }
          });
        }
      });
      return subTotal;
    },
    changeLabel(h, { column }) {
      return h("div", [
        h("span", column.label),
        h("br"),
        h("span", "（最多可填写"),
        h("span", { style: "color: red !important;" }, 5),
        h("span", "项）")
      ]);
    }
  }
};
</script>
<style scoped>
.target-content-detail .flex {
  display: flex;
}
.target-content-detail .target-content-component >>> .el-table th div {
  line-height: 20px;
}
.target-content-detail .target-content-component {
  background-color: #ffffff;
  margin: 8px 30px;
  padding: 20px;
  border-radius: 3px;
}
.target-content-detail .target-content-component .target-detail-title {
  margin-bottom: 10px;
}
.target-content-detail .target-content-component .target-title {
  font-size: 16px;
  font-weight: 500;
}
.target-content-detail .target-content-component .target-weight {
  color: #909399;
  margin-left: 10px;
}
.target-content-detail .target-content-component .measure-title {
  width: 180px;
  text-align: right;
  flex-shrink: 1;
}
.target-content-detail .target-content-component .measure-title .is-required {
  color: #f56c6c;
}
.target-content-detail .target-content-component ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.target-content-detail .sub-total {
  background-color: #ffffff;
  margin: 0 30px;
  padding: 5px 0;
  border-radius: 3px;
  list-style: none;
}
.target-content-detail .sub-total li {
  padding: 5px 20px;
}
.target-content-detail .sub-total .performance-total {
  font-weight: bold;
}
.target-content-detail .footer-button {
  text-align: center;
  margin: 20px 0;
}
</style>
