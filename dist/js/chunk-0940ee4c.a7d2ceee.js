(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0940ee4c"],{"26fa":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar",{attrs:{list:t.nav}}),n(t.currentComponent,{ref:"child",tag:"component",on:{refresh:t.getStatus}})],1)},a=[],c=(n("cadf"),n("551c"),n("097d"),n("38fb")),u=n("c9f1"),o=n("fea5"),s={data:function(){return{currentComponent:"set-targets",nav:[{label:c["Uc"],href:u["h"]},{label:"评分详情",active:!0}]}},components:{grade:function(){return n.e("chunk-bc3e253c").then(n.bind(null,"08d2"))},"nav-bar":function(){return n.e("chunk-5a85c387").then(n.bind(null,"3208"))},"set-targets":function(){return n.e("chunk-af469c82").then(n.bind(null,"ac13"))}},beforeRouteLeave:function(t,e,n){"set-targets"==this.currentComponent?this.$refs["child"].beforeRouteLeave(t,e,n):n()},methods:{getStatus:function(){var t=this;this.currentComponent="",Object(o["n"])(this.$route.params.orgID,this.$route.params.id,"self").then(function(e){var n=e.stage;t.currentComponent=n>=20?"grade":"set-targets"})}},created:function(){this.getStatus()}},i=s,f=(n("5df1"),n("2877")),h=Object(f["a"])(i,r,a,!1,null,"2fbbe2c6",null);h.options.__file="index.vue";e["default"]=h.exports},"3fa6":function(t,e,n){},"5df1":function(t,e,n){"use strict";var r=n("3fa6"),a=n.n(r);a.a}}]);