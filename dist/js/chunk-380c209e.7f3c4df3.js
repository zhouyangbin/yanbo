(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-380c209e"],{1169:function(e,t,n){var r=n("2d95");e.exports=Array.isArray||function(e){return"Array"==r(e)}},"11e9":function(e,t,n){var r=n("52a7"),s=n("4630"),a=n("6821"),o=n("6a99"),l=n("69a8"),i=n("c69a"),c=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?c:function(e,t){if(e=a(e),t=o(t,!0),i)try{return c(e,t)}catch(n){}if(l(e,t))return s(!r.f.call(e,t),e[t])}},"19c3":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my-grade-list"},[r("nav-bar",{attrs:{list:e.nav}}),r("br"),r("section",{staticClass:"content-container"},[r("section",{staticClass:"content-container bg-white"},[r("header",{staticClass:"member-grade-info"},[r("div",{staticClass:"name"},[e._v("    "+e._s(e.evaluation_name))]),r("div",{staticClass:"finish_time"},[e._v("\n          "+e._s(e.constants.FINISHED_DATE)+": "+e._s(e.end_time)+"\n        ")])]),r("br"),r("hr"),r("br"),r("div",{staticClass:"members-list-filter"},[r("el-form",{ref:"ruleForm",staticClass:"list-filter-form",attrs:{inline:!0,model:e.memberForm}},[r("el-form-item",{attrs:{prop:"employee_name"}},[r("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.memberForm.employee_name,callback:function(t){e.$set(e.memberForm,"employee_name",t)},expression:"memberForm.employee_name"}})],1),r("el-form-item",{attrs:{prop:"superior_name"}},[r("el-input",{attrs:{placeholder:"请输入上级姓名"},model:{value:e.memberForm.superior_name,callback:function(t){e.$set(e.memberForm,"superior_name",t)},expression:"memberForm.superior_name"}})],1),r("el-form-item",{attrs:{prop:"highlevel_status"}},[r("el-select",{attrs:{placeholder:e.constants.HIGHLV_STATUS},model:{value:e.memberForm.highlevel_status,callback:function(t){e.$set(e.memberForm,"highlevel_status",t)},expression:"memberForm.highlevel_status"}},e._l(e.constants.BREF_HIGH_LEVEL_STATUS,function(e){return r("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})}),1)],1),r("el-form-item",[r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v(e._s(e.constants.RESET))])],1)],1),r("div",[r("el-popover",{attrs:{placement:"top",width:"160"},on:{hide:function(t){e.reason=""}},model:{value:e.showReasonPop,callback:function(t){e.showReasonPop=t},expression:"showReasonPop"}},[r("case-area",{attrs:{placeholder:"请填写驳回理由"},model:{value:e.reason,callback:function(t){e.reason=t},expression:"reason"}}),r("br"),r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-button",{attrs:{type:"primary",round:""},on:{click:e.batchReject}},[e._v(e._s(e.constants.SUBMIT))])],1),r("el-button",{staticStyle:{"margin-right":"20px"},attrs:{slot:"reference",type:"primary",disabled:!e.hasSelectedItem,round:""},slot:"reference"},[e._v(e._s(e.constants.BATCH_REJECT))])],1),r("el-button",{staticStyle:{"margin-right":"20px"},attrs:{disabled:!e.hasSelectedItem,type:"primary",round:""},on:{click:e.batchPass}},[e._v(e._s(e.constants.BATCH_PASS))])],1)],1),r("br"),r("distribute-summary",{attrs:{data:e.summary}}),r("br"),r("hr",{staticClass:"dash"}),r("br"),r("el-alert",{staticClass:"alert-tip",attrs:{effect:"light",closable:!1,type:"info","show-icon":""},scopedSlots:e._u([{key:"title",fn:function(){return[r("div",[e._v("\n            温馨提示:\n            "),r("span",{staticClass:"green"},[e._v("绿色")]),e._v(" 为自评,\n            "),r("span",{staticClass:"blue"},[e._v("蓝色")]),e._v(" 为上级评价\n          ")])]},proxy:!0}])}),r("br"),r("br"),r("el-table",{staticStyle:{width:"100%"},attrs:{"header-cell-class-name":"text-center","cell-class-name":"text-center",data:e.tableData,stripe:""},on:{"selection-change":e.selectionChange}},[r("el-table-column",{attrs:{type:"selection"}}),r("el-table-column",{attrs:{prop:"name",label:e.constants.LABEL_NAME},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isBigDiff(t.row)?r("el-tooltip",{attrs:{placement:"top"}},[r("div",{attrs:{slot:"content"},slot:"content"},[e._v("\n                自评和上级评总分差4分及以上或单项差2分及以上\n              ")]),r("img",{attrs:{width:"15",src:n("8788"),alt:""}})]):e._e(),e._v("\n            "+e._s(t.row.name)+"\n          ")]}}])}),r("el-table-column",{attrs:{prop:"superior_name",label:"上级姓名"}}),r("el-table-column",{attrs:{"min-width":"150",label:"自评分数/上级分数"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticClass:"self-text"},[e._v("\n              "+e._s(e._f("placeholder")(e._f("path")(t.row,["scores","self","total"]),"-"))+"\n            ")]),r("span",{staticClass:"self-superior"},[e._v("/")]),r("span",{staticClass:"superior-text"},[e._v("\n              "+e._s(e._f("placeholder")(e._f("path")(t.row,["scores","superior","total"]),"-"))+"\n            ")])]}}])}),r("el-table-column",{attrs:{"min-width":"180",label:"自评平均分/上级平均分"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticClass:"self-text"},[e._v("\n              "+e._s(e._f("placeholder")(e._f("path")(t.row,["scores","self","average"]),"-"))+"\n            ")]),r("span",{staticClass:"self-superior"},[e._v("/")]),r("span",{staticClass:"superior-text"},[e._v("\n              "+e._s(e._f("placeholder")(e._f("path")(t.row,["scores","superior","average"]),"-"))+"\n            ")])]}}])}),r("el-table-column",{attrs:{"min-width":"80",label:"成就客户"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticClass:"self-text"},[e._v("\n              "+e._s(e._f("placeholder")(e._f("path")(t.row,["scores","self","questions","1"]),"-"))+"\n            ")]),r("span",{staticClass:"self-superior"},[e._v("/")]),r("span",{staticClass:"superior-text"},[e._v("\n              "+e._s(e._f("placeholder")(e._f("path")(t.row,["scores","superior","questions","1"]),"-"))+"\n            ")])]}}])}),r("el-table-column",{attrs:{"min-width":"80",label:"创新"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticClass:"self-text"},[e._v("\n              "+e._s(e._f("placeholder")(e._f("path")(t.row,["scores","self","questions","3"]),"-"))+"\n            ")]),r("span",{staticClass:"self-superior"},[e._v("/")]),r("span",{staticClass:"superior-text"},[e._v("\n              "+e._s(e._f("placeholder")(e._f("path")(t.row,["scores","superior","questions","3"]),"-"))+"\n            ")])]}}])}),r("el-table-column",{attrs:{"min-width":"80",label:"合作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticClass:"self-text"},[e._v("\n              "+e._s(e._f("placeholder")(e._f("path")(t.row,["scores","self","questions","4"]),"-"))+"\n            ")]),r("span",{staticClass:"self-superior"},[e._v("/")]),r("span",{staticClass:"superior-text"},[e._v("\n              "+e._s(e._f("placeholder")(e._f("path")(t.row,["scores","superior","questions","4"]),"-"))+"\n            ")])]}}])}),r("el-table-column",{attrs:{"min-width":"80",label:"务实"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticClass:"self-text"},[e._v("\n              "+e._s(e._f("placeholder")(e._f("path")(t.row,["scores","self","questions","2"]),"-"))+"\n            ")]),r("span",{staticClass:"self-superior"},[e._v("/")]),r("span",{staticClass:"superior-text"},[e._v("\n              "+e._s(e._f("placeholder")(e._f("path")(t.row,["scores","superior","questions","2"]),"-"))+"\n            ")])]}}])}),r("el-table-column",{attrs:{prop:"_271_level",label:"271等级"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row._271_level?e.getLevelText(t.row._271_level):"无")+"\n            "),t.row.special_recommended?r("el-tooltip",{attrs:{placement:"top"}},[r("div",{attrs:{slot:"content"},slot:"content"},[e._v("上级特殊推荐top")]),r("img",{attrs:{width:"15",src:n("b9eb"),alt:""}})]):e._e()]}}])}),r("el-table-column",{attrs:{"min-width":"120",prop:"highlevel_status_name",label:e.constants.HIGHLV_STATUS}}),r("el-table-column",{attrs:{prop:"stage_name",label:e.constants.LABEL_STATUS}}),r("el-table-column",{attrs:{fixed:"right",label:e.constants.OPERATIONS},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return e.goDetail(t.row)}}},[e._v(e._s(e.constants.VIEW_DETAILS))])]}}])})],1),r("br"),r("el-row",{attrs:{type:"flex",justify:"end"}},[r("pagination",{attrs:{currentPage:e.currentPage,total:e.total},on:{"current-change":e.currentChange}})],1)],1)])],1)},s=[],a=(n("456d"),n("ac4d"),n("8a81"),n("ac6a"),n("cebc")),o=n("38fb"),l=n("c9f1"),i=n("fea5"),c=(n("47af"),n("2b0e")),u={data:function(){return{total:0,currentPage:1,evaluation_name:"",end_time:"",selectedArr:[],reason:"",showReasonPop:!1,tableData:[],summary:{top:{count:0,expected:0},middle:{count:0,expected:0},bottom:{count:0,expected:0}},memberForm:{superior_name:"",employee_name:"",highlevel_status:""},nav:[{label:o["eb"],href:l["j"]},{label:o["rd"],active:!0}],constants:{BREF_HIGH_LEVEL_STATUS:o["v"],FINISHED_DATE:o["Rb"],SUBMIT:o["Be"],BATCH_REJECT:o["s"],BATCH_PASS:o["r"],LABEL_NAME:o["Cc"],LEADER_EVALUATION_STATUS:o["Xc"],SELF_SCORE:o["qe"],NAME:o["Ad"],VIEW_DETAILS:o["af"],RESET:o["ge"],LEADER_NAME:o["Zc"],LEADER_SOCRE:o["ed"],LABEL_STATUS:o["Rc"],OPERATIONS:o["Hd"],HIGHLV_STATUS:o["dc"]}}},components:{"nav-bar":function(){return n.e("chunk-d5094d72").then(n.bind(null,"3208"))},pagination:function(){return n.e("chunk-04e32ffc").then(n.bind(null,"486f"))},"distribute-summary":function(){return n.e("chunk-3cd4c72f").then(n.bind(null,"4d4b"))},"case-area":function(){return n.e("chunk-4cd59b3a").then(n.bind(null,"b5ec"))}},watch:{memberForm:{handler:function(e){this.currentPage=1,this.refreshData(Object(a["a"])({page:1},e))},deep:!0,immediate:!0}},methods:{resetForm:function(e){this.$refs[e].resetFields()},selectionChange:function(e){this.selectedArr=e},batchPass:function(){var e=this;this.$confirm("是否批量通过, 是否继续?","提示",{confirmButtonText:o["F"],cancelButtonText:o["z"],type:"warning"}).then(function(){Object(i["fc"])({ids:e.selectedArr.map(function(e){return e.id}),type:2}).then(function(t){e.$message({message:o["L"],type:"success"}),e.refreshData(Object(a["a"])({page:1},e.memberForm)),e.page=1,e.selectedArr=[]}).catch(function(e){})}).catch(function(){})},batchReject:function(){var e=this;this.reason?Object(i["fc"])({ids:this.selectedArr.map(function(e){return e.id}),type:1,reason:this.reason}).then(function(t){e.$message({message:o["L"],type:"success"}),e.refreshData(Object(a["a"])({page:1},e.memberForm)),e.page=1,e.showReasonPop=!1,e.selectedArr=[]}).catch(function(e){}):this.$message({message:"请填写驳回理由!",type:"warning"})},currentChange:function(e){this.currentPage=e,this.refreshData(Object(a["a"])({page:e},this.memberForm))},refreshData:function(e){var t=this;Object(i["w"])(this.$route.params.id,e).then(function(e){var n=e.total,r=e.data,s=e.overview,a=e.evaluation_name,o=e.end_time;t.total=n,t.tableData=r,t.evaluation_name=a,t.end_time=o,t.postSummary(s)})},goDetail:function(e){this.$router.push(Object(l["g"])(this.$route.params.id,e.id))},postSummary:function(e){var t={},n=!0,r=!1,s=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value;t[i.key]={count:parseInt(i.count),expected:i.expected_value}}}catch(c){r=!0,s=c}finally{try{n||null==l.return||l.return()}finally{if(r)throw s}}this.summary=Object(a["a"])({},t)},getLevelText:function(e){return o["id"][e]},isBigDiff:function(e){var t=null!=c["default"].filter("path")(e,["scores","self","total"])&&null!=c["default"].filter("path")(e,["scores","superior","total"])&&Math.abs(c["default"].filter("path")(e,["scores","self","total"])-c["default"].filter("path")(e,["scores","superior","total"]))>=4,n=Object.keys(c["default"].filter("path")(e,["scores","self","questions"])||{}),r=n.some(function(t){return null!=c["default"].filter("path")(e,["scores","self","questions",t])&&null!=c["default"].filter("path")(e,["scores","superior","questions",t])&&Math.abs(c["default"].filter("path")(e,["scores","self","questions",t])-c["default"].filter("path")(e,["scores","superior","questions",t]))>=2});return t||r}},computed:{hasSelectedItem:function(){return this.selectedArr.length>0}}},f=u,p=(n("abde"),n("2877")),m=Object(p["a"])(f,r,s,!1,null,"0807c92a",null);t["default"]=m.exports},"37c8":function(e,t,n){t.f=n("2b4c")},"3a72":function(e,t,n){var r=n("7726"),s=n("8378"),a=n("2d00"),o=n("37c8"),l=n("86cc").f;e.exports=function(e){var t=s.Symbol||(s.Symbol=a?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||l(t,e,{value:o.f(e)})}},"47af":function(e,t,n){"use strict";n.d(t,"a",function(){return r});n("6b54");var r=function(e){var t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate(),a=e.getHours(),o=e.getMinutes();e.getSeconds();return[t,n,r].map(s).join("-")+" "+[a,o].map(s).join(":")},s=function(e){return e=e.toString(),e[1]?e:"0"+e}},"67ab":function(e,t,n){var r=n("ca5a")("meta"),s=n("d3f4"),a=n("69a8"),o=n("86cc").f,l=0,i=Object.isExtensible||function(){return!0},c=!n("79e5")(function(){return i(Object.preventExtensions({}))}),u=function(e){o(e,r,{value:{i:"O"+ ++l,w:{}}})},f=function(e,t){if(!s(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,r)){if(!i(e))return"F";if(!t)return"E";u(e)}return e[r].i},p=function(e,t){if(!a(e,r)){if(!i(e))return!0;if(!t)return!1;u(e)}return e[r].w},m=function(e){return c&&h.NEED&&i(e)&&!a(e,r)&&u(e),e},h=e.exports={KEY:r,NEED:!1,fastKey:f,getWeak:p,onFreeze:m}},"7bbc":function(e,t,n){var r=n("6821"),s=n("9093").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(e){try{return s(e)}catch(t){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==a.call(e)?l(e):s(r(e))}},8788:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAANlBMVEUAAAD6oVj6oFj6oVf5oFj5oVj8o1n6oVj5oVj6oFf7oln7oln/v2D6oVj6oFf7oVr/qnH5oFfzw/LhAAAAEXRSTlMAncDz44RS6dmMdjwIp+9ECZWwoVQAAACiSURBVCjPhZNJFsQgCESJM2IG7n/ZzutFC6YDtcMv4JMCpghDi7EFJHho9Mo/1T40LYmVUpE080N50p3/aDdyRX6ZJ7GUOKNv/5FEQdUojRt3ntoANhH2G9d3XAGI3zEToIURgoUDNAs3iBaODnaKe09DHerrCMSKK8qkP5WPQ0Z1GUm4Lpnel4Fm5Y00Fjuk8xSXi20m24q2kd018JfIWcEPrCEp2UGnoekAAAAASUVORK5CYII="},"8a81":function(e,t,n){"use strict";var r=n("7726"),s=n("69a8"),a=n("9e1e"),o=n("5ca1"),l=n("2aba"),i=n("67ab").KEY,c=n("79e5"),u=n("5537"),f=n("7f20"),p=n("ca5a"),m=n("2b4c"),h=n("37c8"),d=n("3a72"),b=n("d4c0"),_=n("1169"),v=n("cb7c"),A=n("d3f4"),y=n("6821"),g=n("6a99"),S=n("4630"),w=n("2aeb"),E=n("7bbc"),C=n("11e9"),j=n("86cc"),F=n("0d58"),x=C.f,T=j.f,O=E.f,V=r.Symbol,D=r.JSON,k=D&&D.stringify,I="prototype",B=m("_hidden"),R=m("toPrimitive"),L={}.propertyIsEnumerable,P=u("symbol-registry"),U=u("symbols"),M=u("op-symbols"),N=Object[I],H="function"==typeof V,q=r.QObject,G=!q||!q[I]||!q[I].findChild,J=a&&c(function(){return 7!=w(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=x(N,t);r&&delete N[t],T(e,t,n),r&&e!==N&&T(N,t,r)}:T,K=function(e){var t=U[e]=w(V[I]);return t._k=e,t},Q=H&&"symbol"==typeof V.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof V},X=function(e,t,n){return e===N&&X(M,t,n),v(e),t=g(t,!0),v(n),s(U,t)?(n.enumerable?(s(e,B)&&e[B][t]&&(e[B][t]=!1),n=w(n,{enumerable:S(0,!1)})):(s(e,B)||T(e,B,S(1,{})),e[B][t]=!0),J(e,t,n)):T(e,t,n)},z=function(e,t){v(e);var n,r=b(t=y(t)),s=0,a=r.length;while(a>s)X(e,n=r[s++],t[n]);return e},W=function(e,t){return void 0===t?w(e):z(w(e),t)},Y=function(e){var t=L.call(this,e=g(e,!0));return!(this===N&&s(U,e)&&!s(M,e))&&(!(t||!s(this,e)||!s(U,e)||s(this,B)&&this[B][e])||t)},$=function(e,t){if(e=y(e),t=g(t,!0),e!==N||!s(U,t)||s(M,t)){var n=x(e,t);return!n||!s(U,t)||s(e,B)&&e[B][t]||(n.enumerable=!0),n}},Z=function(e){var t,n=O(y(e)),r=[],a=0;while(n.length>a)s(U,t=n[a++])||t==B||t==i||r.push(t);return r},ee=function(e){var t,n=e===N,r=O(n?M:y(e)),a=[],o=0;while(r.length>o)!s(U,t=r[o++])||n&&!s(N,t)||a.push(U[t]);return a};H||(V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(n){this===N&&t.call(M,n),s(this,B)&&s(this[B],e)&&(this[B][e]=!1),J(this,e,S(1,n))};return a&&G&&J(N,e,{configurable:!0,set:t}),K(e)},l(V[I],"toString",function(){return this._k}),C.f=$,j.f=X,n("9093").f=E.f=Z,n("52a7").f=Y,n("2621").f=ee,a&&!n("2d00")&&l(N,"propertyIsEnumerable",Y,!0),h.f=function(e){return K(m(e))}),o(o.G+o.W+o.F*!H,{Symbol:V});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;te.length>ne;)m(te[ne++]);for(var re=F(m.store),se=0;re.length>se;)d(re[se++]);o(o.S+o.F*!H,"Symbol",{for:function(e){return s(P,e+="")?P[e]:P[e]=V(e)},keyFor:function(e){if(!Q(e))throw TypeError(e+" is not a symbol!");for(var t in P)if(P[t]===e)return t},useSetter:function(){G=!0},useSimple:function(){G=!1}}),o(o.S+o.F*!H,"Object",{create:W,defineProperty:X,defineProperties:z,getOwnPropertyDescriptor:$,getOwnPropertyNames:Z,getOwnPropertySymbols:ee}),D&&o(o.S+o.F*(!H||c(function(){var e=V();return"[null]"!=k([e])||"{}"!=k({a:e})||"{}"!=k(Object(e))})),"JSON",{stringify:function(e){var t,n,r=[e],s=1;while(arguments.length>s)r.push(arguments[s++]);if(n=t=r[1],(A(t)||void 0!==e)&&!Q(e))return _(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!Q(t))return t}),r[1]=t,k.apply(D,r)}}),V[I][R]||n("32e9")(V[I],R,V[I].valueOf),f(V,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},9093:function(e,t,n){var r=n("ce10"),s=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},abde:function(e,t,n){"use strict";var r=n("aea2"),s=n.n(r);s.a},ac4d:function(e,t,n){n("3a72")("asyncIterator")},aea2:function(e,t,n){},b9eb:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEUAAAD6oVj7pFr6oVf6oFj6oVj5oVj6oFj/qV/5oVj6oVf7oVj5oVj7o1n6oVf5oVf6oFj6oFf6oVj/pVr6oVj6oFj6oVf6oFf6oVf6oVf5oVn6olj5olr6olj5pFv/pln/pln5oFfp19XRAAAAIXRSTlMAyDr3uOfYzg/d031VSPKumYxvIu7CvqeYlYdjWDQtKBSkMb/WAAAAn0lEQVQoz3XRWQrEIBBF0Rdj1MxTz3Ptf5OdasGG4LtfhUcFEbtM7Z5gXUSqwNCKyMLQbTgSW2XLE2wVXd7CQbHI4ySazVonv+acmTLiI634dJEZJLYmjLvTpBWxU48qoeyrUXMs4Tk6HDmOsBxbnDn2mDgGzBQboKV4BRaKHXCn+AE6hh5Az/AGwDA0AF4Jm/1DgKB/Vun0tuXfBj34BdHUNaPNsx2dAAAAAElFTkSuQmCC"},d4c0:function(e,t,n){var r=n("0d58"),s=n("2621"),a=n("52a7");e.exports=function(e){var t=r(e),n=s.f;if(n){var o,l=n(e),i=a.f,c=0;while(l.length>c)i.call(e,o=l[c++])&&t.push(o)}return t}}}]);