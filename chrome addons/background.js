chrome.contextMenus.create({
    title: "Add the title and the current link",
    contexts:["selection"],
    id: "acasearch234",
	onclick: acasearch234
});
function acasearch234(info,tab) {   
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url12 = tabs[0].url;
   
	
	var dech=info.selectionText;
		
		localStorage.setItem("dfh41232", dech);
		
		
     localStorage.setItem("dfh4123454", url12);  
	 var dech23 = localStorage.getItem("dfh4"); 
	  if(localStorage.getItem("dfh4")=="") { 
	  
    dech23="<li  class='linka1'><a class='linka'target='_blank' href='" + url12 +"'>" + dech +"</a></li>";
    localStorage.setItem("dfh4", dech23);
    
	} else {
   dech23=dech23 + "<li  class='linka1'><a class='linka' target='_blank' href='" + url12 +"'>" + dech +"</a></li>";
    localStorage.setItem("dfh4", dech23);
    
 
	 
   }
	
});
 
}
chrome.contextMenus.create({
    title: "Academic Search Engine",
    contexts:["selection"],
    id: "acasearch",
});
chrome.contextMenus.create({
    title: "Base Search",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea1",
	onclick: sea1
});
function sea1(info,tab) {   
    const url22 = "https://www.base-search.net/Search/Results?lookfor=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Brill",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea2",
	onclick: sea2
});
function sea2(info,tab) {   
    const url22 = "https://brill.com/search?q1=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "ERIC Education",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea3",
	onclick: sea3
});
function sea3(info,tab) {   
    const url22 = "https://eric.ed.gov/?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Google Scholar",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea4",
	onclick: sea4
});
function sea4(info,tab) {   
    const url22 = "https://scholar.google.com/scholar?hl=ar&as_sdt=0%2C5&q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "National Archives Catalog",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea6",
	onclick: sea6
});
function sea6(info,tab) {   
    const url22 = "https://catalog.archives.gov/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Open access Journals & Articles.",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea7",
	onclick: sea7
});
function sea7(info,tab) {   
    const url22 = 'https://doaj.org/search/articles?ref=quick-search&source=%7B%22query%22%3A%7B%22query_string%22%3A%7B%22query%22%3A%22' + info.selectionText + '%22%2C%22default_operator%22%3A%22AND%22%7D%7D%7D';
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Refseek",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea8",
	onclick: sea8
});
function sea8(info,tab) {   
    const url22 = "https://www.refseek.com/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Scholar Semantic",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea9",
	onclick: sea9
});
function sea9(info,tab) {   
    const url22 = "https://www.semanticscholar.org/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}

chrome.contextMenus.create({
    title: "Academic Publishers",
    contexts:["selection"],
    id: "acapub",
});
chrome.contextMenus.create({
    title: "Access Engineering Library",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub1",
	onclick: pub1
});
function pub1(info,tab) {   
    const url22 = "https://www.accessengineeringlibrary.com/search?query=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "ACS Publication",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub2",
	onclick: pub2
});
function pub2(info,tab) {   
    const url22 = "https://pubs.acs.org/action/doSearch?AllField=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "AIAA Aerospace Research Central",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub3",
	onclick: pub3
});
function pub3(info,tab) {   
    const url22 = "https://arc.aiaa.org/action/doSearch?AllField=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Arxiv",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub4",
	onclick: pub4
});
function pub4(info,tab) {   
    const url22 = "https://arxiv.org/search/?query=" + info.selectionText + "&searchtype=all&abstracts=show&order=-announced_date_first&size=50";
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "ASCE Library",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub5",
	onclick: pub5
});
function pub5(info,tab) {   
    const url22 = "https://ascelibrary.org/action/doSearch?AllField=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "ASCM Library",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub6",
	onclick: pub6
});
function pub6(info,tab) {   
    const url22 = "https://asmedigitalcollection.asme.org/search-results?page=1&q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Cambridge Core",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub7",
	onclick: pub7
});
function pub7(info,tab) {   
    const url22 = "https://www.cambridge.org/core/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Canadian Science publishing ",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub8",
	onclick: pub8
});
function pub8(info,tab) {   
    const url22 = "https://cdnsciencepub.com/action/doSearch?AllField=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Egruyter",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub9",
	onclick: pub9
});
function pub9(info,tab) {   
    const url22 = "https://www.degruyter.com/search?q1=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Emerald",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub10",
	onclick: pub10
});
function pub10(info,tab) {   
    const url22 = "https://www.emerald.com/insight/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "ICE Library",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub11",
	onclick: pub11
});
function pub11(info,tab) {   
    const url22 = "https://www.ice.org.uk/site-search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "IEEE Xplore",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub12",
	onclick: pub12
});
function pub12(info,tab) {   
    const url22 = "https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Jstor",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub13",
	onclick: pub13
});
function pub13(info,tab) {   
    const url22 = "https://www.jstor.org/action/doBasicSearch?Query=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "MDPI",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub14",
	onclick: pub14
});
function pub14(info,tab) {   
    const url22 = "https://www.mdpi.com/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Sage Pub",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub15",
	onclick: pub15
});
function pub15(info,tab) {   
    const url22 = "https://journals.sagepub.com/action/doSearch?filterOption=allJournal&AllField=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Science Direct",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub16",
	onclick: pub16
});
function pub16(info,tab) {   
    const url22 = "https://www.sciencedirect.com/search?qs=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Spie Digital Library",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub17",
	onclick: pub17
});
function pub17(info,tab) {   
    const url22 = "https://www.spiedigitallibrary.org/search?term=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Springer Link",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub18",
	onclick: pub18
});
function pub18(info,tab) {   
    const url22 = "https://link.springer.com/search?query=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Taylor and Francis",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub19",
	onclick: pub19
});
function pub19(info,tab) {   
    const url22 = "https://www.tandfonline.com/action/doSearch?AllField=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "University of California Press",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub20",
	onclick: pub20
});
function pub20(info,tab) {   
    const url22 = "https://online.ucpress.edu/journals/search-results?page=1&q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Wiley",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub21",
	onclick: pub21
});
function pub21(info,tab) {   
    const url22 = "https://onlinelibrary.wiley.com/action/doSearch?AllField=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Thesis Search Engine",
    contexts:["selection"],
    id: "acathe",
});
chrome.contextMenus.create({
    title: "Global ETD Search",
    contexts:["selection"],
    parentId: "acathe",
    id: "the1",
	onclick: the1
});
function the1(info,tab) {   
    const url22 = "http://search.ndltd.org/search.php?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Open access Thesis",
    contexts:["selection"],
    parentId: "acathe",
    id: "the2",
	onclick: the2
});
function the2(info,tab) {   
    const url22 = "https://oatd.org/oatd/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Pqdtopen Proquest",
    contexts:["selection"],
    parentId: "acathe",
    id: "the3",
	onclick: the3
});
function the3(info,tab) {   
    const url22 = "https://pqdtopen.proquest.com/results.html?QryTxt=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}

chrome.contextMenus.create({
    title: "Dataset Search Engine",
    contexts:["selection"],
    id: "acadata",
});
chrome.contextMenus.create({
    title: "Data search Google",
    contexts:["selection"],
    parentId: "acadata",
    id: "data1",
	onclick: data1
});
function data1(info,tab) {   
    const url22 = "https://datasetsearch.research.google.com/search?query=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Kaggle Search",
    contexts:["selection"],
    parentId: "acadata",
    id: "data2",
	onclick: data2
});
function data2(info,tab) {   
    const url22 = "https://www.kaggle.com/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Statista",
    contexts:["selection"],
    parentId: "acadata",
    id: "data3",
	onclick: data3
});
function data3(info,tab) {   
    const url22 = "https://www.statista.com/search/?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Research Network",
    contexts:["selection"],
    id: "acanet",
});
chrome.contextMenus.create({
    title: "Academia",
    contexts:["selection"],
    parentId: "acanet",
    id: "so1",
	onclick: so1
});
function so1(info,tab) {   
    const url22 = "https://www.academia.edu/search?utf8=✓&q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Research Gate",
    contexts:["selection"],
    parentId: "acanet",
    id: "so2",
	onclick: so2
});
function so2(info,tab) {   
    const url22 = "https://www.researchgate.net/search/publication?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "PDF Search Engine",
    contexts:["selection"],
    id: "acapdf",
});
chrome.contextMenus.create({
    title: "Pdf Drive",
    contexts:["selection"],
    parentId: "acapdf",
    id: "pdf1",
	onclick: pdf1
});
function pdf1(info,tab) {   
    const url22 = "https://www.pdfdrive.com/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Z Library",
    contexts:["selection"],
    parentId: "acapdf",
    id: "pdf2",
	onclick: pdf2
});
function pdf2(info,tab) {   
    const url22 = "https://b-ok.org/s/" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.create({
    title: "Download from Science Hub",
    contexts:["link"],
    id: "sciha",
	onclick: scidown
});


function scidown(info,tab) {   
    const url = "https://sci-hub.ru/" + info.linkUrl;
    chrome.tabs.create({ url: url, 'index': tab.index+1 });
}


















