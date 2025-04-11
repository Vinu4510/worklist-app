sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("app.splitapp.controller.DetailView", {
        onInit() {
            let oRouter=this.getOwnerComponent().getRouter();
            oRouter.attachRoutePatternMatched(this.onRoutePatternMatched,this)

        },
        onRoutePatternMatched:function(oEvent){
           // console.log(oEvent)
            let index=oEvent.getParameter("arguments").index
            let sPath="ToolModel>/toolList/"+index
            let oView=this.getView()
            oView.bindElement(sPath)
        },
        onListView:function(){
            // get the router object
            let oRouter=this.getOwnerComponent().getRouter()
            // use the navigation method
            
            oRouter.navTo("RouteMaster")
            
        }
    });
});