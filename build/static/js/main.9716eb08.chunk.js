(this["webpackJsonpcolor-app"]=this["webpackJsonpcolor-app"]||[]).push([[0],{286:function(e,a,t){e.exports=t.p+"static/media/bg.586a908d.svg"},315:function(e,a,t){e.exports=t(717)},320:function(e,a,t){},716:function(e,a,t){},717:function(e,a,t){"use strict";t.r(a);var o,n,r,l=t(0),i=t.n(l),c=t(23),s=t.n(c),m=t(39),d=(t(320),t(108)),u=t(27),h=t(28),p=t(14),g=t(30),f=t(29),b=t(64),v=t(34),C=t(130),y=t.n(C),E=function(e){Object(g.a)(t,e);var a=Object(f.a)(t);function t(e){var o;return Object(u.a)(this,t),(o=a.call(this,e)).deletePalette=o.deletePalette.bind(Object(p.a)(o)),o.handleClick=o.handleClick.bind(Object(p.a)(o)),o}return Object(h.a)(t,[{key:"deletePalette",value:function(e){e.stopPropagation(),this.props.openDialog(this.props.id)}},{key:"handleClick",value:function(){this.props.goToPalette(this.props.id)}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors.map((function(e){return i.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})}));return i.a.createElement("div",{className:a.root,onClick:this.handleClick},i.a.createElement(y.a,{className:a.deleteIcon,style:{transition:"all 0.3s ease-in-out"},onClick:this.deletePalette}),i.a.createElement("div",{className:a.colors},n),i.a.createElement("h5",{className:a.title},t," ",i.a.createElement("span",{className:a.emoji},o)))}}]),t}(l.PureComponent),x=Object(v.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:"1"}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"o.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},delete:{},deleteIcon:{color:"white",backgroundColor:"red",width:"20px",heigth:"20px",position:"absolute",top:"0px",right:"0px",padding:"10px",zIndex:"10",opacity:"0",transition:"all 0.3s ease-in-out"}})(E),w=t(106),k=t.n(w),j=t(192),O=t.n(j),S=t(135),N=t.n(S),P=t(195),F=t.n(P),B=t(196),D=t.n(B),I=t(198),T=t.n(I),A=t(288),L=t.n(A),G=t(136),R=t.n(G),M=t(107),z=t.n(M),U=t(86),H=t(19),V=function(e){return"@media (max-width: ".concat({xs:"576px",sm:"768px",md:"992px",lg:"1200px",xl:"1600px"}[e],")")},W=t(286),q={"@global":{".fade-exit":{opacity:"1"},".fade-exit-active":{opacity:"0",transition:"0.5s ease-out"}},root:{heigth:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f69100",backgroundImage:"url(".concat(t.n(W).a,")"),backgroundSize:"cover",overflow:"scroll"},heading:{fontSize:"2rem"},container:(o={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(H.a)(o,V("xl"),{width:"80%"}),Object(H.a)(o,V("xs"),{width:"70%"}),o),nav:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",color:"white","& a":{color:"white"}},palettes:(n={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"2.5rem"},Object(H.a)(n,V("md"),{gridTemplateColumns:"repeat(2, 50%)"}),Object(H.a)(n,V("xs"),{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1rem"}),n)},J=t(197),K=t.n(J),Y=t(133),_=t.n(Y),Q=function(e){Object(g.a)(t,e);var a=Object(f.a)(t);function t(e){var o;return Object(u.a)(this,t),(o=a.call(this,e)).state={openDeleteDialog:!1,deletingId:""},o.openDialog=o.openDialog.bind(Object(p.a)(o)),o.closeDialog=o.closeDialog.bind(Object(p.a)(o)),o.handleDelete=o.handleDelete.bind(Object(p.a)(o)),o.goToPalette=o.goToPalette.bind(Object(p.a)(o)),o}return Object(h.a)(t,[{key:"openDialog",value:function(e){this.setState({openDeleteDialog:!0,deletingId:e})}},{key:"closeDialog",value:function(){this.setState({openDeleteDialog:!1,deletingId:""})}},{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"handleDelete",value:function(){this.props.deletePalette(this.state.deletingId),this.closeDialog()}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes;return i.a.createElement("div",{className:o.root},i.a.createElement("div",{className:o.container},i.a.createElement("nav",{className:o.nav},i.a.createElement("h1",{className:o.heading},"OBIPALETTES"),i.a.createElement(m.b,{to:"/palette/new"},"Create Palette")),i.a.createElement(U.TransitionGroup,{className:o.palettes},t.map((function(a){return i.a.createElement(U.CSSTransition,{key:a.id,classNames:"fade",timeout:500},i.a.createElement(x,Object.assign({},a,{goToPalette:e.goToPalette,openDialog:e.openDialog,key:a.id,id:a.id})))})))),i.a.createElement(k.a,{open:this.state.openDeleteDialog,"aira-labelledby":"delete-dialog-title",onClose:this.closeDialog},i.a.createElement(z.a,{id:"delete-dialog-title"},"Delete this palette?"),i.a.createElement(O.a,null,i.a.createElement(N.a,{button:!0,onClick:this.handleDelete},i.a.createElement(F.a,null,i.a.createElement(D.a,{style:{backgroundColor:K.a[100],color:K.a[600]}},i.a.createElement(L.a,null))),i.a.createElement(T.a,{primary:"Delete"})),i.a.createElement(N.a,{button:!0,onClick:this.closeDialog},i.a.createElement(F.a,null,i.a.createElement(D.a,{style:{backgroundColor:_.a[100],color:_.a[600]}},i.a.createElement(R.a,null))),i.a.createElement(T.a,{secondary:"Cancel"})))))}}]),t}(l.Component),X=Object(v.a)(q)(Q),$=t(289),Z=t(47),ee=t.n(Z),ae={ColorBox:(r={width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:1}},Object(H.a)(r,V("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.3333%"}}),Object(H.a)(r,V("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(H.a)(r,V("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),r),copyText:{color:function(e){return ee()(e.background).luminance()>=.7?"black":"white"}},colorName:{color:function(e){return ee()(e.background).luminance()<=.08?"white":"black"}},seeMore:{color:function(e){return ee()(e.background).luminance()>=.7?"rgba(0,0,0,0.7)":"white"},background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{color:function(e){return ee()(e.background).luminance()>=.7?"rgba(0,0,0,0.7)":"white"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",backgroundColor:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:0},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":Object(H.a)({fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.3)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},V("xs"),{fontSize:"5rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showCopyMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.2s"}},te=function(e){Object(g.a)(t,e);var a=Object(f.a)(t);function t(e){var o;return Object(u.a)(this,t),(o=a.call(this,e)).state={copied:!1},o.changeCopyState=o.changeCopyState.bind(Object(p.a)(o)),o}return Object(h.a)(t,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1500)}))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.moreUrl,n=e.showingFullPalette,r=e.classes,l=this.state.copied;return i.a.createElement($.CopyToClipboard,{text:t,onCopy:this.changeCopyState},i.a.createElement("div",{style:{background:t},className:r.ColorBox},i.a.createElement("div",{style:{background:t},className:"".concat(r.copyOverlay," ").concat(l&&r.showOverlay)}),i.a.createElement("div",{className:"".concat(r.copyMessage," ").concat(l&&r.showCopyMessage)},i.a.createElement("h1",null,"Copied!"),i.a.createElement("p",{className:r.copyText},this.props.background)),i.a.createElement("div",null,i.a.createElement("div",{className:r.boxContent},i.a.createElement("span",{className:r.colorName},a)),i.a.createElement("button",{className:r.copyButton},"Copy")),n&&i.a.createElement(m.b,{to:o,onClick:function(e){return e.stopPropagation()}},i.a.createElement("span",{className:r.seeMore},"MORE"))))}}]),t}(l.Component),oe=Object(v.a)(ae)(te),ne=t(193),re=t.n(ne),le=t(139),ie=t.n(le),ce=t(293),se=t.n(ce),me=t(83),de=t.n(me),ue=t(306),he=(t(497),{Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:Object(H.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Orbitron",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},V("xs"),{display:"none"}),slider:Object(H.a)({width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},V("sm"),{width:"150px"}),selectContainer:{marginLeft:"auto",marginRight:"1rem"}}),pe=function(e){Object(g.a)(t,e);var a=Object(f.a)(t);function t(e){var o;return Object(u.a)(this,t),(o=a.call(this,e)).state={format:"hex",open:!1},o.handleFormatChange=o.handleFormatChange.bind(Object(p.a)(o)),o.closeSnackbar=o.closeSnackbar.bind(Object(p.a)(o)),o}return Object(h.a)(t,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("header",{className:e.Navbar},i.a.createElement("div",{className:e.logo},i.a.createElement(m.b,{to:"/"},"OBICOLORPICKER")),this.props.showingAllColors&&i.a.createElement("div",null,i.a.createElement("span",null,"Level: ",this.props.level),i.a.createElement("div",{className:e.slider},i.a.createElement(ue.a,{defaultValue:this.props.level,min:100,max:900,onAfterChange:this.props.changeLevel,step:100}))),i.a.createElement("div",{className:e.selectContainer},i.a.createElement(re.a,{value:this.state.format,onChange:this.handleFormatChange},i.a.createElement(ie.a,{value:"hex"},"HEX - #ffffff"),i.a.createElement(ie.a,{value:"rgb"},"RGB - rgb(255,255,255)"),i.a.createElement(ie.a,{value:"rgba"},"RGBA - rgba(255,255,255,1)"))),i.a.createElement(se.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:i.a.createElement("span",{id:"message-id"},"Format changed to ",this.state.format.toUpperCase()),contentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[i.a.createElement(de.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},i.a.createElement(R.a,null))]}))}}]),t}(l.Component),ge=Object(v.a)(he)(pe);var fe,be,ve=Object(v.a)({PaletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}})((function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return i.a.createElement("footer",{className:o.PaletteFooter},a,i.a.createElement("span",{className:o.emoji},t))})),Ce={Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:(fe={width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:1,backgroundColor:"black","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",backgroundColor:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}},Object(H.a)(fe,V("lg"),{height:"33.3333%",width:"25%"}),Object(H.a)(fe,V("md"),{height:"20%",width:"50%"}),Object(H.a)(fe,V("xs"),{height:"10%",width:"100%"}),fe)},ye=function(e){Object(g.a)(t,e);var a=Object(f.a)(t);function t(e){var o;return Object(u.a)(this,t),(o=a.call(this,e)).state={level:500,format:"hex"},o.changeLevel=o.changeLevel.bind(Object(p.a)(o)),o.changeFormat=o.changeFormat.bind(Object(p.a)(o)),o}return Object(h.a)(t,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,o=e.emoji,n=e.id,r=this.props.classes,l=this.state,c=l.level,s=l.format,m=a[c].map((function(e){return i.a.createElement(oe,{background:e[s],name:e.name,key:e.id,moreUrl:"/palette/".concat(n,"/").concat(e.id),showingFullPalette:!0})}));return i.a.createElement("div",{className:r.Palette},i.a.createElement(ge,{level:c,changeLevel:this.changeLevel,handleChange:this.changeFormat,showingAllColors:!0}),i.a.createElement("div",{className:r.colors},m),i.a.createElement(ve,{paletteName:t,emoji:o}))}}]),t}(l.Component),Ee=Object(v.a)(Ce)(ye),xe=function(e){Object(g.a)(t,e);var a=Object(f.a)(t);function t(e){var o;return Object(u.a)(this,t),(o=a.call(this,e))._shades=o.gatherShade(o.props.palette,o.props.colorId),o.state={format:"hex"},o.changeFormat=o.changeFormat.bind(Object(p.a)(o)),o}return Object(h.a)(t,[{key:"gatherShade",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter((function(e){return e.id===a})));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this,a=this.props.palette,t=a.paletteName,o=a.emoji,n=a.id,r=this.props.classes,l=this._shades.map((function(a){return i.a.createElement(oe,{key:a.name,name:a.name,background:a[e.state.format],showingFullPalette:!1})}));return i.a.createElement("div",{className:r.Palette},i.a.createElement(ge,{handleChange:this.changeFormat,showingAllColors:!1}),i.a.createElement("div",{className:r.colors},l,i.a.createElement("div",{className:r.goBack},i.a.createElement(m.b,{to:"/palette/".concat(n)},"Go back"))),i.a.createElement(ve,{paletteName:t,emoji:o}))}}]),t}(l.Component),we=Object(v.a)(Ce)(xe),ke=t(5),je=t.n(ke),Oe=t(63),Se=t(46),Ne=t.n(Se),Pe=t(297),Fe=t.n(Pe),Be=t(295),De=t.n(Be),Ie=t(296),Te=t.n(Ie),Ae=t(56),Le=t(307),Ge=(t(543),function(e){Object(g.a)(t,e);var a=Object(f.a)(t);function t(e){var o;return Object(u.a)(this,t),(o=a.call(this,e)).handleClickOpen=function(){o.setState({open:!0})},o.handleClose=function(){o.setState({open:!1})},o.state={stage:"form",newPaletteName:""},o.handleChange=o.handleChange.bind(Object(p.a)(o)),o.showEmojiPicker=o.showEmojiPicker.bind(Object(p.a)(o)),o.savePalette=o.savePalette.bind(Object(p.a)(o)),o}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;Ae.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(a){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()}))}))}},{key:"handleChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"showEmojiPicker",value:function(){this.setState({stage:"emoji"})}},{key:"savePalette",value:function(e){var a={paletteName:this.state.newPaletteName,emoji:e.native};this.props.handleSubmit(a),this.setState({stage:""})}},{key:"render",value:function(){var e=this.state.newPaletteName;return i.a.createElement("div",null,i.a.createElement(k.a,{open:"emoji"===this.state.stage,onClose:this.props.hideForm},i.a.createElement(z.a,{id:"form-dialog-title"},"Coose an emoji for your Palette"),i.a.createElement(Le.a,{onSelect:this.savePalette})),i.a.createElement(k.a,{open:"form"===this.state.stage,"aria-labelledby":"form-dialog-title",onClose:this.props.hideForm},i.a.createElement(z.a,{id:"form-dialog-title"},"Choose a palette name"),i.a.createElement(Ae.ValidatorForm,{onSubmit:this.showEmojiPicker},i.a.createElement(De.a,null,i.a.createElement(Te.a,null,"Please, enter a name for your new Palette!"),i.a.createElement(Ae.TextValidator,{label:"Palette Name",value:e,name:"newPaletteName",onChange:this.handleChange,fullWidth:!0,margin:"normal",validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Name already used"]})),i.a.createElement(Fe.a,null,i.a.createElement(Ne.a,{onClick:this.props.hideForm,color:"primary"},"Cancel"),i.a.createElement(Ne.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}}]),t}(l.Component)),Re=t(298),Me=t.n(Re),ze=t(299),Ue=t.n(ze),He=t(300),Ve=t.n(He),We=t(62),qe=t.n(We),Je=t(301),Ke=t.n(Je),Ye=function(e){return Object(H.a)({root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",heigth:"65px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},navButtons:Object(H.a)({marginRight:"1rem","& a":{textDecoration:"none"}},V("xs"),{marginRight:"0.5rem"}),button:{margin:"0 0.5rem"}},V("xs"),{margin:"0 0.2rem",padding:"0.3rem"})},_e=function(e){Object(g.a)(t,e);var a=Object(f.a)(t);function t(e){var o;return Object(u.a)(this,t),(o=a.call(this,e)).state={newPaletteName:"",formShowing:!1},o.handleChange=o.handleChange.bind(Object(p.a)(o)),o.showForm=o.showForm.bind(Object(p.a)(o)),o.hideForm=o.hideForm.bind(Object(p.a)(o)),o}return Object(h.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"showForm",value:function(){this.setState({formShowing:!0})}},{key:"hideForm",value:function(){this.setState({formShowing:!1})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.palettes,n=e.handleSubmit;return i.a.createElement("div",{className:a.root},i.a.createElement(Me.a,null),i.a.createElement(Ue.a,{position:"fixed",color:"default",className:je()(a.appBar,Object(H.a)({},a.appBarShift,t))},i.a.createElement(Ve.a,{disableGutters:!t},i.a.createElement(de.a,{color:"inherit","aria-label":"Open drawer",onClick:this.props.handleDrawerOpen,className:je()(a.menuButton,t&&a.hide)},i.a.createElement(Ke.a,null)),i.a.createElement(qe.a,{variant:"h6",color:"inherit",noWrap:!0},"Create a palette")),i.a.createElement("div",{className:a.navButtons},i.a.createElement(m.b,{to:"/"},i.a.createElement(Ne.a,{variant:"contained",color:"secondary",className:a.button},"Go back")),i.a.createElement(Ne.a,{variant:"contained",color:"primary",onClick:this.showForm,className:a.button},"Save"))),this.state.formShowing?i.a.createElement(Ge,{palettes:o,handleSubmit:n,hideForm:this.hideForm}):"")}}]),t}(l.Component),Qe=Object(Oe.withStyles)(Ye,{withTheme:!0})(_e),Xe=t(302),$e={picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:" 100%",height:"70px",marginTop:"10px"}},Ze=function(e){Object(g.a)(t,e);var a=Object(f.a)(t);function t(e){var o;return Object(u.a)(this,t),(o=a.call(this,e)).state={currentColor:"orange",newColorName:""},o.updateCurrentColor=o.updateCurrentColor.bind(Object(p.a)(o)),o.handleChange=o.handleChange.bind(Object(p.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(p.a)(o)),o}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;Ae.ValidatorForm.addValidationRule("isColorNameUnique",(function(a){return e.props.colors.every((function(e){return e.name.toLowerCase()!==a.toLowerCase()}))})),Ae.ValidatorForm.addValidationRule("isColorUnique",(function(a){return e.props.colors.every((function(a){return a.color!==e.state.currentColor}))}))}},{key:"updateCurrentColor",value:function(e){console.log(e.hex),this.setState({currentColor:e.hex})}},{key:"handleChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"render",value:function(){var e=this.props,a=e.paletteIsFull,t=e.classes;return i.a.createElement("div",null,i.a.createElement(Xe.ChromePicker,{color:this.state.currentColor,onChangeComplete:this.updateCurrentColor,className:t.picker}),i.a.createElement(Ae.ValidatorForm,{onSubmit:this.handleSubmit,ref:"form",instantValidate:!1},i.a.createElement(Ae.TextValidator,{value:this.state.newColorName,className:t.colorNameInput,placeholder:"Color name",name:"newColorName",variant:"filled",margin:"normal",onChange:this.handleChange,validators:["required","isColorUnique","isColorNameUnique"],errorMessages:["Enter a color name","Color already used","Color name must be unique"]}),i.a.createElement(Ne.a,{variant:"contained",type:"submit",color:"primary",disabled:a,className:t.addColor,style:{backgroundColor:this.state.currentColor}},a?"Palette full!":"Add color")))}}]),t}(l.Component),ea=Object(Oe.withStyles)($e)(Ze),aa=t(303),ta=t.n(aa),oa=t(305),na=t.n(oa),ra=t(304),la=t.n(ra),ia=t(85),ca={root:(be={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover svg":{color:"white",transform:"scale(1.5)"}},Object(H.a)(be,V("lg"),{width:"25%",heigth:"20%"}),Object(H.a)(be,V("md"),{width:"50%",heigth:"10%"}),Object(H.a)(be,V("xs"),{width:"100%",heigth:"5%"}),be),boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:function(e){return ee()(e.color).luminance()<=.08?"white":"black"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},deleteIcon:{transition:"all 0.3s ease-in-out"}},sa=Object(ia.b)((function(e){return i.a.createElement("div",{className:e.classes.root,style:{backgroundColor:e.color}},i.a.createElement("div",{className:e.classes.boxContent},i.a.createElement("span",null,e.name),i.a.createElement(y.a,{className:e.classes.deleteIcon,onClick:e.handleClick})))})),ma=Object(v.a)(ca)(sa),da=Object(ia.a)((function(e){var a=e.colors,t=e.removeColor;return i.a.createElement("div",{style:{height:"100%"}},a.map((function(e,a){return i.a.createElement(ma,{index:a,key:e.name,color:e.color,name:e.name,handleClick:function(){return t(e.name)}})})))})),ua=t(199),ha=function(e){return{root:{display:"flex"},drawer:{width:400,flexShrink:0},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Object(ua.a)(Object(ua.a)({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:" center"},buttons:{width:"100%"},button:{width:"50%"}}},pa=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],ga=function(e){Object(g.a)(t,e);var a=Object(f.a)(t);function t(e){var o;return Object(u.a)(this,t),(o=a.call(this,e)).handleDrawerOpen=function(){o.setState({open:!0})},o.handleDrawerClose=function(){o.setState({open:!1})},o.onSortEnd=function(e){var a=e.oldIndex,t=e.newIndex;o.setState((function(e){var o=e.colors;return{colors:Object(ia.c)(o,a,t)}}))},o.state={open:!0,colors:pa[0].colors},o.addNewColor=o.addNewColor.bind(Object(p.a)(o)),o.handleChange=o.handleChange.bind(Object(p.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(p.a)(o)),o.removeColor=o.removeColor.bind(Object(p.a)(o)),o.clearColors=o.clearColors.bind(Object(p.a)(o)),o.addRandomColor=o.addRandomColor.bind(Object(p.a)(o)),o}return Object(h.a)(t,[{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(d.a)(this.state.colors),[e]),newColorName:""})}},{key:"handleChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=this.state.colors,this.props.savePalette(e),this.props.history.push("/")}},{key:"removeColor",value:function(e){this.setState({colors:this.state.colors.filter((function(a){return a.name!==e}))})}},{key:"clearColors",value:function(){this.setState({colors:[]})}},{key:"addRandomColor",value:function(){for(var e,a=this.props.palettes.map((function(e){return e.colors})).flat(),t=a[e],o=!0;o;)e=Math.floor(Math.random()*a.length),t=a[e],o=this.state.colors.some((function(e){return e.name===t.name}));this.setState({colors:[].concat(Object(d.a)(this.state.colors),[t])})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.maxColors,o=e.palettes,n=this.state.open,r=this.state.colors.length>=t;return i.a.createElement("div",{className:a.root},i.a.createElement(Qe,{open:n,palettes:o,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),i.a.createElement(ta.a,{className:a.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:a.drawerPaper}},i.a.createElement("div",{className:a.drawerHeader},i.a.createElement(de.a,{onClick:this.handleDrawerClose},i.a.createElement(la.a,null))),i.a.createElement(na.a,null),i.a.createElement("div",{className:a.container},i.a.createElement(qe.a,{variant:"h4",gutterBottom:!0},"Design your palette"),i.a.createElement("div",{className:a.buttons},i.a.createElement(Ne.a,{variant:"contained",color:"secondary",onClick:this.clearColors,className:a.button},"Clear Palette"),i.a.createElement(Ne.a,{variant:"contained",color:"primary",onClick:this.addRandomColor,disabled:r,className:a.button},"Random Color")),i.a.createElement(ea,{paletteIsFull:r,addNewColor:this.addNewColor,colors:this.state.colors}))),i.a.createElement("main",{className:je()(a.content,Object(H.a)({},a.contentShift,n))},i.a.createElement("div",{className:a.drawerHeader}),i.a.createElement(da,{colors:this.state.colors,removeColor:this.removeColor,axis:"xy",onSortEnd:this.onSortEnd,distance:20})))}}]),t}(l.Component);ga.defaultProps={maxColors:20};var fa=Object(Oe.withStyles)(ha,{withTheme:!0})(ga);t(716);var ba=function(e){return i.a.createElement("section",{className:"page"},e.children)},va=t(200),Ca=[50,100,200,300,400,500,600,700,800,900];function ya(e){var a,t={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=Object(va.a)(Ca);try{for(o.s();!(a=o.n()).done;){var n=a.value;t.colors[n]=[]}}catch(u){o.e(u)}finally{o.f()}var r,l,i,c=Object(va.a)(e.colors);try{for(c.s();!(r=c.n()).done;){var s=r.value,m=(l=s.color,i=10,ee.a.scale(function(e){return[ee()(e).darken(1.4).hex(),e,"#fff"]}(l)).mode("lab").colors(i)).reverse();for(var d in m)t.colors[Ca[d]].push({name:"".concat(s.name," ").concat(Ca[d]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:m[d],rgb:ee()(m[d]).css(),rgba:ee()(m[d]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(u){c.e(u)}finally{c.f()}return t}var Ea=function(e){Object(g.a)(t,e);var a=Object(f.a)(t);function t(e){var o;Object(u.a)(this,t),o=a.call(this,e);var n=JSON.parse(window.localStorage.getItem("palettes"));return o.state={palettes:n||pa},o.savePalette=o.savePalette.bind(Object(p.a)(o)),o.findPalette=o.findPalette.bind(Object(p.a)(o)),o.deletePalette=o.deletePalette.bind(Object(p.a)(o)),o}return Object(h.a)(t,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(a){return a.id===e}))}},{key:"deletePalette",value:function(e){this.setState((function(a){return{palettes:a.palettes.filter((function(a){return a.id!==e}))}}),this.syncLocalStorage)}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(d.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return i.a.createElement(b.a,{render:function(a){var t=a.location;return i.a.createElement(U.TransitionGroup,null,i.a.createElement(U.CSSTransition,{key:t.key,classNames:"page",timeout:500},i.a.createElement(b.c,{location:t},i.a.createElement(b.a,{exact:!0,path:"/palette/new",render:function(a){return i.a.createElement(ba,null,i.a.createElement(fa,Object.assign({savePalette:e.savePalette,palettes:e.state.palettes},a)))}}),i.a.createElement(b.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return i.a.createElement(ba,null,i.a.createElement(we,{colorId:a.match.params.colorId,palette:ya(e.findPalette(a.match.params.paletteId))}))}}),i.a.createElement(b.a,{exact:!0,path:"/",render:function(a){return i.a.createElement(ba,null,i.a.createElement(X,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}),i.a.createElement(b.a,{exact:!0,path:"/palette/:id",render:function(a){return i.a.createElement(ba,null,i.a.createElement(Ee,{palette:ya(e.findPalette(a.match.params.id))}))}}),i.a.createElement(b.a,{render:function(a){return i.a.createElement(ba,null,i.a.createElement(X,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}))))}})}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(m.a,null,i.a.createElement(i.a.StrictMode,null,i.a.createElement(Ea,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[315,1,2]]]);
//# sourceMappingURL=main.9716eb08.chunk.js.map