(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-404a6bbc"],{"1fdd":function(a,t,e){"use strict";var s=e("24d9"),r=e.n(s);r.a},"24d9":function(a,t,e){},"5a52":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("el-dialog",{staticClass:"examine-dialog",attrs:{title:"审批记录",visible:a.isExamineDialog,"close-on-click-modal":!1,width:"700px"},on:{close:a.close}},[e("el-timeline",{staticClass:"line"},a._l(a.approvalData,function(t,s){return e("el-row",{key:s},[e("el-col",{attrs:{span:4}},[a._v(a._s(t.stage))]),e("el-col",{attrs:{span:20}},[e("el-timeline-item",{attrs:{color:t.color,icon:t.icon}},[e("el-row",[e("el-col",{attrs:{span:2}},[t.avatar?e("img",{staticClass:"avatar-img",attrs:{src:t.avatar,alt:""}}):e("div",{staticClass:"avatar-img avatar-name"},[a._v("\n                "+a._s(t.name.substr(t.name.length-1,1))+"\n              ")])]),e("el-col",{attrs:{span:22}},["考核启动"!==t.stage?e("el-row",[e("span",{staticClass:"name-workcode"},[a._v(a._s(t.name))]),e("span",{staticClass:"name-workcode"},[a._v("（"+a._s(t.workcode)+"）")]),e("el-tag",{attrs:{type:a.showType(t.target_status),size:"small"}},[a._v(a._s(a.showStatus(t.target_status)))])],1):a._e(),e("el-tooltip",{attrs:{placement:"right"}},[e("div",{staticStyle:{"text-align":"center","word-wrap":"break-word","word-break":"break-all"},attrs:{slot:"content"},slot:"content"},[a._v("\n                  "+a._s(t.reason)+"\n                ")]),t.reason?e("el-row",{staticClass:"reason"},[a._v("意见："+a._s(t.reason))]):a._e()],1),e("el-row",{staticClass:"time"},[a._v(a._s(t.created_at))])],1)],1)],1)],1)],1)}),1)],1)},r=[],n=(e("fea5"),{props:{isExamineDialog:{type:Boolean,default:!1},approvalData:{type:Array,default:function(){return[]}}},data:function(){return{lineData:[],data:[]}},methods:{close:function(){this.$emit("close")},showStatus:function(a){var t="";switch(a){case 1:t="已提交";break;case 2:t="已退回";break;case 3:t="确认中";break;case 4:t="已确认";break;default:t="";break}return t},showType:function(a){var t="";switch(a){case 1:t="";break;case 2:t="danger";break;case 3:t="warning";break;case 4:t="success";break;default:t="";break}return t}}}),l=n,o=(e("1fdd"),e("2877")),c=Object(o["a"])(l,s,r,!1,null,"8c063816",null);t["default"]=c.exports}}]);