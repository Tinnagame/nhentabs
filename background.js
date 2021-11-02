searchNhentai = function(word){
   var query = word.selectionText;
   chrome.tabs.create({url: "https://nhentai.net/g/" + query});
};

chrome.contextMenus.create({
title: "Search in nhentai",
contexts:["selection"],  // ContextType
onclick: searchNhentai // A callback function
});
