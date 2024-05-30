

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
document.getElementById("opensci").style.backgroundColor="#059862";
document.getElementById("openquick").style.backgroundColor="#059862";
document.getElementById("openexist").style.backgroundColor="#e2fffd";
document.getElementById("openstored").style.backgroundColor="#059862";
document.getElementById("opensci").style.color="white";
document.getElementById("openquick").style.color="white";
document.getElementById("openexist").style.color="#059862";
document.getElementById("openstored").style.color="white";
 var input = document.getElementById("myInput").focus();
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("openstored").addEventListener("click", handler5);
});


function handler5() {
document.getElementById("exist1").style.display="none";
document.getElementById("quicksci").style.display="none";
document.getElementById("quickscihub").style.display="none";
document.getElementById("stored1").style.display="block";
document.getElementById("opensci").style.backgroundColor="#059862";
document.getElementById("openquick").style.backgroundColor="#059862";
document.getElementById("openexist").style.backgroundColor="#059862";
document.getElementById("openstored").style.backgroundColor="#e2fffd";
document.getElementById("opensci").style.color="white";
document.getElementById("openquick").style.color="white";
document.getElementById("openexist").style.color="white";
document.getElementById("openstored").style.color="#059862";

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
	var content= document.getElementById("listo1").value;		
		if ( content == "https://arxiv.org/search/?query=" ) {
		var search1= document.getElementById("listo1").value+ document.getElementById("searchmic").value + "&searchtype=all&abstracts=show&order=-announced_date_first&size=50";
        window.open(search1, 'tab.index+1');
	    } else if (content == "https://doaj.org/search/articles?source=%7B%22query%22%3A%7B%22query_string%22%3A%7B%22query%22%3A%22" ) {
	    var search1= "https://doaj.org/search/articles?ref=quick-search&source=%7B%22query%22%3A%7B%22query_string%22%3A%7B%22query%22%3A%22"+ document.getElementById("searchmic").value + '"%2C"default_operator"%3A"AND"%7D%7D%2C"track_total_hits"%3Atrue%7D';
        window.open(search1, 'tab.index+1');
		}
		else{
        var search1= document.getElementById("listo1").value+ document.getElementById("searchmic").value;
        window.open(search1, 'tab.index+1');
		}
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
document.getElementById("opensci").style.backgroundColor="#059862";
document.getElementById("openquick").style.backgroundColor="#e2fffd";
document.getElementById("openexist").style.backgroundColor="#059862";
document.getElementById("openstored").style.backgroundColor="#059862";
document.getElementById("opensci").style.color="white";
document.getElementById("openquick").style.color="#059862";
document.getElementById("openexist").style.color="white";
document.getElementById("openstored").style.color="white";
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
document.getElementById("opensci").style.backgroundColor="#e2fffd";
document.getElementById("openquick").style.backgroundColor="#059862";
document.getElementById("openexist").style.backgroundColor="#059862";
document.getElementById("openstored").style.backgroundColor="#059862";
document.getElementById("opensci").style.color="#059862";
document.getElementById("openquick").style.color="white";
document.getElementById("openexist").style.color="white";
document.getElementById("openstored").style.color="white";
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

document.addEventListener('DOMContentLoaded', function () {
  const selectElement = document.getElementById('listo1');

  chrome.storage.sync.get('selectedOption', function (data) {
    if (data.selectedOption) {
      selectElement.value = data.selectedOption;
    }
  });
  selectElement.addEventListener('change', function () {
    const selectedOption = selectElement.value;
    chrome.storage.sync.set({ selectedOption: selectedOption });
  });
});















