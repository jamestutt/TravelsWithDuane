function printDate()
{
  today = new Date();
  days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

  document.write(days[today.getDay()] + " " + today.getDate() + " " +months[today.getMonth()] + " " + (today.getYear()));
}       

function openphoto(photo)
{
  window.open("photo.php?photo=" + photo, 'photo', 'toolbar=no,status=no,scrollbars=yes,location=no,menubar=no,directories=no,width=610,height=640'); 
  return false;
}

function clickmap()
{
  alert ("clicked");
}

function next(x,y) 
{
    alert('x = ' + x + ' y = ' + y);
}

function verify(s) {
  
  return confirm(s);
}

function isDate(sDate) {
   var re = /^\d{4}\/\d{1,2}\/\d{1,2}$/
   return re.test(sDate);
}

function changeThumb(newImage, thumbName)
{
  
  document[thumbName].src = "images/spacer.gif";

  if (newImage.value != 0) {
    
    // Find the parts of the string
    // Format image_id:server:filename
    var thisArray = newImage.value.split("|");
    var imageID = thisArray[0]; 
    var server = thisArray[1]; 
    var filename = thisArray[2]; 

    var thumbwidth=146;
                                                                                                    
    if (thisArray[3] == 0 || thisArray[4] == 0) {

      document[thumbName].width= thumbwidth;
      document[thumbName].height= thumbwidth;
    } else if (thisArray[3] > thisArray[4]) {

      document[thumbName].width= thumbwidth;
      document[thumbName].height= thumbwidth * (thisArray[4] / thisArray[3]);
    } else {

      document[thumbName].height= thumbwidth;
      document[thumbName].width= thumbwidth * (thisArray[3] / thisArray[4]);
    }
                              
    document[thumbName].src = server + "/cache/" + thumbwidth + "/" + filename;

  } else {

    document[thumbName].width= 118;
    document[thumbName].height= 146;
    document[thumbName].src="images/profile.jpg";
  }
}

if ((navigator.userAgent.indexOf('MSIE') != -1) && (navigator.userAgent.indexOf('Win') != -1)) {
    document.writeln('<scr' + 'ipt language="VBscript">');
    document.writeln('Function supportImageUploader()');        
    document.writeln('  If ScriptEngineMajorVersion >= 2 Then');    
    document.writeln('    On Error Resume Next');
    document.writeln('    supportImageUploader = "NotInstalled"');    
    document.writeln('    Dim installed');
    document.writeln('    installed = False');
    document.writeln('    installed = IsObject(CreateObject("Aurigma.ImageUploader2"))');
    document.writeln('    If installed Then');
    document.writeln('      supportImageUploader = "Installed"');
    document.writeln('    End If');        
    document.writeln('  Else');
    document.writeln('    supportImageUploader = "Unsupported"');
    document.writeln('  End If');
    document.writeln('End Function');
    document.writeln('</scr' + 'ipt>');
}
else {
    document.writeln('<scr' + 'ipt language="JavaScript">');
    document.writeln('function supportImageUploader() {');
    document.writeln('  return "Unsupported";');
    document.writeln('}');
    document.writeln('</scr' + 'ipt>');
}


/***********************************************
* Cool DHTML tooltip script- © Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
***********************************************/

function ietruebody(){
  return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function ddrivetip(event, thetext, thecolor, thewidth){
  
  // console.log(thetext); 

  if (ns6||ie){

    if (typeof thewidth!="undefined") tipobj.style.width=thewidth+"px"
    if (typeof thecolor!="undefined" && thecolor!="") tipobj.style.backgroundColor=thecolor
    tipobj.innerHTML=thetext
    enabletip=true
    positiontip(event);
    return false
  }
}

function positiontip(e){   

  if (enabletip){

    var curX=(ns6)?e.pageX : event.clientX+ietruebody().scrollLeft;
    var curY=(ns6)?e.pageY : event.clientY+ietruebody().scrollTop;
    //Find out how close the mouse is to the corner of the window
    var rightedge=ie&&!window.opera? ietruebody().clientWidth-event.clientX-offsetxpoint : window.innerWidth-e.clientX-offsetxpoint-20
    var bottomedge=ie&&!window.opera? ietruebody().clientHeight-event.clientY-offsetypoint : window.innerHeight-e.clientY-offsetypoint-20

    var leftedge=(offsetxpoint<0)? offsetxpoint*(-1) : -1000

    //if the horizontal distance isn't enough to accomodate the width of the context menu
    if (rightedge<tipobj.offsetWidth)
    //move the horizontal position of the menu to the left by it's width
    tipobj.style.left=ie? ietruebody().scrollLeft+event.clientX-tipobj.offsetWidth+"px" : window.pageXOffset+e.clientX-tipobj.offsetWidth+"px"
    else if (curX<leftedge)
    tipobj.style.left="5px"
    else
    //position the horizontal position of the menu where the mouse is positioned
    tipobj.style.left=curX+offsetxpoint+"px"

    //same concept with the vertical position
    if (bottomedge<tipobj.offsetHeight)
    tipobj.style.top=ie? ietruebody().scrollTop+event.clientY-tipobj.offsetHeight-offsetypoint+"px" : window.pageYOffset+e.clientY-tipobj.offsetHeight-offsetypoint+"px"
    else
    tipobj.style.top=curY+offsetypoint+"px"
    tipobj.style.visibility="visible"
  }
}

function hideddrivetip(){
  if (ns6||ie){

    enabletip=false
    tipobj.style.visibility="hidden"
    tipobj.style.left="-1000px"
    tipobj.style.backgroundColor=''
    tipobj.style.width=''
  }
}

function popupthumb(event, server, filename, width, height, version) {

  var thumbwidth=146;

  if (width == 0 || height == 0) {

    dispwidth = thumbwidth;
    dispheight = thumbwidth;
  } else if (width > height) {

    dispwidth = thumbwidth;
    dispheight = thumbwidth * (height / width);
  } else {

    dispheight = thumbwidth;
    dispwidth  = thumbwidth * (width / height);
  }

  ddrivetip(event, "<div align=center><img width="+dispwidth+" height="+dispheight+" src=" + server +"/v" + version + "/cache/"+thumbwidth+"/"+username+"/" + filename + " /></div>", null, dispwidth);
   
}

function noprint(event) {

  ddrivetip(event, "This photo is unavailable for printing.<br/>Size of uploaded file too small.", null, 215); 
}

function popuppoint(event, date, location, country, itinery_id, detail) {

  lastItineryId = itinery_id;
  if (!sticky || detail) {

    var description = "<b>" + date + "</b><br/>" + location + ", " + country; 
    ddrivetip(event, "<table border=0 cellpadding=2 cellspacing=1 width='100%'><tr valign=top><td width=30><img src='images/icon_map.gif' /></td><td align=left>" + description + "</td><td align=right width=14><a href=# onclick='hideddrivetip();sticky=false;return false;'><img src=images/close.gif /></a></td></tr></table><div id='includeDiv'>", null, 300); 
    self.clearTimeout(ajaxTimeoutId); 

    if (disableAjax != 1) {  

      if (detail) {        

        showdetail();
      } else {

        ajaxTimeoutId = self.setTimeout("if (!sticky && enabletip) {showdetail();}", 2000); 
      }
    }
  }
}

function showdetail() {

  include('locationInfo.php?itinery_id=' + lastItineryId, 'includeDiv');
  sticky=true;
  self.clearTimeout(stickyTimeoutId);
  stickyTimeoutId = self.setTimeout("sticky=false;", 2000);
}

function hidedetail() {

  if (!sticky) {

    hideddrivetip();  
  }
}

function forcehide() {

  sticky = false;
  hideddrivetip();  
}


var lastItineryId = 0;
var ajaxTimeoutId = 0;
var stickyTimeoutId = 0;
var offsetxpoint=-60 //Customize x offset of tooltip
var offsetypoint=20 //Customize y offset of tooltip
var ie=document.all
var ns6=document.getElementById && !document.all
var enabletip=false
var tipobj
var username
var imageserver
var sticky = false;

function initpopup(pImageServer, pUsername) {

  if (ie||ns6) tipobj=document.all? document.all["dhtmltooltip"] : document.getElementById? document.getElementById("dhtmltooltip") : ""
  // document.onmousemove=positiontip
  // document.onmousedown=forcehide
  username=pUsername
  imageserver=pImageServer
}
var rfNodeId='';
var xmlhttp;
var counter = 0;

function include(pURL, pNodeId) {

    if (arguments.length!=0) {
        var url=pURL;
        if (arguments.length>=2) {
            rfNodeId=pNodeId;
        }
        getFile(pURL);
        if ((typeof(xmlhttp))!='object') {
            document.write('You need to upgrade your browser to use this page.\r\nAs of March 2006 more than 98% of the web browsers in use support the remote scripting object. Either your browser does not support remote scripting or the support has been disabled.');
        }
    }else{
        if (xmlhttp.readyState==4) {
            if (xmlhttp.status==200) {
                if (rfNodeId=='') {
                    document.write(xmlhttp.responseText);
                }else{
                    document.getElementById(rfNodeId).innerHTML=xmlhttp.responseText;
                }
            }
        }
    }
}

function getFile(pURL) {

    var objError=false;
    try {
        if (window.XMLHttpRequest) { // code for Mozilla, Safari, etc
            xmlhttp=new XMLHttpRequest();
        }
    }
    catch(e) { objError=true; }
    try {
        if (window.ActiveXObject) { //IE
            xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
            objError=false;
        }
    }
    catch(f) { objError=true; }

    if (!objError) {

        xmlhttp.onreadystatechange=include;
        xmlhttp.open("GET", pURL, true); // leave true for Gecko
        xmlhttp.send(null);
    }else{
        alert('Your browser does not appear to support remote scripting.');
        xmlhttp=false;
    }
}





