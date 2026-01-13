// Title: Timestamp picker
// Description: See the demo at url
// URL: http://us.geocities.com/tspicker/
// Script featured on: http://javascriptkit.com/script/script2/timestamp.shtml
// Version: 1.0
// Date: 12-05-2001 (mm-dd-yyyy)
// Author: Denis Gritcyuk <denis@softcomplex.com>; <tspicker@yahoo.com>
// Notes: Permission given to use this script in any kind of applications if
//    header lines are left unchanged. Feel free to contact the author
//    for feature requests and/or donations
function trim(inputString) {
   // Removes leading and trailing spaces from the passed string. Also removes
   // consecutive spaces and replaces it with one space. If something besides
   // a string is passed in (null, custom object, etc.) then return the input.
   if (typeof inputString != "string") { return inputString; }
   var retValue = inputString;
   var ch = retValue.substring(0, 1);
   while (ch == " ") { // Check for spaces at the beginning of the string
      retValue = retValue.substring(1, retValue.length);
      ch = retValue.substring(0, 1);
   }
   ch = retValue.substring(retValue.length-1, retValue.length);
   while (ch == " ") { // Check for spaces at the end of the string
      retValue = retValue.substring(0, retValue.length-1);
      ch = retValue.substring(retValue.length-1, retValue.length);
   }
   while (retValue.indexOf("  ") != -1) { // Note that there are two spaces in the string - look for multiple spaces within the string
      retValue = retValue.substring(0, retValue.indexOf("  ")) + retValue.substring(retValue.indexOf("  ")+1, retValue.length); // Again, there are two spaces in each of the strings
   }
   return retValue; // Return the trimmed string back to the user
} // Ends the "trim" function

function show_calendar(str_target, str_datetime) {
  var arr_months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  var week_days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  var n_weekstart = 1; // day week starts from (normally 0 or 1)

  var dt_datetime = (str_datetime == null || str_datetime =="" ?  new Date() : str2dt(str_datetime));
  var dt_prev_month = new Date(dt_datetime);
  dt_prev_month.setMonth(dt_datetime.getMonth()-1);
  var dt_next_month = new Date(dt_datetime);
  dt_next_month.setMonth(dt_datetime.getMonth()+1);
  var dt_firstday = new Date(dt_datetime);
  dt_firstday.setDate(1);
  dt_firstday.setDate(1-(7+dt_firstday.getDay()-n_weekstart)%7);
  var dt_lastday = new Date(dt_next_month);
  dt_lastday.setDate(0);
  
  // html generation (feel free to tune it for your particular application)
  // print calendar header
  var str_buffer = new String (
    "<html>\n"+
    "<head>\n"+
    " <title>Calendar</title>\n"+
    "</head>\n"+
    "<body bgcolor=\"White\">\n"+
    "<table class=\"clsOTable\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n"+
    "<tr><td bgcolor=\"#4682B4\">\n"+
    "<table cellspacing=\"1\" cellpadding=\"3\" border=\"0\" width=\"100%\">\n"+
    "<tr>\n <td bgcolor=\"#4682B4\"><a href=\"javascript:window.opener.show_calendar('"+
    str_target+"', '"+ dt2dtstr(dt_prev_month)+"'+document.cal.time.value);\">"+
    "<img src=\"images/prev.gif\" width=\"16\" height=\"16\" border=\"0\""+
    " alt=\"previous month\"></a></td>\n"+
    " <td bgcolor=\"#4682B4\" colspan=\"5\">"+
    "<font color=\"white\" face=\"tahoma, verdana\" size=\"2\">"
    +arr_months[dt_datetime.getMonth()]+" "+dt_datetime.getFullYear()+"</font></td>\n"+
    " <td bgcolor=\"#4682B4\" align=\"right\"><a href=\"javascript:window.opener.show_calendar('"
    +str_target+"', '"+dt2dtstr(dt_next_month)+"'+document.cal.time.value);\">"+
    "<img src=\"images/next.gif\" width=\"16\" height=\"16\" border=\"0\""+
    " alt=\"next month\"></a></td>\n</tr>\n"
  );

  var dt_current_day = new Date(dt_firstday);
  // print weekdays titles
  str_buffer += "<tr>\n";
  for (var n=0; n<7; n++)
    str_buffer += " <td bgcolor=\"#87CEFA\">"+
    "<font color=\"white\" face=\"tahoma, verdana\" size=\"2\">"+
    week_days[(n_weekstart+n)%7]+"</font></td>\n";
  // print calendar table
  str_buffer += "</tr>\n";
  while (dt_current_day.getMonth() == dt_datetime.getMonth() ||
    dt_current_day.getMonth() == dt_firstday.getMonth()) {
    // print row heder
    str_buffer += "<tr>\n";
    for (var n_current_wday=0; n_current_wday<7; n_current_wday++) {
        if (dt_current_day.getDate() == dt_datetime.getDate() &&
          dt_current_day.getMonth() == dt_datetime.getMonth())
          // print current date
          str_buffer += " <td bgcolor=\"#FFB6C1\" align=\"right\">";
        else if (dt_current_day.getDay() == 0 || dt_current_day.getDay() == 6)
          // weekend days
          str_buffer += " <td bgcolor=\"#DBEAF5\" align=\"right\">";
        else
          // print working days of current month
          str_buffer += " <td bgcolor=\"white\" align=\"right\">";

        if (dt_current_day.getMonth() == dt_datetime.getMonth())
          // print days of current month
          str_buffer += "<a href=\"javascript:window.opener."+str_target+
          ".value='"+dt2dtstr(dt_current_day)+"'+document.cal.time.value; window.close();\">"+
          "<font color=\"black\" face=\"tahoma, verdana\" size=\"2\">";
        else 
          // print days of other months
          str_buffer += "<a href=\"javascript:window.opener."+str_target+
          ".value='"+dt2dtstr(dt_current_day)+"'+document.cal.time.value; window.close();\">"+
          "<font color=\"gray\" face=\"tahoma, verdana\" size=\"2\">";
        str_buffer += dt_current_day.getDate()+"</font></a></td>\n";
        dt_current_day.setDate(dt_current_day.getDate()+1);
    }
    // print row footer
    str_buffer += "</tr>\n";
  }
    // print calendar footer
    /*
    str_buffer +=
        "<form name=\"cal\">\n<tr><td colspan=\"7\" bgcolor=\"#87CEFA\">"+
        "<font color=\"White\" face=\"tahoma, verdana\" size=\"2\">"+
        "Time: <input type=\"text\" name=\"time\" value=\""+dt2tmstr(dt_datetime)+
        "\" size=\"8\" maxlength=\"8\"></font></td></tr>\n</form>\n" +
        "</table>\n" +
        "</tr>\n</td>\n</table>\n" +
        "</body>\n" +
        "</html>\n";
    */

    str_buffer +=
        "<form name=cal><input type=hidden name=time value=''></form>\n" +
        "</table>\n" +
        "</tr>\n</td>\n</table>\n" +
        "</body>\n" +
        "</html>\n";

  var vWinCal = window.open("", "Calendar", 
    "width=200,height=210,status=no,resizable=yes,top=200,left=200");
  vWinCal.opener = self;
  var calc_doc = vWinCal.document;
  calc_doc.write (str_buffer);
  calc_doc.close();
    vWinCal.focus();
}
// datetime parsing and formatting routimes. modify them if you wish other datetime format
function str2dt (str_datetime) {
    //var re_date = /^(\d+)\-(\d+)\-(\d+)\s+(\d+)\:(\d+)\:(\d+)$/;
    var re_date = /^(\d+)\/(\d+)\/(\d+)$/;
  if (!re_date.exec(trim(str_datetime)))
    return alert("Invalid Datetime format (YYYY/MM/DD): "+ str_datetime);
    //return (new Date (RegExp.$3, RegExp.$2-1, RegExp.$1, RegExp.$4, RegExp.$5, RegExp.$6));
    return (new Date (RegExp.$1, RegExp.$2-1, RegExp.$3, 0, 0, 0));
}
function dt2dtstr (dt_datetime) {
    return (new String (
            dt_datetime.getFullYear()+"/"+(dt_datetime.getMonth()+1)+"/"+dt_datetime.getDate()));
            
    //return (new String (
    //        dt_datetime.getDate()+"-"+(dt_datetime.getMonth()+1)+"/"+dt_datetime.getFullYear()+" "));
}
function dt2tmstr (dt_datetime) {
    return "";
  //return (new String (
  //    dt_datetime.getHours()+":"+dt_datetime.getMinutes()+":"+dt_datetime.getSeconds()));
}

