/*!   GeneXus C# 17_0_2-148375 on 10/7/2023 12:43:11.98
*/
gx.evt.autoSkip = false;
gx.define('seguridad.variablessistema', false, function () {
   this.ServerClass =  "seguridad.variablessistema" ;
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
   this.Valid_Variablessistemaid=function()
   {
      return this.validSrvEvt("Valid_Variablessistemaid", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.e110i17_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e120i17_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,63,64];
   this.GXLastCtrlId =64;
   GXValidFnc[2]={ id: 2, fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={ id: 5, fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={ id: 8, fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={ id: 9, fld:"BTN_FIRST",grid:0,evt:"e130i17_client",std:"FIRST"};
   GXValidFnc[10]={ id: 10, fld:"BTN_FIRST_SEPARATOR",grid:0,evt:"e130i17_client",std:"FIRST"};
   GXValidFnc[11]={ id: 11, fld:"BTN_PREVIOUS",grid:0,evt:"e140i17_client",std:"PREVIOUS"};
   GXValidFnc[12]={ id: 12, fld:"BTN_PREVIOUS_SEPARATOR",grid:0,evt:"e140i17_client",std:"PREVIOUS"};
   GXValidFnc[13]={ id: 13, fld:"BTN_NEXT",grid:0,evt:"e150i17_client",std:"NEXT"};
   GXValidFnc[14]={ id: 14, fld:"BTN_NEXT_SEPARATOR",grid:0,evt:"e150i17_client",std:"NEXT"};
   GXValidFnc[15]={ id: 15, fld:"BTN_LAST",grid:0,evt:"e160i17_client",std:"LAST"};
   GXValidFnc[16]={ id: 16, fld:"BTN_LAST_SEPARATOR",grid:0,evt:"e160i17_client",std:"LAST"};
   GXValidFnc[17]={ id: 17, fld:"BTN_SELECT",grid:0,evt:"e170i17_client",std:"SELECT"};
   GXValidFnc[18]={ id: 18, fld:"BTN_SELECT_SEPARATOR",grid:0,evt:"e170i17_client",std:"SELECT"};
   GXValidFnc[19]={ id: 19, fld:"BTN_ENTER2",grid:0,evt:"e110i17_client",std:"ENTER"};
   GXValidFnc[20]={ id: 20, fld:"BTN_ENTER2_SEPARATOR",grid:0,evt:"e110i17_client",std:"ENTER"};
   GXValidFnc[21]={ id: 21, fld:"BTN_CANCEL2",grid:0,evt:"e120i17_client"};
   GXValidFnc[22]={ id: 22, fld:"BTN_CANCEL2_SEPARATOR",grid:0,evt:"e120i17_client"};
   GXValidFnc[23]={ id: 23, fld:"BTN_DELETE2",grid:0,evt:"e180i17_client",std:"DELETE"};
   GXValidFnc[24]={ id: 24, fld:"BTN_DELETE2_SEPARATOR",grid:0,evt:"e180i17_client",std:"DELETE"};
   GXValidFnc[27]={ id: 27, fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={ id: 28, fld:"TABLE1",grid:0};
   GXValidFnc[34]={ id: 34, fld:"TABLE2",grid:0};
   GXValidFnc[37]={ id: 37, fld:"TEXTBLOCKVARIABLESSISTEMAID", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Variablessistemaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VARIABLESSISTEMAID",gxz:"Z17VariablesSistemaId",gxold:"O17VariablesSistemaId",gxvar:"A17VariablesSistemaId",ucs:[],op:[59,54,49,44],ip:[59,54,49,44,39],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A17VariablesSistemaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z17VariablesSistemaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("VARIABLESSISTEMAID",gx.O.A17VariablesSistemaId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A17VariablesSistemaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("VARIABLESSISTEMAID",gx.thousandSeparator)},nac:gx.falseFn};
   GXValidFnc[42]={ id: 42, fld:"TEXTBLOCKVARIABLESSISTEMACLAVE", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VARIABLESSISTEMACLAVE",gxz:"Z108VariablesSistemaClave",gxold:"O108VariablesSistemaClave",gxvar:"A108VariablesSistemaClave",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A108VariablesSistemaClave=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z108VariablesSistemaClave=Value},v2c:function(){gx.fn.setControlValue("VARIABLESSISTEMACLAVE",gx.O.A108VariablesSistemaClave,0)},c2v:function(){if(this.val()!==undefined)gx.O.A108VariablesSistemaClave=this.val()},val:function(){return gx.fn.getControlValue("VARIABLESSISTEMACLAVE")},nac:gx.falseFn};
   GXValidFnc[47]={ id: 47, fld:"TEXTBLOCKVARIABLESSISTEMADESC", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[49]={ id:49 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VARIABLESSISTEMADESC",gxz:"Z109VariablesSistemaDesc",gxold:"O109VariablesSistemaDesc",gxvar:"A109VariablesSistemaDesc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A109VariablesSistemaDesc=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z109VariablesSistemaDesc=Value},v2c:function(){gx.fn.setControlValue("VARIABLESSISTEMADESC",gx.O.A109VariablesSistemaDesc,0)},c2v:function(){if(this.val()!==undefined)gx.O.A109VariablesSistemaDesc=this.val()},val:function(){return gx.fn.getControlValue("VARIABLESSISTEMADESC")},nac:gx.falseFn};
   GXValidFnc[52]={ id: 52, fld:"TEXTBLOCKVARIABLESSISTEMAVALOR", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"svchar",len:2048,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VARIABLESSISTEMAVALOR",gxz:"Z110VariablesSistemaValor",gxold:"O110VariablesSistemaValor",gxvar:"A110VariablesSistemaValor",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A110VariablesSistemaValor=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z110VariablesSistemaValor=Value},v2c:function(){gx.fn.setControlValue("VARIABLESSISTEMAVALOR",gx.O.A110VariablesSistemaValor,0)},c2v:function(){if(this.val()!==undefined)gx.O.A110VariablesSistemaValor=this.val()},val:function(){return gx.fn.getControlValue("VARIABLESSISTEMAVALOR")},nac:gx.falseFn};
   GXValidFnc[57]={ id: 57, fld:"TEXTBLOCKVARIABLESSISTEMATIPO", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[59]={ id:59 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VARIABLESSISTEMATIPO",gxz:"Z111VariablesSistemaTipo",gxold:"O111VariablesSistemaTipo",gxvar:"A111VariablesSistemaTipo",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A111VariablesSistemaTipo=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z111VariablesSistemaTipo=Value},v2c:function(){gx.fn.setControlValue("VARIABLESSISTEMATIPO",gx.O.A111VariablesSistemaTipo,0)},c2v:function(){if(this.val()!==undefined)gx.O.A111VariablesSistemaTipo=this.val()},val:function(){return gx.fn.getControlValue("VARIABLESSISTEMATIPO")},nac:gx.falseFn};
   GXValidFnc[62]={ id: 62, fld:"BTN_ENTER",grid:0,evt:"e110i17_client",std:"ENTER"};
   GXValidFnc[63]={ id: 63, fld:"BTN_CANCEL",grid:0,evt:"e120i17_client"};
   GXValidFnc[64]={ id: 64, fld:"BTN_DELETE",grid:0,evt:"e180i17_client",std:"DELETE"};
   this.A17VariablesSistemaId = 0 ;
   this.Z17VariablesSistemaId = 0 ;
   this.O17VariablesSistemaId = 0 ;
   this.A108VariablesSistemaClave = "" ;
   this.Z108VariablesSistemaClave = "" ;
   this.O108VariablesSistemaClave = "" ;
   this.A109VariablesSistemaDesc = "" ;
   this.Z109VariablesSistemaDesc = "" ;
   this.O109VariablesSistemaDesc = "" ;
   this.A110VariablesSistemaValor = "" ;
   this.Z110VariablesSistemaValor = "" ;
   this.O110VariablesSistemaValor = "" ;
   this.A111VariablesSistemaTipo = "" ;
   this.Z111VariablesSistemaTipo = "" ;
   this.O111VariablesSistemaTipo = "" ;
   this.A17VariablesSistemaId = 0 ;
   this.A108VariablesSistemaClave = "" ;
   this.A109VariablesSistemaDesc = "" ;
   this.A110VariablesSistemaValor = "" ;
   this.A111VariablesSistemaTipo = "" ;
   this.Events = {"e110i17_client": ["ENTER", true] ,"e120i17_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["VALID_VARIABLESSISTEMAID"] = [[{av:'A17VariablesSistemaId',fld:'VARIABLESSISTEMAID',pic:'ZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!'}],[{av:'A108VariablesSistemaClave',fld:'VARIABLESSISTEMACLAVE',pic:''},{av:'A109VariablesSistemaDesc',fld:'VARIABLESSISTEMADESC',pic:''},{av:'A110VariablesSistemaValor',fld:'VARIABLESSISTEMAVALOR',pic:''},{av:'A111VariablesSistemaTipo',fld:'VARIABLESSISTEMATIPO',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'Z17VariablesSistemaId'},{av:'Z108VariablesSistemaClave'},{av:'Z109VariablesSistemaDesc'},{av:'Z110VariablesSistemaValor'},{av:'Z111VariablesSistemaTipo'},{av:'gx.fn.getCtrlProperty("BTN_DELETE2","Enabled")',ctrl:'BTN_DELETE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTN_ENTER2","Enabled")',ctrl:'BTN_ENTER2',prop:'Enabled'}]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(seguridad.variablessistema);});
