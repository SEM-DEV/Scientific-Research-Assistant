
// Pure JS:
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("myInput").addEventListener("keyup", handler);
});

// The handler also must go in a .js file
function handler() {
     var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
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
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("myInput1").addEventListener("keyup", handlera);
});

// The handler also must go in a .js file
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
function isValidURL(string) {
  var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
};
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("addb").addEventListener("click", handler1);
});


function handler1() {
	var linkaa=document.getElementById("link").value;
	var titlea=document.getElementById("title").value;
		

	
	
		if ( titlea == "" || linkaa == "" ) {
		    alert('please type the link and the title');
		    document.getElementById("link").value="";
            document.getElementById("title").value="";
	}
		else {
		if ( isValidURL(linkaa) == true) {
			var link1=document.getElementById("link").value;
            var title1=document.getElementById("title").value;
            document.getElementById("showthelongtext").innerHTML=document.getElementById("showthelongtext").innerHTML + "<li class='linka1'><a class='linka' href='" + link1 +"'>" + title1 +"</a></li>";
            var dech=document.getElementById("showthelongtext").innerHTML;
            document.getElementById("link").value="";
            document.getElementById("title").value="";
            localStorage.setItem("dfh4", dech);
		}
		else {
			alert('please type a correct link');
		    document.getElementById("link").value="";
            
			
		}
			
		}
		


}

window.addEventListener('load', (event) => {
    if(localStorage.getItem("dfh4")!="") { 
 var dech = localStorage.getItem("dfh4"); 
 document.getElementById("showthelongtext").innerHTML=dech;
   }
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("cleartext").addEventListener("click", handler3);
});


function handler3() {
document.getElementById("showthelongtext").innerHTML="";
var dech=document.getElementById("showthelongtext").innerHTML;
localStorage.setItem("dfh4", dech);
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("openexist").addEventListener("click", handler4);
});


function handler4() {
document.getElementById("exist1").style.display="block";
document.getElementById("stored1").style.display="none";
document.getElementById("openexist").style.backgroundColor="#0d3457";
document.getElementById("openstored").style.backgroundColor="#0d1117";
 var input = document.getElementById("myInput").focus();
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("openstored").addEventListener("click", handler5);
});


function handler5() {
document.getElementById("exist1").style.display="none";
document.getElementById("openadd").style.backgroundColor="#0d1117";
 document.getElementById("openadd").innerHTML="Click to add  more links";
document.getElementById("stored1").style.display="block";
document.getElementById("addinput").style.display="none";
document.getElementById("openstored").style.backgroundColor="#0d3457";
document.getElementById("openexist").style.backgroundColor="#0d1117";
 var input = document.getElementById("myInput1").focus();
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("openadd").addEventListener("click", handler6);
});


function handler6() {
	var disp=document.getElementById("addinput").style.display;
	if ( disp == "none") {
document.getElementById("addinput").style.display="block";
document.getElementById("link").value="";
document.getElementById("title").value="";
document.getElementById("openadd").style.backgroundColor="#0d3457";
document.getElementById("openadd").innerHTML="Click to close the input box";
 var input = document.getElementById("link").focus();
	}
	if ( disp == "block") {
document.getElementById("addinput").style.display="none";
document.getElementById("openadd").style.backgroundColor="#0d1117";
 document.getElementById("openadd").innerHTML="Click to add  more links";
	}
}




















