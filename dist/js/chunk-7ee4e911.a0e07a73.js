(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ee4e911"],{"11e9":function(t,e,a){var r=a("52a7"),n=a("4630"),s=a("6821"),o=a("6a99"),l=a("69a8"),i=a("c69a"),c=Object.getOwnPropertyDescriptor;e.f=a("9e1e")?c:function(t,e){if(t=s(t),e=o(e,!0),i)try{return c(t,e)}catch(a){}if(l(t,e))return n(!r.f.call(t,e),t[e])}},"2a9e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"progress-header"},[a("el-row",{attrs:{type:"flex",gutter:20,align:"top"}},[a("el-col",{staticStyle:{"border-right":"solid 1px rgba(233,235,242,1)","min-height":"400px"},attrs:{span:4}},t._l(t.level_team_list,function(e,r){return a("el-radio",{key:r,staticClass:"check_tag",attrs:{label:e.superior_workcode},model:{value:t.level_team_id,callback:function(e){t.level_team_id=e},expression:"level_team_id"}},[t._v("\n          "+t._s(e.superior_name)+t._s(r>1?"团队":null)+"\n          "),e.abnormal_status?a("span",{staticClass:"Badge_logo"}):t._e()])}),1),a("el-col",{staticStyle:{"min-height":"400px"},attrs:{span:20}},[a("el-row",{staticClass:"progress-header",staticStyle:{display:"flex","align-items":"center"}},[a("el-col",{attrs:{span:18}},[a("span",{staticClass:"color_gray"},[t._v(t._s(t.team_name)+": ")]),a("span",{staticClass:"total"},[t._v("共"+t._s(t.total)+"人")]),1==t.abnormal_status?a("span",{staticClass:"overview_text"},[a("span",{staticClass:"total"},[t._v(", ")]),t._v(" "+t._s(t.team_overview_text))]):t._e(),1==t.abnormal_status?a("el-popover",{attrs:{placement:"bottom",width:"688",trigger:"click"}},[a("p",[t._v("提交记录")]),[a("el-table",{attrs:{data:t.team_reviewData,height:"250"}},[a("el-table-column",{attrs:{width:"188",property:"created_at",label:"提交时间"}}),a("el-table-column",{attrs:{width:"120",label:"是否符合分布"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(1==e.row.is_pass?"符合分布":"不符合分布"))])]}}],null,!1,464371627)}),a("el-table-column",{attrs:{width:"280",property:"content",label:"提交理由"}}),a("el-table-column",{attrs:{width:"100",property:"name",label:"提交人"}})],1)],a("el-button",{staticClass:"show_relect_overview",attrs:{slot:"reference",size:"medium"},on:{click:function(e){return t.team_submit_overview()}},slot:"reference"},[t._v("查看提交理由")])],2):t._e()],1),a("el-col",{attrs:{align:"right",span:6}},[1==t.is_reject?a("el-button",{attrs:{size:"medium",type:"warning"},on:{click:function(e){t.reject_team_show=!0}}},[t._v(t._s(t.reject_team_title)+"\n            ")]):t._e()],1)],1),a("el-dialog",{attrs:{title:t.reject_team_title,visible:t.reject_team_show,width:"30%"},on:{"update:visible":function(e){t.reject_team_show=e}}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入驳回理由",rows:"5",autofocus:"true"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.reject_team_show=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.reject_send()}}},[t._v("确 定")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list_data,stripe:"","header-cell-style":{background:"#eef1f6"}}},[a("el-table-column",{attrs:{prop:"workcode",label:"工号"}}),a("el-table-column",{attrs:{prop:"name",label:t.constants.LABEL_NAME},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-row",{attrs:{type:"flex",align:"middle"}},[a("span",[t._v(t._s(e.row.name))]),e.row.has_appeal?a("span",{staticClass:"appeal-tag"},[t._v("\n                  "+t._s(t.constants.APPEAL)+"\n                ")]):t._e()])]}}])}),a("el-table-column",{attrs:{prop:"hr_name",label:"HRBP"}}),a("el-table-column",{attrs:{prop:"superior_name",label:"上级"}}),a("el-table-column",{attrs:{prop:"high_level_name",label:"隔级"}}),a("el-table-column",{attrs:{prop:"self_score",label:"自评分"}}),a("el-table-column",{attrs:{prop:"superior_score",label:"上级评分"}}),a("el-table-column",{attrs:{prop:"score_level",label:"绩效等级"}}),a("el-table-column",{attrs:{label:"标签分布",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return["A"==e.row.score_level||"S"==e.row.score_level?a("el-tag",{staticClass:"status-tag top-style"},[a("span",{staticClass:"top-style-text"},[t._v(t._s(e.row.label_name))])]):t._e(),"B"==e.row.score_level?a("el-tag",{staticClass:"status-tag bplus-style"},[a("span",{staticClass:"bplus-style-text"},[t._v(t._s(e.row.label_name))])]):t._e(),"C"==e.row.score_level||"D"==e.row.score_level?a("el-tag",{staticClass:"status-tag other-style"},[a("span",{staticClass:"other-style-text"},[t._v(t._s(e.row.label_name))])]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"stage_status",label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("\n                "+t._s(t.get_stage_status(e.row.stage))+"\n              ")])]}}])}),a("el-table-column",{attrs:{prop:"ops",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.operate_status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.goDetail(e.row)}}},[t._v("详情")]):t._e(),2==e.row.operate_status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.goDetail(e.row)}}},[t._v("评分")]):t._e(),3==e.row.operate_status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.goDetail(e.row)}}},[t._v("修改评分")]):t._e(),4==e.row.operate_status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.goDetail(e.row)}}},[t._v("处理申诉")]):t._e()]}}])})],1)],1)],1)],1)])},n=[],s=(a("c5f6"),a("38fb")),o=a("c9f1"),l=a("fea5"),i={props:{list_data:{type:null,default:function(){return[]}},department_id:{type:String,default:""},total:{type:[String,Number],default:""},team_overview:{type:null,default:function(){return[]}}},data:function(){return{constants:{LABEL_NAME:s["oc"],APPEAL:s["g"],ENUM_PERFORMANCE_FINISH:s["ub"]},level_team_list:[],level_team_id:null,team_name:"全部下属",abnormal_status:0,is_reject:0,team_reviewData:[],reject_team_show:!1,content:""}},components:{},created:function(){this.get_highLevelTeamList()},methods:{get_highLevelTeamList:function(){var t=this;return Object(l["pb"])(this.department_id).then(function(e){e.highLevelList.unshift({abnormal_status:0,is_reject:0,superior_name:"全部下属",superior_workcode:null}),t.level_team_list=e.highLevelList}).catch(function(t){})},team_submit_overview:function(){var t=this;return Object(l["qb"])(this.department_id,{workcode:this.level_team_id}).then(function(e){t.team_reviewData=e}).catch(function(t){})},reject_send:function(){var t=this,e={content:this.content};return this.reject_team_show=!1,Object(l["ec"])(this.$route.params.id,this.level_team_id,e).then(function(e){t.$emit("reload")}).catch(function(t){})},goDetail:function(t){1==t.is_directly?this.$router.push(Object(o["eb"])(this.$route.params.id,t.id)):this.$router.push(Object(o["p"])(this.$route.params.id,t.performance_id,t.id))},get_stage_status:function(t){var e=this.constants.ENUM_PERFORMANCE_FINISH.filter(function(e){return e.key==t})[0].value;return e}},computed:{team_overview_text:function(){return this.team_overview.join(",")},reject_team_title:function(){return"驳回"+this.team_name+"团队"}},watch:{level_team_id:function(t,e){this.$emit("get_workcode",t),this.team_name=this.level_team_list.filter(function(e){return t==e.superior_workcode}).map(function(t){return t.superior_name}).join(","),this.is_reject=this.level_team_list.filter(function(e){return t==e.superior_workcode}).map(function(t){return t.is_reject}).join(","),this.abnormal_status=this.level_team_list.filter(function(e){return t==e.superior_workcode}).map(function(t){return t.abnormal_status}).join(",")}}},c=i,u=(a("649f"),a("2877")),_=Object(u["a"])(c,r,n,!1,null,"58429606",null);e["default"]=_.exports},"451c":function(t,e,a){},"5dbc":function(t,e,a){var r=a("d3f4"),n=a("8b97").set;t.exports=function(t,e,a){var s,o=e.constructor;return o!==a&&"function"==typeof o&&(s=o.prototype)!==a.prototype&&r(s)&&n&&n(t,s),t}},"649f":function(t,e,a){"use strict";var r=a("451c"),n=a.n(r);n.a},"8b97":function(t,e,a){var r=a("d3f4"),n=a("cb7c"),s=function(t,e){if(n(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,a){return s(t,a),e?t.__proto__=a:r(t,a),t}}({},!1):void 0),check:s}},9093:function(t,e,a){var r=a("ce10"),n=a("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,n)}},aa77:function(t,e,a){var r=a("5ca1"),n=a("be13"),s=a("79e5"),o=a("fdef"),l="["+o+"]",i="​",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),_=function(t,e,a){var n={},l=s(function(){return!!o[t]()||i[t]()!=i}),c=n[t]=l?e(p):o[t];a&&(n[a]=c),r(r.P+r.F*l,"String",n)},p=_.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=_},c5f6:function(t,e,a){"use strict";var r=a("7726"),n=a("69a8"),s=a("2d95"),o=a("5dbc"),l=a("6a99"),i=a("79e5"),c=a("9093").f,u=a("11e9").f,_=a("86cc").f,p=a("aa77").trim,f="Number",m=r[f],d=m,h=m.prototype,b=s(a("2aeb")(h))==f,v="trim"in String.prototype,g=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():p(e,3);var a,r,n,s=e.charCodeAt(0);if(43===s||45===s){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+e}for(var o,i=e.slice(2),c=0,u=i.length;c<u;c++)if(o=i.charCodeAt(c),o<48||o>n)return NaN;return parseInt(i,r)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof m&&(b?i(function(){h.valueOf.call(a)}):s(a)!=f)?o(new d(g(e)),a,m):g(e)};for(var w,y=a("9e1e")?c(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;y.length>k;k++)n(d,w=y[k])&&!n(m,w)&&_(m,w,u(d,w));m.prototype=h,h.constructor=m,a("2aba")(r,f,m)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);