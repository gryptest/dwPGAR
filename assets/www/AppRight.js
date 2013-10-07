/**
  *  App Right API for javascript
  *  Author: Amit gross
  *  Date: 23/07/13
  */

var AppRight = {
         isAndroidDevice: function(){
             var ua = navigator.userAgent.toLowerCase();
             var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
             if(isAndroid) {
                 return true;
             }
             else{
                 return false;
             }
         },

         dWsuccess: function(data){
             alert("OK:" + data);
         },

         dWfailure: function(data){
             alert("FAIL:" + data);
         },

         sendNow: function(){
             if (AppRight.isAndroidDevice())
            	 	cordova.exec(AppRight.dWsuccess,AppRight.dWfailure,"AppRightPlugin","sendNow",["stam"]);
         },

         reportException: function(msg){
             if (AppRight.isAndroidDevice())
            	 	cordova.exec(AppRight.dWsuccess,AppRight.dWfailure,"AppRightPlugin","reportException",[msg]);
         },

         reportBug: function(msg){
             if (AppRight.isAndroidDevice())
            	 	cordova.exec(AppRight.dWsuccess,AppRight.dWfailure,"AppRightPlugin","reportBug",[msg]);
         },

         addMarker: function(msg){
             if (AppRight.isAndroidDevice())
            	 	cordova.exec(AppRight.dWsuccess,AppRight.dWfailure,"AppRightPlugin","addMarker",[msg]);
         },
};

window.onerror = function( msg, url, line ) {
     if (AppRight.isAndroidDevice())
  cordova.exec(AppRight.dWsuccess,AppRight.dWfailure,"AppRightPlugin","reportJsError",[msg,url,line]);
};
