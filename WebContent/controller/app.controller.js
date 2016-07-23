sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel"
], function (Controller,JSONModel) {
   "use strict";
   return Controller.extend("sap.ui.demo.wt.controller.app", {
	   onInit : function () {
	         // set data model on view
	         var oData = {
	            recipient : "World"
	         };
	         var oModel = new JSONModel(oData);
	        // this.getView().setModel(oModel);
	      },
	      
	   onShowHello : function () {
         // show a native JavaScript alert
         alert("Hello {/recipient}");
      }
   });
});