(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3ffa632"],{"1db3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-grade-list"},[a("nav-bar",{attrs:{list:t.nav}}),a("br"),a("br"),a("section",{staticClass:"content-container"},[a("br"),a("section",{staticClass:"content-container bg-white",staticStyle:{"margin-top":"-16px"}},[a("div",{staticClass:"switch-btns"},[a("el-button",{staticClass:"normal-btn",class:"pending"===t.gradeListType?"active-btn":"",on:{click:function(e){return t.getPendingCultureList("pending",{page:1})}}},[t._v("进行中")]),a("el-button",{staticClass:"normal-btn",class:"end"===t.gradeListType?"active-btn":"",on:{click:function(e){return t.getEndCultureList("end",{page:1})}}},[t._v("已结束")])],1),a("hr"),"pending"==t.gradeListType&&0==t.isHigh&&0==t.isStaff?a("div",{staticClass:"empty"},[a("span",[t._v("暂无数据")])]):t._e(),t.isHigh&&"pending"==t.gradeListType?a("div",{staticClass:"container"},[a("div",{staticClass:"container-role"},[a("span",[t._v("组织部成员")]),t._v("\n             \n          "),a("span",{staticStyle:{"font-size":"14px","margin-left":"90px",color:"#494949"}},[t._v("评分名称："+t._s(t.high_evaluation_name))]),t._v("\n             \n          "),a("span",{staticStyle:{"font-size":"14px",color:"#494949"}},[t._v("截止时间："+t._s(t.high_end_time))])]),a("div",{staticClass:"container-desc"},[a("partition",{attrs:{data:t.highSmmary}})],1),a("div",{staticClass:"container-list"},[t._m(0),a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:t.tableData}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"70"}}),a("el-table-column",{attrs:{"min-width":"110",label:"自评分数/上级分数"},scopedSlots:t._u([{key:"default",fn:function(e){return[null!=e.row.scores.self.total?a("span",{staticClass:"self-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","self","total"]),"-"))+"\n                ")]):t._e(),null==e.row.scores.self.total?a("span",{staticClass:"self-text"},[t._v("\n                  -\n                ")]):t._e(),a("span",{staticClass:"self-superior"},[t._v("/")]),null!=e.row.scores.superior.total?a("span",{staticClass:"superior-text"},[t._v("\n                  "+t._s(e.row.scores.superior.total)+"\n                ")]):t._e(),null==e.row.scores.superior.total?a("span",{staticClass:"self-text"},[t._v("\n                  -\n                ")]):t._e()]}}],null,!1,3622011757)}),a("el-table-column",{attrs:{"min-width":"130",label:"自评平均分/上级平均分"},scopedSlots:t._u([{key:"default",fn:function(e){return[null!=e.row.scores.self.average?a("span",{staticClass:"self-text"},[t._v("\n                  "+t._s(e.row.scores.self.average)+"\n                ")]):t._e(),null==e.row.scores.self.average?a("span",{staticClass:"self-text"},[t._v("-")]):t._e(),a("span",{staticClass:"self-superior"},[t._v("/")]),null!=e.row.scores.self.average?a("span",{staticClass:"superior-text"},[t._v("\n                  "+t._s(e.row.scores.superior.average)+"\n                ")]):t._e(),null==e.row.scores.superior.average?a("span",{staticClass:"superior-text"},[t._v("-")]):t._e()]}}],null,!1,2983175622)}),a("el-table-column",{attrs:{"min-width":"80",label:"成就客户"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"self-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","self","questions","0"]),"-"))+"\n                ")]),a("span",{staticClass:"self-superior"},[t._v("/")]),a("span",{staticClass:"superior-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","superior","questions","0"]),"-"))+"\n                ")])]}}],null,!1,850282054)}),a("el-table-column",{attrs:{"min-width":"80",label:"创新"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"self-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","self","questions","1"]),"-"))+"\n                ")]),a("span",{staticClass:"self-superior"},[t._v("/")]),a("span",{staticClass:"superior-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","superior","questions","1"]),"-"))+"\n                ")])]}}],null,!1,410032070)}),a("el-table-column",{attrs:{"min-width":"80",label:"合作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"self-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","self","questions","2"]),"-"))+"\n                ")]),a("span",{staticClass:"self-superior"},[t._v("/")]),a("span",{staticClass:"superior-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","superior","questions","2"]),"-"))+"\n                ")])]}}],null,!1,2407941190)}),a("el-table-column",{attrs:{"min-width":"80",label:"务实"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"self-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","self","questions","3"]),"-"))+"\n                ")]),a("span",{staticClass:"self-superior"},[t._v("/")]),a("span",{staticClass:"superior-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","superior","questions","3"]),"-"))+"\n                ")])]}}],null,!1,2520757958)}),a("el-table-column",{staticStyle:{"text-algin":"left"},attrs:{prop:"_271_level",label:"271等级"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row._271_level?t.getLevelText(e.row._271_level):"无")+"\n                "),e.row.special_recommended?a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("上级特殊推荐top")]),a("img",{attrs:{width:"15",src:s("b9eb"),alt:""}})]):t._e()]}}],null,!1,2176092064)}),a("el-table-column",{attrs:{"min-width":"100",prop:"superior_status",label:t.constants.LEADER_EVALUATION_STATUS}}),a("el-table-column",{attrs:{prop:"stage_name",label:t.constants.LABEL_STATUS},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.reject_status?a("div",{staticClass:"reject_status"},[a("div",[t._v(t._s(t.constants.REJECT))])]):t._e(),2==e.row.reject_status?a("div",{staticClass:"complain_status"},[a("div",[t._v(t._s(t.constants.APPEAL))])]):t._e(),0==e.row.reject_status?a("div",[t._v("\n                  "+t._s(e.row.stage_name)+"\n                ")]):t._e()]}}],null,!1,607137111)})],1),a("div",{staticClass:"container-list-message"},[a("div",{staticClass:"container-list-message-left"}),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.highDetail()}}},[t._v("查看更多(共"+t._s(t.highNumber)+"人)")]),a("div",{staticClass:"container-list-message-left"})],1)],1)]):t._e(),t.isStaff&&"pending"==t.gradeListType?a("div",{staticClass:"container"},[a("div",{staticClass:"container-role"},[a("span",[t._v("员工")]),t._v("\n           \n          "),a("span",{staticStyle:{"font-size":"14px","margin-left":"90px",color:"#494949"}},[t._v("评分名称："+t._s(t.evaluation_name))]),t._v("\n             \n          "),a("span",{staticStyle:{"font-size":"14px",color:"#494949"}},[t._v("截止时间："+t._s(t.end_time))])]),a("div",{staticClass:"container-desc"},[a("partition",{staticStyle:{"margin-top":"30px"},attrs:{data:t.summary}})],1),a("div",{staticClass:"container-list"},[t._m(1),a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:t.stafftableData}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"70"}}),a("el-table-column",{attrs:{"min-width":"110",label:"自评分数/上级分数"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"self-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","self","total"]),"-"))+"\n                ")]),a("span",{staticClass:"self-superior"},[t._v("/")]),a("span",{staticClass:"superior-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","superior","total"]),"-"))+"\n                ")])]}}],null,!1,988526598)}),a("el-table-column",{attrs:{"min-width":"130",label:"自评平均分/上级平均分"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"self-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","self","average"]),"-"))+"\n                ")]),a("span",{staticClass:"self-superior"},[t._v("/")]),a("span",{staticClass:"superior-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","superior","average"]),"-"))+"\n                ")])]}}],null,!1,1977971494)}),a("el-table-column",{attrs:{"min-width":"80",label:"成就客户"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"self-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","self","questions","0"]),"-"))+"\n                ")]),a("span",{staticClass:"self-superior"},[t._v("/")]),a("span",{staticClass:"superior-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","superior","questions","0"]),"-"))+"\n                ")])]}}],null,!1,850282054)}),a("el-table-column",{attrs:{"min-width":"80",label:"创新"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"self-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","self","questions","1"]),"-"))+"\n                ")]),a("span",{staticClass:"self-superior"},[t._v("/")]),a("span",{staticClass:"superior-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","superior","questions","1"]),"-"))+"\n                ")])]}}],null,!1,410032070)}),a("el-table-column",{attrs:{"min-width":"80",label:"合作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"self-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","self","questions","2"]),"-"))+"\n                ")]),a("span",{staticClass:"self-superior"},[t._v("/")]),a("span",{staticClass:"superior-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","superior","questions","2"]),"-"))+"\n                ")])]}}],null,!1,2407941190)}),a("el-table-column",{attrs:{"min-width":"80",label:"务实"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"self-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","self","questions","3"]),"-"))+"\n                ")]),a("span",{staticClass:"self-superior"},[t._v("/")]),a("span",{staticClass:"superior-text"},[t._v("\n                  "+t._s(t._f("placeholder")(t._f("path")(e.row,["scores","superior","questions","3"]),"-"))+"\n                ")])]}}],null,!1,2520757958)}),a("el-table-column",{staticStyle:{"text-algin":"left"},attrs:{prop:"_271_level",label:"271等级"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row._271_level?t.getLevelText(e.row._271_level):"无")+"\n                "),e.row.special_recommended?a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("上级特殊推荐top")]),a("img",{attrs:{width:"15",src:s("b9eb"),alt:""}})]):t._e()]}}],null,!1,2176092064)}),a("el-table-column",{attrs:{"min-width":"100",prop:"superior_status",label:t.constants.LEADER_EVALUATION_STATUS}}),a("el-table-column",{attrs:{prop:"stage_name",label:t.constants.LABEL_STATUS},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.reject_status?a("div",{staticClass:"reject_status"},[a("div",[t._v(t._s(t.constants.REJECT))])]):t._e(),2==e.row.reject_status?a("div",{staticClass:"complain_status"},[a("div",[t._v(t._s(t.constants.APPEAL))])]):t._e(),0==e.row.reject_status?a("div",[t._v("\n                  "+t._s(e.row.stage_name)+"\n                ")]):t._e()]}}],null,!1,607137111)})],1),a("div",{staticClass:"container-list-message"},[a("div",{staticClass:"container-list-message-left"}),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.staffDetail()}}},[t._v("查看更多(共"+t._s(t.staffNumber)+"人)")]),a("div",{staticClass:"container-list-message-left"})],1)],1)]):t._e(),"end"==t.gradeListType?a("finished"):t._e(),a("br"),a("el-row",{attrs:{type:"flex",justify:"end"}},[a("pagination",{attrs:{currentPage:t.currentPage,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),a("br"),a("div",{staticClass:"rule",on:{click:t.tips}},[a("img",{attrs:{src:s("42c8"),alt:""}})])],1)])],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-list-message"},[s("div",{staticClass:"container-list-message-left"},[s("div",{staticClass:"container-list-message-left-msg"},[s("i",{staticClass:"el-alert__icon el-icon-info",staticStyle:{"font-size":"16px"}}),t._v("\n                温馨提示："),s("span",{staticStyle:{color:"#00CCB2"}},[t._v("绿色")]),t._v("为自评，"),s("span",{staticStyle:{color:"#3296FA"}},[t._v("蓝色")]),t._v("为上级评价\n              ")]),s("div",{staticClass:"container-list-message-left-space"})]),s("div",{staticClass:"container-list-message-left"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-list-message"},[s("div",{staticClass:"container-list-message-left"},[s("div",{staticClass:"container-list-message-left-msg"},[s("i",{staticClass:"el-alert__icon el-icon-info",staticStyle:{"font-size":"16px"}}),t._v("\n                温馨提示："),s("span",{staticStyle:{color:"#00CCB2"}},[t._v("绿色")]),t._v("为自评，"),s("span",{staticStyle:{color:"#3296FA"}},[t._v("蓝色")]),t._v("为上级评价\n              ")]),s("div",{staticClass:"container-list-message-left-space"})]),s("div",{staticClass:"container-list-message-left"})])}],l=(s("7f7f"),s("456d"),s("ac6a"),s("cebc")),i=s("38fb"),r=s("fea5"),o=s("c9f1"),c={data:function(){return{highNumber:0,staffNumber:0,highType:"",staffType:"",evaluation_id:0,staff_evaluation_id:0,high_evaluation_name:"",high_end_time:"",evaluation_name:"",end_time:"",currentPage:1,total:0,tableData:[],stafftableData:[],managerKey:[],staffKey:[],nav:[{label:i["qd"],active:!0}],constants:{DETAILS:i["eb"],OPERATIONS:i["Sd"],EXPORT_DETAILS:i["Ob"],LEADER_EVALUATION_STATUS:i["cd"],LABEL_STATUS:i["Wc"],REJECT:i["pe"],APPEAL:i["i"]},isHigh:!1,isStaff:!1,gradeListType:"pending",highSmmary:{top:{count:0,expected:0},middle:{count:0,expected:0},bottom:{count:0,expected:0}},summary:{top:{count:0,expected:0},middle:{count:0,expected:0},bottom:{count:0,expected:0}},count:0}},components:{partition:function(){return s.e("chunk-bfd6ac4a").then(s.bind(null,"4d4b"))},"nav-bar":function(){return s.e("chunk-6f993239").then(s.bind(null,"3208"))},pagination:function(){return s.e("chunk-e4915324").then(s.bind(null,"486f"))},finished:function(){return s.e("chunk-2d2109d0").then(s.bind(null,"b947"))}},methods:{tips:function(){this.$alert("<p>1-总：打分前，对团队中的271排名做到心中有数：前面的20%，后面的10%；</br>2-分：打分时，对团队中每个成员的具体得分负责：看标准，核案例，确定得分；</br>3-总：打分后，根据步骤1和步骤2，微调/确定最终271，确保前20%和后10%的精准。</p>","“上级评”打分方法推荐：",{dangerouslyUseHTMLString:!0})},getLevelText:function(t){return i["nd"][t]},postSummary:function(t){var e={};for(var s in t)e[t[s].key]={count:parseInt(t[s].count),expected:t[s].expected_value};return Object(l["a"])({},e)},highDetail:function(){var t={type:this.highType};localStorage.setItem("type",JSON.stringify(t)),this.$router.push(Object(o["bb"])(this.evaluation_id,this.highType))},staffDetail:function(){var t={type:this.staffType};localStorage.setItem("type",JSON.stringify(t)),this.$router.push(Object(o["bb"])(this.staff_evaluation_id,this.staffType))},handleCurrentChange:function(t){this.currentPage=t,"pending"===this.gradeListType?this.getPendingCultureList(this.gradeListType,{page:t}):this.getEndCultureList(this.gradeListType,{page:t})},getPendingCultureList:function(t,e){var s=this;return this.gradeListType=t,Object(r["yb"])().then(function(t){Object.keys(t.evaluations).forEach(function(e){if(2==e){var a=Object.keys(t.users[e].data);if(s.highNumber=a.length,s.isHigh=!0,s.highType=e,s.highSmmary=s.postSummary(t.users[e].overview),s.high_evaluation_name=t.evaluations[e].name,s.high_end_time=t.evaluations[e].end_time,s.evaluation_id=t.evaluations[e].evaluation_name_id,t.users[e].data.length<=3)s.tableData=t.users[e].data;else for(var n=0;n<3;n++)s.tableData[n]=t.users[e].data[n]}if(1==e){var l=Object.keys(t.users[e].data);if(s.staffNumber=l.length,s.isStaff=!0,s.staffType=e,s.summary=s.postSummary(t.users[e].overview),s.evaluation_name=t.evaluations[e].name,s.end_time=t.evaluations[e].end_time,s.staff_evaluation_id=t.evaluations[e].evaluation_name_id,t.users[e].data.length<=3)s.stafftableData=t.users[e].data;else for(var i=0;i<3;i++)s.stafftableData[i]=t.users[e].data[i]}})}).catch(function(t){})},getEndCultureList:function(t){this.gradeListType=t},exportMore:function(t){window.open(Object(o["G"])(t.id,1),"_blank","noopener")}},created:function(){this.getPendingCultureList(this.gradeListType,{page:1})}},u=c,p=(s("c210"),s("2877")),_=Object(p["a"])(u,a,n,!1,null,"28ed303d",null);e["default"]=_.exports},"42c8":function(t,e,s){t.exports=s.p+"img/box.a0a8eb92.png"},"871a":function(t,e,s){},b9eb:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEUAAAD6oVj7pFr6oVf6oFj6oVj5oVj6oFj/qV/5oVj6oVf7oVj5oVj7o1n6oVf5oVf6oFj6oFf6oVj/pVr6oVj6oFj6oVf6oFf6oVf6oVf5oVn6olj5olr6olj5pFv/pln/pln5oFfp19XRAAAAIXRSTlMAyDr3uOfYzg/d031VSPKumYxvIu7CvqeYlYdjWDQtKBSkMb/WAAAAn0lEQVQoz3XRWQrEIBBF0Rdj1MxTz3Ptf5OdasGG4LtfhUcFEbtM7Z5gXUSqwNCKyMLQbTgSW2XLE2wVXd7CQbHI4ySazVonv+acmTLiI634dJEZJLYmjLvTpBWxU48qoeyrUXMs4Tk6HDmOsBxbnDn2mDgGzBQboKV4BRaKHXCn+AE6hh5Az/AGwDA0AF4Jm/1DgKB/Vun0tuXfBj34BdHUNaPNsx2dAAAAAElFTkSuQmCC"},c210:function(t,e,s){"use strict";var a=s("871a"),n=s.n(a);n.a}}]);