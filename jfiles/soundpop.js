// JavaScript Document
// Pop-Up Embedder Script by David Battino, www.batmosphere.com; Object tag implementation by Mark Levitt, http://digitalmedia.oreilly.com
var UniqueID = 314 // Make each link open in a new window.
var newWinOffset = 100 // Position of first pop-up
function PlayerOpen(soundfiledesc,soundfilepath) {

PlayWin = window.open('',UniqueID,'width=320,height=200,top=' + newWinOffset +',left=0,resizable=0,scrollbars=0,titlebar=0,toolbar=0,menubar=0,status=0,directories=0,personalbar=0');
PlayWin.focus(); 
var winContent = "<HTML><HEAD><TITLE>" + soundfiledesc + "</TITLE></HEAD><BODY bgcolor='#990000'>";
winContent += "<B style='font-size:16px;font-family:Arial, Helvetica, sans-serif;line-height:1.5'>" + soundfiledesc + "</B>";

winContent += "<OBJECT width='300' height='42'>";
winContent += "<param name='SRC' value='" +  soundfilepath + "'>";
winContent += "<param name='AUTOPLAY' VALUE='true'>";
winContent += "<param name='CONTROLLER' VALUE='true'>";
winContent += "<param name='BGCOLOR' VALUE='#990000'>";
winContent += "<EMBED SRC='" + soundfilepath + "' AUTOSTART='TRUE' LOOP='FALSE' WIDTH='300' HEIGHT='42' CONTROLLER='TRUE' BGCOLOR='#990000'></EMBED>";
winContent += "</OBJECT>";

winContent += "<p style='font-size:12px;font-family:Georgia, Times New Roman, Times, serif;text-align:center'><a href='"+soundfilepath+"'>Download this file</a> <SPAN style='font-size:10px'>(right-click or Option-click)</SPAN></p>";

winContent += "<FORM><DIV align='center'><INPUT type='button' value='Close this window' onClick='javascript:window.close();'></DIV></FORM>";
winContent += "</BODY></HTML>";
PlayWin.document.write(winContent);
PlayWin.document.close(); // "Finalizes" new window
UniqueID = UniqueID + 1
// newWinOffset = newWinOffset + 20 // subsequent pop-ups will be this many pixels lower.
}
function MoviePlayerOpen(soundfiledesc,soundfilepath) {

PlayWin = window.open('',UniqueID,'width=400,height=300,top=' + newWinOffset +',left=0,resizable=0,scrollbars=0,titlebar=0,toolbar=0,menubar=0,status=0,directories=0,personalbar=0');
PlayWin.focus(); 
var winContent = "<HTML><HEAD><TITLE>" + soundfiledesc + "</TITLE></HEAD><BODY bgcolor='#FFFFFF' align='center'>";
winContent += "<B style='font-size:16px;font-family:Arial, Helvetica, sans-serif;line-height:1.5;text-align:center'>" + soundfiledesc + "</B>";

winContent += "<OBJECT classid='clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B' width='320' height='255' codebase='http://www.apple.com/qtactivex/qtplugin.cab'>";
winContent += "<param name='SRC' value='" +  soundfilepath + "'>";
winContent += "<param name='AUTOPLAY' VALUE='true'>";
winContent += "<param name='CONTROLLER' VALUE='true'>";
winContent += "<param name='BGCOLOR' VALUE='#FFFFFF'>";
winContent += "<param name='loop' value='true'>";
winContent += "<EMBED SRC='" + soundfilepath + "' AUTOPLAY='TRUE' LOOP='TRUE' WIDTH='320' HEIGHT='255' CONTROLLER='TRUE' BGCOLOR='#FFFFFF' pluginspage='http://www.apple.com/quicktime/download/'></EMBED>";
winContent += "</OBJECT>";

winContent += "</BODY></HTML>";
PlayWin.document.write(winContent);
PlayWin.document.close(); // "Finalizes" new window
UniqueID = UniqueID + 1
// newWinOffset = newWinOffset + 20 // subsequent pop-ups will be this many pixels lower.
}