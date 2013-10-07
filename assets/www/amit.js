/**
 * 
 */
function doError()
{
	alert("will crash now");
//	document.getElementById("demo").innerHTML="Hello World"; //***** (1)

//	self.location="cdvbrg:service/action/callbackId#jsonArgs";//   "www.dcfsdfsdgsg.com";   ****** (2)
//	top.location="www.google.com";
	
//	var myCars=new Array("Saab","Volvo","BMW");
//	var name=myCars[4];
//	alert(name);
	
//	assert(true, 'Must be Error subclass'); // ***** (3)
	
	//console.log("amit - bla bla");
	
	throw new Error('AssertionError: amit'); **** (4)
	
//	var txt = "a";
//	while(1){
//	    txt = txt += "a";    //add as much as the browser can handle
//	    console.log("amit a test = " + txt);
//	}
	
	
//	cordova.addConstructor(function() {
//
//		cordova.addPlugin("amitCordovaPlugin", new DwWlApi());
//		CordovaCustomPlugin.CordovaCustomPlugin.
//	});
	
//	CordovaCustomPlugin.
//	CordovaCustomPlugin.prototype.executeNativeFunction = function(onSuccessCallback, onFailureCallback, param){};
	
//	PhoneGap.exec();
	
//	window.plugins.cordovaCustomPlugin.executeNativeFunction(onSuccessCallback, onFailureCallback, 
	
	
//	cordova.exec(dWsuccess,dWfailure,"Dw","amit",["stam"]);
	
}

function doAndReportexception()
{
	try{
		throw new Error('AssertionError: amit');
		}
		catch(e)
		{
			alert(e.name + ": " + e.message);
			AppRight.reportException(e.name + ", " + e.message);
		}
}

function gotoPage2()
{
//	WL.App.openURL('file:///data/data/com.MyWLApp/files/www/default/MyWLPage2.html');
//	document.location.href = "MyWLPage2.html";
	self.location="mypg2.html";
//	window.location.href="";
//	window.open("MyWLPage2.html", "MyWLPage2", "", "");
}

//window.onerror = function( msg, url, line ) {
//    console.log("ERROR: message=\"" + msg + "\" at \"" + "\", file=" + url + "\", line=" + line);
//}
//
//function sendNow()
//{
//	cordova.exec(dWsuccess,dWfailure,"AppRightPlugin","sendNow",["stam"]);
//}
//
//function reportException(errorMessage)
//{
//	cordova.exec(dWsuccess,dWfailure,"AppRightPlugin","reportException",[errorMessage]);
//}
//
//function reportBug(message)
//{
//	cordova.exec(dWsuccess,dWfailure,"AppRightPlugin","reportBug",[message]);
//}
//
//function addMarker(message)
//{
//	cordova.exec(dWsuccess,dWfailure,"AppRightPlugin","reportBug",[message]);
////	var err = getErrorObject();
////
////	var filename = err.fileName;
////	var lineNum = err.lineNumber; // or `err.line` in WebKit
////	alert(filename + ": " + lineNum);
//}
//
//function setLocationTrackingState(state)
//{
//	alert("setLocationTrackingState:" + state);
//	cordova.exec(dWsuccess,dWfailure,"AppRightPlugin","setLocationTrackingState",[state]);
//}
//
////function getErrorObject(){
////  try { throw Error('') } catch(err) { return err; }
////}
//
//function dWsuccess(data)
//{
//	alert("OK:" + data);
//}
//
//function dWfailure(data)
//{
//	alert("FAIL:" + data);
//}
