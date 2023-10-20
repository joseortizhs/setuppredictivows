/*!   GeneXus C# 17_0_2-148375 on 10/9/2023 11:52:0.24
*/
gx.evt.autoSkip = false;
gx.define('seguridad.usuarioperfil', false, function () {
   this.ServerClass =  "seguridad.usuarioperfil" ;
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
   this.Valid_Usuarioperfilid=function()
   {
      return this.validSrvEvt("Valid_Usuarioperfilid", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_Usuarioid=function()
   {
      return this.validSrvEvt("Valid_Usuarioid", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_Perfilid=function()
   {
      return this.validSrvEvt("Valid_Perfilid", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.e110h16_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e120h16_client=function()
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
   GXValidFnc[9]={ id: 9, fld:"BTN_FIRST",grid:0,evt:"e130h16_client",std:"FIRST"};
   GXValidFnc[10]={ id: 10, fld:"BTN_FIRST_SEPARATOR",grid:0,evt:"e130h16_client",std:"FIRST"};
   GXValidFnc[11]={ id: 11, fld:"BTN_PREVIOUS",grid:0,evt:"e140h16_client",std:"PREVIOUS"};
   GXValidFnc[12]={ id: 12, fld:"BTN_PREVIOUS_SEPARATOR",grid:0,evt:"e140h16_client",std:"PREVIOUS"};
   GXValidFnc[13]={ id: 13, fld:"BTN_NEXT",grid:0,evt:"e150h16_client",std:"NEXT"};
   GXValidFnc[14]={ id: 14, fld:"BTN_NEXT_SEPARATOR",grid:0,evt:"e150h16_client",std:"NEXT"};
   GXValidFnc[15]={ id: 15, fld:"BTN_LAST",grid:0,evt:"e160h16_client",std:"LAST"};
   GXValidFnc[16]={ id: 16, fld:"BTN_LAST_SEPARATOR",grid:0,evt:"e160h16_client",std:"LAST"};
   GXValidFnc[17]={ id: 17, fld:"BTN_SELECT",grid:0,evt:"e170h16_client",std:"SELECT"};
   GXValidFnc[18]={ id: 18, fld:"BTN_SELECT_SEPARATOR",grid:0,evt:"e170h16_client",std:"SELECT"};
   GXValidFnc[19]={ id: 19, fld:"BTN_ENTER2",grid:0,evt:"e110h16_client",std:"ENTER"};
   GXValidFnc[20]={ id: 20, fld:"BTN_ENTER2_SEPARATOR",grid:0,evt:"e110h16_client",std:"ENTER"};
   GXValidFnc[21]={ id: 21, fld:"BTN_CANCEL2",grid:0,evt:"e120h16_client"};
   GXValidFnc[22]={ id: 22, fld:"BTN_CANCEL2_SEPARATOR",grid:0,evt:"e120h16_client"};
   GXValidFnc[23]={ id: 23, fld:"BTN_DELETE2",grid:0,evt:"e180h16_client",std:"DELETE"};
   GXValidFnc[24]={ id: 24, fld:"BTN_DELETE2_SEPARATOR",grid:0,evt:"e180h16_client",std:"DELETE"};
   GXValidFnc[27]={ id: 27, fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={ id: 28, fld:"TABLE1",grid:0};
   GXValidFnc[34]={ id: 34, fld:"TABLE2",grid:0};
   GXValidFnc[37]={ id: 37, fld:"TEXTBLOCKUSUARIOPERFILID", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuarioperfilid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIOPERFILID",gxz:"Z16UsuarioPerfilId",gxold:"O16UsuarioPerfilId",gxvar:"A16UsuarioPerfilId",ucs:[],op:[54,44],ip:[54,44,39],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A16UsuarioPerfilId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z16UsuarioPerfilId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("USUARIOPERFILID",gx.O.A16UsuarioPerfilId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A16UsuarioPerfilId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USUARIOPERFILID",gx.thousandSeparator)},nac:gx.falseFn};
   GXValidFnc[42]={ id: 42, fld:"TEXTBLOCKUSUARIOID", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuarioid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIOID",gxz:"Z15UsuarioId",gxold:"O15UsuarioId",gxvar:"A15UsuarioId",ucs:[],op:[49],ip:[49,44],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A15UsuarioId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z15UsuarioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("USUARIOID",gx.O.A15UsuarioId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A15UsuarioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USUARIOID",gx.thousandSeparator)},nac:gx.falseFn};
   GXValidFnc[47]={ id: 47, fld:"TEXTBLOCKUSUARIOUSERNAME", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[49]={ id:49 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIOUSERNAME",gxz:"Z85UsuarioUsername",gxold:"O85UsuarioUsername",gxvar:"A85UsuarioUsername",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A85UsuarioUsername=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z85UsuarioUsername=Value},v2c:function(){gx.fn.setControlValue("USUARIOUSERNAME",gx.O.A85UsuarioUsername,0)},c2v:function(){if(this.val()!==undefined)gx.O.A85UsuarioUsername=this.val()},val:function(){return gx.fn.getControlValue("USUARIOUSERNAME")},nac:gx.falseFn};
   GXValidFnc[52]={ id: 52, fld:"TEXTBLOCKPERFILID", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Perfilid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERFILID",gxz:"Z8PerfilId",gxold:"O8PerfilId",gxvar:"A8PerfilId",ucs:[],op:[59],ip:[59,54],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A8PerfilId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z8PerfilId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PERFILID",gx.O.A8PerfilId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A8PerfilId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PERFILID",gx.thousandSeparator)},nac:gx.falseFn};
   GXValidFnc[57]={ id: 57, fld:"TEXTBLOCKPERFILDESCRIPCION", format:1,grid:0, ctrltype: "textblock"};
   GXValidFnc[59]={ id:59 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERFILDESCRIPCION",gxz:"Z88PerfilDescripcion",gxold:"O88PerfilDescripcion",gxvar:"A88PerfilDescripcion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A88PerfilDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z88PerfilDescripcion=Value},v2c:function(){gx.fn.setControlValue("PERFILDESCRIPCION",gx.O.A88PerfilDescripcion,0)},c2v:function(){if(this.val()!==undefined)gx.O.A88PerfilDescripcion=this.val()},val:function(){return gx.fn.getControlValue("PERFILDESCRIPCION")},nac:gx.falseFn};
   GXValidFnc[62]={ id: 62, fld:"BTN_ENTER",grid:0,evt:"e110h16_client",std:"ENTER"};
   GXValidFnc[63]={ id: 63, fld:"BTN_CANCEL",grid:0,evt:"e120h16_client"};
   GXValidFnc[64]={ id: 64, fld:"BTN_DELETE",grid:0,evt:"e180h16_client",std:"DELETE"};
   this.A16UsuarioPerfilId = 0 ;
   this.Z16UsuarioPerfilId = 0 ;
   this.O16UsuarioPerfilId = 0 ;
   this.A15UsuarioId = 0 ;
   this.Z15UsuarioId = 0 ;
   this.O15UsuarioId = 0 ;
   this.A85UsuarioUsername = "" ;
   this.Z85UsuarioUsername = "" ;
   this.O85UsuarioUsername = "" ;
   this.A8PerfilId = 0 ;
   this.Z8PerfilId = 0 ;
   this.O8PerfilId = 0 ;
   this.A88PerfilDescripcion = "" ;
   this.Z88PerfilDescripcion = "" ;
   this.O88PerfilDescripcion = "" ;
   this.A16UsuarioPerfilId = 0 ;
   this.A15UsuarioId = 0 ;
   this.A85UsuarioUsername = "" ;
   this.A8PerfilId = 0 ;
   this.A88PerfilDescripcion = "" ;
   this.Events = {"e110h16_client": ["ENTER", true] ,"e120h16_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["VALID_USUARIOPERFILID"] = [[{av:'A16UsuarioPerfilId',fld:'USUARIOPERFILID',pic:'ZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!'}],[{av:'A15UsuarioId',fld:'USUARIOID',pic:'ZZZ9'},{av:'A8PerfilId',fld:'PERFILID',pic:'ZZZ9'},{av:'A85UsuarioUsername',fld:'USUARIOUSERNAME',pic:''},{av:'A88PerfilDescripcion',fld:'PERFILDESCRIPCION',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'Z16UsuarioPerfilId'},{av:'Z15UsuarioId'},{av:'Z8PerfilId'},{av:'Z85UsuarioUsername'},{av:'Z88PerfilDescripcion'},{av:'gx.fn.getCtrlProperty("BTN_DELETE2","Enabled")',ctrl:'BTN_DELETE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTN_ENTER2","Enabled")',ctrl:'BTN_ENTER2',prop:'Enabled'}]];
   this.EvtParms["VALID_USUARIOID"] = [[{av:'A15UsuarioId',fld:'USUARIOID',pic:'ZZZ9'},{av:'A85UsuarioUsername',fld:'USUARIOUSERNAME',pic:''}],[{av:'A85UsuarioUsername',fld:'USUARIOUSERNAME',pic:''}]];
   this.EvtParms["VALID_PERFILID"] = [[{av:'A8PerfilId',fld:'PERFILID',pic:'ZZZ9'},{av:'A88PerfilDescripcion',fld:'PERFILDESCRIPCION',pic:''}],[{av:'A88PerfilDescripcion',fld:'PERFILDESCRIPCION',pic:''}]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(seguridad.usuarioperfil);});
