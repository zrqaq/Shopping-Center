(self["webpackChunkvue3_nb0"]=self["webpackChunkvue3_nb0"]||[]).push([[654],{18778:function(e,o,r){var t,l,c;r(55321)["default"];(function(a,i){l=[o,r(47494)],t=i,c="function"===typeof t?t.apply(o,l):t,void 0===c||(e.exports=c)})(0,(function(e,o){var r=function(e){"undefined"!==typeof console&&console&&console.error&&console.error(e)};o?o.registerTheme("theme",{color:["#3fb1e3","#6be6c1","#626c91","#a0a7e6","#c4ebad","#96dee8"],backgroundColor:"rgba(252,252,252,0)",textStyle:{},title:{textStyle:{color:"#666666"},subtextStyle:{color:"#999999"}},line:{itemStyle:{borderWidth:"2"},lineStyle:{width:"3"},symbolSize:"8",symbol:"emptyCircle",smooth:!1},radar:{itemStyle:{borderWidth:"2"},lineStyle:{width:"3"},symbolSize:"8",symbol:"emptyCircle",smooth:!1},bar:{itemStyle:{barBorderWidth:0,barBorderColor:"#ccc"}},pie:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},scatter:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},boxplot:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},parallel:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},sankey:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},funnel:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},gauge:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},candlestick:{itemStyle:{color:"#e6a0d2",color0:"transparent",borderColor:"#e6a0d2",borderColor0:"#3fb1e3",borderWidth:"2"}},graph:{itemStyle:{borderWidth:0,borderColor:"#ccc"},lineStyle:{width:"1",color:"#cccccc"},symbolSize:"8",symbol:"emptyCircle",smooth:!1,color:["#3fb1e3","#6be6c1","#626c91","#a0a7e6","#c4ebad","#96dee8"],label:{color:"#ffffff"}},map:{itemStyle:{areaColor:"#eeeeee",borderColor:"#aaaaaa",borderWidth:.5},label:{color:"#ffffff"},emphasis:{itemStyle:{areaColor:"rgba(63,177,227,0.25)",borderColor:"#3fb1e3",borderWidth:1},label:{color:"#3fb1e3"}}},geo:{itemStyle:{areaColor:"#eeeeee",borderColor:"#aaaaaa",borderWidth:.5},label:{color:"#ffffff"},emphasis:{itemStyle:{areaColor:"rgba(63,177,227,0.25)",borderColor:"#3fb1e3",borderWidth:1},label:{color:"#3fb1e3"}}},categoryAxis:{axisLine:{show:!0,lineStyle:{color:"#cccccc"}},axisTick:{show:!1,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#999999"},splitLine:{show:!0,lineStyle:{color:["#eeeeee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},valueAxis:{axisLine:{show:!0,lineStyle:{color:"#cccccc"}},axisTick:{show:!1,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#999999"},splitLine:{show:!0,lineStyle:{color:["#eeeeee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},logAxis:{axisLine:{show:!0,lineStyle:{color:"#cccccc"}},axisTick:{show:!1,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#999999"},splitLine:{show:!0,lineStyle:{color:["#eeeeee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},timeAxis:{axisLine:{show:!0,lineStyle:{color:"#cccccc"}},axisTick:{show:!1,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#999999"},splitLine:{show:!0,lineStyle:{color:["#eeeeee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},toolbox:{iconStyle:{borderColor:"#999999"},emphasis:{iconStyle:{borderColor:"#666666"}}},legend:{textStyle:{color:"#999999"}},tooltip:{axisPointer:{lineStyle:{color:"#cccccc",width:1},crossStyle:{color:"#cccccc",width:1}}},timeline:{lineStyle:{color:"#626c91",width:1},itemStyle:{color:"#626c91",borderWidth:1},controlStyle:{color:"#626c91",borderColor:"#626c91",borderWidth:.5},checkpointStyle:{color:"#3fb1e3",borderColor:"#3fb1e3"},label:{color:"#626c91"},emphasis:{itemStyle:{color:"#626c91"},controlStyle:{color:"#626c91",borderColor:"#626c91",borderWidth:.5},label:{color:"#626c91"}}},visualMap:{color:["#2a99c9","#afe8ff"]},dataZoom:{backgroundColor:"rgba(255,255,255,0)",dataBackgroundColor:"rgba(222,222,222,1)",fillerColor:"rgba(114,230,212,0.25)",handleColor:"#cccccc",handleSize:"100%",textStyle:{color:"#999999"}},markPoint:{label:{color:"#ffffff"},emphasis:{label:{color:"#ffffff"}}}}):r("ECharts is not Loaded")}))},69654:(e,o,r)=>{"use strict";r.r(o),r.d(o,{default:()=>W});r(59532),r(14580),r(39120);var t=r(44401),l=r(28849),c=r(71066),a=r(94899),i=(r(18778),{class:"home_view"}),n={class:"projectTitle"},d={class:"count_list"},s={class:"index_card_head"},u=(0,t._)("div",{class:"card_head_title"}," 商品订单 ",-1),h={class:"card_head_right"},f={class:"count_item"},b=(0,t._)("div",{class:"count_title"},"商品订单总数",-1),y={class:"count_num"},m={class:"card_list"},p={class:"index_card_head"},w=(0,t._)("div",{class:"card_head_title"}," 商品订单 ",-1),C={class:"card_head_right"},v={class:"card_item"},S=(0,t._)("div",{id:"orderstotalEchart1",class:"Echart",style:{width:"100%",height:"400px"}},null,-1),_=[S];const g={__name:"HomeView",setup:function(e){var o,r=null===(o=(0,t.FN)())||void 0===o?void 0:o.appContext.config.globalProperties,S=r.$project.projectName,g=(0,c.iH)({}),x=function(){g.value.closeordersCountType=!0,g.value.hiddenordersCountType=!0,L("orders","首页总数")&&k()},W=(0,c.iH)(0),k=function(){null===r||void 0===r||r.$http({url:"orders/count",method:"get"}).then((function(e){W.value=e.data.data}))},T=function(e){g.value[e]=!g.value[e]},L=function(e,o){return null===r||void 0===r?void 0:r.$toolUtil.isAuth(e,o)},A=(0,t.f3)("echarts"),I=function(e){z.value[e]=!z.value[e],setTimeout((function(){F()}),1e3)},z=(0,c.iH)({closeordersChartType1:!0,hiddenordersChartType1:!0}),F=function(){L("orders","首页统计")&&B()},B=function(){(0,t.Y3)((function(){var e=A.init(document.getElementById("orderstotalEchart1"),"theme");null===r||void 0===r||r.$http({url:"orders/value/goodname/total",method:"get"}).then((function(o){for(var r=o.data.data,t=[],l=[],c=[],a=0;a<r.length;a++)t.push(r[a].goodname),l.push(parseFloat(r[a].total)),c.push({value:parseFloat(r[a].total),name:r[a].goodname});var i={};i={title:{text:"商品月销售额统计",left:"center"},tooltip:{trigger:"item",formatter:"{b} : {c}"},xAxis:{data:t,type:"category",axisLabel:{interval:0,rotate:30}},yAxis:{type:"value",minInterval:1},series:{data:l,type:"bar"}},e.clear(),e.setOption(i),e.resize()}))}))},j=function(){x(),F()};return j(),function(e,o){var r=(0,t.up)("ArrowUpBold"),x=(0,t.up)("el-icon"),k=(0,t.up)("CloseBold"),A=(0,t.up)("el-collapse-transition"),F=(0,t.up)("el-card");return(0,t.wg)(),(0,t.iD)("div",i,[(0,t._)("div",n,"欢迎使用 "+(0,l.zw)((0,c.SU)(S)),1),(0,t._)("div",d,[L("orders","首页总数")?((0,t.wg)(),(0,t.j4)(A,{key:0},{default:(0,t.w5)((function(){return[(0,t.wy)((0,t.Wm)(F,{class:"card_view count-item"},{header:(0,t.w5)((function(){return[(0,t._)("div",s,[u,(0,t._)("div",h,[(0,t.Wm)(x,{onClick:o[0]||(o[0]=function(e){return T("hiddenordersCountType")}),class:(0,l.C_)(["showIcons",g.value.hiddenordersCountType?"showIcons1":""])},{default:(0,t.w5)((function(){return[(0,t.Wm)(r)]})),_:1},8,["class"]),(0,t.Wm)(x,{onClick:o[1]||(o[1]=function(e){return T("closeordersCountType")}),class:"closeIcons"},{default:(0,t.w5)((function(){return[(0,t.Wm)(k)]})),_:1})])])]})),default:(0,t.w5)((function(){return[(0,t.Wm)(A,null,{default:(0,t.w5)((function(){return[(0,t.wy)((0,t._)("div",f,[b,(0,t._)("div",y,(0,l.zw)(W.value),1)],512),[[a.F8,g.value.hiddenordersCountType]])]})),_:1})]})),_:1},512),[[a.F8,g.value.closeordersCountType]])]})),_:1})):(0,t.kq)("",!0)]),(0,t._)("div",m,[L("orders","首页统计")?((0,t.wg)(),(0,t.j4)(A,{key:0},{default:(0,t.w5)((function(){return[(0,t.wy)((0,t.Wm)(F,{class:"card_view chart-item"},{header:(0,t.w5)((function(){return[(0,t._)("div",p,[w,(0,t._)("div",C,[(0,t.Wm)(x,{onClick:o[2]||(o[2]=function(e){return I("hiddenordersChartType1")}),class:(0,l.C_)(["showIcons",z.value.hiddenordersChartType1?"showIcons1":""])},{default:(0,t.w5)((function(){return[(0,t.Wm)(r)]})),_:1},8,["class"]),(0,t.Wm)(x,{onClick:o[3]||(o[3]=function(e){return I("closeordersChartType1")}),class:"closeIcons"},{default:(0,t.w5)((function(){return[(0,t.Wm)(k)]})),_:1})])])]})),default:(0,t.w5)((function(){return[(0,t.Wm)(A,null,{default:(0,t.w5)((function(){return[(0,t.wy)((0,t._)("div",v,_,512),[[a.F8,z.value.hiddenordersChartType1]])]})),_:1})]})),_:1},512),[[a.F8,z.value.closeordersChartType1]])]})),_:1})):(0,t.kq)("",!0)])])}}},x=g,W=x}}]);
//# sourceMappingURL=654.cb2acca2.js.map