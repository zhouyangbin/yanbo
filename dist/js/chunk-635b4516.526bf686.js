(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-635b4516"],{"2fdb":function(t,e,n){"use strict";var s=n("5ca1"),r=n("d2c8"),a="includes";s(s.P+s.F*n("5147")(a),"String",{includes:function(t){return!!~r(this,t,a).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"440c":function(t,e,n){},5147:function(t,e,n){var s=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[s]=!1,!"/./"[t](e)}catch(r){}}return!0}},6762:function(t,e,n){"use strict";var s=n("5ca1"),r=n("c366")(!0);s(s.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},8078:function(t,e,n){"use strict";var s=n("440c"),r=n.n(s);r.a},aae3:function(t,e,n){var s=n("d3f4"),r=n("2d95"),a=n("2b4c")("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}},ac13:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"set-target-page"},[n("section",{staticClass:"content-container"},[n("div",{staticClass:"basic-info"},[n("div",[n("span",{staticClass:"label"},[t._v(t._s(t.constants.BASIC_INFO)+":")]),n("span",[n("span",{staticClass:"greycolor"},[t._v(t._s(t.constants.LEADER_NUMBER))]),t._v("\n          / "+t._s(t.basicInfo.superior_workcode)+"   \n          "),n("span",{staticClass:"greycolor"},[t._v(t._s(t.constants.LEADER_NAME))]),t._v("\n          / "+t._s(t.basicInfo.superior_name)+" ")]),t._v("    \n        "),n("span",{staticClass:"tip"},[t._v("注: 若上级姓名工号与实际不符, 请联系HR")])]),t.readOnly?t._e():n("div",[n("el-button",{attrs:{icon:"el-icon-upload",type:"text"},on:{click:function(e){t.showImportDia=!0}}},[t._v(t._s(t.constants.UPLOAD_TARGET))])],1),t.readOnly&&t.can_edit_target?n("div",[n("el-button",{staticStyle:{"font-size":"18px"},attrs:{icon:"el-icon-edit-outline",type:"text"},on:{click:function(e){t.readOnly=!1}}},[t._v("重新设定目标")])],1):t._e()]),t.hasRejectedReasons?n("div",t._l(t.target_reject,function(e,s){return n("el-row",{key:s,staticClass:"rejectFrame",attrs:{type:"flex",justify:"space-between"}},[n("div",{staticClass:"reason"},[n("span",[t._v("驳回理由:")]),n("span",{domProps:{innerHTML:t._f("linebreak")(e.reason)}})]),n("div",[t._v(t._s(e.created_at))])])}),1):t._e(),t._l(t.targets,function(e,s){return n("target-card",{key:s,attrs:{keys:t.keys,readOnly:t.readOnly,data:t.targets[s],index:s},on:{delete:t.deleteTarget,"update:data":function(e){return t.$set(t.targets,s,e)}}})}),n("br"),t.readOnly?t._e():n("div",[n("el-button",{attrs:{disabled:!t.canPlus,type:"primary"},on:{click:function(e){return t.targets.push({})}}},[t._v(t._s(t.constants.ADD_TARGET))])],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[t.submitted?t._e():n("el-button",{on:{click:t.saveDraft}},[t._v(t._s(t.constants.SAVE_DRAFT))]),!t.readOnly&&t.can_edit_target?n("el-button",{attrs:{type:"primary"},on:{click:t.sumbit}},[t._v(t._s(t.constants.SUBMIT))]):t._e()],1)],2),t.showImportDia?n("import-target",{attrs:{visible:t.showImportDia},on:{refresh:t.getInfo,"update:visible":function(e){t.showImportDia=e}}}):t._e()],1)},r=[],a=(n("456d"),n("6762"),n("2fdb"),n("ac6a"),n("38fb")),i=n("fea5"),c={data:function(){return{basicInfo:{},showImportDia:!1,constants:{BASIC_INFO:a["p"],LEADER_NUMBER:a["ad"],LEADER_NAME:a["Zc"],ADD_TARGET:a["f"],UPLOAD_TARGET:a["Ve"],SAVE_DRAFT:a["le"],SUBMIT:a["Be"]},targets:[{},{},{}],keys:[],readOnly:!1,submitted:!0,can_edit_target:!0,target_reject:[],performance_status:0}},components:{"target-card":function(){return n.e("chunk-3b916096").then(n.bind(null,"a872"))},"import-target":function(){return n.e("chunk-fa06c89c").then(n.bind(null,"6888"))}},methods:{deleteTarget:function(t){var e=this;this.$confirm("此操作将永久删除该目标, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.targets.splice(t,1)}).catch(function(){})},beforeRouteLeave:function(t,e,n){this.readOnly?n():this.$confirm("修改完成后请提交，否则修改将不被保存?",a["n"],{confirmButtonText:a["F"],cancelButtonText:a["z"],type:"warning"}).then(function(){n()}).catch(function(){n(!1)})},saveDraft:function(){var t=this,e=this.targets.map(function(e){var n={};return t.keys.forEach(function(t){n[t]=e[t]}),t.keys.includes("weights")&&n.weights&&(n.weights=n.weights/100),n});Object(i["mc"])(this.$route.params.id,{target:e}).then(function(e){t.$message({message:a["gb"],type:"success"})}).catch(function(t){})},isAllFilled:function(){var t=this;return!this.targets.some(function(e){return t.keys.some(function(t){return!e[t]})})},checkWeightsSum:function(){return 100==this.targets.map(function(t){return t.weights}).reduce(function(t,e){return parseInt(t)+parseInt(e)},0)},sumbit:function(){var t=this;if(!this.targetNum)return this.$message({message:"请填写至少一个目标",type:"warning"});if(this.isAllFilled()){if(this.keys.includes("weights")&&!this.checkWeightsSum())return this.$message({message:"请将目标权重总和应为100!",type:"warning"});Object(i["lc"])(this.$route.params.id,{target:this.targets.map(function(e){var n={};return t.keys.forEach(function(t){n[t]=e[t]}),t.keys.includes("weights")&&n.weights&&(n.weights=n.weights/100),n})}).then(function(e){t.$emit("refresh")}).catch(function(t){})}else this.$message({message:"请将目标填写完整后再提交!",type:"warning"})},getInfo:function(){var t=this;Object(i["x"])(this.$route.params.orgID,this.$route.params.id,"self").then(function(e){var n=e.superior_workcode,s=e.superior_name,r=e.targets,a=e.template,i=e.can_edit_target,c=e.target_reject,o=e.performance_status;t.basicInfo={superior_workcode:n,superior_name:s},t.performance_status=o;var u=Object.keys(a||{});t.keys=u,t.can_edit_target=1==i,t.target_reject=c||[];var f=o<20;return f?r&&r.length>0?(t.readOnly=!0,t.submitted=!0,void(t.targets=r.map(function(t){return u.includes("weights")&&t.weights&&(t.weights=parseInt(100*t.weights)),t}))):(t.submitted=!1,void t.getDraft()):(t.readOnly=!0,t.submitted=!0,void(t.targets=r.map(function(t){return u.includes("weights")&&t.weights&&(t.weights=parseInt(100*t.weights)),t})))})},getDraft:function(){var t=this;Object(i["tb"])(this.$route.params.id).then(function(e){var n=e.targets;t.targets=n.map(function(e){return t.keys.includes("weights")&&e.weights&&(e.weights=parseInt(100*e.weights)),e})}).catch(function(t){})}},computed:{canPlus:function(){return this.targetNum<10},targetNum:function(){return this.targets.length},hasRejectedReasons:function(){return this.target_reject.length>0},inProgress:function(){return this.performance_status<20}},created:function(){this.getInfo()}},o=c,u=(n("8078"),n("2877")),f=Object(u["a"])(o,s,r,!1,null,"03dd6154",null);e["default"]=f.exports},d2c8:function(t,e,n){var s=n("aae3"),r=n("be13");t.exports=function(t,e,n){if(s(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}}}]);