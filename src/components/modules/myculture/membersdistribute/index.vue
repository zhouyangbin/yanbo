
<template>
  <div class="members-distribute-number">
    <div v-if="data.top" class="top">
      ({{data.top}}人, {{topP}}%)
    </div>
    <div v-if="data.medium" class="medium">
      ({{data.medium}}人, {{mediumP}}%)
    </div>
    <div v-if="data.bottom" class="bottom">
      ({{data.bottom}}人, {{bottomP}}%)
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({ top: 0, medium: 0, bottom: 0 })
    }
  },
  computed: {
    total() {
      return this.data.top + this.data.medium + this.data.bottom;
    },
    topP() {
      return parseFloat(this.data.top / this.total).toFixed(4) * 100;
    },
    mediumP() {
      return parseFloat(this.data.medium / this.total).toFixed(4) * 100;
    },
    bottomP() {
      return parseFloat(this.data.bottom / this.total).toFixed(4) * 100;
    }
  }
};
</script>
<style scoped>
.members-distribute-number {
  display: flex;
  align-items: center;
  flex: 1;
  color: white;
}
.members-distribute-number div {
  display: inline-block;
  text-align: center;
  padding: 10px 5px;
}
.members-distribute-number .top {
  flex: 2;
  background: rgb(248, 205, 85);
}
.members-distribute-number .medium {
  flex: 6;
  background: rgb(89, 202, 250);
}
.members-distribute-number .bottom {
  background: rgb(236, 72, 38);
  flex: 2;
}
</style>
