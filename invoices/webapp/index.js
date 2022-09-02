sap.ui.define(["sap/ui/core/ComponentContainer"],

/**
*@param {typeof sap.ui.core.ComponentContainer} ComponentContainer
*/

function(ComponentContainer){
    //alert("UI5 is Ready");  
    "use strict";
    new ComponentContainer({
        name: "DTT.invoices",
        settings: {id:"invoices"},
        async: true
    }).placeAt("contenido");
});