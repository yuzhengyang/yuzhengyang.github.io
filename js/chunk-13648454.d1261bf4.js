(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13648454"],{"54cc":function(e,t,n){"use strict";n("84e7")},"84e7":function(e,t,n){},be45:function(e,t,n){"use strict";n.r(t);n("b0c0"),n("a4d3"),n("e01a");var c=n("7a23"),r={style:{width:"100%"}},o={key:0},i={class:"card-header"},l={style:{color:"#aaa","font-size":"14px"}},s={style:{color:"#888","font-size":"14px"}},a={key:0,style:{padding:"10px"}},u=["id"],d={style:{"font-weight":"bold",color:"#000"}},b={style:{"font-weight":"bold",color:"#aaa"}},O={style:{"font-weight":"bold",color:"#f00"}},j=Object(c["createTextVNode"])("刷新结果"),h=Object(c["createTextVNode"])(" Close "),m={id:"outputContainer"},f={style:{"font-size":"14px","font-weight":"bold"}},p=Object(c["createElementVNode"])("span",{style:{color:"#f00"}},"执行指令：",-1),g={style:{margin:"-0px -40px -0px -40px"}},C={key:0,style:{"font-size":"14px","font-weight":"bold",color:"#f00",margin:"40px"}};function v(e,t,n,v,k,V){var y=this,x=Object(c["resolveComponent"])("el-alert"),w=Object(c["resolveComponent"])("el-col"),N=Object(c["resolveComponent"])("el-row"),E=Object(c["resolveComponent"])("el-main"),B=Object(c["resolveComponent"])("VideoPlay"),R=Object(c["resolveComponent"])("el-icon"),L=Object(c["resolveComponent"])("el-button"),S=Object(c["resolveComponent"])("Operation"),_=Object(c["resolveComponent"])("el-aside"),D=Object(c["resolveComponent"])("el-container"),T=Object(c["resolveComponent"])("el-tag"),z=Object(c["resolveComponent"])("el-card"),I=Object(c["resolveComponent"])("CircleCloseFilled"),P=Object(c["resolveComponent"])("v-md-editor"),F=Object(c["resolveComponent"])("el-drawer");return Object(c["openBlock"])(),Object(c["createBlock"])(D,{style:{height:"100%"}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(E,{style:{height:"100%"}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(N,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(w,{span:24},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",r,[void 0==y.$store.state.user.token||""==y.$store.state.user.token?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createVNode"])(x,{title:"登录后可执行共享的SSH命令~",type:"success",closable:!1})])):Object(c["createCommentVNode"])("",!0)])]})),_:1})]})),_:1}),Object(c["createVNode"])(N,null,{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(k.shareList,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(w,{xs:24,sm:12,md:12,lg:8,xl:4,key:e},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(z,null,{header:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",i,[Object(c["createElementVNode"])("span",null,"🖥️ "+Object(c["toDisplayString"])(e.name),1),Object(c["createElementVNode"])("span",l,"（"+Object(c["toDisplayString"])(e.address)+"）",1)])]})),footer:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("span",s,Object(c["toDisplayString"])(e.description),1)]),e.teamExecuteList.length>0?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.teamExecuteList,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(T,{style:{"margin-right":"5px",cursor:"pointer"},key:e.id,type:"success",size:"small"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.name),1)]})),_:2},1024)})),128))])):Object(c["createCommentVNode"])("",!0)]})),default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.cmdList,(function(t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:t,class:"cmd-item"},[Object(c["createVNode"])(D,{style:{margin:"2px"}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(E,{style:{"font-size":"14px"}},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t.name),1)]})),_:2},1024),y.isLogin?(Object(c["openBlock"])(),Object(c["createBlock"])(_,{key:0,style:{padding:"3px"},width:"100px"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(L,{type:"success",circle:"",onClick:function(n){return V.runCmd(e,t)}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(R,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(B)]})),_:1})]})),_:2},1032,["onClick"]),Object(c["createVNode"])(L,{type:"primary",circle:""},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(R,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(S)]})),_:1})]})),_:1})]})),_:2},1024)):Object(c["createCommentVNode"])("",!0)]})),_:2},1024)])})),128))]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1}),Object(c["createVNode"])(F,{modelValue:k.drawerPanel.visible,"onUpdate:modelValue":t[1]||(t[1]=function(e){return k.drawerPanel.visible=e}),direction:"btt","show-close":!1,"before-close":V.handleClose,size:"85%","destroy-on-close":"true"},{header:Object(c["withCtx"])((function(e){var t=e.close,n=e.titleId,r=e.titleClass;return[Object(c["createElementVNode"])("div",{id:n,class:Object(c["normalizeClass"])(r)},[Object(c["createElementVNode"])("span",d,"🖥️ "+Object(c["toDisplayString"])(k.currentRunning.machine.name),1),Object(c["createElementVNode"])("span",b,"（"+Object(c["toDisplayString"])(k.currentRunning.machine.address)+"）",1),Object(c["createElementVNode"])("span",O,Object(c["toDisplayString"])(k.currentRunning.cmd.name),1)],10,u),Object(c["createVNode"])(L,{type:"success",onClick:V.refreshCmdLogOutput},{default:Object(c["withCtx"])((function(){return[j]})),_:1},8,["onClick"]),Object(c["createVNode"])(L,{type:"danger",onClick:t},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(R,{class:"el-icon--left"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(I)]})),_:1}),h]})),_:2},1032,["onClick"])]})),default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",m,[Object(c["createElementVNode"])("div",f,[p,Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(k.currentRunning.cmd.contentTa),1)]),Object(c["createElementVNode"])("div",g,[Object(c["createVNode"])(P,{modelValue:k.currentRunning.output,"onUpdate:modelValue":t[0]||(t[0]=function(e){return k.currentRunning.output=e}),mode:"preview",ref:"editor",onCopyCodeSuccess:V.handleCopyCodeSuccess},null,8,["modelValue","onCopyCodeSuccess"])]),y.currentRunning.runFinish?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",C,"执行指令完成！")):Object(c["createCommentVNode"])("",!0)])]})),_:1},8,["modelValue","before-close"])]})),_:1})]})),_:1})}var k=n("3ef4"),V=n("c9a1"),y=n("b775"),x=(n("01ea"),n("5f87"),n("2ef0"),{data:function(){return{user:{},isLogin:!1,shareList:[],drawerPanel:{visible:!1},currentRunning:{machine:{},cmd:{},log:{},output:"",refreshTimer:"",refreshCount:0,runFinish:!1}}},components:{},mounted:function(){document.title="Hidoc-SSH",this.user=this.$store.state.user,void 0==this.user.token||""==this.user.token?(this.isLogin=!1,this.user.roles=[]):this.isLogin=!0,this.user.token&&this.getCurrentUserInfo(),this.getShareList()},methods:{getCurrentUserInfo:function(){var e=this;Object(y["a"])({url:"/user/currentUserInfo",method:"post"}).then((function(t){0==t.code&&(e.user=t.meta.user)}))},getShareList:function(){var e=this;Object(y["a"])({url:"/openapi/serverMan/shareList",method:"post",data:{token:this.$store.state.user.token}}).then((function(t){0==t.code&&(e.shareList=t.data)}))},runCmd:function(e,t){var n=this;return console.log("runCmd: "+t.id),Object(y["a"])({url:"/serverManCmd/run",method:"post",data:{token:this.$store.state.user.token,id:t.id}}).then((function(c){0==c.code&&(console.log(c),n.currentRunning.log=c.meta.log,n.openDrawerPanel(e,t),Object(k["a"])({message:c.msg,type:"success",duration:5e3}))}))},refreshCmdLogOutput:function(){var e=this;if(this.currentRunning.refreshCount--,this.currentRunning.log&&this.currentRunning.refreshCount>0)return Object(y["a"])({url:"/serverManExeLog/fileDetail",method:"post",data:{token:this.$store.state.user.token,id:this.currentRunning.log.id}}).then((function(t){0==t.code&&(e.currentRunning.output="```bash\r\n"+t.meta.fileDetail+"\r\n```",t.meta.fileDetail.indexOf("##hidoc->serverman.run::end")>0&&(e.currentRunning.runFinish=!0,clearInterval(e.currentRunning.refreshTimer)),e.$nextTick((function(){var e=document.getElementById("outputContainer").parentElement;e.scrollTop=e.scrollHeight-e.clientHeight})))}))},openDrawerPanel:function(e,t){this.currentRunning.machine=e,this.currentRunning.cmd=t,this.currentRunning.output="```bash\r\n... ... 正在获取结果信息 ... ...\r\n```",this.drawerPanel.visible=!0,this.currentRunning.refreshCount=100,this.currentRunning.refreshTimer=setInterval(this.refreshCmdLogOutput,2e3)},handleClose:function(){var e=this;V["a"].confirm("确定要关闭抽屉吗？").then((function(){e.drawerPanel.visible=!1,clearInterval(e.currentRunning.refreshTimer)})).catch((function(){}))},handleCopyCodeSuccess:function(e){Object(k["a"])({message:"复制成功",type:"success",duration:1e3})}}}),w=(n("54cc"),n("6b0d")),N=n.n(w);const E=N()(x,[["render",v]]);t["default"]=E}}]);
//# sourceMappingURL=chunk-13648454.d1261bf4.js.map