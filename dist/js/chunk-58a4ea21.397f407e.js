(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58a4ea21"],{"1bdf":function(e,t,n){"use strict";var a=n("a80c"),r=n.n(a);r.a},"28a5":function(e,t,n){"use strict";var a=n("aae3"),r=n("cb7c"),i=n("ebd6"),s=n("0390"),o=n("9def"),l=n("5f1b"),c=n("520a"),u=n("79e5"),d=Math.min,h=[].push,f="split",m="length",p="lastIndex",g=4294967295,b=!u(function(){RegExp(g,"y")});n("214f")("split",2,function(e,t,n,u){var _;return _="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[m]||2!="ab"[f](/(?:ab)*/)[m]||4!="."[f](/(.?)(.?)/)[m]||"."[f](/()()/)[m]>1||""[f](/.?/)[m]?function(e,t){var r=String(this);if(void 0===e&&0===t)return[];if(!a(e))return n.call(r,e,t);var i,s,o,l=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,f=void 0===t?g:t>>>0,b=new RegExp(e.source,u+"g");while(i=c.call(b,r)){if(s=b[p],s>d&&(l.push(r.slice(d,i.index)),i[m]>1&&i.index<r[m]&&h.apply(l,i.slice(1)),o=i[0][m],d=s,l[m]>=f))break;b[p]===i.index&&b[p]++}return d===r[m]?!o&&b.test("")||l.push(""):l.push(r.slice(d)),l[m]>f?l.slice(0,f):l}:"0"[f](void 0,0)[m]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,a){var r=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,r,a):_.call(String(r),n,a)},function(e,t){var a=u(_,e,this,t,_!==n);if(a.done)return a.value;var c=r(e),h=String(this),f=i(c,RegExp),m=c.unicode,p=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(b?"y":"g"),v=new f(b?c:"^(?:"+c.source+")",p),w=void 0===t?g:t>>>0;if(0===w)return[];if(0===h.length)return null===l(v,h)?[h]:[];var T=0,y=0,k=[];while(y<h.length){v.lastIndex=b?y:0;var x,E=l(v,b?h:h.slice(y));if(null===E||(x=d(o(v.lastIndex+(b?0:y)),h.length))===T)y=s(h,y,m);else{if(k.push(h.slice(T,y)),k.length===w)return k;for(var $=1;$<=E.length-1;$++)if(k.push(E[$]),k.length===w)return k;y=T=x}}return k.push(h.slice(T)),k}]})},"2f21":function(e,t,n){"use strict";var a=n("79e5");e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}},"55dd":function(e,t,n){"use strict";var a=n("5ca1"),r=n("d8e8"),i=n("4bf8"),s=n("79e5"),o=[].sort,l=[1,2,3];a(a.P+a.F*(s(function(){l.sort(void 0)})||!s(function(){l.sort(null)})||!n("2f21")(o)),"Array",{sort:function(e){return void 0===e?o.call(i(this)):o.call(i(this),r(e))}})},a80c:function(e,t,n){},aae3:function(e,t,n){var a=n("d3f4"),r=n("2d95"),i=n("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==r(e))}},b2e5:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"target-settings"},[n("nav-bar",{attrs:{list:e.nav}}),n("div",[n("detail-header",{attrs:{"user-info":e.userInfo,self:!0}}),n("el-row",[e._l(e.allTarget,function(t,a){return n("el-row",{key:a,staticClass:"target-detail"},[n("el-row",{staticClass:"target-detail-title"},[n("span",{staticClass:"target-title"},[e._v(e._s(t.type))]),n("span",{staticClass:"target-weight"},[e._v(e._s(e.constants.TARGET_WEIGH)+e._s(t.weight)+"%")])]),n("el-form",{ref:"form"+a,refInFor:!0,attrs:{model:t}},[n("el-table",{attrs:{data:t.table,border:"","header-cell-style":{backgroundColor:"#F5F6F7",color:"#303133"}}},[n("el-table-column",{attrs:{label:e.constants.TARGET_WEIGH,width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t.isMoney?n("div",[e._v(e._s(a.row.weights)+"%")]):e._e(),t.isMoney?e._e():n("el-form-item",{attrs:{prop:"table."+a.$index+".weights",rules:e.rules.weights}},[n("el-input",{attrs:{type:"number",size:"small",oninput:"if(value > 100)value = 100;if(value < 0)value = 0"},model:{value:a.row.weights,callback:function(t){e.$set(a.row,"weights",e._n(t))},expression:"scope.row.weights"}},[n("template",{slot:"append"},[e._v("%")])],2)],1)]}}],null,!0)}),t.isMoney?n("el-table-column",{attrs:{label:e.constants.TARGET_NAME,"min-width":"240",align:"center",prop:"target"}}):e._e(),t.isMoney?e._e():n("el-table-column",{attrs:{label:e.constants.TARGET_NAME,"min-width":"240",align:"center","render-header":e.changeLabel,prop:"target"},scopedSlots:e._u([{key:"default",fn:function(r){return[n("el-form-item",{attrs:{prop:"table."+r.$index+".target",rules:e.rules.target}},[n("div",{staticClass:"flex"},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:12}},model:{value:r.row.target,callback:function(t){e.$set(r.row,"target",t)},expression:"scope.row.target"}}),n("i",{directives:[{name:"show",rawName:"v-show",value:t.table.length>1,expression:"targetItem.table.length > 1"}],staticClass:"el-icon-delete delete-target",on:{click:function(t){return e.deleteTarget(a,""+r.$index)}}})],1)])]}}],null,!0)}),void 0!==t.table[0].content?n("el-table-column",{attrs:{label:e.constants.TASK_DESCRIPTION,"min-width":"300","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t.isMoney?n("div",[e._v(e._s(a.row.content))]):e._e(),t.isMoney?e._e():n("el-form-item",{attrs:{prop:"table."+a.$index+".content",rules:e.rules.content}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:12}},model:{value:a.row.content,callback:function(t){e.$set(a.row,"content",t)},expression:"scope.row.content"}})],1)]}}],null,!0)}):e._e(),n("el-table-column",{attrs:{label:e.constants.YARD_STICK,"min-width":"300","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t.isMoney?n("ul",e._l(a.row.metrics,function(t,a){return n("li",{key:a,staticClass:"flex"},[n("el-col",{staticClass:"measure-title"},[t.is_required?n("span",{staticClass:"is-required"},[e._v("*")]):e._e(),n("span",[e._v(" "+e._s(t.name))])]),n("el-col",[e._v(e._s(t.content))])],1)}),0):e._e(),e._l(a.row.metrics,function(r,i){return n("el-row",{key:i},[t.isMoney?e._e():n("el-form-item",{attrs:{label:r.name,"label-width":"130px",prop:"table."+a.$index+".metrics."+i+".content",rules:r.is_required?e.metricsRules.content:{}}},[n("el-input",{attrs:{type:"textarea",autosize:""},model:{value:r.content,callback:function(t){e.$set(r,"content",t)},expression:"item.content"}})],1)],1)})]}}],null,!0)})],1),!t.isMoney&&e.getTableLen(a)<=4?n("el-button",{staticClass:"add-target",attrs:{icon:"el-icon-plus"},on:{click:function(t){return e.addTarget(a)}}},[e._v(e._s(e.constants.ADD_TARGET_LINE))]):e._e()],1)],1)}),n("ul",{staticClass:"sub-total"},[n("li",[e._v("\n          "+e._s(e.constants.FINANCE_DIMENSIONALITY_SUBTOTAL)+"   "+e._s(this.handleSubTotal("finance"))+"%\n        ")]),n("li",[e._v("\n          工作维度小计   "+e._s(this.handleSubTotal("work"))+"%\n        ")]),n("li",[e._v("\n          团队维度小计   "+e._s(this.handleSubTotal("team"))+"%\n        ")]),n("li",{staticClass:"performance-total"},[e._v("\n          业绩维度合计   "+e._s(this.handleSubTotal("finance")+this.handleSubTotal("work")+this.handleSubTotal("team"))+"%\n        ")])])],2),n("el-row",{staticClass:"footer-button"},[n("el-button",{staticClass:"submit-button",on:{click:e.submitForm}},[e._v("提交")]),n("el-button",{staticClass:"tempeorary-memory",on:{click:e.temporaryMemory}},[e._v("暂存")]),n("el-button",{on:{click:e.returnList}},[e._v("返回")]),n("el-button",{on:{click:e.checkExamine}},[e._v("查看审批记录")])],1)],1),n("examine-detail",{attrs:{"is-examine-dialog":e.isExamineDialog,"work-code":e.userInfo.workcode},on:{close:e.closeExamine}})],1)},r=[],i=(n("28a5"),n("456d"),n("55dd"),n("7f7f"),n("ac6a"),n("38fb")),s=n("c9f1"),o=n("fea5"),l=(n("5c96"),{data:function(){return{constants:{TARGET_WEIGH:i["Je"],TARGET_NAME:i["Ge"],TASK_DESCRIPTION:i["Ke"],YARD_STICK:i["cf"],ADD_TARGET_LINE:i["g"],FINANCE_DIMENSIONALITY_SUBTOTAL:i["Qb"]},isExamineDialog:!1,nav:[{label:i["td"],href:s["l"]},{label:i["Fe"],active:!0}],userInfo:{performance_name:"",stage:0,opinion:"",avatar:"",name:"",workcode:"",superior_name:"",superior_workcode:"",executive_type:"",department_name:"",cycle:"",indicator_setting_end_time:""},allTarget:[],rules:{weights:[{required:!0,message:"权重不能为空",trigger:"blur"}],target:[{required:!0,message:"指标名称不能为空",trigget:"blur"}],content:[{required:!0,message:"具体工作/任务描述不能为空",trigger:"blur"}]},metricsRules:{content:[{required:!0,message:"请输入衡量标准",trigger:"blur"}]}}},components:{"nav-bar":function(){return n.e("chunk-d5094d72").then(n.bind(null,"3208"))},"detail-header":function(){return n.e("chunk-7bc97e02").then(n.bind(null,"58f1"))},"examine-detail":function(){return n.e("chunk-4e186776").then(n.bind(null,"1622"))}},methods:{getTableLen:function(e){return this.allTarget[e].table.length},handleSubTotal:function(e){var t=0;return this.allTarget.forEach(function(n){n.basicType===e&&n.table.forEach(function(e){""!==e.weights&&(t+=e.weights)})}),t},changeLabel:function(e,t){var n=t.column;return e("div",[e("span",n.label),e("br"),e("span","（最多可填写"),e("span",{style:{color:"red"}},5),e("span","项）")])},getUserInfo:function(){var e=this,t={performance_id:this.$route.params.id,performance_user_id:this.$route.params.uid,workcode:""};Object(o["kb"])(t).then(function(t){var n=t.performance_name,a=t.stage,r=t.opinion,i=t.avatar,s=t.name,o=t.workcode,l=t.superior_name,c=t.superior_workcode,u=t.executive_type,d=t.department_name,h=t.cycle,f=t.indicator_setting_end_time;e.userInfo={performance_name:n,stage:a,opinion:r,avatar:i,name:s,workcode:o,superior_name:l,superior_workcode:c,executive_type:u,department_name:d,cycle:h,indicator_setting_end_time:f}}).catch(function(){})},getWrokAndTeamTarget:function(){var e=this,t={performance_id:this.$route.params.id,performance_user_id:this.$route.params.uid,workcode:""};Object(o["Fb"])(t).then(function(t){var n=void 0!==t.team,a=void 0!==t.work,r=void 0!==t.finance;if(e.allTarget=[],n){var i=t.team;e.$set(e.allTarget,i.sort-1,{basicType:"team",isMoney:0,sort:i.sort,type:i.type,weight:i.weight,table:i.template_columns})}if(a){var s=t.work;e.$set(e.allTarget,s.sort-1,{basicType:"work",isMoney:0,sort:s.sort,type:s.type,weight:s.weight,table:s.template_columns})}if(r){var o=t.finance;e.$set(e.allTarget,o.sort-1,{basicType:"finance",isMoney:1,sort:o.sort,type:o.type,weight:o.weight,table:o.template_columns})}}).catch(function(){})},handleSubmitData:function(){for(var e=this.allTarget,t=[],n=[],a=0;a<e.length-1;a++)for(var r=e[a].table,i=0;i<r.length;i++){for(var s=r[i].metrics,o={},l=0;l<s.length;l++)o[s[l].key]=s[l].content;o.type=e[a].type,o.weight=e[a].weight,"team"==e[a].basicType?t.push(o):"work"==e[a].basicType&&n.push(o)}var c={team:t,work:n};return c},submitForm:function(){for(var e=this,t=Object.keys(this.$refs),n=0,a="",r=0;r<t.length;r++){var i=0;if(this.$refs[t[r]][0].validate(function(e,t){e?n++:(a=Object.keys(t),i=1)}),i){var l=a[0].split("."),c=0,u="";return 3===l.length?"weights"===l[2]?u="权重":"target"===l[2]?u="指标名称":"content"===l[2]&&(u="具体工作/任务描述"):5===l.length&&(u=this.allTarget[r].table[c].metrics[l[3]].name),c=parseInt(l[1]),this.$message.error("".concat(this.allTarget[r].type,"第").concat(c+1,"行").concat(u,"不能为空")),!1}}for(var d=0;d<this.allTarget.length;d++)if(this.allTarget[d].weight!==this.handleSubTotal(this.allTarget[d].basicType))return this.$message.error("".concat(this.allTarget[d].type,"权重之和不等于").concat(this.allTarget[d].weight,"%, 请检查")),!1;n===t.length&&this.$confirm("是否确认提交指标?","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){Object(o["mc"])(e.$route.params.uid,e.handleSubmitData()).then(function(t){e.$router.push(Object(s["cb"])(e.$route.params.id,e.$route.params.uid))}).catch(function(){})}).catch(function(){})},temporaryMemory:function(){var e=this;Object(o["ic"])(this.$route.params.uid,this.handleSubmitData()).then(function(t){e.$message({type:"success",message:"暂存成功"})}).catch(function(){})},returnList:function(){var e=this;Object(o["ic"])(this.$route.params.uid,this.handleSubmitData()).then(function(t){e.$router.push("/employee/my")}).catch(function(){})},addTarget:function(e){var t=this,n={performance_id:this.$route.params.id,performance_user_id:this.$route.params.uid};Object(o["ub"])(n).then(function(n){t.allTarget[e].table.push(n[0])})},deleteTarget:function(e,t){this.allTarget[e].table.splice(t,1)},checkExamine:function(){this.isExamineDialog=!0},closeExamine:function(){this.isExamineDialog=!1}},created:function(){this.getUserInfo(),this.getWrokAndTeamTarget()}}),c=l,u=(n("1bdf"),n("2877")),d=Object(u["a"])(c,a,r,!1,null,"5f8c7462",null);t["default"]=d.exports}}]);