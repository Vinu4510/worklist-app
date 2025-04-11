sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Sorter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller,JSONModel,Sorter,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("app.splitapp.controller.MasterView", {
        onInit() {
            
        },

        onDetailView:function(){
            // get the router object
            let oRouter=this.getOwnerComponent().getRouter()
            // use the navigation method
            
            oRouter.navTo("RouteDetail")
            
        },
        onSort:function(){
			if(!this.bDescending){
					this.bDescending=false;
			}
			
			var oSorter=new sap.ui.model.Sorter("toolsName",this.bDescending);
			var oList=this.getView().byId("idListCtrl");
			var oBinding=oList.getBinding("items");
			oBinding.sort(oSorter);
			this.bDescending=!this.bDescending;
		},
		onSearch:function(oControlEvent){
			var searchString=oControlEvent.getParameter("query")||oControlEvent.getParameter("newValue");
			var oName=new Filter("toolsName",FilterOperator.Contains,searchString);
			var oAvail=new Filter("availability",FilterOperator.Contains,searchString);
			var aFilter=[oName,oAvail];
			var MainFilter=new Filter({
					filters:aFilter,
					and:false
			});
			var oList=this.getView().byId("idListCtrl");
			var oBinding=oList.getBinding("items");
			oBinding.filter(MainFilter);
		},


        onItemSelect:function(oEvent){

            var oList=oEvent.getParameter("listItem");
            let sPath=oList.getBindingContextPath();
        
            let aItems=sPath.split("/");
            let id=aItems[aItems.length-1];
            


            let oRouter=this.getOwnerComponent().getRouter()
            oRouter.navTo("RouteDetail",{
                index:id

            }) 


			// // when i click it should navigate to the next page
			// var oList=oEvent.getParameter("listItem");
			// // secondly get the binding context path
			// var sPath=oList.getBindingContextPath();
			// var completePath="ToolModel>" +sPath;
			// console.log(completePath);
			
			
			// //--- get the object of detail view from the parent view
			// var oApp=this.getView().getParent();
			// var oDetail=oApp.getAggregation("pages")[1];
			
			// //---Blind the page with the path 
			
			// oDetail.bindElement(completePath);
			  
			// this.onDetailView();
			
			
		}

    });
});