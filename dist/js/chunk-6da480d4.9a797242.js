(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6da480d4"],{"28a5":function(t,e,i){"use strict";var s=i("aae3"),a=i("cb7c"),n=i("ebd6"),l=i("0390"),r=i("9def"),c=i("5f1b"),o=i("520a"),d=i("79e5"),m=Math.min,v=[].push,u="split",f="length",p="lastIndex",_=4294967295,g=!d(function(){RegExp(_,"y")});i("214f")("split",2,function(t,e,i,d){var h;return h="c"=="abbc"[u](/(b)*/)[1]||4!="test"[u](/(?:)/,-1)[f]||2!="ab"[u](/(?:ab)*/)[f]||4!="."[u](/(.?)(.?)/)[f]||"."[u](/()()/)[f]>1||""[u](/.?/)[f]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!s(t))return i.call(a,t,e);var n,l,r,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,u=void 0===e?_:e>>>0,g=new RegExp(t.source,d+"g");while(n=o.call(g,a)){if(l=g[p],l>m&&(c.push(a.slice(m,n.index)),n[f]>1&&n.index<a[f]&&v.apply(c,n.slice(1)),r=n[0][f],m=l,c[f]>=u))break;g[p]===n.index&&g[p]++}return m===a[f]?!r&&g.test("")||c.push(""):c.push(a.slice(m)),c[f]>u?c.slice(0,u):c}:"0"[u](void 0,0)[f]?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,s){var a=t(this),n=void 0==i?void 0:i[e];return void 0!==n?n.call(i,a,s):h.call(String(a),i,s)},function(t,e){var s=d(h,t,this,e,h!==i);if(s.done)return s.value;var o=a(t),v=String(this),u=n(o,RegExp),f=o.unicode,p=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(g?"y":"g"),C=new u(g?o:"^(?:"+o.source+")",p),b=void 0===e?_:e>>>0;if(0===b)return[];if(0===v.length)return null===c(C,v)?[v]:[];var w=0,T=0,D=[];while(T<v.length){C.lastIndex=g?T:0;var y,x=c(C,g?v:v.slice(T));if(null===x||(y=m(r(C.lastIndex+(g?0:T)),v.length))===w)T=l(v,T,f);else{if(D.push(v.slice(w,T)),D.length===b)return D;for(var L=1;L<=x.length-1;L++)if(D.push(x[L]),D.length===b)return D;T=w=y}}return D.push(v.slice(w)),D}]})},"32bf":function(t,e,i){},"362b":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"grade-management"},[i("nav-bar",{attrs:{list:t.nav}}),i("section",{staticClass:"content-container"},[i("el-row",{attrs:{align:"middle",type:"flex",justify:"space-between"}},[i("div",[i("span",[t._v("组织部绩效考核列表：")]),i("el-cascader",{attrs:{placeholder:t.constants.LABEL_SELECT_DIVISION,props:t.filterProps,options:t.orgTree,"show-all-levels":!1},on:{change:t.handleChange},model:{value:t.filterForm.dp,callback:function(e){t.$set(t.filterForm,"dp",e)},expression:"filterForm.dp"}}),i("el-button",{staticStyle:{"margin-left":"30px"},attrs:{round:""},on:{click:t.resetFilter}},[t._v("\n          "+t._s(t.constants.LABEL_EMPTY)+"\n        ")])],1),i("div",[i("el-radio-group",{attrs:{size:"medium"},on:{change:t.changeStatuses},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[i("el-radio-button",{attrs:{label:""}},[t._v("全部")]),i("el-radio-button",{attrs:{label:"1"}},[t._v("草稿")]),i("el-radio-button",{attrs:{label:"2"}},[t._v("进行中")]),i("el-radio-button",{attrs:{label:"3"}},[t._v("已结束")])],1),i("el-button",{staticClass:"create-btn",attrs:{type:"primary"},on:{click:t.createTpl}},[t._v("创建组织部绩效考核")])],1)]),t._l(t.performancesList,function(e){return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],key:e.id,staticClass:"grade-management-list"},[i("div",{staticClass:"list-top"},[0===e.stage?i("span",{staticClass:"state draft"},[t._v("草稿")]):600===e.stage?i("span",{staticClass:"state ending"},[t._v("已结束")]):i("span",{staticClass:"state doing"},[t._v("进行中")]),i("div",{staticClass:"bread-crumb"},[i("div",{staticClass:"bread-crumb-name"},[t._v(t._s(e.name))]),i("div",{staticClass:"bread-crumb-separator"},[t._v("|")]),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.departments_text,placement:"top"}},[i("div",{staticClass:"bread-crumb-name"},[t._v(t._s(e.departments_text))])]),i("div",{staticClass:"bread-crumb-separator"},[t._v("|")]),i("div",{staticClass:"bread-crumb-name"},[t._v("\n            "+t._s(t._f("filterType")(e.performance_type))+"\n          ")])],1),i("div",{staticClass:"operate-btns"},[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"考核详情",placement:"top"}},[i("i",{staticClass:"view-details",on:{click:function(i){return t.linkToDetail(e.id)}}})]),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[0===e.stage?i("i",{staticClass:"delete",on:{click:function(i){return t.deleteAssessment(e.id)}}}):t._e()]),0===e.stage?i("el-button",{attrs:{disabled:!e.can_start,type:"primary"},on:{click:function(i){return t.openAssessment(e.id)}}},[t._v("开启考核")]):t._e()],1)]),i("div",{staticClass:"list-middle"},[i("div",{staticClass:"list-middle-left"},[i("div",{staticClass:"list-middle-items"},[i("div",[t._v("考核周期")]),i("div",{staticClass:"list-middle-item"},[t._v("\n              "+t._s(e.year)+"\n            ")])]),i("div",{staticClass:"list-middle-items"},[i("div",[t._v("起止时间")]),i("div",{staticClass:"list-middle-item"},[t._v("\n              "+t._s(t._f("filterDate")(e.start_time))+"至"+t._s(t._f("filterDate")(e.end_time))+"\n            ")])])]),i("div",{staticClass:"list-middle-right"},[i("div",{staticClass:"list-middle-items"},[i("div",[t._v("考核人数")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(e.users_count))])]),i("div",{staticClass:"list-middle-items"},[i("div",[t._v("指标填写中")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(e.indicator_fill_in))])]),i("div",{staticClass:"list-middle-items"},[i("div",[t._v("指标确认中")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(e.indicator_confirm))])]),i("div",{staticClass:"list-middle-items"},[i("div",[t._v("自评中")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(e.self_evaluation))])]),i("div",{staticClass:"list-middle-items"},[i("div",[t._v("复评中")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(e.re_evaluation))])]),i("div",{staticClass:"list-middle-items"},[i("div",[t._v("隔级审核中")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(e.isolation_adult))])]),i("div",{staticClass:"list-middle-items"},[i("div",[t._v("总裁审核中")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(e.president_audit))])]),i("div",{staticClass:"list-middle-items"},[i("div",[t._v("确认中")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(e.confirm))])]),i("div",{staticClass:"list-middle-items"},[i("div",[t._v("已确认")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(e.confirmed))])])])]),i("div",{staticClass:"list-timeline"},[i("div",{staticClass:"time-line",class:0===e.stage?"":"active"},[t._v("\n          指标设定\n        ")]),i("div",{staticClass:"time-line-sign",class:0===e.stage?"":"active",attrs:{data:t._f("filterDate")(e.indicator_setting_end_time)}}),i("div",{staticClass:"time-line-circle",class:e.self_evaluation_begin_time>t.nowTime?"active":""},[i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"})]),i("div",{staticClass:"time-line-sign",class:e.self_evaluation_begin_time>t.nowTime?"active":"",attrs:{data:t._f("filterDate")(e.self_evaluation_begin_time)}}),i("div",{staticClass:"time-line",class:e.self_evaluation_begin_time>t.nowTime?"active":""},[t._v("\n          自评\n        ")]),i("div",{staticClass:"time-line-sign",class:e.superior_begin_time>t.nowTime?"active":"",attrs:{data:t._f("filterDate")(e.superior_begin_time)}}),i("div",{staticClass:"time-line",class:e.superior_begin_time>t.nowTime?"active":""},[t._v("\n          上级评分\n        ")]),i("div",{staticClass:"time-line-sign",class:e.isolation_begin_time>t.nowTime?"active":"",attrs:{data:t._f("filterDate")(e.isolation_begin_time)}}),i("div",{staticClass:"time-line",class:e.isolation_begin_time>t.nowTime?"active":""},[t._v("\n          隔级审核\n        ")]),i("div",{staticClass:"time-line-sign",class:e.president_audit_begin_time>t.nowTime?"active":""}),i("div",{staticClass:"time-line",class:e.president_audit_begin_time>t.nowTime?"active":""},[t._v("\n          总裁审核\n        ")]),i("div",{staticClass:"time-line-sign",class:600===e.stage?"active":"",attrs:{data:t._f("filterDate")(e.result_confirm_end_time)}}),i("div",{staticClass:"time-line",class:600===e.stage?"active":""},[t._v("\n          结果确认\n        ")]),i("div",{staticClass:"time-line-sign",class:600===e.stage?"active":"",attrs:{data:t._f("filterDate")(e.president_audit_begin_time)}})])])}),i("br"),i("el-row",{attrs:{type:"flex",justify:"end"}},[t.total?i("el-pagination",{attrs:{background:"","current-page":t.page,"page-sizes":[10,20,50],layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}):t._e()],1)],2),t.showDialog?i("assessment-dialog",{attrs:{visible:t.showDialog,infoType:t.infoType,performanceTypes:t.performanceTypes,orgTree:t.orgTree},on:{close:t.tplDialogClose,update:t.tplDefine}}):t._e(),t.showConfirmDialog?i("confirm-dialog",{attrs:{visible:t.showConfirmDialog,tipsText:t.tipsText,confirmType:t.confirmType},on:{update:t.confirmDialog,close:t.closeDialog}}):t._e()],1)},a=[],n=(i("28a5"),i("a481"),i("372d")),l=i("fea5"),r=i("38fb"),c={components:{"nav-bar":function(){return i.e("chunk-d5094d72").then(i.bind(null,"3208"))},"assessment-dialog":Object(n["a"])(i.e("chunk-574e269c").then(i.bind(null,"4abf"))),"confirm-dialog":Object(n["a"])(i.e("chunk-9bb8f38e").then(i.bind(null,"1f04")))},data:function(){return{filterProps:{value:"id",label:"name",children:"children"},page:1,perPage:10,total:0,department_ids:"",showDialog:!1,infoType:"add",showConfirmDialog:!1,tipsText:"",confirmType:"open",id:0,performancesList:[],isLoading:!0,orgTree:[],nav:[{label:"组织部绩效考核列表",active:!0}],filterForm:{dp:[]},options:[],constants:{LABEL_EMPTY:r["zc"],LABEL_SELECT_DIVISION:r["Pc"]},status:"",nowTime:""}},filters:{filterDate:function(t){var e="";return t&&(e=/\d{4}-\d{1,2}-\d{1,2}/g.exec(t),e=e[0]),e},filterType:function(t){var e="";return"annual"===t?e="年度":"semi-annual"===t?e="半年度":"quarter"===t?e="季度":"monthly"===t&&(e="月度"),e}},methods:{tplDefine:function(t){this.showDialog=!1,this.$router.replace("/performance/assessment/details/".concat(t))},handleChange:function(t){this.department_ids=t.length>0?t[t.length-1]:"",this.page=1,this.getPerformanceList()},handleSizeChange:function(t){this.perPage=t,this.getPerformanceList()},handleCurrentChange:function(t){this.page=t,this.getPerformanceList()},changeStatuses:function(){this.getPerformanceList()},getPerformanceList:function(){var t=this,e={status:this.status,page:this.page,perPage:this.perPage,department_ids:this.department_ids.split(",")};Object(l["n"])(e).then(function(e){var i=e.total,s=e.data;t.performancesList=s,t.isLoading=!1,t.total=i}).catch(function(t){})},createTpl:function(){this.infoType="add",this.showDialog=!0},tplDialogClose:function(){this.showDialog=!1},updateTpl:function(t){this.infoType="modify",this.showDialog=!0},resetFilter:function(){this.filterForm={dp:[]},this.page=1,this.department_ids="",this.getPerformanceList()},linkToDetail:function(t){this.$router.replace("/performance/assessment/details/".concat(t))},deleteAssessment:function(t){this.performanceId=t,this.showConfirmDialog=!0,this.tipsText="是否确认删除考核？",this.confirmType="delete"},closeDialog:function(){this.showConfirmDialog=!1},confirmDialog:function(t){var e=this;"open"===t?Object(l["Dc"])(this.performanceId).then(function(t){e.showConfirmDialog=!1,e.getPerformanceList()}).catch(function(t){}):"delete"===t?Object(l["d"])(this.performanceId).then(function(t){e.showConfirmDialog=!1,e.getPerformanceList()}).catch(function(t){}):this.showConfirmDialog=!1},openAssessment:function(t){this.performanceId=t,this.showConfirmDialog=!0,this.tipsText="是否确认启动考核？",this.confirmType="open"}},created:function(){var t=this;this.nowTime=new Date,this.getPerformanceList(),Object(l["db"])().then(function(e){t.orgTree=e}).catch(function(t){}),Object(l["lb"])().then(function(e){t.performanceTypes=e}).catch(function(t){})}},o=c,d=(i("7471"),i("2877")),m=Object(d["a"])(o,s,a,!1,null,"6e6d633a",null);e["default"]=m.exports},"372d":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},a=[],n={},l=n,r=(i("ee47"),i("2877")),c=Object(r["a"])(l,s,a,!1,null,"6c517b7e",null),o=c.exports;i.d(e,"a",function(){return d});var d=function(t){return function(){return{component:t,loading:o,delay:0}}}},7471:function(t,e,i){"use strict";var s=i("32bf"),a=i.n(s);a.a},"9f9e":function(t,e,i){},aae3:function(t,e,i){var s=i("d3f4"),a=i("2d95"),n=i("2b4c")("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==a(t))}},ee47:function(t,e,i){"use strict";var s=i("9f9e"),a=i.n(s);a.a}}]);