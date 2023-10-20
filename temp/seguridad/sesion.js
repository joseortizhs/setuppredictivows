/*!   GeneXus C# 17_0_2-148375 on 10/9/2023 11:52:1.55
*/
gx.evt.autoSkip = false;
gx.define('seguridad.sesion', false, function () {
   this.ServerClass =  "seguridad.sesion" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("trn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.A13RolId=gx.fn.getIntegerValue("ROLID",gx.thousandSeparator) ;
   };
   this.Valid_Sesiontoken=function()
   {
      return this.validSrvEvt("Valid_Sesiontoken", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_Usuarioid=function()
   {
      return this.validSrvEvt("Valid_Usuarioid", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_Sesioninicio=function()
   {
      return this.validCliEvt("Valid_Sesioninicio", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("SESIONINICIO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.A146SesionInicio)==0) || new gx.date.gxdate( this.A146SesionInicio ).compare( gx.date.ymdhmstot( 1753, 1, 1, 0, 0, 0) ) >= 0 ) )
         {
            try {
               gxballoon.setError(gx.text.format( gx.getMessage( "GXSPC_OutOfRange"), gx.getMessage( "Sesion Inicio"), "", "", "", "", "", "", "", ""));
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
   this.Valid_Sesionfin=function()
   {
      return this.validCliEvt("Valid_Sesionfin", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("SESIONFIN");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.A147SesionFin)===0) || new gx.date.gxdate( this.A147SesionFin ).compare( gx.date.ymdhmstot( 1753, 1, 1, 0, 0, 0) ) >= 0 ) )
         {
            try {
               gxballoon.setError(gx.text.format( gx.getMessage( "GXSPC_OutOfRange"), gx.getMessage( "Sesion Fin"), "", "", "", "", "", "", "", ""));
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
   this.e110s27_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e120s27_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,73,74];
   this.GXLastCtrlId =74;
   GXValidFnc[2]={ id: 2, fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={ id: 5, fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={ id: 8, fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={ id: 9, fld:"BTN_FIRST",grid:0,evt:"e130s27_client",std:"FIRST"};
   GXValidFnc[10]={ id: 10, fld:"BTN_FIRST_SEPARATOR",grid:0,evt:"e130s27_client",std:"FIRST"};
   GXValidFnc[11]={ id: 11, fld:"BTN_PREVIOUS",grid:0,evt:"e140s27_client",std:"PREVIOUS"};
   GXValidFnc[12]={ id: 12, fld:"BTN_PREVIOUS_SEPARATOR",grid:0,evt:"e140s27_client",std:"PREVIOUS"};
   GXValidFnc[13]={ id: 13, fld:"BTN_NEXT",grid:0,evt:"e150s27_client",std:"NEXT"};
   GXValidFnc[14]={ id: 14, fld:"BTN_NEXT_SEPARATOR",grid:0,evt:"e150s27_client",std:"NEXT"};
   GXValidFnc[15]={ id: 15, fld:"BTN_LAST",grid:0,evt:"e160s27_client",std:"LAST"};
   GXValidFnc[16]={ id: 16, fld:"BTN_LAST_SEPARATOR",grid:0,evt:"e160s27_client",std:"LAST"};
   GXValidFnc[17]={ id: 17, fld:"BTN_SELECT",grid:0,evt:"e170s27_client",std:"SELECT"};
   GXValidFnc[18]={ id: 18, fld:"BTN_SELECT_SEPARATOR",grid:0,evt:"e170s27_client",std:"SELECT"};
   GXValidFnc[19]={ id: 19, fld:"BTN_ENTER2",grid:0,evt:"e110s27_client",std:"ENTER"};
   GXValidFnc[20]={ id: 20, fld:"BTN_ENTER2_SEPARATOR",grid:0,evt:"e110s27_client",std:"ENTER"};
   GXValidFnc[21]={ id: 21, fld:"BTN_CANCEL2",grid:0,evt:"e120s27_client"};
   GXValidFnc[22]={ id: 22, fld:"BTN_CANCEL2_SEPARATOR",grid:0,evt:"e120s27_client"};
   GXValidFnc[23]={ id: 23, fld:"BTN_DELETE2",grid:0,evt:"e180s27_client",std:"DELETE"};
   GXValidFnc[24]={ id: 24, fld:"BTN_DELETE2_SEPARATOR",grid:0,evt:"e180s27_client",std:"DELETE"};
   GXValidFnc[27]={ id: 27, fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={ id: 28, fld:"TABLE1",grid:0};
   GXValidFnc[34]={ id: 34, fld:"TABLE2",grid:0};
   GXValidFnc[37]={ id: 37, fld:"TEXTBLOCKSESIONTOKEN", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"char",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Sesiontoken,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SESIONTOKEN",gxz:"Z37SesionToken",gxold:"O37SesionToken",gxvar:"A37SesionToken",ucs:[],op:[49,69,64,59,54],ip:[49,69,64,59,54,39],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A37SesionToken=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z37SesionToken=Value},v2c:function(){gx.fn.setControlValue("SESIONTOKEN",gx.O.A37SesionToken,0)},c2v:function(){if(this.val()!==undefined)gx.O.A37SesionToken=this.val()},val:function(){return gx.fn.getControlValue("SESIONTOKEN")},nac:gx.falseFn};
   GXValidFnc[42]={ id: 42, fld:"TEXTBLOCKMB_EPR_COD", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"char",len:3,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MB_EPR_COD",gxz:"Z3Mb_Epr_cod",gxold:"O3Mb_Epr_cod",gxvar:"A3Mb_Epr_cod",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A3Mb_Epr_cod=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z3Mb_Epr_cod=Value},v2c:function(){gx.fn.setControlValue("MB_EPR_COD",gx.O.A3Mb_Epr_cod,0)},c2v:function(){if(this.val()!==undefined)gx.O.A3Mb_Epr_cod=this.val()},val:function(){return gx.fn.getControlValue("MB_EPR_COD")},nac:gx.falseFn};
   GXValidFnc[47]={ id: 47, fld:"TEXTBLOCKUSUARIOID", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[49]={ id:49 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuarioid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIOID",gxz:"Z15UsuarioId",gxold:"O15UsuarioId",gxvar:"A15UsuarioId",ucs:[],op:[44],ip:[44,49],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A15UsuarioId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z15UsuarioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("USUARIOID",gx.O.A15UsuarioId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A15UsuarioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USUARIOID",gx.thousandSeparator)},nac:gx.falseFn};
   GXValidFnc[52]={ id: 52, fld:"TEXTBLOCKSESIONKEY", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"char",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SESIONKEY",gxz:"Z149SesionKey",gxold:"O149SesionKey",gxvar:"A149SesionKey",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A149SesionKey=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z149SesionKey=Value},v2c:function(){gx.fn.setControlValue("SESIONKEY",gx.O.A149SesionKey,0)},c2v:function(){if(this.val()!==undefined)gx.O.A149SesionKey=this.val()},val:function(){return gx.fn.getControlValue("SESIONKEY")},nac:gx.falseFn};
   GXValidFnc[57]={ id: 57, fld:"TEXTBLOCKSESIONINICIO", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[59]={ id:59 ,lvl:0,type:"dtime",len:8,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sesioninicio,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SESIONINICIO",gxz:"Z146SesionInicio",gxold:"O146SesionInicio",gxvar:"A146SesionInicio",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[59],ip:[59],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A146SesionInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z146SesionInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SESIONINICIO",gx.O.A146SesionInicio,0)},c2v:function(){if(this.val()!==undefined)gx.O.A146SesionInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SESIONINICIO")},nac:gx.falseFn};
   GXValidFnc[62]={ id: 62, fld:"TEXTBLOCKSESIONFIN", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[64]={ id:64 ,lvl:0,type:"dtime",len:8,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sesionfin,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SESIONFIN",gxz:"Z147SesionFin",gxold:"O147SesionFin",gxvar:"A147SesionFin",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[64],ip:[64],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A147SesionFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z147SesionFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SESIONFIN",gx.O.A147SesionFin,0)},c2v:function(){if(this.val()!==undefined)gx.O.A147SesionFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SESIONFIN")},nac:gx.falseFn};
   GXValidFnc[67]={ id: 67, fld:"TEXTBLOCKSESIONESTATUS", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[69]={ id:69 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SESIONESTATUS",gxz:"Z148SesionEstatus",gxold:"O148SesionEstatus",gxvar:"A148SesionEstatus",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A148SesionEstatus=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z148SesionEstatus=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SESIONESTATUS",gx.O.A148SesionEstatus,0)},c2v:function(){if(this.val()!==undefined)gx.O.A148SesionEstatus=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SESIONESTATUS",gx.thousandSeparator)},nac:gx.falseFn};
   GXValidFnc[72]={ id: 72, fld:"BTN_ENTER",grid:0,evt:"e110s27_client",std:"ENTER"};
   GXValidFnc[73]={ id: 73, fld:"BTN_CANCEL",grid:0,evt:"e120s27_client"};
   GXValidFnc[74]={ id: 74, fld:"BTN_DELETE",grid:0,evt:"e180s27_client",std:"DELETE"};
   this.A37SesionToken = "" ;
   this.Z37SesionToken = "" ;
   this.O37SesionToken = "" ;
   this.A3Mb_Epr_cod = "" ;
   this.Z3Mb_Epr_cod = "" ;
   this.O3Mb_Epr_cod = "" ;
   this.A15UsuarioId = 0 ;
   this.Z15UsuarioId = 0 ;
   this.O15UsuarioId = 0 ;
   this.A149SesionKey = "" ;
   this.Z149SesionKey = "" ;
   this.O149SesionKey = "" ;
   this.A146SesionInicio = gx.date.nullDate() ;
   this.Z146SesionInicio = gx.date.nullDate() ;
   this.O146SesionInicio = gx.date.nullDate() ;
   this.A147SesionFin = gx.date.nullDate() ;
   this.Z147SesionFin = gx.date.nullDate() ;
   this.O147SesionFin = gx.date.nullDate() ;
   this.A148SesionEstatus = 0 ;
   this.Z148SesionEstatus = 0 ;
   this.O148SesionEstatus = 0 ;
   this.A13RolId = 0 ;
   this.A37SesionToken = "" ;
   this.A3Mb_Epr_cod = "" ;
   this.A15UsuarioId = 0 ;
   this.A149SesionKey = "" ;
   this.A146SesionInicio = gx.date.nullDate() ;
   this.A147SesionFin = gx.date.nullDate() ;
   this.A148SesionEstatus = 0 ;
   this.Events = {"e110s27_client": ["ENTER", true] ,"e120s27_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["VALID_SESIONTOKEN"] = [[{av:'A37SesionToken',fld:'SESIONTOKEN',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'}],[{av:'A15UsuarioId',fld:'USUARIOID',pic:'ZZZ9'},{av:'A149SesionKey',fld:'SESIONKEY',pic:''},{av:'A146SesionInicio',fld:'SESIONINICIO',pic:'99/99/99 99:99'},{av:'A147SesionFin',fld:'SESIONFIN',pic:'99/99/99 99:99'},{av:'A148SesionEstatus',fld:'SESIONESTATUS',pic:'ZZZ9'},{av:'A13RolId',fld:'ROLID',pic:'ZZZZZZZZZZZZZZ9'},{av:'A3Mb_Epr_cod',fld:'MB_EPR_COD',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'Z37SesionToken'},{av:'Z15UsuarioId'},{av:'Z149SesionKey'},{av:'Z146SesionInicio'},{av:'Z147SesionFin'},{av:'Z148SesionEstatus'},{av:'Z13RolId'},{av:'Z3Mb_Epr_cod'},{av:'gx.fn.getCtrlProperty("BTN_DELETE2","Enabled")',ctrl:'BTN_DELETE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTN_ENTER2","Enabled")',ctrl:'BTN_ENTER2',prop:'Enabled'}]];
   this.EvtParms["VALID_USUARIOID"] = [[{av:'A15UsuarioId',fld:'USUARIOID',pic:'ZZZ9'},{av:'A13RolId',fld:'ROLID',pic:'ZZZZZZZZZZZZZZ9'},{av:'A3Mb_Epr_cod',fld:'MB_EPR_COD',pic:''}],[{av:'A13RolId',fld:'ROLID',pic:'ZZZZZZZZZZZZZZ9'},{av:'A3Mb_Epr_cod',fld:'MB_EPR_COD',pic:''}]];
   this.EvtParms["VALID_SESIONINICIO"] = [[{av:'A146SesionInicio',fld:'SESIONINICIO',pic:'99/99/99 99:99'}],[{av:'A146SesionInicio',fld:'SESIONINICIO',pic:'99/99/99 99:99'}]];
   this.EvtParms["VALID_SESIONFIN"] = [[{av:'A147SesionFin',fld:'SESIONFIN',pic:'99/99/99 99:99'}],[{av:'A147SesionFin',fld:'SESIONFIN',pic:'99/99/99 99:99'}]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("A13RolId", "ROLID", 0, "int", 15, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(seguridad.sesion);});
