(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dbdc3c2"],{"4e80":function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"grade-card-container"},[t("div",{staticClass:"info"},[t("section",[t("span",{staticClass:"label title"},[a._v("绩效目标"+a._s(a.index+1)+":")]),t("div",[a._v(a._s(a.data.target))])]),t("br"),t("section",[t("span",{staticClass:"label"},[a._v("权重:")]),t("span",[a._v(a._s(100*a.data.weights)+"%")])]),t("br"),a.data.metrics?t("div",[t("section",[t("span",{staticClass:"label"},[a._v("衡量标准:")]),a._v("  \n        "),t("span",[a._v(a._s(a.data.metrics))])]),t("br")]):a._e(),a.data.deadlines?t("div",[t("section",[t("span",{staticClass:"label"},[a._v("完成期限:")]),t("span",[a._v(a._s(a.data.deadlines))])]),t("br")]):a._e(),a.data.target_self_score&&null!=a.data.target_self_score.score?t("div",[t("section",[t("span",{staticClass:"label"},[a._v("自评分:")]),a._v("  \n        "),t("span",[a._v(a._s(a.data.target_self_score&&a.data.target_self_score.score)+"分")])]),t("br")]):a._e(),a.data.target_superior_score&&null!=a.data.target_superior_score.score?t("div",[t("section",[t("span",{staticClass:"label"},[a._v("上级评分:")]),a._v("  \n        "),t("span",[a._v(a._s(a.data.target_superior_score&&a.data.target_superior_score.score)+"分")])]),t("br")]):a._e()]),a.readOnly?a._e():t("div",{staticClass:"marks"},[t("el-input-number",{staticClass:"numbers",attrs:{precision:1,size:"large",min:this.config.min,max:this.config.max,step:this.config.step,label:"描述文字"},on:{change:a.markChange},model:{value:a.defaultValue,callback:function(e){a.defaultValue=e},expression:"defaultValue"}}),t("span",{staticClass:"greyText"},[a._v("您的打分 /\n      "),t("span",{staticClass:"hightlight-mark"},[a._v(a._s(a.value&&parseFloat(a.value).toFixed(1))+"分")])])],1)])},n=[],i={props:{value:{type:Number|String,default:""},config:{type:Object,default:function(){return{min:1,max:5,step:1}}},readOnly:{type:Boolean,default:!1},data:{type:Object,default:function(){return{}}},index:{type:Number,default:1}},data:function(){return{defaultValue:this.value||""}},methods:{markChange:function(a){var e=a&&parseFloat(a).toFixed(1)||0;this.defaultValue=e,this.$emit("input",parseFloat(e))}}},l=i,r=(t("4edd"),t("2877")),c=Object(r["a"])(l,s,n,!1,null,"a37311a6",null);c.options.__file="index.vue";e["default"]=c.exports},"4edd":function(a,e,t){"use strict";var s=t("caee"),n=t.n(s);n.a},caee:function(a,e,t){}}]);