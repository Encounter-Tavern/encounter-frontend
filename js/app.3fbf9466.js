(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],v=0,d=[];v<s.length;v++)o=s[v],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/encounter-frontend/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0853":function(t,e,n){},"1f16":function(t,e,n){"use strict";var a=n("fe12"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-account")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("My Account")])],1)],1),n("v-list-item",{attrs:{to:"/encounters",link:""}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-dice-multiple")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("My Encounters")])],1)],1),n("v-list-item",{attrs:{to:"/generator",link:""}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-calculator")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Generator")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-cog")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Settings")])],1)],1)],1)],1),n("v-app-bar",{attrs:{app:"","clipped-left":"","max-height":"7%"}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Encounter-Tavern")])],1),n("v-main",[n("router-view")],1),n("v-footer",{attrs:{app:""}},[n("span",[t._v("© "+t._s((new Date).getFullYear()))]),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/Encounter-Tavern",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Take a look at our GitHub")]),n("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)},i=[],o={data:function(){return{drawer:!1}}},s=o,l=(n("5c0b"),n("2877")),c=n("6544"),u=n.n(c),v=n("7496"),d=n("40dc"),m=n("5bc1"),p=n("8336"),h=n("553a"),f=n("132d"),g=n("8860"),_=n("da13"),b=n("1800"),y=n("5d23"),x=n("f6c4"),w=n("f774"),V=n("2fa4"),C=n("2a7f"),k=Object(l["a"])(s,r,i,!1,null,null,null),P=k.exports;u()(k,{VApp:v["a"],VAppBar:d["a"],VAppBarNavIcon:m["a"],VBtn:p["a"],VFooter:h["a"],VIcon:f["a"],VList:g["a"],VListItem:_["a"],VListItemAction:b["a"],VListItemContent:y["a"],VListItemTitle:y["b"],VMain:x["a"],VNavigationDrawer:w["a"],VSpacer:V["a"],VToolbarTitle:C["a"]});var E=n("f309");a["a"].use(E["a"]);var A=new E["a"]({theme:{dark:!0},icons:{iconfont:"mdiSvg"}}),S=n("8c4f"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",[n("h1",[t._v("Generator")])])],1),n("v-row",[n("v-text-field",{attrs:{label:"Name",placeholder:"Thundertree Cultists",hint:"Enter the name of your encounter. This will help you identify it later on.",clearable:"",counter:"25"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("v-row",[n("v-col",[n("v-radio-group",{attrs:{label:"Difficulty",mandatory:!0,row:!0},model:{value:t.difficulty,callback:function(e){t.difficulty=e},expression:"difficulty"}},[n("v-radio",{attrs:{label:"Easy",value:"EASY"}}),n("v-radio",{attrs:{label:"Normal",value:"NORMAL"}}),n("v-radio",{attrs:{label:"Hard",value:"HARD"}}),n("v-radio",{attrs:{label:"Total Party Kill",value:"TPK"}})],1)],1)],1),n("v-row",[n("v-col",[n("PlayerPopup",{on:{addPlayer:function(e){return t.addPlayerToList(e.name,e.level)}}})],1)],1),n("v-row",[n("v-col",t._l(t.players,(function(e,a){return n("v-chip-group",{key:e.name},[n("v-chip",{attrs:{close:"",color:"blue"},on:{"click:close":function(e){return t.removePlayerFromList(a)}}},[t._v(t._s(e.name)+" Level: "+t._s(e.level))])],1)})),1)],1),n("v-row",[n("v-col",[n("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.createEncounter()}}},[t._v("Generate")])],1)],1)],1)},I=[],$=(n("a434"),n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({},"v-btn",r,!1),a),[t._v(" Add player ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[t._v(" Add Player to Encounter ")]),n("div",{staticClass:"cardForm"},[n("v-form",[n("v-text-field",{attrs:{label:"Player Name",rules:t.rules,clearable:!0,hint:"Enter the name of this player",placeholder:"Zork the Ork"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-slider",{attrs:{label:"Level",min:1,max:20,hint:"Enter the level of this player","thumb-label":"playerLevel"},model:{value:t.playerLevel,callback:function(e){t.playerLevel=e},expression:"playerLevel"}})],1)],1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.addPlayer()}}},[t._v(" Add Player ")])],1)],1)],1)],1)}),L=[],j=(n("a9e3"),{name:"PlayerPopup",data:function(){return{dialog:!1,rules:[function(t){return!!t||"Required"},function(t){return(t||"").length<=20||"Max 20 characters"}]}},props:{name:String,playerLevel:Number},methods:{addPlayer:function(){this.dialog=!1,this.$emit("addPlayer",{name:this.name,level:this.playerLevel})}}}),M=j,O=(n("1f16"),n("b0af")),N=n("99d9"),D=n("169a"),H=n("ce7e"),B=n("4bd4"),R=n("ba0d"),G=n("8654"),F=Object(l["a"])(M,$,L,!1,null,"17a815f8",null),q=F.exports;u()(F,{VBtn:p["a"],VCard:O["a"],VCardActions:N["a"],VCardTitle:N["c"],VDialog:D["a"],VDivider:H["a"],VForm:B["a"],VSlider:R["a"],VSpacer:V["a"],VTextField:G["a"]});var J={name:"EncounterGenerator",components:{PlayerPopup:q},data:function(){return{name:"",difficulty:"",players:[]}},methods:{addPlayerToList:function(t,e){console.log(t),this.players.push({name:t,level:e})},removePlayerFromList:function(t){this.players.splice(t,1)},createEncounter:function(){var t=this;this.$http.post(this.$url+"/encounters/generate",{name:this.name,difficulty:this.difficulty,players:this.players}).then((function(e){if(200===e.status){var n=e.data;t.$router.push({name:"Encounter",params:{id:n}})}}))}}},K=J,W=n("cc20"),Y=n("ef9a"),Z=n("62ad"),z=n("a523"),Q=n("67b6"),U=n("43a6"),X=n("0fd9"),tt=Object(l["a"])(K,T,I,!1,null,null,null),et=tt.exports;u()(tt,{VBtn:p["a"],VChip:W["a"],VChipGroup:Y["a"],VCol:Z["a"],VContainer:z["a"],VRadio:Q["a"],VRadioGroup:U["a"],VRow:X["a"],VTextField:G["a"]});var nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"encounter pa-3"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm12:"",md12:"",xl12:""}},[n("div",[n("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},t._l(t.encounter.monsters,(function(e){return n("v-flex",{key:e.id,staticClass:"mb-10 d-flex justify-space-around",attrs:{xs12:"",sm6:"",md4:"",lg3:"",xl2:""}},[n("MonsterCard",{attrs:{monster:e},on:{save:function(e){return t.save()}}})],1)})),1)],1)])],1)],1)},at=[],rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"pa-1",class:{active:t.hover},attrs:{"max-width":"300px"},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"250px",src:n("a46c")}},[a("v-card-title",[t._v(t._s(this.monster.name)+" ("+t._s(this.monster.type)+") ")])],1),a("v-card-actions",[a("v-container",[a("v-row",[a("v-col",[a("div",[a("v-icon",{attrs:{large:"",color:"blue"}},[t._v(t._s(this.icons.shield))])],1),a("div",[t._v(t._s(this.monster.armor_class))])]),a("v-col",[a("div",[a("v-icon",{attrs:{"x-large":"",color:"green"}},[t._v(t._s(this.icons.sword))])],1),a("MonsterActionsPopup",{attrs:{actions:t.monster.actions}})],1),a("v-col",[a("div",[a("v-icon",{attrs:{large:"",color:"red"}},[t._v(t._s(this.icons.heart))])],1),a("div",[t._v(t._s(this.monster.currentHitPoints))])])],1),a("v-row",[a("v-col",[a("v-icon",{attrs:{small:"",color:"orange"}},[t._v(t._s(this.icons.strength))]),t._v(" "+t._s(this.monster.strength)+" ")],1),a("v-col",[a("v-icon",{attrs:{small:"",color:"orange"}},[t._v(t._s(this.icons.dexterity))]),t._v(" "+t._s(this.monster.dexterity)+" ")],1),a("v-col",[a("v-icon",{attrs:{small:"",color:"orange"}},[t._v(t._s(this.icons.constitution))]),t._v(" "+t._s(this.monster.constitution)+" ")],1),a("v-col",[a("v-icon",{attrs:{small:"",color:"orange"}},[t._v(t._s(this.icons.intelligence))]),t._v(" "+t._s(this.monster.intelligence)+" ")],1),a("v-col",[a("v-icon",{attrs:{small:"",color:"orange"}},[t._v(t._s(this.icons.wisdom))]),t._v(" "+t._s(this.monster.wisdom)+" ")],1),a("v-col",[a("v-icon",{attrs:{small:"",color:"orange"}},[t._v(t._s(this.icons.charisma))]),t._v(" "+t._s(this.monster.charisma)+" ")],1)],1),a("v-row",[a("v-col",[a("MonsterInfoPopup",{attrs:{languages:t.monster.languages,vulnerabilities:t.monster.damage_vulnerabilities,resistances:t.monster.damage_resistances,immunities:t.monster.damage_immunities,aligment:t.monster.aligment,name:t.monster.name,race:t.monster.type}})],1),a("v-col",[a("MonsterStatsPopup",{attrs:{currentHitPoints:t.monster.currentHitPoints,armor_class:t.monster.armor_class,strength:t.monster.strength,dexterity:t.monster.dexterity,constitution:t.monster.constitution,intelligence:t.monster.intelligence,wisdom:t.monster.wisdom,charisma:t.monster.charisma},on:{statChanges:function(e){return t.updateStats(e)}}})],1)],1)],1)],1)],1)},it=[],ot=n("94ed"),st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{"x-small":"",depressed:""}},"v-btn",r,!1),a),[t._v(" More Info ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{staticClass:"text-left"},[n("v-card-title",[t._v("More Infos")]),n("v-card-text",[n("h3",[t._v("General Info")]),n("p",[n("b",[t._v("Name:")]),t._v(" "+t._s(this.name)+" "),n("br"),n("b",[t._v("Race:")]),t._v(" "+t._s(this.race)+" "),n("br"),n("b",[t._v("Aligment:")]),t._v(" "+t._s(this.aligment)+" "),n("br")]),n("h3",[t._v("Languages")]),t.languageArray.length>0?n("p",[t._v("This creature can communicate in the following languages: "),n("ul",t._l(t.languageArray,(function(e){return n("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0)]):n("p",[t._v(" This creature does not seems to be able to communicate in any to us known languages. ")]),n("h3",[t._v("Vulnerabilities")]),t.vulnerabilities.length>0?n("p",[t._v("This creature is vulnerable against the following types of damages: "),n("ul",t._l(t.vulnerabilities,(function(e){return n("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0)]):n("p",[t._v(" This creature does not seem to have any special vulnerabilities. ")]),n("h3",[t._v("Resistances")]),t.resistances.length>0?n("p",[t._v("This creature is resistant against the following types of damages: "),n("ul",t._l(t.resistances,(function(e){return n("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0)]):n("p",[t._v(" This creature doesnt seem to have any special resistances. ")]),n("h3",[t._v("Immunities")]),t.immunities.length>0?n("p",[t._v("This creature is immune against the following types of damages: "),n("ul",t._l(t.immunities,(function(e){return n("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0)]):n("p",[t._v(" This creature does not seem to be immune against any sort of damage type. ")])]),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")])],1)],1)],1)},lt=[],ct=(n("ac1f"),n("1276"),{name:"MonsterInfoPopup",props:{languages:String,vulnerabilities:Array,resistances:Array,immunities:Array,aligment:String,name:String,race:String},data:function(){return{dialog:!1}},computed:{languageArray:function(){return""===this.languages?[]:this.languages.split(",")}}}),ut=ct,vt=(n("a6a6"),Object(l["a"])(ut,st,lt,!1,null,"2bb771f0",null)),dt=vt.exports;u()(vt,{VBtn:p["a"],VCard:O["a"],VCardActions:N["a"],VCardText:N["b"],VCardTitle:N["c"],VDialog:D["a"],VDivider:H["a"],VSpacer:V["a"]});var mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{"x-small":"",depressed:""}},"v-btn",r,!1),a),[t._v("Change Stats")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[t._v("Change Stats")]),n("v-container",[n("v-row",[n("v-col",[n("v-text-field",{attrs:{"prepend-icon":t.icons.heart,label:"Hit Points",type:"number"},model:{value:t.currentHitPoints,callback:function(e){t.currentHitPoints=e},expression:"currentHitPoints"}})],1)],1),n("v-row",[n("v-col",[n("v-text-field",{attrs:{"prepend-icon":t.icons.shield,label:"Armor Class",type:"number"},model:{value:t.armor_class,callback:function(e){t.armor_class=e},expression:"armor_class"}})],1)],1),n("v-row",[n("v-col",[n("v-text-field",{attrs:{"prepend-icon":t.icons.strength,label:"Strength",type:"number"},model:{value:t.strength,callback:function(e){t.strength=e},expression:"strength"}})],1)],1),n("v-row",[n("v-col",[n("v-text-field",{attrs:{"prepend-icon":t.icons.dexterity,label:"Dexterity",type:"number"},model:{value:t.dexterity,callback:function(e){t.dexterity=e},expression:"dexterity"}})],1)],1),n("v-row",[n("v-col",[n("v-text-field",{attrs:{"prepend-icon":t.icons.constitution,label:"Constitution",type:"number"},model:{value:t.constitution,callback:function(e){t.constitution=e},expression:"constitution"}})],1)],1),n("v-row",[n("v-col",[n("v-text-field",{attrs:{"prepend-icon":t.icons.intelligence,label:"Intelligence",type:"number"},model:{value:t.intelligence,callback:function(e){t.intelligence=e},expression:"intelligence"}})],1)],1),n("v-row",[n("v-col",[n("v-text-field",{attrs:{"prepend-icon":t.icons.wisdom,label:"Wisdom",type:"number"},model:{value:t.wisdom,callback:function(e){t.wisdom=e},expression:"wisdom"}})],1)],1),n("v-row",[n("v-col",[n("v-text-field",{attrs:{"prepend-icon":t.icons.charisma,label:"Charisma",type:"number"},model:{value:t.charisma,callback:function(e){t.charisma=e},expression:"charisma"}})],1)],1)],1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close Without Saving")]),n("v-btn",{attrs:{color:"success",text:""},on:{click:function(e){return t.emitChanges()}}},[t._v("Save and Close")])],1)],1)],1)},pt=[],ht={name:"MonsterStatsPopup",props:{currentHitPoints:{type:Number,required:!0},armor_class:{type:Number,required:!0},strength:{type:Number,required:!0},dexterity:{type:Number,required:!0},constitution:{type:Number,required:!0},intelligence:{type:Number,required:!0},wisdom:{type:Number,required:!0},charisma:{type:Number,required:!0}},data:function(){return{dialog:!1,icons:{sword:ot["j"],shield:ot["i"],heart:ot["g"],strength:ot["b"],intelligence:ot["c"],charisma:ot["e"],wisdom:ot["h"],constitution:ot["a"],dexterity:ot["f"]}}},methods:{emitChanges:function(){this.dialog=!1,this.$emit("statChanges",{currentHitPoints:parseInt(this.currentHitPoints),armor_class:parseInt(this.armor_class),strength:parseInt(this.strength),dexterity:parseInt(this.dexterity),constitution:parseInt(this.constitution),intelligence:parseInt(this.intelligence),wisdom:parseInt(this.wisdom),charisma:parseInt(this.wisdom)})}}},ft=ht,gt=Object(l["a"])(ft,mt,pt,!1,null,null,null),_t=gt.exports;u()(gt,{VBtn:p["a"],VCard:O["a"],VCardActions:N["a"],VCardTitle:N["c"],VCol:Z["a"],VContainer:z["a"],VDialog:D["a"],VDivider:H["a"],VRow:X["a"],VSpacer:V["a"],VTextField:G["a"]});var bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{text:"",depressed:""}},"v-btn",r,!1),a),[t._v("Actions")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[t._v("Actions")]),n("v-container",t._l(t.actions,(function(t){return n("div",{key:t.name},[n("v-row",[n("v-col",[n("MonsterAction",{attrs:{name:t.name,description:t.desc,damage:t.damage,attackBonus:t.attack_bonus}})],1)],1),n("v-row",[n("v-divider")],1)],1)})),0),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")])],1)],1)],1)},yt=[],xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-left"},[n("h3",[t._v(t._s(t.name))]),n("p",[n("b",[t._v("Attack Bonus:")]),t._v(" "+t._s(t.attackBonus)+" "),n("br"),t._v(" "+t._s(t.description))]),n("div",[n("v-chip-group",t._l(t.damage,(function(e){return n("v-chip",{key:e.damage_type.name},[t._v(" "+t._s(e.damage_type.name)+" "+t._s(e.damage_dice)+" "),n("v-icon",{attrs:{"x-small":""}},[t._v(" "+t._s(t.icons.dice)+" ")])],1)})),1)],1)])},wt=[],Vt={name:"MonsterAction",props:{name:String,description:String,damage:Array,attackBonus:Number},data:function(){return{icons:{dice:ot["d"]}}}},Ct=Vt,kt=(n("ea12"),Object(l["a"])(Ct,xt,wt,!1,null,"9b9b42c4",null)),Pt=kt.exports;u()(kt,{VChip:W["a"],VChipGroup:Y["a"],VIcon:f["a"]});var Et={name:"MonsterActionsPopup",components:{MonsterAction:Pt},props:{actions:Array},data:function(){return{dialog:!1}}},At=Et,St=Object(l["a"])(At,bt,yt,!1,null,null,null),Tt=St.exports;u()(St,{VBtn:p["a"],VCard:O["a"],VCardActions:N["a"],VCardTitle:N["c"],VCol:Z["a"],VContainer:z["a"],VDialog:D["a"],VDivider:H["a"],VRow:X["a"],VSpacer:V["a"]});var It={name:"MonsterCard",components:{MonsterInfoPopup:dt,MonsterStatsPopup:_t,MonsterActionsPopup:Tt},props:{monster:Object},data:function(){return{hover:!1,icons:{sword:ot["j"],shield:ot["i"],heart:ot["g"],strength:ot["b"],intelligence:ot["c"],charisma:ot["e"],wisdom:ot["h"],constitution:ot["a"],dexterity:ot["f"]}}},methods:{updateStats:function(t){this.monster.currentHitPoints=t.currentHitPoints,this.monster.armor_class=t.armor_class,this.monster.strength=t.strength,this.monster.dexterity=t.dexterity,this.monster.constitution=t.constitution,this.monster.intelligence=t.intelligence,this.monster.wisdom=t.wisdom,this.monster.charisma=t.charisma,this.$emit("save")}}},$t=It,Lt=(n("f4c2"),n("adda")),jt=Object(l["a"])($t,rt,it,!1,null,"d2c30dfc",null),Mt=jt.exports;u()(jt,{VCard:O["a"],VCardActions:N["a"],VCardTitle:N["c"],VCol:Z["a"],VContainer:z["a"],VIcon:f["a"],VImg:Lt["a"],VRow:X["a"]});var Ot={name:"Encounter",components:{MonsterCard:Mt},data:function(){return{encounter:{},entities:[]}},created:function(){var t=this;this.$http.get(this.$url+"/encounters/"+this.$route.params.id).then((function(e){t.encounter=e.data}))},methods:{save:function(){this.$http.put(this.$url+"/encounters/"+this.$route.params.id,this.encounter).then((function(t){console.log(t)}))}}},Nt=Ot,Dt=n("0e8f"),Ht=n("a722"),Bt=Object(l["a"])(Nt,nt,at,!1,null,"34d977a6",null),Rt=Bt.exports;u()(Bt,{VFlex:Dt["a"],VLayout:Ht["a"]});var Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pa-3"},[n("v-container",[n("h1",[t._v("Encounters")]),t._l(t.encounters,(function(t){return n("v-row",{key:t.id},[n("v-col",[n("EncounterListElement",{attrs:{name:t.name,id:t.id}})],1)],1)}))],2)],1)},Ft=[],qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-list-item",{attrs:{to:/encounters/+t.id,link:""}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.name))])],1)],1)],1)},Jt=[],Kt={name:"EncounterListElement",props:{name:String,id:Number}},Wt=Kt,Yt=Object(l["a"])(Wt,qt,Jt,!1,null,null,null),Zt=Yt.exports;u()(Yt,{VCard:O["a"],VListItem:_["a"],VListItemContent:y["a"],VListItemTitle:y["b"]});var zt={name:"EncounterList",components:{EncounterListElement:Zt},data:function(){return{encounters:[]}},methods:{getData:function(){var t=this;this.$http.get(this.$url+"/encounters/").then((function(e){console.log(e),t.encounters=e.data}))}},mounted:function(){this.getData()}},Qt=zt,Ut=Object(l["a"])(Qt,Gt,Ft,!1,null,null,null),Xt=Ut.exports;u()(Ut,{VCol:Z["a"],VContainer:z["a"],VRow:X["a"]}),a["a"].use(S["a"]);var te=[{path:"/",redirect:{name:"Encounter-Generator"}},{path:"/generator",name:"Encounter-Generator",component:et},{path:"/encounters/:id",name:"Encounter",component:Rt},{path:"/encounters",name:"All Encounters",component:Xt}],ee=new S["a"]({routes:te}),ne=ee,ae=n("bc3a"),re=n.n(ae);a["a"].config.productionTip=!1,a["a"].prototype.$http=re.a,a["a"].prototype.$url="https://encounter-tavern.herokuapp.com",new a["a"]({vuetify:A,router:ne,render:function(t){return t(P)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(t,e,n){},a46c:function(t,e,n){t.exports=n.p+"img/monster.52380b34.jpeg"},a6a6:function(t,e,n){"use strict";var a=n("0853"),r=n.n(a);r.a},ad0e:function(t,e,n){},c0d9:function(t,e,n){},ea12:function(t,e,n){"use strict";var a=n("c0d9"),r=n.n(a);r.a},f4c2:function(t,e,n){"use strict";var a=n("ad0e"),r=n.n(a);r.a},fe12:function(t,e,n){}});
//# sourceMappingURL=app.3fbf9466.js.map