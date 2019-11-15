(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e09d8138"],{"362b":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"grade-management"},[i("nav-bar",{attrs:{list:t.nav}}),i("section",{staticClass:"content-container"},[i("el-row",{attrs:{align:"middle",type:"flex",justify:"space-between"}},[i("div",[i("span",[t._v("组织部绩效考核列表：")]),i("el-cascader",{attrs:{placeholder:t.constants.LABEL_SELECT_DIVISION,props:t.filterProps,options:t.orgTree,"show-all-levels":!1},model:{value:t.filterForm.dp,callback:function(s){t.$set(t.filterForm,"dp",s)},expression:"filterForm.dp"}}),i("el-button",{staticStyle:{"margin-left":"30px"},attrs:{round:""},on:{click:t.resetFilter}},[t._v("\n          "+t._s(t.constants.LABEL_EMPTY)+"\n        ")])],1),i("div",[i("el-radio-group",{attrs:{size:"medium"},on:{change:t.changeStatuses},model:{value:t.statuses,callback:function(s){t.statuses=s},expression:"statuses"}},[i("el-radio-button",{attrs:{label:""}},[t._v("全部")]),i("el-radio-button",{attrs:{label:"1"}},[t._v("草稿")]),i("el-radio-button",{attrs:{label:"2"}},[t._v("进行中")]),i("el-radio-button",{attrs:{label:"3"}},[t._v("已结束")])],1),i("el-button",{staticClass:"create-btn",attrs:{type:"primary"},on:{click:t.createTpl}},[t._v("创建组织部绩效考核")])],1)]),t._l(t.performancesList,function(s){return i("div",{key:s.id,staticClass:"grade-management-list"},[i("div",{staticClass:"list-top"},[1===s.status?i("span",{staticClass:"state draft"},[t._v("草稿")]):t._e(),2===s.status?i("span",{staticClass:"state doing"},[t._v("进行中")]):t._e(),3===s.status?i("span",{staticClass:"state ending"},[t._v("已结束")]):t._e(),i("div",{staticClass:"bread-crumb"},[i("span",[t._v(t._s(s.name))]),i("span",{staticClass:"dividing-line"},[t._v("|")]),i("span",{staticClass:"list-top-range"},[t._v(t._s(s.range)+t._s(s.range)+t._s(s.range)+t._s(s.range)+t._s(s.range)+t._s(s.range))]),i("span",{staticClass:"dividing-line"},[t._v("|")]),"annual"===s.performance_type?i("span",[t._v("年度")]):t._e(),"semi-annual"===s.performance_type?i("span",[t._v("半年度")]):t._e(),"quarter"===s.performance_type?i("span",[t._v("季度")]):t._e(),"monthly"===s.performance_type?i("span",[t._v("月度")]):t._e()]),i("div",{staticClass:"operate-btns"},[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"考核详情",placement:"top"}},[i("i",{staticClass:"view-details",on:{click:function(i){return t.linkToDetail(s.id)}}})]),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[i("i",{staticClass:"delete",on:{click:t.deleteAssessment}})]),1===s.status?i("el-button",{attrs:{type:"primary"},on:{click:t.openAssessment}},[t._v("开启考核")]):t._e()],1)]),i("div",{staticClass:"list-middle"},[i("div",{staticClass:"list-middle-left"},[i("div",{staticClass:"list-middle-items"},[i("div",[t._v("考核周期")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(s.year))])]),i("div",{staticClass:"list-middle-items"},[i("div",[t._v("起止时间")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(s.year))])])]),i("div",{staticClass:"list-middle-right"},[i("div",{staticClass:"list-middle-items"},[i("div",[t._v("考核人数")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(s.is_draft))])]),i("div",{staticClass:"list-middle-items"},[i("div",[t._v("指标填写中")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(s.is_draft))])]),i("div",{staticClass:"list-middle-items"},[i("div",[t._v("指标确认中")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(s.is_draft))])]),i("div",{staticClass:"list-middle-items"},[i("div",[t._v("自评中")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(s.is_draft))])]),i("div",{staticClass:"list-middle-items"},[i("div",[t._v("复评中")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(s.is_draft))])]),i("div",{staticClass:"list-middle-items"},[i("div",[t._v("隔级审核中")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(s.is_draft))])]),i("div",{staticClass:"list-middle-items"},[i("div",[t._v("总裁审核中")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(s.is_draft))])]),i("div",{staticClass:"list-middle-items"},[i("div",[t._v("确认中")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(s.is_draft))])]),i("div",{staticClass:"list-middle-items"},[i("div",[t._v("已确认")]),i("div",{staticClass:"list-middle-item"},[t._v(t._s(s.is_draft))])])])]),t._m(0,!0)])}),i("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],attrs:{background:"","current-page":t.page,"page-sizes":[10,20,50],"page-size":t.perPage,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],2),t.showDialog?i("assessment-dialog",{attrs:{visible:t.showDialog,infoType:t.infoType,performanceTypes:t.performanceTypes,orgTree:t.orgTree},on:{close:t.tplDialogClose}}):t._e(),t.showConfirmDialog?i("confirm-dialog",{attrs:{visible:t.showConfirmDialog,tipsText:t.tipsText},on:{confirm:t.confirmDialog,close:t.closeDialog}}):t._e()],1)},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"list-timeline"},[i("div",{staticClass:"time-line active"},[t._v("指标设定")]),i("div",{staticClass:"time-line-sign active",attrs:{data:"11月15日"}}),i("div",{staticClass:"time-line-circle active"},[i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"})]),i("div",{staticClass:"time-line-sign active",attrs:{data:"11月18日"}}),i("div",{staticClass:"time-line active"},[t._v("自评")]),i("div",{staticClass:"time-line-sign active",attrs:{data:"11月23日"}}),i("div",{staticClass:"time-line active"},[t._v("上级评分")]),i("div",{staticClass:"time-line-sign active",attrs:{data:"11月30日"}}),i("div",{staticClass:"time-line"},[t._v("隔级审核")]),i("div",{staticClass:"time-line-sign",attrs:{data:"12月1日"}}),i("div",{staticClass:"time-line"},[t._v("总裁审核")]),i("div",{staticClass:"time-line-sign",attrs:{data:"12月18日"}}),i("div",{staticClass:"time-line"},[t._v("结果确认")]),i("div",{staticClass:"time-line-sign",attrs:{data:"12月30日"}})])}],l=(i("a481"),i("372d")),n=i("fea5"),c=i("38fb"),r={components:{"nav-bar":function(){return i.e("chunk-d5094d72").then(i.bind(null,"3208"))},"assessment-dialog":Object(l["a"])(i.e("chunk-27c31bd8").then(i.bind(null,"4abf"))),"confirm-dialog":Object(l["a"])(i.e("chunk-7ea27d7e").then(i.bind(null,"1f04")))},data:function(){return{filterProps:{value:"department_id",label:"department_name",children:"children"},page:1,perPage:10,total:0,showDialog:!1,infoType:"add",showConfirmDialog:!1,tipsText:"",type:"",requestLink:"",requestType:"",id:0,performancesList:[],orgTree:[],nav:[{label:"组织部绩效考核列表",active:!0}],filterForm:{dp:[]},options:[],constants:{LABEL_EMPTY:c["wc"],LABEL_SELECT_DIVISION:c["Mc"]},statuses:""}},watch:{filterForm:{handler:function(t){this.page=1,this.getPerformanceList()},deep:!0,immediate:!0}},methods:{handleSizeChange:function(t){this.perPage=t},changeStatuses:function(){this.getPerformanceList()},getPerformanceList:function(){var t=this,s={statuses:this.statuses,page:this.page,perPage:this.perPage};Object(n["l"])(s).then(function(s){console.log(s);var i=s.total,e=s.data;t.performancesList=e,t.total=i}).catch(function(t){})},createTpl:function(){this.infoType="add",this.showDialog=!0},tplDialogClose:function(){this.showDialog=!1},updateTpl:function(t){this.infoType="modify",this.showDialog=!0},resetFilter:function(){this.filterForm={dp:[]}},handleCurrentChange:function(){this.page=val},linkToDetail:function(t){this.$router.replace("/performance/assessment/details/".concat(t))},deleteAssessment:function(){this.showConfirmDialog=!0,this.tipsText="是否确认删除考核？"},closeDialog:function(){this.showConfirmDialog=!1},confirmDialog:function(){console.log("确定")},openAssessment:function(){this.showConfirmDialog=!0,this.tipsText="是否确认启动考核？"}},created:function(){var t=this;Object(n["W"])().then(function(s){t.orgTree=s}).catch(function(t){}),Object(n["cb"])().then(function(s){t.performanceTypes=s}).catch(function(t){})}},o=r,d=(i("690b"),i("2877")),v=Object(d["a"])(o,e,a,!1,null,"6fa51f59",null);s["default"]=v.exports},"372d":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},a=[],l={},n=l,c=(i("ee47"),i("2877")),r=Object(c["a"])(n,e,a,!1,null,"6c517b7e",null),o=r.exports;i.d(s,"a",function(){return d});var d=function(t){return function(){return{component:t,loading:o,delay:0}}}},"690b":function(t,s,i){"use strict";var e=i("9316"),a=i.n(e);a.a},9316:function(t,s,i){},"9f9e":function(t,s,i){},ee47:function(t,s,i){"use strict";var e=i("9f9e"),a=i.n(e);a.a}}]);