

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("myInput").addEventListener("keyup", handler);
});


function handler() {
     var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {cleartext
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("myInput1").addEventListener("keyup", handlera);
});


function handlera() {
     var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    ul = document.getElementById("showthelongtext");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

window.onload = function() {
  var input = document.getElementById("myInput").focus();
 
}





window.addEventListener('load', (event) => {
    chrome.storage.local.get("dfh4", function(result) {
        var dech = result["dfh4"];
        if (dech) {
            document.getElementById("showthelongtext").innerHTML = dech;
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("openexist").addEventListener("click", handler4);
});


function handler4() {
document.getElementById("exist1").style.display="block";
document.getElementById("stored1").style.display="none";
document.getElementById("quicksci").style.display="none";
document.getElementById("quickscihub").style.display="none";
document.getElementById("opensci").style.backgroundColor="#0d1117";
document.getElementById("openquick").style.backgroundColor="#0d1117";
document.getElementById("openexist").style.backgroundColor="#0d3457";
document.getElementById("openstored").style.backgroundColor="#0d1117";
 var input = document.getElementById("myInput").focus();
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("openstored").addEventListener("click", handler5);
});


function handler5() {
document.getElementById("exist1").style.display="none";
document.getElementById("quicksci").style.display="none";
document.getElementById("quickscihub").style.display="none";
document.getElementById("opensci").style.backgroundColor="#0d1117";
document.getElementById("openquick").style.backgroundColor="#0d1117";
document.getElementById("stored1").style.display="block";
document.getElementById("openstored").style.backgroundColor="#0d3457";
document.getElementById("openexist").style.backgroundColor="#0d1117";
 var input = document.getElementById("myInput1").focus();
 
  var dech233 = document.getElementById("showthelongtext").getElementsByTagName("li").length;
	  if(dech233=="0") { 
	 document.getElementById("countlist").innerHTML="You don't have any stored links"; 
    
    
    
	} else {
   document.getElementById("countlist").innerHTML='You have ' + dech233 + ' stored links';
    
    	 
   }
 
 var mylist = $('#showthelongtext');
var listitems = mylist.children('li').get();

listitems.sort(function(a, b) 
{
   return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
})

mylist.empty().append(listitems);

//$.each(listitems, function(idx, itm) { mylist.append(itm); });
}



document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("quickmic").addEventListener("click", handler11);
});


function handler11() {
	var ser=document.getElementById("searchmic").value;
	if ( ser == "" ) {
		alert('Type something!');
		
	}
	else {
var search1="https://www.researchgate.net/search.Search.html?query=" + document.getElementById("searchmic").value;
window.open(search1, '_blank');
	}
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("quickgoo").addEventListener("click", handler12);
});


function handler12() {
		var ser=document.getElementById("searchmic").value;
	if ( ser == "" ) {
		alert('Type something!');
		
	}
	else {
	
var search1="https://scholar.google.com/scholar?q=" + document.getElementById("searchmic").value;
window.open(search1, '_blank');
 }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("quickscih1").addEventListener("click", handler13);
});


function handler13() {
		var ser=document.getElementById("searchsci").value;
	if ( ser == "" ) {
		alert('Type something!');
		
	}
	else {
	
var search1="https://sci-hub.ru/" + document.getElementById("searchsci").value;
window.open(search1, '_blank');
	}
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("openquick").addEventListener("click", handler14);
});


function handler14() {
document.getElementById("exist1").style.display="none";
document.getElementById("stored1").style.display="none";
document.getElementById("quicksci").style.display="block";
document.getElementById("quickscihub").style.display="none";
document.getElementById("opensci").style.backgroundColor="#0d1117";
document.getElementById("openexist").style.backgroundColor="#0d1117";
document.getElementById("openstored").style.backgroundColor="#0d1117";
document.getElementById("openquick").style.backgroundColor="#0d3457";
 var input = document.getElementById("searchmic").focus();
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("opensci").addEventListener("click", handler15);
});


function handler15() {
document.getElementById("exist1").style.display="none";
document.getElementById("stored1").style.display="none";
document.getElementById("quicksci").style.display="none";
document.getElementById("quickscihub").style.display="block";
document.getElementById("opensci").style.backgroundColor="#0d3457";
document.getElementById("openexist").style.backgroundColor="#0d1117";
document.getElementById("openstored").style.backgroundColor="#0d1117";
document.getElementById("openquick").style.backgroundColor="#0d1117";
 var input = document.getElementById("searchsci").focus();
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("cleartext").addEventListener("click", handler323);
});



function handler323() {
    
    document.getElementById("showthelongtext").innerHTML = "";

 
    chrome.storage.local.set({ "dfh4": "" });

   
    document.getElementById("countlist").innerHTML = "You don't have any stored links";
}

















