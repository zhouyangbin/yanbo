(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52c5c944"],{"28a5":function(t,i,e){"use strict";var s=e("aae3"),a=e("cb7c"),n=e("ebd6"),l=e("0390"),c=e("9def"),r=e("5f1b"),o=e("520a"),d=e("79e5"),m=Math.min,v=[].push,f="split",u="length",p="lastIndex",_=4294967295,g=!d(function(){RegExp(_,"y")});e("214f")("split",2,function(t,i,e,d){var h;return h="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[u]||2!="ab"[f](/(?:ab)*/)[u]||4!="."[f](/(.?)(.?)/)[u]||"."[f](/()()/)[u]>1||""[f](/.?/)[u]?function(t,i){var a=String(this);if(void 0===t&&0===i)return[];if(!s(t))return e.call(a,t,i);var n,l,c,r=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,f=void 0===i?_:i>>>0,g=new RegExp(t.source,d+"g");while(n=o.call(g,a)){if(l=g[p],l>m&&(r.push(a.slice(m,n.index)),n[u]>1&&n.index<a[u]&&v.apply(r,n.slice(1)),c=n[0][u],m=l,r[u]>=f))break;g[p]===n.index&&g[p]++}return m===a[u]?!c&&g.test("")||r.push(""):r.push(a.slice(m)),r[u]>f?r.slice(0,f):r}:"0"[f](void 0,0)[u]?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,s){var a=t(this),n=void 0==e?void 0:e[i];return void 0!==n?n.call(e,a,s):h.call(String(a),e,s)},function(t,i){var s=d(h,t,this,i,h!==e);if(s.done)return s.value;var o=a(t),v=String(this),f=n(o,RegExp),u=o.unicode,p=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(g?"y":"g"),C=new f(g?o:"^(?:"+o.source+")",p),b=void 0===i?_:i>>>0;if(0===b)return[];if(0===v.length)return null===r(C,v)?[v]:[];var w=0,T=0,D=[];while(T<v.length){C.lastIndex=g?T:0;var y,x=r(C,g?v:v.slice(T));if(null===x||(y=m(c(C.lastIndex+(g?0:T)),v.length))===w)T=l(v,T,u);else{if(D.push(v.slice(w,T)),D.length===b)return D;for(var L=1;L<=x.length-1;L++)if(D.push(x[L]),D.length===b)return D;T=w=y}}return D.push(v.slice(w)),D}]})},"362b":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"grade-management"},[e("nav-bar",{attrs:{list:t.nav}}),e("section",{staticClass:"content-container"},[e("el-row",{attrs:{align:"middle",type:"flex",justify:"space-between"}},[e("div",[e("span",[t._v("组织部绩效考核列表：")]),e("el-cascader",{attrs:{placeholder:t.constants.LABEL_SELECT_DIVISION,props:t.filterProps,options:t.orgTree,"show-all-levels":!1},on:{change:t.handleChange},model:{value:t.filterForm.dp,callback:function(i){t.$set(t.filterForm,"dp",i)},expression:"filterForm.dp"}}),e("el-button",{staticStyle:{"margin-left":"30px"},attrs:{round:""},on:{click:t.resetFilter}},[t._v("\n          "+t._s(t.constants.LABEL_EMPTY)+"\n        ")])],1),e("div",[e("el-radio-group",{attrs:{size:"medium"},on:{change:t.changeStatuses},model:{value:t.status,callback:function(i){t.status=i},expression:"status"}},[e("el-radio-button",{attrs:{label:""}},[t._v("全部")]),e("el-radio-button",{attrs:{label:"1"}},[t._v("草稿")]),e("el-radio-button",{attrs:{label:"2"}},[t._v("进行中")]),e("el-radio-button",{attrs:{label:"3"}},[t._v("已结束")])],1),e("el-button",{staticClass:"create-btn",attrs:{type:"primary"},on:{click:t.createTpl}},[t._v("创建组织部绩效考核")])],1)]),t._l(t.performancesList,function(i){return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],key:i.id,staticClass:"grade-management-list"},[e("div",{staticClass:"list-top"},[0===i.stage?e("span",{staticClass:"state draft"},[t._v("草稿")]):600===i.stage?e("span",{staticClass:"state ending"},[t._v("已结束")]):e("span",{staticClass:"state doing"},[t._v("进行中")]),e("div",{staticClass:"bread-crumb"},[e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:i.name,placement:"top"}},[e("div",{staticClass:"bread-crumb-name"},[t._v(t._s(i.name))])]),e("div",{staticClass:"bread-crumb-separator"},[t._v("|")]),e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:i.departments_text,placement:"top"}},[e("div",{staticClass:"bread-crumb-name"},[t._v(t._s(i.departments_text))])]),e("div",{staticClass:"bread-crumb-separator"},[t._v("|")]),e("div",{staticClass:"bread-crumb-name"},[t._v("\n            "+t._s(t._f("filterType")(i.performance_type))+"\n          ")])],1),e("div",{staticClass:"operate-btns"},[e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"考核详情",placement:"top"}},[e("i",{staticClass:"view-details",on:{click:function(e){return t.linkToDetail(i.id)}}})]),e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[0===i.stage?e("i",{staticClass:"delete",on:{click:function(e){return t.deleteAssessment(i.id)}}}):t._e()]),0===i.stage?e("el-button",{attrs:{disabled:!i.can_start,type:"primary"},on:{click:function(e){return t.openAssessment(i.id)}}},[t._v("开启考核")]):t._e()],1)]),e("div",{staticClass:"list-middle"},[e("div",{staticClass:"list-middle-left"},[e("div",{staticClass:"list-middle-items"},[e("div",[t._v("考核周期")]),e("div",{staticClass:"list-middle-item"},[t._v("\n              "+t._s(i.year)+"\n            ")])]),e("div",{staticClass:"list-middle-items"},[e("div",[t._v("起止时间")]),e("div",{staticClass:"list-middle-item"},[t._v("\n              "+t._s(t._f("filterDate")(i.start_time))+"至"+t._s(t._f("filterDate")(i.end_time))+"\n            ")])])]),e("div",{staticClass:"list-middle-right"},[e("div",{staticClass:"list-middle-items"},[e("div",[t._v("考核人数")]),e("div",{staticClass:"list-middle-item"},[t._v(t._s(i.users_count))])]),e("div",{staticClass:"list-middle-items"},[e("div",[t._v("指标填写中")]),e("div",{staticClass:"list-middle-item"},[t._v(t._s(i.indicator_fill_in))])]),e("div",{staticClass:"list-middle-items"},[e("div",[t._v("指标确认中")]),e("div",{staticClass:"list-middle-item"},[t._v(t._s(i.indicator_confirm))])]),e("div",{staticClass:"list-middle-items"},[e("div",[t._v("自评中")]),e("div",{staticClass:"list-middle-item"},[t._v(t._s(i.self_evaluation))])]),e("div",{staticClass:"list-middle-items"},[e("div",[t._v("复评中")]),e("div",{staticClass:"list-middle-item"},[t._v(t._s(i.re_evaluation))])]),e("div",{staticClass:"list-middle-items"},[e("div",[t._v("隔级审核中")]),e("div",{staticClass:"list-middle-item"},[t._v(t._s(i.isolation_adult))])]),e("div",{staticClass:"list-middle-items"},[e("div",[t._v("总裁审核中")]),e("div",{staticClass:"list-middle-item"},[t._v(t._s(i.president_audit))])]),e("div",{staticClass:"list-middle-items"},[e("div",[t._v("确认中")]),e("div",{staticClass:"list-middle-item"},[t._v(t._s(i.confirm))])]),e("div",{staticClass:"list-middle-items"},[e("div",[t._v("已确认")]),e("div",{staticClass:"list-middle-item"},[t._v(t._s(i.confirmed))])])])]),e("div",{staticClass:"list-timeline"},[e("div",{staticClass:"time-line",class:0===i.stage?"":"active"},[t._v("\n          指标设定\n        ")]),e("div",{staticClass:"time-line-sign",class:0===i.stage?"":"active",attrs:{data:t._f("filterDate")(i.indicator_setting_end_time)}}),e("div",{staticClass:"time-line-circle",class:i.self_evaluation_begin_time>t.nowTime?"active":""},[e("div",{staticClass:"circle-list"}),e("div",{staticClass:"circle-list"}),e("div",{staticClass:"circle-list"}),e("div",{staticClass:"circle-list"}),e("div",{staticClass:"circle-list"}),e("div",{staticClass:"circle-list"})]),e("div",{staticClass:"time-line-sign",class:i.self_evaluation_begin_time>t.nowTime?"active":"",attrs:{data:t._f("filterDate")(i.self_evaluation_begin_time)}}),e("div",{staticClass:"time-line",class:i.self_evaluation_begin_time>t.nowTime?"active":""},[t._v("\n          自评\n        ")]),e("div",{staticClass:"time-line-sign",class:i.superior_begin_time>t.nowTime?"active":"",attrs:{data:t._f("filterDate")(i.superior_begin_time)}}),e("div",{staticClass:"time-line",class:i.superior_begin_time>t.nowTime?"active":""},[t._v("\n          上级评分\n        ")]),e("div",{staticClass:"time-line-sign",class:i.isolation_begin_time>t.nowTime?"active":"",attrs:{data:t._f("filterDate")(i.isolation_begin_time)}}),e("div",{staticClass:"time-line",class:i.isolation_begin_time>t.nowTime?"active":""},[t._v("\n          隔级审核\n        ")]),e("div",{staticClass:"time-line-sign",class:i.president_audit_begin_time>t.nowTime?"active":""}),e("div",{staticClass:"time-line",class:i.president_audit_begin_time>t.nowTime?"active":""},[t._v("\n          总裁审核\n        ")]),e("div",{staticClass:"time-line-sign",class:600===i.stage?"active":"",attrs:{data:t._f("filterDate")(i.result_confirm_end_time)}}),e("div",{staticClass:"time-line",class:600===i.stage?"active":""},[t._v("\n          结果确认\n        ")]),e("div",{staticClass:"time-line-sign",class:600===i.stage?"active":"",attrs:{data:t._f("filterDate")(i.president_audit_begin_time)}})])])}),e("br"),e("el-row",{attrs:{type:"flex",justify:"end"}},[t.total?e("el-pagination",{attrs:{background:"","current-page":t.page,"page-sizes":[10,20,50],layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}):t._e()],1)],2),t.showDialog?e("assessment-dialog",{attrs:{visible:t.showDialog,infoType:t.infoType,performanceTypes:t.performanceTypes,orgTree:t.orgTree},on:{close:t.tplDialogClose,update:t.tplDefine}}):t._e(),t.showConfirmDialog?e("confirm-dialog",{attrs:{visible:t.showConfirmDialog,tipsText:t.tipsText,confirmType:t.confirmType},on:{update:t.confirmDialog,close:t.closeDialog}}):t._e()],1)},a=[],n=(e("a481"),e("28a5"),e("372d")),l=e("c9f1"),c=e("fea5"),r=e("38fb"),o={components:{"nav-bar":function(){return e.e("chunk-d5094d72").then(e.bind(null,"3208"))},"assessment-dialog":Object(n["a"])(e.e("chunk-6153949f").then(e.bind(null,"4abf"))),"confirm-dialog":Object(n["a"])(e.e("chunk-9bb8f38e").then(e.bind(null,"1f04")))},data:function(){return{filterProps:{value:"id",label:"name",children:"children"},page:1,perPage:10,total:0,department_ids:"",showDialog:!1,infoType:"add",showConfirmDialog:!1,tipsText:"",confirmType:"open",id:0,performancesList:[],isLoading:!0,orgTree:[],nav:[{label:"组织部绩效考核列表",active:!0}],filterForm:{dp:[]},options:[],constants:{LABEL_EMPTY:r["zc"],LABEL_SELECT_DIVISION:r["Pc"]},status:"",nowTime:""}},filters:{filterDate:function(t){var i="";return t&&(i=/\d{4}-\d{1,2}-\d{1,2}/g.exec(t),i=i[0]),i},filterType:function(t){var i="";return"annual"===t?i="年度":"semi-annual"===t?i="半年度":"quarter"===t?i="季度":"monthly"===t&&(i="月度"),i}},methods:{tplDefine:function(t){this.showDialog=!1,this.$router.push(Object(l["q"])(t))},handleChange:function(t){this.department_ids=t.length>0?t[t.length-1]:"",this.page=1,this.getPerformanceList()},handleSizeChange:function(t){this.perPage=t,this.getPerformanceList()},handleCurrentChange:function(t){this.page=t,this.getPerformanceList()},changeStatuses:function(){this.getPerformanceList()},getPerformanceList:function(){var t=this,i={status:this.status,page:this.page,perPage:this.perPage,department_ids:this.department_ids.split(",")};Object(c["v"])(i).then(function(i){var e=i.total,s=i.data;t.performancesList=s,t.isLoading=!1,t.total=e}).catch(function(t){})},createTpl:function(){this.infoType="add",this.showDialog=!0},tplDialogClose:function(){this.showDialog=!1},updateTpl:function(t){this.infoType="modify",this.showDialog=!0},resetFilter:function(){this.filterForm={dp:[]},this.page=1,this.department_ids="",this.getPerformanceList()},linkToDetail:function(t){this.$router.replace("/performance/assessment/details/".concat(t))},deleteAssessment:function(t){this.performanceId=t,this.showConfirmDialog=!0,this.tipsText="是否确认删除考核？",this.confirmType="delete"},closeDialog:function(){this.showConfirmDialog=!1},confirmDialog:function(t){var i=this;"open"===t?Object(c["Fc"])(this.performanceId).then(function(t){i.showConfirmDialog=!1,i.getPerformanceList()}).catch(function(t){}):"delete"===t?Object(c["h"])(this.performanceId).then(function(t){i.showConfirmDialog=!1,i.getPerformanceList()}).catch(function(t){}):this.showConfirmDialog=!1},openAssessment:function(t){this.performanceId=t,this.showConfirmDialog=!0,this.tipsText="是否确认启动考核？",this.confirmType="open"}},created:function(){var t=this;this.nowTime=new Date,this.getPerformanceList(),Object(c["F"])().then(function(i){t.orgTree=i}).catch(function(t){}),Object(c["L"])().then(function(i){t.performanceTypes=i}).catch(function(t){})}},d=o,m=(e("91fc"),e("2877")),v=Object(m["a"])(d,s,a,!1,null,"16793140",null);i["default"]=v.exports},"372d":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},a=[],n={},l=n,c=(e("ee47"),e("2877")),r=Object(c["a"])(l,s,a,!1,null,"6c517b7e",null),o=r.exports;e.d(i,"a",function(){return d});var d=function(t){return function(){return{component:t,loading:o,delay:0}}}},"3f77":function(t,i,e){},"91fc":function(t,i,e){"use strict";var s=e("3f77"),a=e.n(s);a.a},"9f9e":function(t,i,e){},aae3:function(t,i,e){var s=e("d3f4"),a=e("2d95"),n=e("2b4c")("match");t.exports=function(t){var i;return s(t)&&(void 0!==(i=t[n])?!!i:"RegExp"==a(t))}},ee47:function(t,i,e){"use strict";var s=e("9f9e"),a=e.n(s);a.a}}]);