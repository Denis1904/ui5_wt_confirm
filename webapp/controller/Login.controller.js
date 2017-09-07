sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/Dialog",
	"sap/m/Button"
], function(Controller, MessageToast, Dialog, Button) {
	"use strict";

	return Controller.extend("ui5_wt_confirm.controller.Login", {

		onShowHello: function() {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
		},

		onLogin: function() {
			if (!this.pressDialog) {
				this.pressDialog = new Dialog({
					title: 'Available Products',
					//content: 
					beginButton: new Button({
						text: 'Close',
						press: function() {
							this.pressDialog.close();
						}.bind(this)
					})
				});

				//to get access to the global model
				this.getView().addDependent(this.pressDialog);
			}

			this.pressDialog.open();
		}
	});

});