/*!   GeneXus C# 17_0_2-148375 on 10/7/2023 12:43:29.48
*/
gx.evt.autoSkip=!1;gx.define("wizardcompletardatos",!1,function(){this.ServerClass="wizardcompletardatos";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Wizardcompletardatosid=function(){return this.validSrvEvt("Valid_Wizardcompletardatosid",0).then(function(n){return n}.closure(this))};this.Valid_Numempleado=function(){return this.validSrvEvt("Valid_Numempleado",0).then(function(n){return n}.closure(this))};this.e110x32_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e120x32_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,58,59];this.GXLastCtrlId=59;n[2]={id:2,fld:"TABLEMAIN",grid:0};n[5]={id:5,fld:"TABLETOOLBAR",grid:0};n[8]={id:8,fld:"SECTIONTOOLBAR",grid:0};n[9]={id:9,fld:"BTN_FIRST",grid:0,evt:"e130x32_client",std:"FIRST"};n[10]={id:10,fld:"BTN_FIRST_SEPARATOR",grid:0,evt:"e130x32_client",std:"FIRST"};n[11]={id:11,fld:"BTN_PREVIOUS",grid:0,evt:"e140x32_client",std:"PREVIOUS"};n[12]={id:12,fld:"BTN_PREVIOUS_SEPARATOR",grid:0,evt:"e140x32_client",std:"PREVIOUS"};n[13]={id:13,fld:"BTN_NEXT",grid:0,evt:"e150x32_client",std:"NEXT"};n[14]={id:14,fld:"BTN_NEXT_SEPARATOR",grid:0,evt:"e150x32_client",std:"NEXT"};n[15]={id:15,fld:"BTN_LAST",grid:0,evt:"e160x32_client",std:"LAST"};n[16]={id:16,fld:"BTN_LAST_SEPARATOR",grid:0,evt:"e160x32_client",std:"LAST"};n[17]={id:17,fld:"BTN_SELECT",grid:0,evt:"e170x32_client",std:"SELECT"};n[18]={id:18,fld:"BTN_SELECT_SEPARATOR",grid:0,evt:"e170x32_client",std:"SELECT"};n[19]={id:19,fld:"BTN_ENTER2",grid:0,evt:"e110x32_client",std:"ENTER"};n[20]={id:20,fld:"BTN_ENTER2_SEPARATOR",grid:0,evt:"e110x32_client",std:"ENTER"};n[21]={id:21,fld:"BTN_CANCEL2",grid:0,evt:"e120x32_client"};n[22]={id:22,fld:"BTN_CANCEL2_SEPARATOR",grid:0,evt:"e120x32_client"};n[23]={id:23,fld:"BTN_DELETE2",grid:0,evt:"e180x32_client",std:"DELETE"};n[24]={id:24,fld:"BTN_DELETE2_SEPARATOR",grid:0,evt:"e180x32_client",std:"DELETE"};n[27]={id:27,fld:"GROUPDATA",grid:0};n[28]={id:28,fld:"TABLE1",grid:0};n[34]={id:34,fld:"TABLE2",grid:0};n[37]={id:37,fld:"TEXTBLOCKWIZARDCOMPLETARDATOSID",format:1,grid:0,ctrltype:"textblock"};n[39]={id:39,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Wizardcompletardatosid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"WIZARDCOMPLETARDATOSID",gxz:"Z165WizardCompletarDatosId",gxold:"O165WizardCompletarDatosId",gxvar:"A165WizardCompletarDatosId",ucs:[],op:[49,54,44],ip:[49,54,44,39],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A165WizardCompletarDatosId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z165WizardCompletarDatosId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("WIZARDCOMPLETARDATOSID",gx.O.A165WizardCompletarDatosId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A165WizardCompletarDatosId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("WIZARDCOMPLETARDATOSID",gx.thousandSeparator)},nac:gx.falseFn};this.declareDomainHdlr(39,function(){});n[42]={id:42,fld:"TEXTBLOCKGRUPOEMPRESARIAL",format:1,grid:0,ctrltype:"textblock"};n[44]={id:44,lvl:0,type:"svchar",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"GRUPOEMPRESARIAL",gxz:"Z166GrupoEmpresarial",gxold:"O166GrupoEmpresarial",gxvar:"A166GrupoEmpresarial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A166GrupoEmpresarial=n)},v2z:function(n){n!==undefined&&(gx.O.Z166GrupoEmpresarial=n)},v2c:function(){gx.fn.setControlValue("GRUPOEMPRESARIAL",gx.O.A166GrupoEmpresarial,0)},c2v:function(){this.val()!==undefined&&(gx.O.A166GrupoEmpresarial=this.val())},val:function(){return gx.fn.getControlValue("GRUPOEMPRESARIAL")},nac:gx.falseFn};n[47]={id:47,fld:"TEXTBLOCKNUMEMPLEADO",format:1,grid:0,ctrltype:"textblock"};n[49]={id:49,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Numempleado,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NUMEMPLEADO",gxz:"Z1NumEmpleado",gxold:"O1NumEmpleado",gxvar:"A1NumEmpleado",ucs:[],op:[],ip:[49],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1NumEmpleado=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1NumEmpleado=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("NUMEMPLEADO",gx.O.A1NumEmpleado,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1NumEmpleado=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("NUMEMPLEADO",gx.thousandSeparator)},nac:gx.falseFn};n[52]={id:52,fld:"TEXTBLOCKSALDOVACACIONES",format:1,grid:0,ctrltype:"textblock"};n[54]={id:54,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOVACACIONES",gxz:"Z167SaldoVacaciones",gxold:"O167SaldoVacaciones",gxvar:"A167SaldoVacaciones",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A167SaldoVacaciones=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z167SaldoVacaciones=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("SALDOVACACIONES",gx.O.A167SaldoVacaciones,0)},c2v:function(){this.val()!==undefined&&(gx.O.A167SaldoVacaciones=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("SALDOVACACIONES",gx.thousandSeparator)},nac:gx.falseFn};n[57]={id:57,fld:"BTN_ENTER",grid:0,evt:"e110x32_client",std:"ENTER"};n[58]={id:58,fld:"BTN_CANCEL",grid:0,evt:"e120x32_client"};n[59]={id:59,fld:"BTN_DELETE",grid:0,evt:"e180x32_client",std:"DELETE"};this.A165WizardCompletarDatosId=0;this.Z165WizardCompletarDatosId=0;this.O165WizardCompletarDatosId=0;this.A166GrupoEmpresarial="";this.Z166GrupoEmpresarial="";this.O166GrupoEmpresarial="";this.A1NumEmpleado=0;this.Z1NumEmpleado=0;this.O1NumEmpleado=0;this.A167SaldoVacaciones=0;this.Z167SaldoVacaciones=0;this.O167SaldoVacaciones=0;this.A165WizardCompletarDatosId=0;this.A166GrupoEmpresarial="";this.A1NumEmpleado=0;this.A167SaldoVacaciones=0;this.Events={e110x32_client:["ENTER",!0],e120x32_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_WIZARDCOMPLETARDATOSID=[[{av:"A165WizardCompletarDatosId",fld:"WIZARDCOMPLETARDATOSID",pic:"ZZZZZZZZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A166GrupoEmpresarial",fld:"GRUPOEMPRESARIAL",pic:""},{av:"A1NumEmpleado",fld:"NUMEMPLEADO",pic:"ZZZZZZZZ9"},{av:"A167SaldoVacaciones",fld:"SALDOVACACIONES",pic:"ZZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z165WizardCompletarDatosId"},{av:"Z166GrupoEmpresarial"},{av:"Z1NumEmpleado"},{av:"Z167SaldoVacaciones"},{av:'gx.fn.getCtrlProperty("BTN_DELETE2","Enabled")',ctrl:"BTN_DELETE2",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("BTN_ENTER2","Enabled")',ctrl:"BTN_ENTER2",prop:"Enabled"}]];this.EvtParms.VALID_NUMEMPLEADO=[[{av:"A1NumEmpleado",fld:"NUMEMPLEADO",pic:"ZZZZZZZZ9"}],[]];this.EnterCtrl=["BTN_ENTER2","BTN_ENTER2_SEPARATOR","BTN_ENTER"];this.Initialize()});gx.wi(function(){gx.createParentObj(wizardcompletardatos)})