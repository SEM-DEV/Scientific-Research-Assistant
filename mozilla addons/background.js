browser.menus.create({
    title: "Add the title of the copied title",
    contexts:["selection"],
    id: "acasearch234",
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "acasearch234") {
    if (info.selectionText) {
		var dech=info.selectionText;
		localStorage.setItem("dfh41232", dech);
    }
  }
});


browser.menus.create({
    title: "Academic Search Engine",
    contexts:["selection"],
    id: "acasearch",
});
browser.menus.create({
    title: "Base Search",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea1",
});
browser.menus.create({
    title: "Brill",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea2",
});
browser.menus.create({
    title: "ERIC Education",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea3",
});
browser.menus.create({
    title: "Google Scholar",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea4",
});
browser.menus.create({
    title: "Microsoft Academic",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea5",
});
browser.menus.create({
    title: "National Archives Catalog",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea6",
});
browser.menus.create({
    title: "Open access Journals & Articles",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea7",
});
browser.menus.create({
    title: "Refseek",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea8",
});
browser.menus.create({
    title: "Scholar Semantic",
    contexts:["selection"],
    parentId: "acasearch",
    id: "sea9",
});


browser.menus.create({
    title: "Academic Publishers",
    contexts:["selection"],
    id: "acapub",
});
browser.menus.create({
    title: "Access Engineering Library",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub1",
});
browser.menus.create({
    title: "ACS Publication",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub2",
});
browser.menus.create({
    title: "AIAA Aerospace Research Central",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub3",
});
browser.menus.create({
    title: "Arxiv",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub4",
});
browser.menus.create({
    title: "ASCE Library",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub5",
});
browser.menus.create({
    title: "ASCM Library",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub6",
});
browser.menus.create({
    title: "Cambridge Core",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub7",
});
browser.menus.create({
    title: "Canadian Science publishing ",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub8",
});
browser.menus.create({
    title: "Egruyter",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub9",
});
browser.menus.create({
    title: "Emerald",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub10",
});
browser.menus.create({
    title: "ICE Library",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub11",
});
browser.menus.create({
    title: "IEEE Xplore",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub12",
});
browser.menus.create({
    title: "Jstor",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub13",
});
browser.menus.create({
    title: "MDPI",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub14",
});
browser.menus.create({
    title: "Sage Pub",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub15",
});
browser.menus.create({
    title: "Science Direct",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub16",
});
browser.menus.create({
    title: "Spie Digital Library",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub17",
});
browser.menus.create({
    title: "Springer Link",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub18",
});
browser.menus.create({
    title: "Taylor and Francis",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub19",
});
browser.menus.create({
    title: "University of California Press",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub20",
});
browser.menus.create({
    title: "Wiley",
    contexts:["selection"],
    parentId: "acapub",
    id: "pub21",
});

browser.menus.create({
    title: "Thesis Search Engine",
    contexts:["selection"],
    id: "acathe",
});
browser.menus.create({
    title: "Global ETD Search",
    contexts:["selection"],
    parentId: "acathe",
    id: "the1",
});
browser.menus.create({
    title: "Open access Thesis",
    contexts:["selection"],
    parentId: "acathe",
    id: "the2",
});
browser.menus.create({
    title: "Pqdtopen Proquest",
    contexts:["selection"],
    parentId: "acathe",
    id: "the3",
});


browser.menus.create({
    title: "Dataset Search Engine",
    contexts:["selection"],
    id: "acadata",
});
browser.menus.create({
    title: "Data search Google",
    contexts:["selection"],
    parentId: "acadata",
    id: "data1",
});
browser.menus.create({
    title: "Kaggle Search",
    contexts:["selection"],
    parentId: "acadata",
    id: "data2",
});
browser.menus.create({
    title: "Statista",
    contexts:["selection"],
    parentId: "acadata",
    id: "data3",
});

browser.menus.create({
    title: "Research Network",
    contexts:["selection"],
    id: "acanet",
});
browser.menus.create({
    title: "Academia",
    contexts:["selection"],
    parentId: "acanet",
    id: "so1",
});
browser.menus.create({
    title: "Research Gate",
    contexts:["selection"],
    parentId: "acanet",
    id: "so2",
});

browser.menus.create({
    title: "PDF Search Engine",
    contexts:["selection"],
    id: "acapdf",
});
browser.menus.create({
    title: "Pdf Drive",
    contexts:["selection"],
    parentId: "acapdf",
    id: "pdf1",
});
browser.menus.create({
    title: "Z Library",
    contexts:["selection"],
    parentId: "acapdf",
    id: "pdf2",
});

browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "sea1") {
    if (info.selectionText) {
		const url22 = "https://www.base-search.net/Search/Results?lookfor=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "sea2") {
    if (info.selectionText) {
		const url22 = "https://brill.com/search?q1=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "sea3") {
    if (info.selectionText) {
		const url22 = "https://eric.ed.gov/?q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "sea4") {
    if (info.selectionText) {
		const url22 = "https://scholar.google.com/scholar?hl=ar&as_sdt=0%2C5&q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "sea5") {
    if (info.selectionText) {
		const url22 = "https://academic.microsoft.com/search?q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "sea6") {
    if (info.selectionText) {
		const url22 = "https://catalog.archives.gov/search?q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "sea7") {
    if (info.selectionText) {
		const url22 = 'https://doaj.org/search/articles?ref=quick-search&source=%7B%22query%22%3A%7B%22query_string%22%3A%7B%22query%22%3A%22' + info.selectionText + '%22%2C%22default_operator%22%3A%22AND%22%7D%7D%7D';
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "sea8") {
    if (info.selectionText) {
		const url22 = "https://www.refseek.com/search?q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "sea9") {
    if (info.selectionText) {
		const url22 = "https://www.semanticscholar.org/search?q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});


browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub1") {
    if (info.selectionText) {
		const url22 = "https://www.accessengineeringlibrary.com/search?query=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub2") {
    if (info.selectionText) {
		const url22 = "https://pubs.acs.org/action/doSearch?AllField=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub3") {
    if (info.selectionText) {
		const url22 = "https://arc.aiaa.org/action/doSearch?AllField=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub4") {
    if (info.selectionText) {
		const url22 = "https://arxiv.org/search/?query=" + info.selectionText + "&searchtype=all&abstracts=show&order=-announced_date_first&size=50";
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub5") {
    if (info.selectionText) {
		const url22 = "https://ascelibrary.org/action/doSearch?AllField=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub6") {
    if (info.selectionText) {
		const url22 = "https://asmedigitalcollection.asme.org/search-results?page=1&q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub7") {
    if (info.selectionText) {
		const url22 = "https://www.cambridge.org/core/search?q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub8") {
    if (info.selectionText) {
		const url22 = "https://cdnsciencepub.com/action/doSearch?AllField=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub9") {
    if (info.selectionText) {
		const url22 = "https://www.degruyter.com/search?q1=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub10") {
    if (info.selectionText) {
		const url22 = "https://www.emerald.com/insight/search?q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub11") {
    if (info.selectionText) {
		const url22 = "https://www.ice.org.uk/site-search?q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub12") {
    if (info.selectionText) {
		const url22 = "https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub13") {
    if (info.selectionText) {
		const url22 = "https://www.jstor.org/action/doBasicSearch?Query=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub14") {
    if (info.selectionText) {
		const url22 = "https://www.mdpi.com/search?q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub15") {
    if (info.selectionText) {
		const url22 = "https://journals.sagepub.com/action/doSearch?filterOption=allJournal&AllField=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub16") {
    if (info.selectionText) {
		const url22 = "https://www.sciencedirect.com/search?qs=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub17") {
    if (info.selectionText) {
		const url22 = "https://www.spiedigitallibrary.org/search?term=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub18") {
    if (info.selectionText) {
		const url22 = "https://link.springer.com/search?query=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub19") {
    if (info.selectionText) {
		const url22 = "https://www.tandfonline.com/action/doSearch?AllField=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub20") {
    if (info.selectionText) {
		const url22 = "https://online.ucpress.edu/journals/search-results?page=1&q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pub21") {
    if (info.selectionText) {
		const url22 = "https://onlinelibrary.wiley.com/action/doSearch?AllField=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "the1") {
    if (info.selectionText) {
		const url22 = "http://search.ndltd.org/search.php?q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "the2") {
    if (info.selectionText) {
		const url22 = "https://oatd.org/oatd/search?q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "the3") {
    if (info.selectionText) {
		const url22 = "https://pqdtopen.proquest.com/results.html?QryTxt=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "data1") {
    if (info.selectionText) {
		const url22 = "https://datasetsearch.research.google.com/search?query=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "data2") {
    if (info.selectionText) {
		const url22 = "https://www.kaggle.com/search?q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "data3") {
    if (info.selectionText) {
		const url22 = "https://www.statista.com/search/?q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "so1") {
    if (info.selectionText) {
		const url22 = "https://www.academia.edu/search?utf8=✓&q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "so2") {
    if (info.selectionText) {
		const url22 = "https://www.researchgate.net/search/publication?q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pdf1") {
    if (info.selectionText) {
		const url22 = "https://www.pdfdrive.com/search?q=" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "pdf2") {
    if (info.selectionText) {
		const url22 = "https://b-ok.org/s/" + info.selectionText;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url22, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});

browser.menus.create({
  id: "muted-tab",
  title: "Download from SCI-HUB",
  contexts: ["link"]
});
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "muted-tab") {
    if (info.linkUrl) {
		const url = "https://sci-hub.se/" + info.linkUrl;
      let newTab = await browser.tabs.create({ 'active': true, 'url': url, 'index': tab.index+1 });
      browser.tabs.update(newTab.id);
    }
  }
});

