
    function toggleDiv(el)
    {
        if(document.getElementById(el).style.display=="none")
        {
            $('.libNav').removeClass('libNav_active');
            $('.'+el).addClass('libNav_active');
            $('.libContent:visible').fadeOut(400, function() { $('#'+el).fadeIn(400); });
        }
    }

function getFirstDay(theYear, theMonth){
    var firstDate = new Date(theYear,theMonth,1)
    return firstDate.getDay()
}
function getMonthLen(theYear, theMonth) {
    var oneDay = 1000 * 60 * 60 * 24
    var thisMonth = new Date(theYear, theMonth, 1)
    var nextMonth = new Date(theYear, theMonth + 1, 1)
    var len = Math.ceil((nextMonth.getTime() -
        thisMonth.getTime())/oneDay)
    return len
}
var theMonths = ["January","February","March","April","May","June","July","August",
"September","October","November","December"]
function getObject(obj) {
    var theObj
    if (document.all) {
        if (typeof obj == "string") {
            return document.all(obj)
        } else {
            return obj.style
        }
    }
    if (document.getElementById) {
        if (typeof obj == "string") {
            return document.getElementById(obj)
        } else {
            return obj.style
        }
    }
    return null
}

// TODO make option dropdown automatically add '*'
var myData = {
    10: {
        1:  [{
                "link": "https://www.aas-sw.org/ama/orig/jointlibrary/AASSWF02.docx",
                "title": "SWAASF02 - Officer Roster",
                "type": "(DOCX)",
                "tooltip": "List of chapter officer members and positions",
                "from": "All Chapters",
                "to": "Region President",
                "name": "Officer Roster"
            },{
                "link": "https://docs.google.com/forms/d/1hdImSUA-_Jk6qPkL4q1AFdQ6MN1Qvz26876_TVtuSOc/formResponse",
                "title": "Chapter Monthly Report - Form A",
                "type": "(online)",
                "tooltip": "Resume of chapter activities carried on during the reporting period",
                "from": "All Chapters",
                "to": "Region President",
                "name": "Chapter Monthly Report"
            }],
        15: [{
                "link": "http://speedy.sh/A3FM7/RegionPacketTemplate.docx",
                "title": "Bi-Annual Region Packet",
                "type": "(DOCX)",
                "tooltip": "Twice a year region status report",
                "from": "All Regions",
                "to": "National Headquarters",
                "name": "Bi-Annual Region Packet"
                // "link": "https://www.aas-sw.org/?nd=sw_cmr_form&amp;options=&amp;autofill=1&amp;ipoff=0",
                // "title": "SWF08 - Chapter Status Form",
                // "type": "(online)",
                // "tooltip": "Twice a year chapter status report",
                // "from": "All Chapters",
                // "to": "Region President",
                // "name": "Fall Status Report"
            }],
        16: [{
                "link": "https://www.aas-sw.org/ama/orig/jointlibrary/AASSWF01.docx",
                "title": "SWAASF01 - Report of Membership",
                "type": "(DOCX)",
                "tooltip": "List of all current members",
                "from": "All Chapters",
                "to": "Region President",
                "name": "Report of Membership"
            }]
        // 31: [{
        //         "link": "https://www.aas-sw.org/ama/orig/jointlibrary/AASSWF01.docx",
        //         "title": "SWAASF01 - Report of Membership",
        //         "type": "(DOCX)",
        //         "tooltip": "List of all current members",
        //         "from": "All Chapters",
        //         "to": "Executive Management Center",
        //         "name": "Report of Membership"
        //     },{
        //         "link": "https://www.aas-sw.org/ama/orig/jointlibrary/AASSWF02.docx",
        //         "title": "SWAASF02 - Officer Roster",
        //         "type": "(DOCX)",
        //         "tooltip": "List of chapter officer members and positions",
        //         "from": "All Chapters",
        //         "to": "Executive Management Center",
        //         "name": "Officer Roster"
        //     }]
    },
    11: {
        1:  [{
                "link": "https://docs.google.com/forms/d/1hdImSUA-_Jk6qPkL4q1AFdQ6MN1Qvz26876_TVtuSOc/formResponse",
                "title": "Chapter Monthly Report - Form A",
                "type": "(online)",
                "tooltip": "Resume of chapter activities carried on during the reporting period",
                "from": "All Chapters",
                "to": "Region President",
                "name": "Chapter Monthly Report"
            }]
    },
    12: {
        1:  [{
            //     "link": "https://www.aas-sw.org/ama/orig/swlibrary/forms/applications/SWF_12.docx",
            //     "title": "SWF12 - National Parliamentarian Application",
            //     "type": "(DOCX)",
            //     "tooltip": "Application to become the National Parliamentarian",
            //     "from": "Any Member",
            //     "to": "National Business Chair, National Headquarters, Executive Management Center",
            //     "name": "National Parliamentarian Application"
            // },{
                "link": "https://docs.google.com/forms/d/1hdImSUA-_Jk6qPkL4q1AFdQ6MN1Qvz26876_TVtuSOc/formResponse",
                "title": "Chapter Monthly Report - Form A",
                "type": "(online)",
                "tooltip": "Resume of chapter activities carried on during the reporting period",
                "from": "All Chapters",
                "to": "Region President",
                "name": "Chapter Monthly Report"
            }]
    },
    1: {
        1:  [{
                "link": "https://docs.google.com/forms/d/1hdImSUA-_Jk6qPkL4q1AFdQ6MN1Qvz26876_TVtuSOc/formResponse",
                "title": "Chapter Monthly Report - Form A",
                "type": "(online)",
                "tooltip": "Resume of chapter activities carried on during the reporting period",
                "from": "All Chapters",
                "to": "Region President",
                "name": "Chapter Monthly Report"
            }],
        21: [{
                "link": "mailto:reg.XX.president@silver-wings.org",
                "title": "Email NATCON Award Nominations",
                "type": "(email)",
                "tooltip": "Send your NATCON Award Nominations to National Headquarters",
                "from": "All Chapters",
                "to": "Region President",
                "name": "NATCON Award Nominations"
            }]
    },
    2: {
        1:  [{
                "link": "https://docs.google.com/forms/d/1hdImSUA-_Jk6qPkL4q1AFdQ6MN1Qvz26876_TVtuSOc/formResponse",
                "title": "Chapter Monthly Report - Form A",
                "type": "(online)",
                "tooltip": "Resume of chapter activities carried on during the reporting period",
                "from": "All Chapters",
                "to": "Region President",
                "name": "Chapter Monthly Report"
            },{
                "link": "mailto:president@silver-wings.org",
                "title": "Email Intent to Bid for National Headquarters",
                "type": "(email)",
                "tooltip": "Inform the current National Headquarters of your intent to bid for National Headquarters",
                "from": "Any Members",
                "to": "National Headquarters",
                "name": "National HQ Bid Intent"
            }],
        12: [{
                "link": "https://www.aas-sw.org/ama/orig/swlibrary/forms/awards/SWF19.docx",
                "title": "SWF19 - National Individual Award Nomination",
                "type": "(DOCX)",
                "tooltip": "Cover of application to nominate individuals for national awards",
                "from": "All Chapters",
                "to": "Region President",
                "name": "Awards Packet"
            },{
                "link": "https://www.aas-sw.org/ama/orig/swlibrary/forms/awards/SWF20.docx",
                "title": "SWF20 - Award Endorsement Page",
                "type": "(DOCX)",
                "tooltip": "Inner pages of application to nominate individuals/chapters for national awards",
                "from": "All Chapters",
                "to": "Region President",
                "name": "Awards Packet"
            }],
        15: [{
                "link": "https://www.aas-sw.org/ama/orig/jointlibrary/AASSWF01.docx",
                "title": "SWAASF01 - Report of Membership",
                "type": "(DOCX)",
                "tooltip": "List of all current members",
                "from": "All Chapters",
                "to": "Region President",
                "name": "Report of Membership"
            },{
                "link": "https://www.aas-sw.org/ama/orig/jointlibrary/AASSWF02.docx",
                "title": "SWAASF02 - Officer Roster",
                "type": "(DOCX)",
                "tooltip": "List of chapter officer members and positions",
                "from": "All Chapters",
                "to": "Region President",
                "name": "Officer Roster"
            // },{
            //     "link": "https://docs.google.com/forms/d/1hdImSUA-_Jk6qPkL4q1AFdQ6MN1Qvz26876_TVtuSOc/formResponse",
            //     "title": "Chapter Monthly Report - Form A",
            //     "type": "(online)",
            //     "tooltip": "Resume of chapter activities carried on during the reporting period",
            //     "from": "Region President",
            //     "to": "National Headquarters",
            //     "name": "Awards Packet"
            // },{
            //     "link": "https://www.aas-sw.org/ama/orig/swlibrary/forms/awards/SWF19.docx",
            //     "title": "SWF19 - National Individual Award Nomination",
            //     "type": "(DOCX)",
            //     "tooltip": "Cover of application to nominate individuals for national awards",
            //     "from": "Region President",
            //     "to": "National Headquarters",
            //     "name": "Awards Packet"
            // },{
            //     "link": "https://www.aas-sw.org/ama/orig/swlibrary/forms/awards/SWF20.docx",
            //     "title": "SWF20 - Award Endorsement Page",
            //     "type": "(DOCX)",
            //     "tooltip": "Inner pages of application to nominate individuals/chapters for national awards",
            //     "from": "Region President",
            //     "to": "National Headquarters",
            //     "name": "Awards Packet"
            }]
    },
    3: {
        1:  [{
                "link": "https://docs.google.com/forms/d/1hdImSUA-_Jk6qPkL4q1AFdQ6MN1Qvz26876_TVtuSOc/formResponse",
                "title": "Chapter Monthly Report - Form A",
                "type": "(online)",
                "tooltip": "Resume of chapter activities carried on during the reporting period",
                "from": "All Chapters",
                "to": "Region President",
                "name": "Chapter Monthly Report"
                // "link": "https://www.aas-sw.org/ama/orig/jointlibrary/AASSWF03.docx",
                // "title": "SWAASF03 - Proxy Vote Form",
                // "type": "(DOCX)",
                // "tooltip": "Form to delegate Natcon business session votes for unrepresented chapters",
                // "from": "All Chapters",
                // "to": "National Headquarters, National Business Chair, Region President",
                // "name": "NATCON Proxy"
            }],
        4:  [{
                "link": "mailto:reg.XX.president@silver-wings.org",
                "title": "Continuity Due",
                "type": "(email)",
                "tooltip": "Continuity for all staff positions",
                "from": "All Chapters",
                "to": "Region President",
                "name": "Continuity"
            }],
    }
};

function populateTable(form) {
    var theMonth = form.chooseMonth.selectedIndex
    var theYear = parseInt(form.chooseYear.options[form.chooseYear.selectedIndex].text)
    var firstDay = getFirstDay(theYear, theMonth)
    var howMany = getMonthLen(theYear, theMonth)

    getObject("tableHeader").innerHTML = theMonths[theMonth] +
    " " + theYear

    var dayCounter = 1
    var TBody = getObject("tableBody")
    while (TBody.rows.length > 0) {
        TBody.deleteRow(0)
    }
    var newR, newC
    var done=false
    var needForm=false
    while (!done) {
        newR = TBody.insertRow(TBody.rows.length)
        for (var i = 0; i < 7; i++) {
            newC = newR.insertCell(newR.cells.length)
            if (TBody.rows.length == 1 && i < firstDay) {
                newC.innerHTML = ""
                continue
            }
            if (dayCounter >= howMany && TBody.rows.length == 5) {
                done = true
            }
            if (dayCounter <= howMany) {
                newC.innerHTML = dayCounter
                if ((theMonth+1) in myData) {
                    if (dayCounter in myData[theMonth+1]) {
                        newC.innerHTML = "<a href=\"#\" title='Click to see forms below' onclick=\"showForms(" + (theMonth+1) + ", " + dayCounter + ")\">" + dayCounter + "</a>"
                        needForm=true
                        newC.className += "special";
                    }
                }
                dayCounter++
            }
            else
                newC.innerHTML = ""
            // newC.innerHTML = (dayCounter <= howMany) ?
            //     dayCounter++ : ""
        }
    }
    if (!needForm)
        document.getElementById("forms").innerHTML = "No forms needed this month"
    else
        document.getElementById("forms").innerHTML = "Click the day to see the forms needed..."
}
function showForms(month, day) {
    document.getElementById("forms").innerHTML = ""
    var html = ""
    for (var i = 0; i < myData[month][day].length; i++)
    {
        html += "<p><strong>";
        html += myData[month][day][i]["name"];
        html += "</strong><br />";
        html += myData[month][day][i]["from"];
        html += " &#8594; ";
        html += myData[month][day][i]["to"];
        html += "<br /><a href=\"";
        html += myData[month][day][i]["link"];
        // html += "\" data-toggle=\"tooltip\" data-placement=\"top\"";
        html += '" target="_blank"';
        html += "\">";
        html += myData[month][day][i]["title"];
        html += " <span style=\"font-size: x-small;\">";
        html += myData[month][day][i]["type"];
        html += "</span>";
        html += " <span class=\"tooltip\">";
        html += myData[month][day][i]["tooltip"];
        html += "</span></a></p>";
    }
    html += "<p id=\"extraInfo\">(Hover for more information)</p>";
    document.getElementById("forms").innerHTML = html
}
function fillYears() {
    var today = new Date()
    var thisYear = today.getFullYear()
    var yearChooser = document.dateChooser.chooseYear
    for (i = thisYear; i < thisYear + 5; i++) {
        yearChooser.options[yearChooser.options.length] = new Option(i, i)
    }
    setCurrMonth(today)
}
function setCurrMonth(today) {
    document.dateChooser.chooseMonth.selectedIndex = today.getMonth()
}

