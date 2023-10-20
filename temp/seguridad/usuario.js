/*!   GeneXus C# 17_0_2-148375 on 10/9/2023 11:51:49.53
*/
gx.evt.autoSkip = false;
gx.define('seguridad.usuario', false, function () {
   this.ServerClass =  "seguridad.usuario" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("trn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",gx.thousandSeparator) ;
   };
   this.Valid_Usuarioid=function()
   {
      return this.validSrvEvt("Valid_Usuarioid", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_Usuariousername=function()
   {
      return this.validCliEvt("Valid_Usuariousername", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("USUARIOUSERNAME");
         this.AnyError  = 0;
         if ( ! ( gx.util.regExp.isMatch(this.A85UsuarioUsername, "\\w+([-_+.'])*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*") ) )
         {
            try {
               gxballoon.setError(gx.text.format( gx.getMessage( "El username debe ser un correo válido"), gx.getMessage( "Usuario Username"), "", "", "", "", "", "", "", ""));
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
   this.Valid_Usuariofecha=function()
   {
      return this.validCliEvt("Valid_Usuariofecha", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("USUARIOFECHA");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.A90UsuarioFecha)==0) || new gx.date.gxdate( this.A90UsuarioFecha ).compare( gx.date.ymdtod( 1753, 1, 1) ) >= 0 ) )
         {
            try {
               gxballoon.setError(gx.text.format( gx.getMessage( "GXSPC_OutOfRange"), gx.getMessage( "Usuario Fecha creación"), "", "", "", "", "", "", "", ""));
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
   this.Valid_Usuariofecultmod=function()
   {
      return this.validCliEvt("Valid_Usuariofecultmod", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("USUARIOFECULTMOD");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.A91UsuarioFecUltMod)==0) || new gx.date.gxdate( this.A91UsuarioFecUltMod ).compare( gx.date.ymdtod( 1753, 1, 1) ) >= 0 ) )
         {
            try {
               gxballoon.setError(gx.text.format( gx.getMessage( "GXSPC_OutOfRange"), gx.getMessage( "Usuario Fecha Ultima Modificacion"), "", "", "", "", "", "", "", ""));
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
   this.Valid_Ultimointento=function()
   {
      return this.validCliEvt("Valid_Ultimointento", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("ULTIMOINTENTO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.A157UltimoIntento)===0) || new gx.date.gxdate( this.A157UltimoIntento ).compare( gx.date.ymdhmstot( 1753, 1, 1, 0, 0, 0) ) >= 0 ) )
         {
            try {
               gxballoon.setError(gx.text.format( gx.getMessage( "GXSPC_OutOfRange"), gx.getMessage( "Ultimo Intento"), "", "", "", "", "", "", "", ""));
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
   this.Valid_Estatususuarioid=function()
   {
      return this.validSrvEvt("Valid_Estatususuarioid", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_Rolid=function()
   {
      return this.validSrvEvt("Valid_Rolid", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.e110f15_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e120f15_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102,104,107,109,112,113,114];
   this.GXLastCtrlId =114;
   GXValidFnc[2]={ id: 2, fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={ id: 5, fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={ id: 8, fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={ id: 9, fld:"BTN_FIRST",grid:0,evt:"e130f15_client",std:"FIRST"};
   GXValidFnc[10]={ id: 10, fld:"BTN_FIRST_SEPARATOR",grid:0,evt:"e130f15_client",std:"FIRST"};
   GXValidFnc[11]={ id: 11, fld:"BTN_PREVIOUS",grid:0,evt:"e140f15_client",std:"PREVIOUS"};
   GXValidFnc[12]={ id: 12, fld:"BTN_PREVIOUS_SEPARATOR",grid:0,evt:"e140f15_client",std:"PREVIOUS"};
   GXValidFnc[13]={ id: 13, fld:"BTN_NEXT",grid:0,evt:"e150f15_client",std:"NEXT"};
   GXValidFnc[14]={ id: 14, fld:"BTN_NEXT_SEPARATOR",grid:0,evt:"e150f15_client",std:"NEXT"};
   GXValidFnc[15]={ id: 15, fld:"BTN_LAST",grid:0,evt:"e160f15_client",std:"LAST"};
   GXValidFnc[16]={ id: 16, fld:"BTN_LAST_SEPARATOR",grid:0,evt:"e160f15_client",std:"LAST"};
   GXValidFnc[17]={ id: 17, fld:"BTN_SELECT",grid:0,evt:"e170f15_client",std:"SELECT"};
   GXValidFnc[18]={ id: 18, fld:"BTN_SELECT_SEPARATOR",grid:0,evt:"e170f15_client",std:"SELECT"};
   GXValidFnc[19]={ id: 19, fld:"BTN_ENTER2",grid:0,evt:"e110f15_client",std:"ENTER"};
   GXValidFnc[20]={ id: 20, fld:"BTN_ENTER2_SEPARATOR",grid:0,evt:"e110f15_client",std:"ENTER"};
   GXValidFnc[21]={ id: 21, fld:"BTN_CANCEL2",grid:0,evt:"e120f15_client"};
   GXValidFnc[22]={ id: 22, fld:"BTN_CANCEL2_SEPARATOR",grid:0,evt:"e120f15_client"};
   GXValidFnc[23]={ id: 23, fld:"BTN_DELETE2",grid:0,evt:"e180f15_client",std:"DELETE"};
   GXValidFnc[24]={ id: 24, fld:"BTN_DELETE2_SEPARATOR",grid:0,evt:"e180f15_client",std:"DELETE"};
   GXValidFnc[27]={ id: 27, fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={ id: 28, fld:"TABLE1",grid:0};
   GXValidFnc[34]={ id: 34, fld:"TABLE2",grid:0};
   GXValidFnc[37]={ id: 37, fld:"TEXTBLOCKUSUARIOID", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuarioid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIOID",gxz:"Z15UsuarioId",gxold:"O15UsuarioId",gxvar:"A15UsuarioId",ucs:[],op:[109,99,94,89,84,79,74,69,64,59,54,49],ip:[109,99,94,89,84,79,74,69,64,59,54,49,39],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A15UsuarioId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z15UsuarioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("USUARIOID",gx.O.A15UsuarioId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A15UsuarioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USUARIOID",gx.thousandSeparator)},nac:gx.falseFn};
   GXValidFnc[42]={ id: 42, fld:"TEXTBLOCKMB_EPR_COD", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"char",len:3,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MB_EPR_COD",gxz:"Z3Mb_Epr_cod",gxold:"O3Mb_Epr_cod",gxvar:"A3Mb_Epr_cod",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A3Mb_Epr_cod=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z3Mb_Epr_cod=Value},v2c:function(){gx.fn.setControlValue("MB_EPR_COD",gx.O.A3Mb_Epr_cod,0)},c2v:function(){if(this.val()!==undefined)gx.O.A3Mb_Epr_cod=this.val()},val:function(){return gx.fn.getControlValue("MB_EPR_COD")},nac:gx.falseFn};
   GXValidFnc[47]={ id: 47, fld:"TEXTBLOCKUSUARIONOMBRE", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[49]={ id:49 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIONOMBRE",gxz:"Z82UsuarioNombre",gxold:"O82UsuarioNombre",gxvar:"A82UsuarioNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A82UsuarioNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z82UsuarioNombre=Value},v2c:function(){gx.fn.setControlValue("USUARIONOMBRE",gx.O.A82UsuarioNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.A82UsuarioNombre=this.val()},val:function(){return gx.fn.getControlValue("USUARIONOMBRE")},nac:gx.falseFn};
   GXValidFnc[52]={ id: 52, fld:"TEXTBLOCKUSUARIOAPELLIDOPAT", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIOAPELLIDOPAT",gxz:"Z83UsuarioApellidoPat",gxold:"O83UsuarioApellidoPat",gxvar:"A83UsuarioApellidoPat",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A83UsuarioApellidoPat=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z83UsuarioApellidoPat=Value},v2c:function(){gx.fn.setControlValue("USUARIOAPELLIDOPAT",gx.O.A83UsuarioApellidoPat,0)},c2v:function(){if(this.val()!==undefined)gx.O.A83UsuarioApellidoPat=this.val()},val:function(){return gx.fn.getControlValue("USUARIOAPELLIDOPAT")},nac:gx.falseFn};
   GXValidFnc[57]={ id: 57, fld:"TEXTBLOCKUSUARIOAPELLIDOMAT", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[59]={ id:59 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIOAPELLIDOMAT",gxz:"Z84UsuarioApellidoMat",gxold:"O84UsuarioApellidoMat",gxvar:"A84UsuarioApellidoMat",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A84UsuarioApellidoMat=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z84UsuarioApellidoMat=Value},v2c:function(){gx.fn.setControlValue("USUARIOAPELLIDOMAT",gx.O.A84UsuarioApellidoMat,0)},c2v:function(){if(this.val()!==undefined)gx.O.A84UsuarioApellidoMat=this.val()},val:function(){return gx.fn.getControlValue("USUARIOAPELLIDOMAT")},nac:gx.falseFn};
   GXValidFnc[62]={ id: 62, fld:"TEXTBLOCKUSUARIOUSERNAME", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[64]={ id:64 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariousername,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIOUSERNAME",gxz:"Z85UsuarioUsername",gxold:"O85UsuarioUsername",gxvar:"A85UsuarioUsername",ucs:[],op:[],ip:[64],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A85UsuarioUsername=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z85UsuarioUsername=Value},v2c:function(){gx.fn.setControlValue("USUARIOUSERNAME",gx.O.A85UsuarioUsername,0)},c2v:function(){if(this.val()!==undefined)gx.O.A85UsuarioUsername=this.val()},val:function(){return gx.fn.getControlValue("USUARIOUSERNAME")},nac:gx.falseFn};
   GXValidFnc[67]={ id: 67, fld:"TEXTBLOCKUSUARIOPASSWORD", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[69]={ id:69 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIOPASSWORD",gxz:"Z86UsuarioPassword",gxold:"O86UsuarioPassword",gxvar:"A86UsuarioPassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A86UsuarioPassword=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z86UsuarioPassword=Value},v2c:function(){gx.fn.setControlValue("USUARIOPASSWORD",gx.O.A86UsuarioPassword,0)},c2v:function(){if(this.val()!==undefined)gx.O.A86UsuarioPassword=this.val()},val:function(){return gx.fn.getControlValue("USUARIOPASSWORD")},nac:gx.falseFn};
   GXValidFnc[72]={ id: 72, fld:"TEXTBLOCKUSUARIOKEY", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIOKEY",gxz:"Z87UsuarioKey",gxold:"O87UsuarioKey",gxvar:"A87UsuarioKey",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A87UsuarioKey=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z87UsuarioKey=Value},v2c:function(){gx.fn.setControlValue("USUARIOKEY",gx.O.A87UsuarioKey,0)},c2v:function(){if(this.val()!==undefined)gx.O.A87UsuarioKey=this.val()},val:function(){return gx.fn.getControlValue("USUARIOKEY")},nac:gx.falseFn};
   GXValidFnc[77]={ id: 77, fld:"TEXTBLOCKUSUARIOFECHA", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[79]={ id:79 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariofecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIOFECHA",gxz:"Z90UsuarioFecha",gxold:"O90UsuarioFecha",gxvar:"A90UsuarioFecha",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[79],ip:[79],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A90UsuarioFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z90UsuarioFecha=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("USUARIOFECHA",gx.O.A90UsuarioFecha,0)},c2v:function(){if(this.val()!==undefined)gx.O.A90UsuarioFecha=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("USUARIOFECHA")},nac:gx.falseFn};
   GXValidFnc[82]={ id: 82, fld:"TEXTBLOCKUSUARIOFECULTMOD", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[84]={ id:84 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariofecultmod,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIOFECULTMOD",gxz:"Z91UsuarioFecUltMod",gxold:"O91UsuarioFecUltMod",gxvar:"A91UsuarioFecUltMod",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[84],ip:[84],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A91UsuarioFecUltMod=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z91UsuarioFecUltMod=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("USUARIOFECULTMOD",gx.O.A91UsuarioFecUltMod,0)},c2v:function(){if(this.val()!==undefined)gx.O.A91UsuarioFecUltMod=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("USUARIOFECULTMOD")},nac:gx.falseFn};
   GXValidFnc[87]={ id: 87, fld:"TEXTBLOCKULTIMOINTENTO", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[89]={ id:89 ,lvl:0,type:"dtime",len:8,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ultimointento,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ULTIMOINTENTO",gxz:"Z157UltimoIntento",gxold:"O157UltimoIntento",gxvar:"A157UltimoIntento",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[89],ip:[89],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A157UltimoIntento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z157UltimoIntento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ULTIMOINTENTO",gx.O.A157UltimoIntento,0)},c2v:function(){if(this.val()!==undefined)gx.O.A157UltimoIntento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ULTIMOINTENTO")},nac:gx.falseFn};
   GXValidFnc[92]={ id: 92, fld:"TEXTBLOCKUSUARIOFALLIDOS", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[94]={ id:94 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIOFALLIDOS",gxz:"Z89UsuarioFallidos",gxold:"O89UsuarioFallidos",gxvar:"A89UsuarioFallidos",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A89UsuarioFallidos=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z89UsuarioFallidos=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("USUARIOFALLIDOS",gx.O.A89UsuarioFallidos,0)},c2v:function(){if(this.val()!==undefined)gx.O.A89UsuarioFallidos=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USUARIOFALLIDOS",gx.thousandSeparator)},nac:gx.falseFn};
   GXValidFnc[97]={ id: 97, fld:"TEXTBLOCKESTATUSUSUARIOID", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[99]={ id:99 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Estatususuarioid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ESTATUSUSUARIOID",gxz:"Z5EstatusUsuarioId",gxold:"O5EstatusUsuarioId",gxvar:"A5EstatusUsuarioId",ucs:[],op:[104],ip:[104,99],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A5EstatusUsuarioId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z5EstatusUsuarioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ESTATUSUSUARIOID",gx.O.A5EstatusUsuarioId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A5EstatusUsuarioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ESTATUSUSUARIOID",gx.thousandSeparator)},nac:gx.falseFn};
   GXValidFnc[102]={ id: 102, fld:"TEXTBLOCKESTATUSUSUARIONOMBRE", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[104]={ id:104 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ESTATUSUSUARIONOMBRE",gxz:"Z78EstatusUsuarioNombre",gxold:"O78EstatusUsuarioNombre",gxvar:"A78EstatusUsuarioNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A78EstatusUsuarioNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z78EstatusUsuarioNombre=Value},v2c:function(){gx.fn.setControlValue("ESTATUSUSUARIONOMBRE",gx.O.A78EstatusUsuarioNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.A78EstatusUsuarioNombre=this.val()},val:function(){return gx.fn.getControlValue("ESTATUSUSUARIONOMBRE")},nac:gx.falseFn};
   GXValidFnc[107]={ id: 107, fld:"TEXTBLOCKROLID", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[109]={ id:109 ,lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Rolid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ROLID",gxz:"Z13RolId",gxold:"O13RolId",gxvar:"A13RolId",ucs:[],op:[44],ip:[44,109],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A13RolId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z13RolId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ROLID",gx.O.A13RolId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A13RolId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ROLID",gx.thousandSeparator)},nac:gx.falseFn};
   this.declareDomainHdlr( 109 , function() {
   });
   GXValidFnc[112]={ id: 112, fld:"BTN_ENTER",grid:0,evt:"e110f15_client",std:"ENTER"};
   GXValidFnc[113]={ id: 113, fld:"BTN_CANCEL",grid:0,evt:"e120f15_client"};
   GXValidFnc[114]={ id: 114, fld:"BTN_DELETE",grid:0,evt:"e180f15_client",std:"DELETE"};
   this.A15UsuarioId = 0 ;
   this.Z15UsuarioId = 0 ;
   this.O15UsuarioId = 0 ;
   this.A3Mb_Epr_cod = "" ;
   this.Z3Mb_Epr_cod = "" ;
   this.O3Mb_Epr_cod = "" ;
   this.A82UsuarioNombre = "" ;
   this.Z82UsuarioNombre = "" ;
   this.O82UsuarioNombre = "" ;
   this.A83UsuarioApellidoPat = "" ;
   this.Z83UsuarioApellidoPat = "" ;
   this.O83UsuarioApellidoPat = "" ;
   this.A84UsuarioApellidoMat = "" ;
   this.Z84UsuarioApellidoMat = "" ;
   this.O84UsuarioApellidoMat = "" ;
   this.A85UsuarioUsername = "" ;
   this.Z85UsuarioUsername = "" ;
   this.O85UsuarioUsername = "" ;
   this.A86UsuarioPassword = "" ;
   this.Z86UsuarioPassword = "" ;
   this.O86UsuarioPassword = "" ;
   this.A87UsuarioKey = "" ;
   this.Z87UsuarioKey = "" ;
   this.O87UsuarioKey = "" ;
   this.A90UsuarioFecha = gx.date.nullDate() ;
   this.Z90UsuarioFecha = gx.date.nullDate() ;
   this.O90UsuarioFecha = gx.date.nullDate() ;
   this.A91UsuarioFecUltMod = gx.date.nullDate() ;
   this.Z91UsuarioFecUltMod = gx.date.nullDate() ;
   this.O91UsuarioFecUltMod = gx.date.nullDate() ;
   this.A157UltimoIntento = gx.date.nullDate() ;
   this.Z157UltimoIntento = gx.date.nullDate() ;
   this.O157UltimoIntento = gx.date.nullDate() ;
   this.A89UsuarioFallidos = 0 ;
   this.Z89UsuarioFallidos = 0 ;
   this.O89UsuarioFallidos = 0 ;
   this.A5EstatusUsuarioId = 0 ;
   this.Z5EstatusUsuarioId = 0 ;
   this.O5EstatusUsuarioId = 0 ;
   this.A78EstatusUsuarioNombre = "" ;
   this.Z78EstatusUsuarioNombre = "" ;
   this.O78EstatusUsuarioNombre = "" ;
   this.A13RolId = 0 ;
   this.Z13RolId = 0 ;
   this.O13RolId = 0 ;
   this.A15UsuarioId = 0 ;
   this.Gx_BScreen = 0 ;
   this.A3Mb_Epr_cod = "" ;
   this.A82UsuarioNombre = "" ;
   this.A83UsuarioApellidoPat = "" ;
   this.A84UsuarioApellidoMat = "" ;
   this.A85UsuarioUsername = "" ;
   this.A86UsuarioPassword = "" ;
   this.A87UsuarioKey = "" ;
   this.A90UsuarioFecha = gx.date.nullDate() ;
   this.A91UsuarioFecUltMod = gx.date.nullDate() ;
   this.A157UltimoIntento = gx.date.nullDate() ;
   this.A89UsuarioFallidos = 0 ;
   this.A5EstatusUsuarioId = 0 ;
   this.A78EstatusUsuarioNombre = "" ;
   this.A13RolId = 0 ;
   this.Events = {"e110f15_client": ["ENTER", true] ,"e120f15_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["VALID_USUARIOID"] = [[{av:'A15UsuarioId',fld:'USUARIOID',pic:'ZZZ9'},{av:'Gx_BScreen',fld:'vGXBSCREEN',pic:'9'},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'A90UsuarioFecha',fld:'USUARIOFECHA',pic:''}],[{av:'A82UsuarioNombre',fld:'USUARIONOMBRE',pic:''},{av:'A83UsuarioApellidoPat',fld:'USUARIOAPELLIDOPAT',pic:''},{av:'A84UsuarioApellidoMat',fld:'USUARIOAPELLIDOMAT',pic:''},{av:'A85UsuarioUsername',fld:'USUARIOUSERNAME',pic:''},{av:'A86UsuarioPassword',fld:'USUARIOPASSWORD',pic:''},{av:'A87UsuarioKey',fld:'USUARIOKEY',pic:''},{av:'A90UsuarioFecha',fld:'USUARIOFECHA',pic:''},{av:'A91UsuarioFecUltMod',fld:'USUARIOFECULTMOD',pic:''},{av:'A157UltimoIntento',fld:'ULTIMOINTENTO',pic:'99/99/99 99:99'},{av:'A89UsuarioFallidos',fld:'USUARIOFALLIDOS',pic:'ZZZ9'},{av:'A5EstatusUsuarioId',fld:'ESTATUSUSUARIOID',pic:'ZZZ9'},{av:'A13RolId',fld:'ROLID',pic:'ZZZZZZZZZZZZZZ9'},{av:'A78EstatusUsuarioNombre',fld:'ESTATUSUSUARIONOMBRE',pic:''},{av:'A3Mb_Epr_cod',fld:'MB_EPR_COD',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'Z15UsuarioId'},{av:'Z82UsuarioNombre'},{av:'Z83UsuarioApellidoPat'},{av:'Z84UsuarioApellidoMat'},{av:'Z85UsuarioUsername'},{av:'Z86UsuarioPassword'},{av:'Z87UsuarioKey'},{av:'Z90UsuarioFecha'},{av:'Z91UsuarioFecUltMod'},{av:'Z157UltimoIntento'},{av:'Z89UsuarioFallidos'},{av:'Z5EstatusUsuarioId'},{av:'Z13RolId'},{av:'Z78EstatusUsuarioNombre'},{av:'Z3Mb_Epr_cod'},{av:'gx.fn.getCtrlProperty("BTN_DELETE2","Enabled")',ctrl:'BTN_DELETE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTN_ENTER2","Enabled")',ctrl:'BTN_ENTER2',prop:'Enabled'}]];
   this.EvtParms["VALID_USUARIOUSERNAME"] = [[{av:'A85UsuarioUsername',fld:'USUARIOUSERNAME',pic:''}],[]];
   this.EvtParms["VALID_USUARIOFECHA"] = [[{av:'A90UsuarioFecha',fld:'USUARIOFECHA',pic:''}],[{av:'A90UsuarioFecha',fld:'USUARIOFECHA',pic:''}]];
   this.EvtParms["VALID_USUARIOFECULTMOD"] = [[{av:'A91UsuarioFecUltMod',fld:'USUARIOFECULTMOD',pic:''}],[{av:'A91UsuarioFecUltMod',fld:'USUARIOFECULTMOD',pic:''}]];
   this.EvtParms["VALID_ULTIMOINTENTO"] = [[{av:'A157UltimoIntento',fld:'ULTIMOINTENTO',pic:'99/99/99 99:99'}],[{av:'A157UltimoIntento',fld:'ULTIMOINTENTO',pic:'99/99/99 99:99'}]];
   this.EvtParms["VALID_ESTATUSUSUARIOID"] = [[{av:'A5EstatusUsuarioId',fld:'ESTATUSUSUARIOID',pic:'ZZZ9'},{av:'A78EstatusUsuarioNombre',fld:'ESTATUSUSUARIONOMBRE',pic:''}],[{av:'A78EstatusUsuarioNombre',fld:'ESTATUSUSUARIONOMBRE',pic:''}]];
   this.EvtParms["VALID_ROLID"] = [[{av:'A13RolId',fld:'ROLID',pic:'ZZZZZZZZZZZZZZ9'},{av:'A3Mb_Epr_cod',fld:'MB_EPR_COD',pic:''}],[{av:'A3Mb_Epr_cod',fld:'MB_EPR_COD',pic:''}]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int", 1, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(seguridad.usuario);});
