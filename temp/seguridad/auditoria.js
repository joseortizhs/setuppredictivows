/*!   GeneXus C# 17_0_2-148375 on 10/6/2023 20:8:36.85
*/
gx.evt.autoSkip = false;
gx.define('seguridad.auditoria', false, function () {
   this.ServerClass =  "seguridad.auditoria" ;
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
   this.Valid_Auditoriaid=function()
   {
      return this.validSrvEvt("Valid_Auditoriaid", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_Moduloid=function()
   {
      return this.validSrvEvt("Valid_Moduloid", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_Mb_epr_cod=function()
   {
      return this.validSrvEvt("Valid_Mb_epr_cod", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_Auditoriafechahora=function()
   {
      return this.validCliEvt("Valid_Auditoriafechahora", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("AUDITORIAFECHAHORA");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.A41AuditoriaFechaHora)==0) || new gx.date.gxdate( this.A41AuditoriaFechaHora ).compare( gx.date.ymdhmstot( 1753, 1, 1, 0, 0, 0) ) >= 0 ) )
         {
            try {
               gxballoon.setError(gx.text.format( gx.getMessage( "GXSPC_OutOfRange"), gx.getMessage( "Auditoria Fecha Hora"), "", "", "", "", "", "", "", ""));
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
   this.e11011_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12011_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,88,89];
   this.GXLastCtrlId =89;
   GXValidFnc[2]={ id: 2, fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={ id: 5, fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={ id: 8, fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={ id: 9, fld:"BTN_FIRST",grid:0,evt:"e13011_client",std:"FIRST"};
   GXValidFnc[10]={ id: 10, fld:"BTN_FIRST_SEPARATOR",grid:0,evt:"e13011_client",std:"FIRST"};
   GXValidFnc[11]={ id: 11, fld:"BTN_PREVIOUS",grid:0,evt:"e14011_client",std:"PREVIOUS"};
   GXValidFnc[12]={ id: 12, fld:"BTN_PREVIOUS_SEPARATOR",grid:0,evt:"e14011_client",std:"PREVIOUS"};
   GXValidFnc[13]={ id: 13, fld:"BTN_NEXT",grid:0,evt:"e15011_client",std:"NEXT"};
   GXValidFnc[14]={ id: 14, fld:"BTN_NEXT_SEPARATOR",grid:0,evt:"e15011_client",std:"NEXT"};
   GXValidFnc[15]={ id: 15, fld:"BTN_LAST",grid:0,evt:"e16011_client",std:"LAST"};
   GXValidFnc[16]={ id: 16, fld:"BTN_LAST_SEPARATOR",grid:0,evt:"e16011_client",std:"LAST"};
   GXValidFnc[17]={ id: 17, fld:"BTN_SELECT",grid:0,evt:"e17011_client",std:"SELECT"};
   GXValidFnc[18]={ id: 18, fld:"BTN_SELECT_SEPARATOR",grid:0,evt:"e17011_client",std:"SELECT"};
   GXValidFnc[19]={ id: 19, fld:"BTN_ENTER2",grid:0,evt:"e11011_client",std:"ENTER"};
   GXValidFnc[20]={ id: 20, fld:"BTN_ENTER2_SEPARATOR",grid:0,evt:"e11011_client",std:"ENTER"};
   GXValidFnc[21]={ id: 21, fld:"BTN_CANCEL2",grid:0,evt:"e12011_client"};
   GXValidFnc[22]={ id: 22, fld:"BTN_CANCEL2_SEPARATOR",grid:0,evt:"e12011_client"};
   GXValidFnc[23]={ id: 23, fld:"BTN_DELETE2",grid:0,evt:"e18011_client",std:"DELETE"};
   GXValidFnc[24]={ id: 24, fld:"BTN_DELETE2_SEPARATOR",grid:0,evt:"e18011_client",std:"DELETE"};
   GXValidFnc[27]={ id: 27, fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={ id: 28, fld:"TABLE1",grid:0};
   GXValidFnc[34]={ id: 34, fld:"TABLE2",grid:0};
   GXValidFnc[37]={ id: 37, fld:"TEXTBLOCKAUDITORIAID", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Auditoriaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AUDITORIAID",gxz:"Z2AuditoriaId",gxold:"O2AuditoriaId",gxvar:"A2AuditoriaId",ucs:[],op:[59,44,84,79,74,69,64,49],ip:[59,44,84,79,74,69,64,49,39],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A2AuditoriaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z2AuditoriaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AUDITORIAID",gx.O.A2AuditoriaId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A2AuditoriaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AUDITORIAID",gx.thousandSeparator)},nac:gx.falseFn};
   GXValidFnc[42]={ id: 42, fld:"TEXTBLOCKMODULOID", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Moduloid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MODULOID",gxz:"Z4ModuloId",gxold:"O4ModuloId",gxvar:"A4ModuloId",ucs:[],op:[54],ip:[54,44],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A4ModuloId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z4ModuloId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MODULOID",gx.O.A4ModuloId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A4ModuloId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODULOID",gx.thousandSeparator)},nac:gx.falseFn};
   GXValidFnc[47]={ id: 47, fld:"TEXTBLOCKUSERNAME", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[49]={ id:49 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USERNAME",gxz:"Z42Username",gxold:"O42Username",gxvar:"A42Username",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A42Username=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z42Username=Value},v2c:function(){gx.fn.setControlValue("USERNAME",gx.O.A42Username,0)},c2v:function(){if(this.val()!==undefined)gx.O.A42Username=this.val()},val:function(){return gx.fn.getControlValue("USERNAME")},nac:gx.falseFn};
   GXValidFnc[52]={ id: 52, fld:"TEXTBLOCKMODULONOMBRE", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MODULONOMBRE",gxz:"Z39ModuloNombre",gxold:"O39ModuloNombre",gxvar:"A39ModuloNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A39ModuloNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z39ModuloNombre=Value},v2c:function(){gx.fn.setControlValue("MODULONOMBRE",gx.O.A39ModuloNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.A39ModuloNombre=this.val()},val:function(){return gx.fn.getControlValue("MODULONOMBRE")},nac:gx.falseFn};
   GXValidFnc[57]={ id: 57, fld:"TEXTBLOCKMB_EPR_COD", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[59]={ id:59 ,lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Mb_epr_cod,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MB_EPR_COD",gxz:"Z3Mb_Epr_cod",gxold:"O3Mb_Epr_cod",gxvar:"A3Mb_Epr_cod",ucs:[],op:[],ip:[59],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A3Mb_Epr_cod=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z3Mb_Epr_cod=Value},v2c:function(){gx.fn.setControlValue("MB_EPR_COD",gx.O.A3Mb_Epr_cod,0)},c2v:function(){if(this.val()!==undefined)gx.O.A3Mb_Epr_cod=this.val()},val:function(){return gx.fn.getControlValue("MB_EPR_COD")},nac:gx.falseFn};
   GXValidFnc[62]={ id: 62, fld:"TEXTBLOCKACCION", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[64]={ id:64 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ACCION",gxz:"Z40Accion",gxold:"O40Accion",gxvar:"A40Accion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A40Accion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z40Accion=Value},v2c:function(){gx.fn.setControlValue("ACCION",gx.O.A40Accion,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A40Accion=this.val()},val:function(){return gx.fn.getControlValue("ACCION")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={ id: 67, fld:"TEXTBLOCKAUDITORIAFECHAHORA", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[69]={ id:69 ,lvl:0,type:"dtime",len:8,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Auditoriafechahora,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AUDITORIAFECHAHORA",gxz:"Z41AuditoriaFechaHora",gxold:"O41AuditoriaFechaHora",gxvar:"A41AuditoriaFechaHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[69],ip:[69],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A41AuditoriaFechaHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z41AuditoriaFechaHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("AUDITORIAFECHAHORA",gx.O.A41AuditoriaFechaHora,0)},c2v:function(){if(this.val()!==undefined)gx.O.A41AuditoriaFechaHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("AUDITORIAFECHAHORA")},nac:gx.falseFn};
   GXValidFnc[72]={ id: 72, fld:"TEXTBLOCKOBJETOCOMPONENTE", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"OBJETOCOMPONENTE",gxz:"Z162ObjetoComponente",gxold:"O162ObjetoComponente",gxvar:"A162ObjetoComponente",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A162ObjetoComponente=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z162ObjetoComponente=Value},v2c:function(){gx.fn.setControlValue("OBJETOCOMPONENTE",gx.O.A162ObjetoComponente,0)},c2v:function(){if(this.val()!==undefined)gx.O.A162ObjetoComponente=this.val()},val:function(){return gx.fn.getControlValue("OBJETOCOMPONENTE")},nac:gx.falseFn};
   GXValidFnc[77]={ id: 77, fld:"TEXTBLOCKIPORIGEN", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[79]={ id:79 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IPORIGEN",gxz:"Z163IpOrigen",gxold:"O163IpOrigen",gxvar:"A163IpOrigen",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A163IpOrigen=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z163IpOrigen=Value},v2c:function(){gx.fn.setControlValue("IPORIGEN",gx.O.A163IpOrigen,0)},c2v:function(){if(this.val()!==undefined)gx.O.A163IpOrigen=this.val()},val:function(){return gx.fn.getControlValue("IPORIGEN")},nac:gx.falseFn};
   GXValidFnc[82]={ id: 82, fld:"TEXTBLOCKIDEVENTO", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[84]={ id:84 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IDEVENTO",gxz:"Z164IdEvento",gxold:"O164IdEvento",gxvar:"A164IdEvento",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A164IdEvento=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z164IdEvento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IDEVENTO",gx.O.A164IdEvento,0)},c2v:function(){if(this.val()!==undefined)gx.O.A164IdEvento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IDEVENTO",gx.thousandSeparator)},nac:gx.falseFn};
   GXValidFnc[87]={ id: 87, fld:"BTN_ENTER",grid:0,evt:"e11011_client",std:"ENTER"};
   GXValidFnc[88]={ id: 88, fld:"BTN_CANCEL",grid:0,evt:"e12011_client"};
   GXValidFnc[89]={ id: 89, fld:"BTN_DELETE",grid:0,evt:"e18011_client",std:"DELETE"};
   this.A2AuditoriaId = 0 ;
   this.Z2AuditoriaId = 0 ;
   this.O2AuditoriaId = 0 ;
   this.A4ModuloId = 0 ;
   this.Z4ModuloId = 0 ;
   this.O4ModuloId = 0 ;
   this.A42Username = "" ;
   this.Z42Username = "" ;
   this.O42Username = "" ;
   this.A39ModuloNombre = "" ;
   this.Z39ModuloNombre = "" ;
   this.O39ModuloNombre = "" ;
   this.A3Mb_Epr_cod = "" ;
   this.Z3Mb_Epr_cod = "" ;
   this.O3Mb_Epr_cod = "" ;
   this.A40Accion = "" ;
   this.Z40Accion = "" ;
   this.O40Accion = "" ;
   this.A41AuditoriaFechaHora = gx.date.nullDate() ;
   this.Z41AuditoriaFechaHora = gx.date.nullDate() ;
   this.O41AuditoriaFechaHora = gx.date.nullDate() ;
   this.A162ObjetoComponente = "" ;
   this.Z162ObjetoComponente = "" ;
   this.O162ObjetoComponente = "" ;
   this.A163IpOrigen = "" ;
   this.Z163IpOrigen = "" ;
   this.O163IpOrigen = "" ;
   this.A164IdEvento = 0 ;
   this.Z164IdEvento = 0 ;
   this.O164IdEvento = 0 ;
   this.A2AuditoriaId = 0 ;
   this.A4ModuloId = 0 ;
   this.A42Username = "" ;
   this.A39ModuloNombre = "" ;
   this.A3Mb_Epr_cod = "" ;
   this.A40Accion = "" ;
   this.A41AuditoriaFechaHora = gx.date.nullDate() ;
   this.A162ObjetoComponente = "" ;
   this.A163IpOrigen = "" ;
   this.A164IdEvento = 0 ;
   this.Events = {"e11011_client": ["ENTER", true] ,"e12011_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["VALID_AUDITORIAID"] = [[{av:'A2AuditoriaId',fld:'AUDITORIAID',pic:'ZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!'}],[{av:'A4ModuloId',fld:'MODULOID',pic:'ZZZ9'},{av:'A42Username',fld:'USERNAME',pic:''},{av:'A3Mb_Epr_cod',fld:'MB_EPR_COD',pic:''},{av:'A40Accion',fld:'ACCION',pic:''},{av:'A41AuditoriaFechaHora',fld:'AUDITORIAFECHAHORA',pic:'99/99/99 99:99'},{av:'A162ObjetoComponente',fld:'OBJETOCOMPONENTE',pic:''},{av:'A163IpOrigen',fld:'IPORIGEN',pic:''},{av:'A164IdEvento',fld:'IDEVENTO',pic:'ZZZ9'},{av:'A39ModuloNombre',fld:'MODULONOMBRE',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'Z2AuditoriaId'},{av:'Z4ModuloId'},{av:'Z42Username'},{av:'Z3Mb_Epr_cod'},{av:'Z40Accion'},{av:'Z41AuditoriaFechaHora'},{av:'Z162ObjetoComponente'},{av:'Z163IpOrigen'},{av:'Z164IdEvento'},{av:'Z39ModuloNombre'},{av:'gx.fn.getCtrlProperty("BTN_DELETE2","Enabled")',ctrl:'BTN_DELETE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTN_ENTER2","Enabled")',ctrl:'BTN_ENTER2',prop:'Enabled'}]];
   this.EvtParms["VALID_MODULOID"] = [[{av:'A4ModuloId',fld:'MODULOID',pic:'ZZZ9'},{av:'A39ModuloNombre',fld:'MODULONOMBRE',pic:''}],[{av:'A39ModuloNombre',fld:'MODULONOMBRE',pic:''}]];
   this.EvtParms["VALID_MB_EPR_COD"] = [[{av:'A3Mb_Epr_cod',fld:'MB_EPR_COD',pic:''}],[]];
   this.EvtParms["VALID_AUDITORIAFECHAHORA"] = [[{av:'A41AuditoriaFechaHora',fld:'AUDITORIAFECHAHORA',pic:'99/99/99 99:99'}],[{av:'A41AuditoriaFechaHora',fld:'AUDITORIAFECHAHORA',pic:'99/99/99 99:99'}]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(seguridad.auditoria);});
