/*!   GeneXus C# 17_0_2-148375 on 10/7/2023 12:43:42.8
*/
gx.evt.autoSkip = false;
gx.define('servicios.tbl_control_descarga_metadatos', false, function () {
   this.ServerClass =  "servicios.tbl_control_descarga_metadatos" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("trn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
   };
   this.Valid_Bfdescargaid=function()
   {
      return this.validSrvEvt("Valid_Bfdescargaid", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.e111h54_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e121h54_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,68,69];
   this.GXLastCtrlId =69;
   GXValidFnc[2]={ id: 2, fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={ id: 5, fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={ id: 8, fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={ id: 9, fld:"BTN_FIRST",grid:0,evt:"e131h54_client",std:"FIRST"};
   GXValidFnc[10]={ id: 10, fld:"BTN_FIRST_SEPARATOR",grid:0,evt:"e131h54_client",std:"FIRST"};
   GXValidFnc[11]={ id: 11, fld:"BTN_PREVIOUS",grid:0,evt:"e141h54_client",std:"PREVIOUS"};
   GXValidFnc[12]={ id: 12, fld:"BTN_PREVIOUS_SEPARATOR",grid:0,evt:"e141h54_client",std:"PREVIOUS"};
   GXValidFnc[13]={ id: 13, fld:"BTN_NEXT",grid:0,evt:"e151h54_client",std:"NEXT"};
   GXValidFnc[14]={ id: 14, fld:"BTN_NEXT_SEPARATOR",grid:0,evt:"e151h54_client",std:"NEXT"};
   GXValidFnc[15]={ id: 15, fld:"BTN_LAST",grid:0,evt:"e161h54_client",std:"LAST"};
   GXValidFnc[16]={ id: 16, fld:"BTN_LAST_SEPARATOR",grid:0,evt:"e161h54_client",std:"LAST"};
   GXValidFnc[17]={ id: 17, fld:"BTN_SELECT",grid:0,evt:"e171h54_client",std:"SELECT"};
   GXValidFnc[18]={ id: 18, fld:"BTN_SELECT_SEPARATOR",grid:0,evt:"e171h54_client",std:"SELECT"};
   GXValidFnc[19]={ id: 19, fld:"BTN_ENTER2",grid:0,evt:"e111h54_client",std:"ENTER"};
   GXValidFnc[20]={ id: 20, fld:"BTN_ENTER2_SEPARATOR",grid:0,evt:"e111h54_client",std:"ENTER"};
   GXValidFnc[21]={ id: 21, fld:"BTN_CANCEL2",grid:0,evt:"e121h54_client"};
   GXValidFnc[22]={ id: 22, fld:"BTN_CANCEL2_SEPARATOR",grid:0,evt:"e121h54_client"};
   GXValidFnc[23]={ id: 23, fld:"BTN_DELETE2",grid:0,evt:"e181h54_client",std:"DELETE"};
   GXValidFnc[24]={ id: 24, fld:"BTN_DELETE2_SEPARATOR",grid:0,evt:"e181h54_client",std:"DELETE"};
   GXValidFnc[27]={ id: 27, fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={ id: 28, fld:"TABLE1",grid:0};
   GXValidFnc[34]={ id: 34, fld:"TABLE2",grid:0};
   GXValidFnc[37]={ id: 37, fld:"TEXTBLOCKBFDESCARGAID", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bfdescargaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BFDESCARGAID",gxz:"Z672BFDescargaId",gxold:"O672BFDescargaId",gxvar:"A672BFDescargaId",ucs:[],op:[64,59,54,49,44],ip:[64,59,54,49,44,39],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A672BFDescargaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z672BFDescargaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BFDESCARGAID",gx.O.A672BFDescargaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A672BFDescargaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BFDESCARGAID",gx.thousandSeparator)},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={ id: 42, fld:"TEXTBLOCKBFDESCARGARFC", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BFDESCARGARFC",gxz:"Z681BFDescargaRFC",gxold:"O681BFDescargaRFC",gxvar:"A681BFDescargaRFC",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A681BFDescargaRFC=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z681BFDescargaRFC=Value},v2c:function(){gx.fn.setControlValue("BFDESCARGARFC",gx.O.A681BFDescargaRFC,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A681BFDescargaRFC=this.val()},val:function(){return gx.fn.getControlValue("BFDESCARGARFC")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={ id: 47, fld:"TEXTBLOCKBFDESCARGACODEISSUERREQUEST", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[49]={ id:49 ,lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BFDESCARGACODEISSUERREQUEST",gxz:"Z677BFDescargaCodeIssuerRequest",gxold:"O677BFDescargaCodeIssuerRequest",gxvar:"A677BFDescargaCodeIssuerRequest",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A677BFDescargaCodeIssuerRequest=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z677BFDescargaCodeIssuerRequest=Value},v2c:function(){gx.fn.setControlValue("BFDESCARGACODEISSUERREQUEST",gx.O.A677BFDescargaCodeIssuerRequest,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A677BFDescargaCodeIssuerRequest=this.val()},val:function(){return gx.fn.getControlValue("BFDESCARGACODEISSUERREQUEST")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={ id: 52, fld:"TEXTBLOCKBFDESCARGAMESSAGEISSUERREQUEST", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BFDESCARGAMESSAGEISSUERREQUEST",gxz:"Z680BFDescargaMessageIssuerRequest",gxold:"O680BFDescargaMessageIssuerRequest",gxvar:"A680BFDescargaMessageIssuerRequest",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A680BFDescargaMessageIssuerRequest=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z680BFDescargaMessageIssuerRequest=Value},v2c:function(){gx.fn.setControlValue("BFDESCARGAMESSAGEISSUERREQUEST",gx.O.A680BFDescargaMessageIssuerRequest,0)},c2v:function(){if(this.val()!==undefined)gx.O.A680BFDescargaMessageIssuerRequest=this.val()},val:function(){return gx.fn.getControlValue("BFDESCARGAMESSAGEISSUERREQUEST")},nac:gx.falseFn};
   GXValidFnc[57]={ id: 57, fld:"TEXTBLOCKBFDESCARGAESDESCARGAINICIAL", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[59]={ id:59 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BFDESCARGAESDESCARGAINICIAL",gxz:"Z678BFDescargaEsDescargaInicial",gxold:"O678BFDescargaEsDescargaInicial",gxvar:"A678BFDescargaEsDescargaInicial",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A678BFDescargaEsDescargaInicial=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z678BFDescargaEsDescargaInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BFDESCARGAESDESCARGAINICIAL",gx.O.A678BFDescargaEsDescargaInicial,0)},c2v:function(){if(this.val()!==undefined)gx.O.A678BFDescargaEsDescargaInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BFDESCARGAESDESCARGAINICIAL",gx.thousandSeparator)},nac:gx.falseFn};
   GXValidFnc[62]={ id: 62, fld:"TEXTBLOCKBFDESCARGAESTATUSRECEIVEDREQUEST", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[64]={ id:64 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BFDESCARGAESTATUSRECEIVEDREQUE",gxz:"Z679BFDescargaEstatusReceivedReque",gxold:"O679BFDescargaEstatusReceivedReque",gxvar:"A679BFDescargaEstatusReceivedReque",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A679BFDescargaEstatusReceivedReque=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z679BFDescargaEstatusReceivedReque=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BFDESCARGAESTATUSRECEIVEDREQUE",gx.O.A679BFDescargaEstatusReceivedReque,0)},c2v:function(){if(this.val()!==undefined)gx.O.A679BFDescargaEstatusReceivedReque=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BFDESCARGAESTATUSRECEIVEDREQUE",gx.thousandSeparator)},nac:gx.falseFn};
   GXValidFnc[67]={ id: 67, fld:"BTN_ENTER",grid:0,evt:"e111h54_client",std:"ENTER"};
   GXValidFnc[68]={ id: 68, fld:"BTN_CANCEL",grid:0,evt:"e121h54_client"};
   GXValidFnc[69]={ id: 69, fld:"BTN_DELETE",grid:0,evt:"e181h54_client",std:"DELETE"};
   this.A672BFDescargaId = 0 ;
   this.Z672BFDescargaId = 0 ;
   this.O672BFDescargaId = 0 ;
   this.A681BFDescargaRFC = "" ;
   this.Z681BFDescargaRFC = "" ;
   this.O681BFDescargaRFC = "" ;
   this.A677BFDescargaCodeIssuerRequest = "" ;
   this.Z677BFDescargaCodeIssuerRequest = "" ;
   this.O677BFDescargaCodeIssuerRequest = "" ;
   this.A680BFDescargaMessageIssuerRequest = "" ;
   this.Z680BFDescargaMessageIssuerRequest = "" ;
   this.O680BFDescargaMessageIssuerRequest = "" ;
   this.A678BFDescargaEsDescargaInicial = 0 ;
   this.Z678BFDescargaEsDescargaInicial = 0 ;
   this.O678BFDescargaEsDescargaInicial = 0 ;
   this.A679BFDescargaEstatusReceivedReque = 0 ;
   this.Z679BFDescargaEstatusReceivedReque = 0 ;
   this.O679BFDescargaEstatusReceivedReque = 0 ;
   this.A672BFDescargaId = 0 ;
   this.A681BFDescargaRFC = "" ;
   this.A677BFDescargaCodeIssuerRequest = "" ;
   this.A680BFDescargaMessageIssuerRequest = "" ;
   this.A678BFDescargaEsDescargaInicial = 0 ;
   this.A679BFDescargaEstatusReceivedReque = 0 ;
   this.Events = {"e111h54_client": ["ENTER", true] ,"e121h54_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["VALID_BFDESCARGAID"] = [[{av:'A672BFDescargaId',fld:'BFDESCARGAID',pic:'ZZZZZZZZZZZZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!'}],[{av:'A681BFDescargaRFC',fld:'BFDESCARGARFC',pic:''},{av:'A677BFDescargaCodeIssuerRequest',fld:'BFDESCARGACODEISSUERREQUEST',pic:''},{av:'A680BFDescargaMessageIssuerRequest',fld:'BFDESCARGAMESSAGEISSUERREQUEST',pic:''},{av:'A678BFDescargaEsDescargaInicial',fld:'BFDESCARGAESDESCARGAINICIAL',pic:'ZZZ9'},{av:'A679BFDescargaEstatusReceivedReque',fld:'BFDESCARGAESTATUSRECEIVEDREQUE',pic:'ZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'Z672BFDescargaId'},{av:'Z681BFDescargaRFC'},{av:'Z677BFDescargaCodeIssuerRequest'},{av:'Z680BFDescargaMessageIssuerRequest'},{av:'Z678BFDescargaEsDescargaInicial'},{av:'Z679BFDescargaEstatusReceivedReque'},{av:'gx.fn.getCtrlProperty("BTN_DELETE2","Enabled")',ctrl:'BTN_DELETE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTN_ENTER2","Enabled")',ctrl:'BTN_ENTER2',prop:'Enabled'}]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(servicios.tbl_control_descarga_metadatos);});
