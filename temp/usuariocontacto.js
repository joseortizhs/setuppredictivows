/*!   GeneXus C# 17_0_2-148375 on 10/9/2023 11:52:6.55
*/
gx.evt.autoSkip=!1;gx.define("usuariocontacto",!1,function(){this.ServerClass="usuariocontacto";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Usuariocontactoid=function(){return this.validSrvEvt("Valid_Usuariocontactoid",0).then(function(n){return n}.closure(this))};this.Valid_Usuarioid=function(){return this.validSrvEvt("Valid_Usuarioid",0).then(function(n){return n}.closure(this))};this.e111n74_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e121n74_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,68,69];this.GXLastCtrlId=69;n[2]={id:2,fld:"TABLEMAIN",grid:0};n[5]={id:5,fld:"TABLETOOLBAR",grid:0};n[8]={id:8,fld:"SECTIONTOOLBAR",grid:0};n[9]={id:9,fld:"BTN_FIRST",grid:0,evt:"e131n74_client",std:"FIRST"};n[10]={id:10,fld:"BTN_FIRST_SEPARATOR",grid:0,evt:"e131n74_client",std:"FIRST"};n[11]={id:11,fld:"BTN_PREVIOUS",grid:0,evt:"e141n74_client",std:"PREVIOUS"};n[12]={id:12,fld:"BTN_PREVIOUS_SEPARATOR",grid:0,evt:"e141n74_client",std:"PREVIOUS"};n[13]={id:13,fld:"BTN_NEXT",grid:0,evt:"e151n74_client",std:"NEXT"};n[14]={id:14,fld:"BTN_NEXT_SEPARATOR",grid:0,evt:"e151n74_client",std:"NEXT"};n[15]={id:15,fld:"BTN_LAST",grid:0,evt:"e161n74_client",std:"LAST"};n[16]={id:16,fld:"BTN_LAST_SEPARATOR",grid:0,evt:"e161n74_client",std:"LAST"};n[17]={id:17,fld:"BTN_SELECT",grid:0,evt:"e171n74_client",std:"SELECT"};n[18]={id:18,fld:"BTN_SELECT_SEPARATOR",grid:0,evt:"e171n74_client",std:"SELECT"};n[19]={id:19,fld:"BTN_ENTER2",grid:0,evt:"e111n74_client",std:"ENTER"};n[20]={id:20,fld:"BTN_ENTER2_SEPARATOR",grid:0,evt:"e111n74_client",std:"ENTER"};n[21]={id:21,fld:"BTN_CANCEL2",grid:0,evt:"e121n74_client"};n[22]={id:22,fld:"BTN_CANCEL2_SEPARATOR",grid:0,evt:"e121n74_client"};n[23]={id:23,fld:"BTN_DELETE2",grid:0,evt:"e181n74_client",std:"DELETE"};n[24]={id:24,fld:"BTN_DELETE2_SEPARATOR",grid:0,evt:"e181n74_client",std:"DELETE"};n[27]={id:27,fld:"GROUPDATA",grid:0};n[28]={id:28,fld:"TABLE1",grid:0};n[34]={id:34,fld:"TABLE2",grid:0};n[37]={id:37,fld:"TEXTBLOCKUSUARIOCONTACTOID",format:1,grid:0,ctrltype:"textblock"};n[39]={id:39,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariocontactoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIOCONTACTOID",gxz:"Z1444UsuarioContactoId",gxold:"O1444UsuarioContactoId",gxvar:"A1444UsuarioContactoId",ucs:[],op:[44,64,59,54,49],ip:[44,64,59,54,49,39],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1444UsuarioContactoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1444UsuarioContactoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("USUARIOCONTACTOID",gx.O.A1444UsuarioContactoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1444UsuarioContactoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("USUARIOCONTACTOID",gx.thousandSeparator)},nac:gx.falseFn};n[42]={id:42,fld:"TEXTBLOCKUSUARIOID",format:1,grid:0,ctrltype:"textblock"};n[44]={id:44,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuarioid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIOID",gxz:"Z15UsuarioId",gxold:"O15UsuarioId",gxvar:"A15UsuarioId",ucs:[],op:[],ip:[44],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A15UsuarioId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z15UsuarioId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("USUARIOID",gx.O.A15UsuarioId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A15UsuarioId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("USUARIOID",gx.thousandSeparator)},nac:gx.falseFn};n[47]={id:47,fld:"TEXTBLOCKTELEFONOCELULAR",format:1,grid:0,ctrltype:"textblock"};n[49]={id:49,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TELEFONOCELULAR",gxz:"Z1445TelefonoCelular",gxold:"O1445TelefonoCelular",gxvar:"A1445TelefonoCelular",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1445TelefonoCelular=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1445TelefonoCelular=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TELEFONOCELULAR",gx.O.A1445TelefonoCelular,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1445TelefonoCelular=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TELEFONOCELULAR",gx.thousandSeparator)},nac:gx.falseFn};n[52]={id:52,fld:"TEXTBLOCKTELEFONOOFICINA",format:1,grid:0,ctrltype:"textblock"};n[54]={id:54,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TELEFONOOFICINA",gxz:"Z1446TelefonoOficina",gxold:"O1446TelefonoOficina",gxvar:"A1446TelefonoOficina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1446TelefonoOficina=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1446TelefonoOficina=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TELEFONOOFICINA",gx.O.A1446TelefonoOficina,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1446TelefonoOficina=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TELEFONOOFICINA",gx.thousandSeparator)},nac:gx.falseFn};n[57]={id:57,fld:"TEXTBLOCKEXTENSION",format:1,grid:0,ctrltype:"textblock"};n[59]={id:59,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EXTENSION",gxz:"Z1447Extension",gxold:"O1447Extension",gxvar:"A1447Extension",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1447Extension=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1447Extension=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("EXTENSION",gx.O.A1447Extension,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1447Extension=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EXTENSION",gx.thousandSeparator)},nac:gx.falseFn};n[62]={id:62,fld:"TEXTBLOCKNOMBREJEFEINMEDIATO",format:1,grid:0,ctrltype:"textblock"};n[64]={id:64,lvl:0,type:"svchar",len:150,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NOMBREJEFEINMEDIATO",gxz:"Z1448NombreJefeInmediato",gxold:"O1448NombreJefeInmediato",gxvar:"A1448NombreJefeInmediato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1448NombreJefeInmediato=n)},v2z:function(n){n!==undefined&&(gx.O.Z1448NombreJefeInmediato=n)},v2c:function(){gx.fn.setControlValue("NOMBREJEFEINMEDIATO",gx.O.A1448NombreJefeInmediato,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1448NombreJefeInmediato=this.val())},val:function(){return gx.fn.getControlValue("NOMBREJEFEINMEDIATO")},nac:gx.falseFn};n[67]={id:67,fld:"BTN_ENTER",grid:0,evt:"e111n74_client",std:"ENTER"};n[68]={id:68,fld:"BTN_CANCEL",grid:0,evt:"e121n74_client"};n[69]={id:69,fld:"BTN_DELETE",grid:0,evt:"e181n74_client",std:"DELETE"};this.A1444UsuarioContactoId=0;this.Z1444UsuarioContactoId=0;this.O1444UsuarioContactoId=0;this.A15UsuarioId=0;this.Z15UsuarioId=0;this.O15UsuarioId=0;this.A1445TelefonoCelular=0;this.Z1445TelefonoCelular=0;this.O1445TelefonoCelular=0;this.A1446TelefonoOficina=0;this.Z1446TelefonoOficina=0;this.O1446TelefonoOficina=0;this.A1447Extension=0;this.Z1447Extension=0;this.O1447Extension=0;this.A1448NombreJefeInmediato="";this.Z1448NombreJefeInmediato="";this.O1448NombreJefeInmediato="";this.A1444UsuarioContactoId=0;this.A15UsuarioId=0;this.A1445TelefonoCelular=0;this.A1446TelefonoOficina=0;this.A1447Extension=0;this.A1448NombreJefeInmediato="";this.Events={e111n74_client:["ENTER",!0],e121n74_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_USUARIOCONTACTOID=[[{av:"A1444UsuarioContactoId",fld:"USUARIOCONTACTOID",pic:"ZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A15UsuarioId",fld:"USUARIOID",pic:"ZZZ9"},{av:"A1445TelefonoCelular",fld:"TELEFONOCELULAR",pic:"ZZZZZZZZZ9"},{av:"A1446TelefonoOficina",fld:"TELEFONOOFICINA",pic:"ZZZZZZZZZ9"},{av:"A1447Extension",fld:"EXTENSION",pic:"ZZZ9"},{av:"A1448NombreJefeInmediato",fld:"NOMBREJEFEINMEDIATO",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z1444UsuarioContactoId"},{av:"Z15UsuarioId"},{av:"Z1445TelefonoCelular"},{av:"Z1446TelefonoOficina"},{av:"Z1447Extension"},{av:"Z1448NombreJefeInmediato"},{av:'gx.fn.getCtrlProperty("BTN_DELETE2","Enabled")',ctrl:"BTN_DELETE2",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("BTN_ENTER2","Enabled")',ctrl:"BTN_ENTER2",prop:"Enabled"}]];this.EvtParms.VALID_USUARIOID=[[{av:"A15UsuarioId",fld:"USUARIOID",pic:"ZZZ9"}],[]];this.EnterCtrl=["BTN_ENTER2","BTN_ENTER2_SEPARATOR","BTN_ENTER"];this.Initialize()});gx.wi(function(){gx.createParentObj(usuariocontacto)})