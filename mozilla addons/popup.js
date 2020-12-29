
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
window.onload = function() {
  var input = document.getElementById("myInput").focus();
}
window.onload = function() {
  var input = document.getElementById("myInput").focus();
}
// Get the saved stats and render the data in the popup window.
const MAX_ITEMS = 5;

function sorter(array) {
  return Object.keys(array).sort((a, b) => {
    return array[a] <= array[b];
  });
}

function addElements(element, array, callback) {
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }

  for (let i=0; i < array.length; i++) {
    if (i >= MAX_ITEMS) {
      break;
    }

    const listItem = document.createElement("li");
    listItem.textContent = callback(array[i]);
    element.appendChild(listItem);
  }
}

var gettingStoredStats = browser.storage.local.get();
gettingStoredStats.then(results => {
  if (results.type.length === 0 || results.host.length === 0) {
    return;
  }

  let hostElement = document.getElementById("hosts");
  let sortedHosts = sorter(results.host);
  addElements(hostElement, sortedHosts, (host) => {
    return `${host}: ${results.host[host]} visit(s)`;
  });

  let typeElement = document.getElementById("types");
  let sortedTypes = sorter(results.type);
  addElements(typeElement, sortedTypes, (type) => {
    return `${type}: ${results.type[type]} use(s)`;
  });

});
