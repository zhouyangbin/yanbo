webpackJsonp([8],{EWMO:function(t,a){},IVNy:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("OE2U"),r={data:function(){return{desc:"",addtionalMark:"",cards:[{weight:33,mark:1},{weight:33,mark:1},{weight:33,mark:1}],nav:[{label:e["_66"],active:!0}]}},components:{"nav-bar":function(){return n.e(25).then(n.bind(null,"PI/7"))},pagination:function(){return n.e(26).then(n.bind(null,"734F"))},card:function(){return n.e(27).then(n.bind(null,"ql5Z"))},"addition-mark":function(){return n.e(28).then(n.bind(null,"rkMF"))},"total-mark":function(){return n.e(29).then(n.bind(null,"Zb0a"))}},computed:{total:function(){return this.hasWeight?parseFloat(this.cards.map(function(t){return t.weight*t.mark/100}).reduce(function(t,a){return t+a},0)+this.addtionalMark).toFixed(2):parseFloat(this.cards.map(function(t){return t.mark}).reduce(function(t,a){return t+a},0)/this.cards.length+this.addtionalMark).toFixed(2)},hasWeight:function(){return!1}},methods:{saveDraft:function(){},submit:function(){var t=this;this.$confirm("自评分为XX分，请确认无误再提交，一经提交无法修改, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"my-grade-page"},[n("nav-bar",{attrs:{list:t.nav}}),n("section",{staticClass:"content-container"},[t._m(0),n("br"),t._l(t.cards,function(a,e){return n("card",{key:e,staticClass:"card",model:{value:t.cards[e].mark,callback:function(a){t.$set(t.cards[e],"mark",a)},expression:"cards[i].mark"}})}),n("br"),n("addition-mark",{attrs:{desc:t.desc,mark:t.addtionalMark},on:{"update:desc":function(a){t.desc=a},"update:mark":function(a){t.addtionalMark=a}}}),n("br"),n("total-mark",{attrs:{total:t.total}}),n("br"),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:t.saveDraft}},[t._v("保存草稿")]),n("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)],2)],1)},i=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"basic-info"},[n("span",{staticClass:"label"},[t._v("基本信息:")]),n("span",[n("span",{staticClass:"greycolor"},[t._v("上级工号")]),t._v(" / 00002   \n        "),n("span",{staticClass:"greycolor"},[t._v("上级姓名")]),t._v(" / 开心")]),t._v("    \n      "),n("span",{staticClass:"tip"},[t._v("注: 若上级姓名工号与实际不符, 请联系HR")])])}],c=n("XyMi");function o(t){n("EWMO")}var u=!1,l=o,d="data-v-c310a500",f=null,m=Object(c["a"])(r,s,i,u,l,d,f);a["default"]=m.exports}});
//# sourceMappingURL=8.16e1a9ab.js.map