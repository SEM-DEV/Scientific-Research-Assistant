// create a context menu
browser.contextMenus.create({
    id: "ddg",
    title: "Download from Science Hub",
    contexts: ["link"]
});

//add action listener to the context menu
browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab) {
    const url = "https://sci-hub.se/" + info.linkUrl;
    browser.tabs.create({url: url});
}
