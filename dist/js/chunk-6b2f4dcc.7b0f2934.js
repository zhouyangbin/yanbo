(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b2f4dcc"],{1439:function(a,e,t){"use strict";var s=t("77d5"),n=t.n(s);n.a},1622:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("el-dialog",{staticClass:"examine-dialog",attrs:{title:"审批记录",visible:a.isExamineDialog,"close-on-click-modal":!1,width:"700px"},on:{close:a.close}},[a.data!=[]?t("span",{staticStyle:{color:"red"}},[a._v("还没有审核记录")]):a._e(),t("el-timeline",{staticClass:"line"},a._l(a.lineData,function(e,s){return t("el-row",{key:s},[t("el-col",{attrs:{span:4}},[a._v(a._s(e.stage))]),t("el-col",{attrs:{span:20}},[t("el-timeline-item",{attrs:{color:e.color,icon:e.icon}},[t("el-row",[t("el-col",{attrs:{span:2}},[e.avatar?t("img",{staticClass:"avatar-img",attrs:{src:e.avatar,alt:""}}):t("div",{staticClass:"avatar-img avatar-name"},[a._v("\n                "+a._s(e.name.substr(e.name.length-1,1))+"\n              ")])]),t("el-col",{attrs:{span:22}},["考核启动"!==e.stage?t("el-row",[t("span",{staticClass:"name-workcode"},[a._v(a._s(e.name))]),t("span",{staticClass:"name-workcode"},[a._v("（"+a._s(e.workcode)+"）")]),t("el-tag",{attrs:{type:a.showType(e.target_status),size:"small"}},[a._v(a._s(a.showStatus(e.target_status)))])],1):a._e(),e.reason?t("el-row",[a._v("意见："+a._s(e.reason))]):a._e(),t("el-row",{staticClass:"time"},[a._v(a._s(e.create_at))])],1)],1)],1)],1)],1)}),1)],1)},n=[],r=(t("ac6a"),t("fea5")),c={props:{isExamineDialog:{type:Boolean,default:!1},perforamnce_user_id:{tyoe:String,default:""}},data:function(){return{lineData:[],data:[]}},methods:{close:function(){this.$emit("close")},getExamineDetail:function(){var a=this,e={performance_user_id:this.perforamnce_user_id};Object(r["B"])(e).then(function(e){a.data=e,a.lineData=e.records,e.records.forEach(function(a){"green"===a.sign?(a["icon"]="el-icon-check",a["color"]="rgb(41, 197, 80)"):"red"===a.sign?(a["icon"]="my-icon",a["color"]=""):"blue"===a.sign&&(a["icon"]="my-affriming",a["color"]="")})}).catch(function(){})},showStatus:function(a){var e="";switch(a){case 1:e="已提交";break;case 2:e="已驳回";break;case 3:e="确认中";break;case 4:e="已确认";break;default:e="";break}return e},showType:function(a){var e="";switch(a){case 1:e="";break;case 2:e="danger";break;case 3:e="warning";break;case 4:e="success";break;default:e="";break}return e}},mounted:function(){this.getExamineDetail()}},i=c,o=(t("1439"),t("2877")),l=Object(o["a"])(i,s,n,!1,null,"43138ede",null);e["default"]=l.exports},"77d5":function(a,e,t){}}]);