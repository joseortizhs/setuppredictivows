/*!   GeneXus C# 17_0_2-148375 on 10/7/2023 12:43:5.63
*/
gx.evt.autoSkip = false;
gx.define('seguridad.rol', false, function () {
   this.ServerClass =  "seguridad.rol" ;
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
   this.Valid_Rolid=function()
   {
      return this.validSrvEvt("Valid_Rolid", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_Mb_epr_cod=function()
   {
      return this.validSrvEvt("Valid_Mb_epr_cod", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_Rolfecha=function()
   {
      return this.validCliEvt("Valid_Rolfecha", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("ROLFECHA");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.A96RolFecha)==0) || new gx.date.gxdate( this.A96RolFecha ).compare( gx.date.ymdtod( 1753, 1, 1) ) >= 0 ) )
         {
            try {
               gxballoon.setError(gx.text.format( gx.getMessage( "GXSPC_OutOfRange"), gx.getMessage( "Rol Fecha"), "", "", "", "", "", "", "", ""));
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.e110d13_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e120d13_client=function()
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
   GXValidFnc[9]={ id: 9, fld:"BTN_FIRST",grid:0,evt:"e130d13_client",std:"FIRST"};
   GXValidFnc[10]={ id: 10, fld:"BTN_FIRST_SEPARATOR",grid:0,evt:"e130d13_client",std:"FIRST"};
   GXValidFnc[11]={ id: 11, fld:"BTN_PREVIOUS",grid:0,evt:"e140d13_client",std:"PREVIOUS"};
   GXValidFnc[12]={ id: 12, fld:"BTN_PREVIOUS_SEPARATOR",grid:0,evt:"e140d13_client",std:"PREVIOUS"};
   GXValidFnc[13]={ id: 13, fld:"BTN_NEXT",grid:0,evt:"e150d13_client",std:"NEXT"};
   GXValidFnc[14]={ id: 14, fld:"BTN_NEXT_SEPARATOR",grid:0,evt:"e150d13_client",std:"NEXT"};
   GXValidFnc[15]={ id: 15, fld:"BTN_LAST",grid:0,evt:"e160d13_client",std:"LAST"};
   GXValidFnc[16]={ id: 16, fld:"BTN_LAST_SEPARATOR",grid:0,evt:"e160d13_client",std:"LAST"};
   GXValidFnc[17]={ id: 17, fld:"BTN_SELECT",grid:0,evt:"e170d13_client",std:"SELECT"};
   GXValidFnc[18]={ id: 18, fld:"BTN_SELECT_SEPARATOR",grid:0,evt:"e170d13_client",std:"SELECT"};
   GXValidFnc[19]={ id: 19, fld:"BTN_ENTER2",grid:0,evt:"e110d13_client",std:"ENTER"};
   GXValidFnc[20]={ id: 20, fld:"BTN_ENTER2_SEPARATOR",grid:0,evt:"e110d13_client",std:"ENTER"};
   GXValidFnc[21]={ id: 21, fld:"BTN_CANCEL2",grid:0,evt:"e120d13_client"};
   GXValidFnc[22]={ id: 22, fld:"BTN_CANCEL2_SEPARATOR",grid:0,evt:"e120d13_client"};
   GXValidFnc[23]={ id: 23, fld:"BTN_DELETE2",grid:0,evt:"e180d13_client",std:"DELETE"};
   GXValidFnc[24]={ id: 24, fld:"BTN_DELETE2_SEPARATOR",grid:0,evt:"e180d13_client",std:"DELETE"};
   GXValidFnc[27]={ id: 27, fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={ id: 28, fld:"TABLE1",grid:0};
   GXValidFnc[34]={ id: 34, fld:"TABLE2",grid:0};
   GXValidFnc[37]={ id: 37, fld:"TEXTBLOCKROLID", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Rolid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ROLID",gxz:"Z13RolId",gxold:"O13RolId",gxvar:"A13RolId",ucs:[],op:[44,59,54,49],ip:[44,59,54,49,39],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A13RolId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z13RolId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ROLID",gx.O.A13RolId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A13RolId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ROLID",gx.thousandSeparator)},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={ id: 42, fld:"TEXTBLOCKMB_EPR_COD", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Mb_epr_cod,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MB_EPR_COD",gxz:"Z3Mb_Epr_cod",gxold:"O3Mb_Epr_cod",gxvar:"A3Mb_Epr_cod",ucs:[],op:[],ip:[44],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A3Mb_Epr_cod=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z3Mb_Epr_cod=Value},v2c:function(){gx.fn.setControlValue("MB_EPR_COD",gx.O.A3Mb_Epr_cod,0)},c2v:function(){if(this.val()!==undefined)gx.O.A3Mb_Epr_cod=this.val()},val:function(){return gx.fn.getControlValue("MB_EPR_COD")},nac:gx.falseFn};
   GXValidFnc[47]={ id: 47, fld:"TEXTBLOCKROLNOMBRE", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[49]={ id:49 ,lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ROLNOMBRE",gxz:"Z94RolNombre",gxold:"O94RolNombre",gxvar:"A94RolNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A94RolNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z94RolNombre=Value},v2c:function(){gx.fn.setControlValue("ROLNOMBRE",gx.O.A94RolNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A94RolNombre=this.val()},val:function(){return gx.fn.getControlValue("ROLNOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={ id: 52, fld:"TEXTBLOCKROLDESCRIPCION", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ROLDESCRIPCION",gxz:"Z95RolDescripcion",gxold:"O95RolDescripcion",gxvar:"A95RolDescripcion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A95RolDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z95RolDescripcion=Value},v2c:function(){gx.fn.setControlValue("ROLDESCRIPCION",gx.O.A95RolDescripcion,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A95RolDescripcion=this.val()},val:function(){return gx.fn.getControlValue("ROLDESCRIPCION")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[57]={ id: 57, fld:"TEXTBLOCKROLFECHA", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[59]={ id:59 ,lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Rolfecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ROLFECHA",gxz:"Z96RolFecha",gxold:"O96RolFecha",gxvar:"A96RolFecha",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[59],ip:[59],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A96RolFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z96RolFecha=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ROLFECHA",gx.O.A96RolFecha,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A96RolFecha=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ROLFECHA")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[62]={ id: 62, fld:"BTN_ENTER",grid:0,evt:"e110d13_client",std:"ENTER"};
   GXValidFnc[63]={ id: 63, fld:"BTN_CANCEL",grid:0,evt:"e120d13_client"};
   GXValidFnc[64]={ id: 64, fld:"BTN_DELETE",grid:0,evt:"e180d13_client",std:"DELETE"};
   this.A13RolId = 0 ;
   this.Z13RolId = 0 ;
   this.O13RolId = 0 ;
   this.A3Mb_Epr_cod = "" ;
   this.Z3Mb_Epr_cod = "" ;
   this.O3Mb_Epr_cod = "" ;
   this.A94RolNombre = "" ;
   this.Z94RolNombre = "" ;
   this.O94RolNombre = "" ;
   this.A95RolDescripcion = "" ;
   this.Z95RolDescripcion = "" ;
   this.O95RolDescripcion = "" ;
   this.A96RolFecha = gx.date.nullDate() ;
   this.Z96RolFecha = gx.date.nullDate() ;
   this.O96RolFecha = gx.date.nullDate() ;
   this.A13RolId = 0 ;
   this.A3Mb_Epr_cod = "" ;
   this.A94RolNombre = "" ;
   this.A95RolDescripcion = "" ;
   this.A96RolFecha = gx.date.nullDate() ;
   this.Events = {"e110d13_client": ["ENTER", true] ,"e120d13_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["VALID_ROLID"] = [[{av:'A13RolId',fld:'ROLID',pic:'ZZZZZZZZZZZZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!'}],[{av:'A3Mb_Epr_cod',fld:'MB_EPR_COD',pic:''},{av:'A94RolNombre',fld:'ROLNOMBRE',pic:''},{av:'A95RolDescripcion',fld:'ROLDESCRIPCION',pic:''},{av:'A96RolFecha',fld:'ROLFECHA',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'Z13RolId'},{av:'Z3Mb_Epr_cod'},{av:'Z94RolNombre'},{av:'Z95RolDescripcion'},{av:'Z96RolFecha'},{av:'gx.fn.getCtrlProperty("BTN_DELETE2","Enabled")',ctrl:'BTN_DELETE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTN_ENTER2","Enabled")',ctrl:'BTN_ENTER2',prop:'Enabled'}]];
   this.EvtParms["VALID_MB_EPR_COD"] = [[{av:'A3Mb_Epr_cod',fld:'MB_EPR_COD',pic:''}],[]];
   this.EvtParms["VALID_ROLFECHA"] = [[{av:'A96RolFecha',fld:'ROLFECHA',pic:''}],[{av:'A96RolFecha',fld:'ROLFECHA',pic:''}]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(seguridad.rol);});
