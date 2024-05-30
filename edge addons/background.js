chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        title: "Add the title and the current link",
        contexts: ["selection"],
        id: "acasearch234",
    });
	chrome.contextMenus.create({
    title: "Download from Science Hub",
    contexts:["link"],
    id: "sciha",
    });
	chrome.contextMenus.create({
    title: "Download from Science Hub",
    contexts:["selection"],
    id: "sciha1",
    });
	chrome.contextMenus.create({
    title: "Download from Science Hub",
    contexts:["all"],
    id: "sciha2",
    });
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
    });
	chrome.contextMenus.create({
    title: "Brill",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea2",
    });

    chrome.contextMenus.create({
    title: "ERIC Education",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea3",
    });

    chrome.contextMenus.create({
    title: "Google Scholar",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea4",
    });

    chrome.contextMenus.create({
    title: "National Archives Catalog",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea6",
    });

    chrome.contextMenus.create({
    title: "Open access Journals & Articles.",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea7",
    });

chrome.contextMenus.create({
    title: "Refseek",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea8",
    });

chrome.contextMenus.create({
    title: "Scholar Semantic",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea9",
    });


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
    });

chrome.contextMenus.create({
    title: "ACS Publication",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub2",
    });

chrome.contextMenus.create({
    title: "AIAA Aerospace Research Central",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub3",
    });

chrome.contextMenus.create({
    title: "Arxiv",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub4",
    });

chrome.contextMenus.create({
    title: "ASCE Library",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub5",
    });
	chrome.contextMenus.create({
    title: "ASME Library",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub6",
	
});

chrome.contextMenus.create({
    title: "Cambridge Core",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub7",
	
});

chrome.contextMenus.create({
    title: "Canadian Science publishing",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub8",
	
});

chrome.contextMenus.create({
    title: "De Gruyter",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub9",
	
});

chrome.contextMenus.create({
    title: "Emerald",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub10",
	
});

chrome.contextMenus.create({
    title: "ICE online Library",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub11",
	
});

chrome.contextMenus.create({
    title: "IEEE Xplore",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub12",
	
});

chrome.contextMenus.create({
    title: "Jstor",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub13",
	
});

chrome.contextMenus.create({
    title: "MDPI",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub14",
	
});

chrome.contextMenus.create({
    title: "Sage Pub",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub15",
	
});

chrome.contextMenus.create({
    title: "Science Direct",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub16",
	
});

chrome.contextMenus.create({
    title: "Spie Digital Library",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub17",
	
});

chrome.contextMenus.create({
    title: "Springer Link",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub18",
	
});

chrome.contextMenus.create({
    title: "Taylor and Francis",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub19",
	
});

chrome.contextMenus.create({
    title: "University of California Press",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub20",
	
});

chrome.contextMenus.create({
    title: "Online Wiley",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub21",
	
});

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
	
});

chrome.contextMenus.create({
    title: "Open access Thesis",
    contexts:["selection"],
    parentId: "acathe",
    id: "the2",
	
});

chrome.contextMenus.create({
    title: "Pqdtopen Proquest",
    contexts:["selection"],
    parentId: "acathe",
    id: "the3",
	
});


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
	
});

chrome.contextMenus.create({
    title: "Kaggle Search",
    contexts:["selection"],
    parentId: "acadata",
    id: "data2",
	
});

chrome.contextMenus.create({
    title: "Statista",
    contexts:["selection"],
    parentId: "acadata",
    id: "data3",
	
});

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
	
});

chrome.contextMenus.create({
    title: "Research Gate",
    contexts:["selection"],
    parentId: "acanet",
    id: "so2",
	
});

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
	
});

chrome.contextMenus.create({
    title: "Z Library",
    contexts:["selection"],
    parentId: "acapdf",
    id: "pdf2",
	
});

});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "acasearch234") {
        acasearch234(info, tab);
    }
});

function acasearch234(info, tab) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        let url12 = tabs[0].url;
        let dech = info.selectionText;
        chrome.storage.local.set({ "dfh41232": dech, "dfh4123454": url12 }, () => {      
            chrome.storage.local.get(["dfh4"], (result) => {
                let dech23 = result.dfh4 || ""; 
                if (!dech23) {
                    dech23 = "<li class='linka1'><a class='linka' target='_blank' href='" + url12 + "'>" + dech + "</a></li>";
                } else {
                    dech23 += "<li class='linka1'><a class='linka' target='_blank' href='" + url12 + "'>" + dech + "</a></li>";
                }
                chrome.storage.local.set({ "dfh4": dech23 }, () => {    
                });
            });
        });
    });
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "sciha") {
        scidown(info, tab);
    }
});
function scidown(info,tab) {   
    const url = "https://sci-hub.ru/" + info.linkUrl;
    chrome.tabs.create({ url: url, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "sciha1") {
        scidown1(info, tab);
    }
});
function scidown1(info,tab) {   
    const url = "https://sci-hub.ru/" + info.selectionText;
    chrome.tabs.create({ url: url, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "sciha2") {
        scidown2(info, tab);
    }
});
function scidown2(info, tab) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentUrl = tabs[0].url;
        const newUrl = "https://sci-hub.ru/" + currentUrl;
        chrome.tabs.create({ url: newUrl, index: tab.index + 1 });
    });
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'openNewTab') {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            let currentTab = tabs[0];
            let newIndex = currentTab.index + 1;
            chrome.tabs.create({ url: 'https://sem-dev.questionpro.com/t/AYv8aZ2qpu', index: newIndex });
        });
    }
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "sea1") {
        sea1(info, tab);
    }
});
function sea1(info,tab) {   
    const url22 = "https://www.base-search.net/Search/Results?lookfor=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "sea2") {
        sea2(info, tab);
    }
});
function sea2(info,tab) {   
    const url22 = "https://brill.com/search?q1=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "sea3") {
        sea3(info, tab);
    }
});
function sea3(info,tab) {   
    const url22 = "https://eric.ed.gov/?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "sea4") {
        sea4(info, tab);
    }
});
function sea4(info,tab) {   
    const url22 = "https://scholar.google.com/scholar?hl=ar&as_sdt=0%2C5&q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "sea6") {
        sea6(info, tab);
    }
});
function sea6(info,tab) {   
    const url22 = "https://catalog.archives.gov/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "sea7") {
        sea7(info, tab);
    }
});
function sea7(info,tab) {   
    const url22 = 'https://doaj.org/search/articles?ref=quick-search&source=%7B%22query%22%3A%7B%22query_string%22%3A%7B%22query%22%3A%22' + info.selectionText + '%22%2C%22default_operator%22%3A%22AND%22%7D%7D%7D';
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "sea8") {
        sea8(info, tab);
    }
});
function sea8(info,tab) {   
    const url22 = "https://www.refseek.com/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub1") {
        pub1(info, tab);
    }
});
function pub1(info,tab) {   
    const url22 = "https://www.accessengineeringlibrary.com/search?query=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "sea9") {
        sea9(info, tab);
    }
});
function sea9(info,tab) {   
    const url22 = "https://www.semanticscholar.org/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub2") {
        pub2(info, tab);
    }
});
function pub2(info,tab) {   
    const url22 = "https://pubs.acs.org/action/doSearch?AllField=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub3") {
        pub3(info, tab);
    }
});
function pub3(info,tab) {   
    const url22 = "https://arc.aiaa.org/action/doSearch?AllField=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub4") {
        pub4(info, tab);
    }
});
function pub4(info,tab) {   
    const url22 = "https://arxiv.org/search/?query=" + info.selectionText + "&searchtype=all&abstracts=show&order=-announced_date_first&size=50";
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub5") {
        pub5(info, tab);
    }
});
function pub5(info,tab) {   
    const url22 = "https://ascelibrary.org/action/doSearch?AllField=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub8") {
        pub8(info, tab);
    }
});
function pub8(info,tab) {   
    const url22 = "https://cdnsciencepub.com/action/doSearch?AllField=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub6") {
        pub6(info, tab);
    }
});
function pub6(info,tab) {   
    const url22 = "https://asmedigitalcollection.asme.org/search-results?page=1&q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub7") {
        pub7(info, tab);
    }
});
function pub7(info,tab) {   
    const url22 = "https://www.cambridge.org/core/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub9") {
        pub9(info, tab);
    }
});
function pub9(info,tab) {   
    const url22 = "https://www.degruyter.com/search?q1=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub10") {
        pub10(info, tab);
    }
});
function pub10(info,tab) {   
    const url22 = "https://www.emerald.com/insight/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub11") {
        pub11(info, tab);
    }
});
function pub11(info,tab) {   
    const url22 = "https://www.icevirtuallibrary.com/action/doSearch?AllField=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub12") {
        pub12(info, tab);
    }
});
function pub12(info,tab) {   
    const url22 = "https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub13") {
        pub13(info, tab);
    }
});
function pub13(info,tab) {   
    const url22 = "https://www.jstor.org/action/doBasicSearch?Query=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub14") {
        pub14(info, tab);
    }
});
function pub14(info,tab) {   
    const url22 = "https://www.mdpi.com/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub15") {
        pub15(info, tab);
    }
});
function pub15(info,tab) {   
    const url22 = "https://journals.sagepub.com/action/doSearch?filterOption=allJournal&AllField=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub16") {
        pub16(info, tab);
    }
});
function pub16(info,tab) {   
    const url22 = "https://www.sciencedirect.com/search?qs=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub17") {
        pub17(info, tab);
    }
});
function pub17(info,tab) {   
    const url22 = "https://www.spiedigitallibrary.org/search?term=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub18") {
        pub18(info, tab);
    }
});
function pub18(info,tab) {   
    const url22 = "https://link.springer.com/search?query=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub19") {
        pub19(info, tab);
    }
});
function pub19(info,tab) {   
    const url22 = "https://www.tandfonline.com/action/doSearch?AllField=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub20") {
        pub20(info, tab);
    }
});
function pub20(info,tab) {   
    const url22 = "https://online.ucpress.edu/journals/search-results?page=1&q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pub21") {
        pub21(info, tab);
    }
});
function pub21(info,tab) {   
    const url22 = "https://onlinelibrary.wiley.com/action/doSearch?AllField=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "the1") {
        the1(info, tab);
    }
});
function the1(info,tab) {   
    const url22 = "http://search.ndltd.org/search.php?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "the2") {
        the2(info, tab);
    }
});
function the2(info,tab) {   
    const url22 = "https://oatd.org/oatd/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "the3") {
        the3(info, tab);
    }
});
function the3(info,tab) {   
    const url22 = "https://pqdtopen.proquest.com/results.html?QryTxt=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "data1") {
        data1(info, tab);
    }
});
function data1(info,tab) {   
    const url22 = "https://datasetsearch.research.google.com/search?query=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "data2") {
        data2(info, tab);
    }
});
function data2(info,tab) {   
    const url22 = "https://www.kaggle.com/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "data3") {
        data3(info, tab);
    }
});
function data3(info,tab) {   
    const url22 = "https://www.statista.com/search/?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pdf1") {
        pdf1(info, tab);
    }
});
function pdf1(info,tab) {   
    const url22 = "https://www.pdfdrive.com/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "so2") {
        so2(info, tab);
    }
});
function so2(info,tab) {   
    const url22 = "https://www.researchgate.net/search/publication?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "so1") {
        so1(info, tab);
    }
});
function so1(info,tab) {   
    const url22 = "https://www.academia.edu/search?utf8=✓&q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pdf2") {
        pdf2(info, tab);
    }
});
function pdf2(info,tab) {   
    const url22 = "https://z-lib.id/s?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}
