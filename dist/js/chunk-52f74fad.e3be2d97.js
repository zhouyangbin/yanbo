(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52f74fad"],{"0a17":function(t,e,a){"use strict";var n=a("869a"),l=a.n(n);l.a},"2e88":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-bar",{attrs:{list:t.nav}}),a("section",{staticClass:"progress-header"},[a("el-row",{attrs:{justify:"center"}},[a("el-col",{attrs:{align:"center",span:12,offset:6}},[a("span",{staticClass:"text_22_blod"},[t._v(t._s(t.name))]),a("br"),a("span",{staticClass:"text_16"},[t._v(t._s(t.department))])]),a("el-col",{attrs:{span:6}},[a("el-button",{attrs:{disabled:!t.Allsubmit_action,type:"primary"},on:{click:t.Allsubmit_step1}},[t._v("整体提交")]),a("el-popover",{attrs:{placement:"bottom",width:"270",trigger:"click"}},[a("p",[t._v("提交记录")]),[a("el-table",{attrs:{data:t.reviewData,height:"250"}},[a("el-table-column",{attrs:{width:"100",property:"created_at",label:"日期"}}),a("el-table-column",{attrs:{width:"100",property:"name",label:"姓名"}}),a("el-table-column",{attrs:{width:"80",property:"type_text",label:"状态"}})],1)],a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{slot:"reference"},slot:"reference"},[t._v("查看审批记录")])],2)],1)],1),t.reject_msg?a("el-row",{staticClass:"overview_tip_color"},[a("el-col",{attrs:{span:2,align:"center"}},[a("p",[t._v("上级意见:")])]),a("el-col",{attrs:{span:22,align:"left"}},[a("p",[t._v(t._s(t.reject_msg))])])],1):t._e()],1),a("section",{staticClass:"content-container"},[a("team-tabel",{attrs:{overview:t.overview}}),a("section",{staticClass:"progress-header"},[a("el-row",{staticClass:"table-title",attrs:{gutter:20}},[a("el-col",{staticClass:"table-title-desc",attrs:{span:2.5}},[t._v("考核人员明细")]),a("el-col",{staticClass:"table-title-num",attrs:{span:15}},[t._v("共"+t._s(t.total)+"人")])],1),a("el-form",{ref:"filterForm",attrs:{inline:!0,model:t.filterForm}},[a("el-form-item",{attrs:{prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:t.filterForm.name,callback:function(e){t.$set(t.filterForm,"name",e)},expression:"filterForm.name"}})],1),a("el-form-item",{attrs:{prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择状态"},model:{value:t.filterForm.status,callback:function(e){t.$set(t.filterForm,"status",e)},expression:"filterForm.status"}},t._l(t.constants.ENUM_PERFORMANCE_FINISH,function(t){return a("el-option",{key:t.key,attrs:{label:t.value,value:t.key}})}),1)],1),a("el-button",{on:{click:function(e){return t.resetForm("filterForm")}}},[t._v(t._s(t.constants.LABEL_EMPTY))])],1)],1),a("section",{staticClass:"progress-header",staticStyle:{"min-height":"400px"}},[a("el-row",{attrs:{type:"flex",gutter:20,align:"top"}},[a("el-col",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"","header-cell-style":{background:"#eef1f6"}}},[a("el-table-column",{attrs:{prop:"workcode",label:"工号"}}),a("el-table-column",{attrs:{prop:"name",label:t.constants.LABEL_NAME},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-row",{attrs:{type:"flex",align:"middle"}},[a("span",[t._v(t._s(e.row.name))]),e.row.has_appeal?a("span",{staticClass:"appeal-tag"},[t._v("\n                    "+t._s(t.constants.APPEAL)+"\n                  ")]):t._e()])]}}])}),t._e(),a("el-table-column",{attrs:{prop:"high_level_name",label:"隔级"}}),a("el-table-column",{attrs:{prop:"self_score",label:"自评分"}}),a("el-table-column",{attrs:{prop:"superior_score",label:"上级评分"}}),a("el-table-column",{attrs:{prop:"score_level",label:"绩效等级"}}),a("el-table-column",{attrs:{label:"标签分布",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return["A"==e.row.score_level||"S"==e.row.score_level?a("el-tag",{staticClass:"status-tag top-style"},[a("span",{staticClass:"top-style-text"},[t._v(t._s(e.row.label_name))])]):t._e(),"B"==e.row.score_level?a("el-tag",{staticClass:"status-tag bplus-style"},[a("span",{staticClass:"bplus-style-text"},[t._v(t._s(e.row.label_name))])]):t._e(),"C"==e.row.score_level||"D"==e.row.score_level?a("el-tag",{staticClass:"status-tag other-style"},[a("span",{staticClass:"other-style-text"},[t._v(t._s(e.row.label_name))])]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"stage_status",label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("\n                  "+t._s(t.get_stage_status(e.row.stage))+"\n                ")])]}}])}),a("el-table-column",{attrs:{prop:"ops",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.operate_status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.goDetail(e.row)}}},[t._v("详情")]):t._e(),2==e.row.operate_status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.goDetail(e.row)}}},[t._v("评分")]):t._e(),3==e.row.operate_status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.goDetail(e.row)}}},[t._v("修改评分")]):t._e(),4==e.row.operate_status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.goDetail(e.row)}}},[t._v("处理申诉")]):t._e()]}}])})],1),a("br"),a("el-row",{attrs:{type:"flex",justify:"end"}},[a("pagination",{attrs:{currentPage:t.currentPage,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)],1)],1)],1)},l=[],s=(a("7f7f"),a("38fb")),r=a("c9f1"),o=a("372d"),c=a("fea5"),i={data:function(){return{total:0,currentPage:1,filterForm:{status:"",name:""},overview:[],nav:[{label:s["qe"],href:r["k"]},{label:s["Nb"],active:!0}],tableData:[],constants:{DETAILS:s["W"],SELF_EVALUATION:s["be"],LABEL_NAME:s["oc"],LABEL_SUP:s["Ec"],OPERATIONS:s["xd"],APPEAL:s["g"],LABEL_EMPTY:s["ic"],PLS_SELECT:s["Ed"],ENUM_PERFORMANCE_FINISH:s["ub"]},name:"",department:"",Allsubmit_action:!1,reject_msg:"",content:"",reviewData:[]}},components:{"nav-bar":function(){return a.e("chunk-d5094d72").then(a.bind(null,"3208"))},"team-tabel":Object(o["a"])(a.e("chunk-8cb2484c").then(a.bind(null,"16c1"))),pagination:function(){return a.e("chunk-28d9b0e5").then(a.bind(null,"486f"))}},created:function(){this.reviewList()},methods:{getUserInfo:function(t){var e=[];return t.map(function(t){e.push(t.name+"("+t.score_level+" "+t.superior_score+")")}),e.join(",")?e.join(","):"--"},resetForm:function(t){this.$refs[t].resetFields()},goDetail:function(t){this.$router.push(Object(r["l"])(this.$route.params.id,t.id))},refreshList:function(t){var e=this;return Object(c["bb"])(this.$route.params.id,t).then(function(t){var a=t.user,n=t.overview,l=t.performanceInfo;e.tableData=a.data||[],e.total=a.total,e.overview=n||[],e.name=l.name||"",e.department=l.department||"",e.Allsubmit_action=l.submit,e.reject_msg=l.reject_msg,l.submit&&e.Allsubmit_step_load()}).catch(function(t){})},reviewList:function(){var t=this;return Object(c["jb"])(this.$route.params.id).then(function(e){t.reviewData=e}).catch(function(t){})},handleCurrentChange:function(t){this.currentPage=t,this.refreshList({page:t,name:this.filterForm.name,stage:this.filterForm.status})},Allsubmit_step_load:function(){var t=this;this.$createElement;this.$confirm("您已评完所有直属下级的评分, 请整体检查分布情况，并提交至隔级审核 ","提示",{confirmButtonText:"提交",cancelButtonText:"暂不提交"}).then(function(){setTimeout(function(){t.Allsubmit_step1()},500)}).catch(function(){})},Allsubmit_step1:function(){var t=this.overview,e=t[0].expected-t[0].count,a=t[1].child[0].expected-t[1].child[0].count,n=t[1].child[1].expected-t[1].child[1].count,l=t[2].child[0].count-t[2].child[0].expected,s=t[2].child[1].count-t[2].child[1].expected;if(e>=0&&a>=0&&n>=0&&l>=0&&s>=0)this.Allsubmit_step3();else{var r="<p>不符合标签分布要求，是否确认继续提交？</p>                       <p>分布结果检查 :</p>                       <p style='".concat(e>=0?"display:none":null,"'> <span style='color: #EB0C00;margin-left:90px'>                        ").concat(t[0].name,"总人数超出").concat(Math.abs(e),"人</span></p>                       <p style='").concat(a>=0?"display:none":null,"'> <span style='color: #EB0C00;margin-left:90px'>                         ").concat(t[1].child[0].name,"总人数超出").concat(Math.abs(a),"人</span></p>                       <p style='").concat(n>=0?"display:none":null,"'> <span style='color: #EB0C00;margin-left:90px'>                        ").concat(t[1].child[1].name,"总人数超出").concat(Math.abs(n),"人</span></p>                       <p style='").concat(l>=0?"display:none":null,"'> <span style='color: #EB0C00;margin-left:90px'>                        ").concat(t[2].child[0].name,"总人数缺少").concat(Math.abs(l),"人</span></p>                       <p style='").concat(s>=0?"display:none":null,"'> <span style='color: #EB0C00;margin-left:90px'>                        ").concat(t[2].child[1].name,"总人数缺少").concat(Math.abs(s),"人</span></p>");this.Allsubmit_step2(r)}},Allsubmit_step2:function(t){var e=this;this.$prompt(t,"提示",{dangerouslyUseHTMLString:!0,confirmButtonText:"提交",inputPlaceholder:"请输入理由",cancelButtonText:"暂不提交"}).then(function(t){var a=t.value;e.Allsubmit_send(a)}).catch(function(){})},Allsubmit_step3:function(){var t=this;this.$prompt("<p>是否确认提交至隔级审核</p>         <p>分布结果检查 : <span style='color: #EB0C00'> 全部符合23221分布比例要求</span></p>","提示",{dangerouslyUseHTMLString:!0,confirmButtonText:"提交",cancelButtonText:"暂不提交"}).then(function(e){var a=e.value;t.Allsubmit_send(a)}).catch(function(){})},Allsubmit_send:function(t){var e=this,a={content:t};return Object(c["ib"])(this.$route.params.id,a).then(function(t){var a={page:e.currentPage,name:e.filterForm.name,stage:e.filterForm.status};e.refreshList(a),e.reviewList()}).catch(function(t){})},get_stage_status:function(t){var e=this.constants.ENUM_PERFORMANCE_FINISH.filter(function(e){return e.key==t})[0].value;return e}},computed:{},watch:{filterForm:{handler:function(t){var e={name:t.name,stage:t.status,page:1};this.refreshList(e),this.currentPage=1},deep:!0,immediate:!0}}},u=i,p=(a("0a17"),a("2877")),m=Object(p["a"])(u,n,l,!1,null,"68bd891f",null);e["default"]=m.exports},"372d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},l=[],s={},r=s,o=(a("ee47"),a("2877")),c=Object(o["a"])(r,n,l,!1,null,"6c517b7e",null),i=c.exports;a.d(e,"a",function(){return u});var u=function(t){return function(){return{component:t,loading:i,delay:0}}}},"869a":function(t,e,a){},"9f9e":function(t,e,a){},ee47:function(t,e,a){"use strict";var n=a("9f9e"),l=a.n(n);l.a}}]);