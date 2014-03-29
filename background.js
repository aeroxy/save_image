// Copyright (c) 2014 The Chromium Authors. All rights reserved.

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  var url = info.srcUrl;
  var filename = Date.now() + url.substr(url.lastIndexOf("."));;
  chrome.downloads.download({ url: url, filename: filename});
});

chrome.contextMenus.create({
  id: 'open',
  title: chrome.i18n.getMessage('openContextMenuTitle'),
  contexts: ['image'],
});
