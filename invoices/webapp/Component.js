//@ts-nocheck
sap.ui.define([
"DTT/invoices/model/Models",
"sap/ui/model/resource/ResourceModel",
"sap/ui/core/UIComponent"
],

/**
* @param {typeof DTT.invoices.model.Models} Models
* @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
* @param {typeof sap.ui.core.UIComponent} UIComponent 
*/
function(Models, ResourceModel, UIComponent){
    return UIComponent.extend("DTT.invoices.Component", {
        
        metadata:{
            manifest:"json"
            
        },

        init: function(){
            UIComponent.prototype.init.apply(this,arguments);
            this.setModel(Models.createRecipient());
            var i18nModel = new ResourceModel({bundleName:"DTT.invoices.i18n.i18n"});
            this.setModel(i18nModel,"i18n");
        }    
    })
}
)