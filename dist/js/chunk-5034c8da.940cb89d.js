(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5034c8da"],{"0eec":function(e,t,a){var s=a("b2f5"),n=a("50e0")(!1);s(s.S,"Object",{values:function(e){return n(e)}})},2019:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},n=[],r={},c=r,i=(a("ee47"),a("6691")),l=Object(i["a"])(c,s,n,!1,null,"6c517b7e",null);t["a"]=l.exports},2375:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav-bar",{attrs:{list:e.nav}}),a("section",{staticClass:"content-container"},[a("section",[a("el-form",{ref:"conditionForm",attrs:{inline:!0,model:e.conditionForm}},[a("el-form-item",[a("el-select",{attrs:{placeholder:e.constants.LABEL_SELECT_GRAGE},on:{change:e.changeName},model:{value:e.conditionForm.evaluation_name_id,callback:function(t){e.$set(e.conditionForm,"evaluation_name_id",t)},expression:"conditionForm.evaluation_name_id"}},e._l(e.names,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",[a("el-select",{attrs:{placeholder:e.constants.LABEL_SELECT_DEPARTMENT},on:{change:e.changeDepartment},model:{value:e.evaluation_id,callback:function(t){e.evaluation_id=t},expression:"evaluation_id"}},e._l(e.departments,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e}})})),1)],1)],1)],1),a("section",{staticClass:"report-echart"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("h1",[a("span",[e._v(e._s(e.currentDepartment))]),e._v(e._s(e.constants.LABEL_REPORT_PROGRESS)+"\n          ")]),a("el-row",[a("el-col",{staticClass:"loading-container",attrs:{span:12}},[a("echart-pie",{attrs:{title:e.constants.LABEL_SELF_PROGRESS,data:e.progressPieSelf,width:e.width}})],1),a("el-col",{staticClass:"loading-container",attrs:{span:12}},[a("echart-pie",{attrs:{title:e.constants.LABEL_SUP_PROGRESS,data:e.progressPieSuperior,width:e.width}})],1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-row",{attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:12}},[a("h1",[a("span",[e._v(e._s(e.currentDepartment))]),e._v(e._s(e.constants.LABEL_REPORT_AVERAGE)+"\n              ")])]),a("el-col",{attrs:{span:12}},[a("el-row",{attrs:{type:"flex",justify:"end"}},[a("span",{staticStyle:{color:"#21c1a5"}},[e._v("● "+e._s(e.constants.LABEL_SELF)+"   ")]),a("span",{staticStyle:{color:"#5399e1"}},[e._v("● "+e._s(e.constants.LABEL_SUP))])])],1)],1),a("section",{staticClass:"loading-container"},[a("echart-bar-average-single",{attrs:{selfRates:e.selfRates,supRates:e.supRates,width:e.width,id:"echart-bar1"}})],1)],1)],1)],1),e.isShow?a("section",{staticClass:"report-echart"},[a("el-row",{attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:12}},[a("h1",[e._v(e._s(e.constants.LABEL_REPORT_RATE))])]),a("el-col",{attrs:{span:12}},[a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-tabs",{staticClass:"echart-tabs",attrs:{type:"card"},on:{"tab-click":e.changeBarRate},model:{value:e.rateBarActive,callback:function(t){e.rateBarActive=t},expression:"rateBarActive"}},[a("el-tab-pane",{attrs:{label:e.constants.LABEL_SELF,name:"self"}}),a("el-tab-pane",{attrs:{label:e.constants.LABEL_SUP,name:"sup"}})],1)],1)],1)],1),a("section",{staticClass:"loading-container"},[a("echart-bar-rate",{attrs:{rateBar:e.rateBar,completionBuNams:e.completionBuNams,width:e.width}})],1)],1):e._e(),e.isShow?a("section",{staticClass:"report-echart"},[a("h1",[e._v(e._s(e.constants.LABEL_REPORT_AVERAGE_ALL))]),a("section",{staticClass:"loading-container"},[a("echart-bar-average-all",{attrs:{selfAverage:e.selfAverageAll,supAverage:e.supAverageAll,departmentsAverage:e.departmentsAverageAll,yMin:e.yMinAll,yMax:e.yMaxAll,yInterval:e.yIntervalAll,width:e.width}})],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("span",{staticClass:"color-mark"},[a("span",{staticStyle:{color:"#21c1a5"}},[e._v("● "+e._s(e.constants.LABEL_SELF)+"   ")]),a("span",{staticStyle:{color:"#5399e1"}},[e._v("● "+e._s(e.constants.LABEL_SUP))])])])],1):e._e(),e.isShow?a("section",{staticClass:"report-echart"},[a("el-row",{attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:12}},[a("h1",[e._v(e._s(e.constants.LABEL_REPORT_AVERAGE_SINGLE))])]),a("el-col",{attrs:{span:12}},[a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-tabs",{staticClass:"echart-tabs",attrs:{type:"card"},on:{"tab-click":e.changeBarAverage},model:{value:e.averageBarActive,callback:function(t){e.averageBarActive=t},expression:"averageBarActive"}},e._l(e.activeTabs,(function(e){return a("el-tab-pane",{key:e.name,attrs:{label:e.label,name:e.name}})})),1)],1)],1)],1),a("section",{staticClass:"loading-container"},[a("echart-bar-average-all",{attrs:{selfAverage:e.selfAverageEach,supAverage:e.supAverageEach,departmentsAverage:e.departmentsAverageEach,yMin:e.yMinEach,yMax:e.yMaxEach,yInterval:e.yIntervalEach,width:e.width}})],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("span",{staticClass:"color-mark"},[a("span",{staticStyle:{color:"#21c1a5"}},[e._v("● "+e._s(e.constants.LABEL_SELF)+"   ")]),a("span",{staticStyle:{color:"#5399e1"}},[e._v("● "+e._s(e.constants.LABEL_SUP))])])])],1):e._e(),1==e.department_level?a("section",{staticClass:"report-echart"},[a("el-row",{attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:12}},[a("h1",[e._v(e._s(e.constants.LABEL_REPORT_NUMBER))])]),a("el-col",{attrs:{span:12}},[a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-tabs",{staticClass:"echart-tabs",attrs:{type:"card"},on:{"tab-click":e.changeLineNumbers},model:{value:e.numberLineActive,callback:function(t){e.numberLineActive=t},expression:"numberLineActive"}},e._l(e.activeTabs,(function(e){return a("el-tab-pane",{key:e.name,attrs:{label:e.label,name:e.name}})})),1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("section",{staticClass:"loading-container"},[a("echart-line-number",{attrs:{numbers:e.selfNumbers,color:e.selfLineColor,width:e.width}})],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("span",{staticClass:"color-mark"},[a("span",{staticStyle:{color:"#21c1a5"}},[e._v("● "+e._s(e.constants.LABEL_SELF))])])])],1),a("el-col",{attrs:{span:12}},[a("section",{staticClass:"loading-container"},[a("echart-line-number",{attrs:{isSelf:!1,numbers:e.supNumbers,color:e.supLineColor,width:e.width}})],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("span",{staticClass:"color-mark"},[a("span",{staticStyle:{color:"#5399e1"}},[e._v("● "+e._s(e.constants.LABEL_SUP))])])])],1)],1)],1):e._e()])],1)},n=[],r=(a("7364"),a("dea4")),c=(a("f763"),a("0eec"),a("38fb")),i=a("fea5"),l=a("dedd"),o=a("372d"),u={components:{"nav-bar":function(){return a.e("chunk-1ee63f72").then(a.bind(null,"3208"))},"echart-pie":Object(o["a"])(Promise.all([a.e("chunk-75d45b4b"),a.e("chunk-1b860426"),a.e("chunk-3625d946")]).then(a.bind(null,"f889"))),"echart-bar-average-single":Object(o["a"])(Promise.all([a.e("chunk-75d45b4b"),a.e("chunk-62243b17"),a.e("chunk-3cc77bc8")]).then(a.bind(null,"a8b2"))),"echart-bar-rate":Object(o["a"])(Promise.all([a.e("chunk-75d45b4b"),a.e("chunk-62243b17"),a.e("chunk-61b54ca6"),a.e("chunk-99260436")]).then(a.bind(null,"a2f4"))),"echart-bar-average-all":Object(o["a"])(Promise.all([a.e("chunk-75d45b4b"),a.e("chunk-62243b17"),a.e("chunk-61b54ca6"),a.e("chunk-0488312f")]).then(a.bind(null,"16a4"))),"echart-line-number":Object(o["a"])(Promise.all([a.e("chunk-75d45b4b"),a.e("chunk-62243b17"),a.e("chunk-09918edd")]).then(a.bind(null,"4702")))},created:function(){this.permissions=JSON.parse(localStorage.getItem("permissions")||"[]"),this.getGrades(),this.permissions.indexOf(201)>-1&&(this.isShow=!0)},data:function(){return{isShow:!1,department_level:"",nav:[{label:c["Lb"],active:!0}],constants:{LABEL_REPORT_PROGRESS:c["pc"],LABEL_REPORT_AVERAGE:c["lc"],LABEL_REPORT_RATE:c["qc"],LABEL_REPORT_AVERAGE_ALL:c["mc"],LABEL_REPORT_AVERAGE_SINGLE:c["nc"],LABEL_REPORT_NUMBER:c["oc"],LABEL_SELF:c["vc"],LABEL_SUP:c["yc"],LABEL_SELF_PROGRESS:c["wc"],LABEL_SUP_PROGRESS:c["zc"],LABEL_SELECT_DEPARTMENT:c["sc"],LABEL_SELECT_GRAGE:c["uc"]},permissions:[],conditionForm:{evaluation_name_id:"",evaluation_id:"",department_id:""},names:[],departments:[],currentDepartment:"",evaluationId:{},progressPieSelf:[{value:0,name:""},{value:0,name:""}],progressPieSuperior:[{value:0,name:""},{value:0,name:""}],selfRates:[],supRates:[],selfRateBar:[],superiorRateBar:[],rateBar:[],completionBuNams:[],rateBarActive:"self",selfAverageAll:[],supAverageAll:[],departmentsAverageAll:[],yMinAll:0,yMaxAll:20,yIntervalAll:4,selfAverageA:[],selfAverageB:[],selfAverageC:[],selfAverageD:[],selfAverageEach:[],supAverageA:[],supAverageB:[],supAverageC:[],supAverageD:[],supAverageEach:[],departmentsAverageEach:[],yMinEach:0,yMaxEach:5,yIntervalEach:1,activeTabs:[{label:c["hd"],name:"first"},{label:c["jd"],name:"second"},{label:c["id"],name:"third"},{label:c["gd"],name:"fourth"}],averageBarActive:"first",selfNumbersA:[],selfNumbersB:[],selfNumbersC:[],selfNumbersD:[],selfNumbers:[],selfLineColor:"#3ed6bf",supNumbersA:[],supNumbersB:[],supNumbersC:[],supNumbersD:[],supNumbers:[],supLineColor:"#5399e1",numberLineActive:"first",width:0}},computed:{evaluation_id:{get:function(){return this.evaluationId},set:function(e){this.evaluationId=e,this.conditionForm=Object.assign({},this.conditionForm,{evaluation_id:e.value})}}},mounted:function(){this.resize()},methods:{resize:function(){var e=this;window.onresize=function(){e.width=document.body.clientWidth}},getGrades:function(){var e=this;Object(i["s"])().then((function(t){t.evaluations.map((function(e){e.label=e.evaluation_name,e.value=e.id})),e.names=t.evaluations,e.conditionForm=Object.assign({},e.conditionForm,{evaluation_name_id:t.evaluations[0].value}),e.SelectdeptId=t.evaluations[0].id,e.getDepartments(t.evaluations[0].id)})).catch((function(e){}))},getDepartments:function(e){var t=this;return Object(i["q"])(e).then((function(e){e.map((function(e){e.label=e.department_name,e.value=e.id})),t.departments=e,t.conditionForm=Object.assign({},t.conditionForm,{evaluation_id:e[0].value}),t.evaluationId=e[0],t.currentDepartment=e[0].label,t.getReports()})).catch((function(e){}))},getReports:function(){var e=this;Object(i["t"])(Object(l["a"])(this.conditionForm)).then((function(t){e.progressPieSelf=[{value:t.process.self,name:"已完成"+t.process.self+"人"},{value:t.process.count-t.process.self,name:"未完成"+(t.process.count-t.process.self)+"人"}],e.progressPieSuperior=[{value:t.process.superior,name:"已完成"+t.process.superior+"人"},{value:t.process.count-t.process.superior,name:"未完成"+(t.process.count-t.process.superior)+"人"}],e.selfRates=Object.values(t.avg.self),e.supRates=Object.values(t.avg.superior),e.selfRateBar=[],e.superiorRateBar=[],e.completionBuNams=[],t.finish.forEach((function(t){e.selfRateBar.push(t.count?t.self_status/t.count:0),e.superiorRateBar.push(t.count?t.superior_status/t.count:0),e.completionBuNams.push(t.department_name)})),e.rateBarActive="self",e.rateBar=Object(r["a"])(e.selfRateBar);var a=[],s=[],n=[];t.total.self.forEach((function(e){a.push(e.score),n.push(e.department_name)})),t.total.superior.forEach((function(e){s.push(e.score)})),e.selfAverageAll=a,e.supAverageAll=s,e.departmentsAverageAll=n;var c=[];e.selfAverageA=[],e.selfAverageB=[],e.selfAverageC=[],e.selfAverageD=[],t.question.self.forEach((function(t){e.selfAverageA.push(t.a),e.selfAverageB.push(t.b),e.selfAverageC.push(t.c),e.selfAverageD.push(t.d),c.push(t.department_name)})),e.supAverageA=[],e.supAverageB=[],e.supAverageC=[],e.supAverageD=[],t.question.superior.forEach((function(t){e.supAverageA.push(t.a),e.supAverageB.push(t.b),e.supAverageC.push(t.c),e.supAverageD.push(t.d)})),e.selfAverageEach=Object(r["a"])(e.selfAverageA),e.supAverageEach=Object(r["a"])(e.supAverageA),e.departmentsAverageEach=c,e.averageBarActive="first",t.number.self.forEach((function(t,a){0==a?e.selfNumbersA=Object.values(t):1==a?e.selfNumbersB=Object.values(t):2==a?e.selfNumbersC=Object.values(t):3==a&&(e.selfNumbersD=Object.values(t))})),t.number.superior.forEach((function(t,a){0==a?e.supNumbersA=Object.values(t):1==a?e.supNumbersB=Object.values(t):2==a?e.supNumbersC=Object.values(t):3==a&&(e.supNumbersD=Object.values(t))})),e.selfNumbers=Object(r["a"])(e.selfNumbersA),e.supNumbers=Object(r["a"])(e.supNumbersA),e.numberLineActive="first",e.department_level=t.department_level})).catch((function(e){}))},changeName:function(e){this.getDepartments(e)},changeDepartment:function(e){this.conditionForm=Object.assign({},this.conditionForm,{evaluation_id:e.value}),this.currentDepartment=e.label,this.getReports()},changeBarRate:function(e){"self"==e.name?this.rateBar=this.selfRateBar.concat():this.rateBar=this.superiorRateBar.concat()},changeBarAverage:function(e){"first"==e.name?(this.selfAverageEach=Object(r["a"])(this.selfAverageA),this.supAverageEach=Object(r["a"])(this.supAverageA)):"second"==e.name?(this.selfAverageEach=Object(r["a"])(this.selfAverageB),this.supAverageEach=Object(r["a"])(this.supAverageB)):"third"==e.name?(this.selfAverageEach=Object(r["a"])(this.selfAverageC),this.supAverageEach=Object(r["a"])(this.supAverageC)):"fourth"==e.name&&(this.selfAverageEach=Object(r["a"])(this.selfAverageD),this.supAverageEach=Object(r["a"])(this.supAverageD))},changeLineNumbers:function(e){"first"==e.name?(this.selfNumbers=Object(r["a"])(this.selfNumbersA),this.supNumbers=Object(r["a"])(this.supNumbersA)):"second"==e.name?(this.selfNumbers=Object(r["a"])(this.selfNumbersB),this.supNumbers=Object(r["a"])(this.supNumbersB)):"third"==e.name?(this.selfNumbers=Object(r["a"])(this.selfNumbersC),this.supNumbers=Object(r["a"])(this.supNumbersC)):"fourth"==e.name&&(this.selfNumbers=Object(r["a"])(this.selfNumbersD),this.supNumbers=Object(r["a"])(this.supNumbersD))}}},p=u,h=(a("bb94"),a("6691")),f=Object(h["a"])(p,s,n,!1,null,"79a5aa6c",null);t["default"]=f.exports},"372d":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s=a("2019"),n=function(e){return function(){return{component:e,loading:s["a"],delay:0}}}},"3a7e":function(e,t,a){},"50e0":function(e,t,a){var s=a("dad2"),n=a("cfc7"),r=a("3a68"),c=a("d217").f;e.exports=function(e){return function(t){var a,i=r(t),l=n(i),o=l.length,u=0,p=[];while(o>u)a=l[u++],s&&!c.call(i,a)||p.push(e?[a,i[a]]:i[a]);return p}}},bb94:function(e,t,a){"use strict";var s=a("3a7e"),n=a.n(s);n.a},d922:function(e,t,a){},dea4:function(e,t,a){"use strict";function s(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}function n(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){return s(e)||n(e)||r()}a.d(t,"a",(function(){return c}))},dedd:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("fb37"),a("f763");var s=function(e){var t={};return Object.keys(e).filter((function(t){return void 0!==e[t]&&""!==e[t]})).forEach((function(a){t[a]=e[a]})),t}},ee47:function(e,t,a){"use strict";var s=a("d922"),n=a.n(s);n.a}}]);