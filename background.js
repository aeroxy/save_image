// Copyright (c) 2014 The Chromium Authors. All rights reserved.

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  var filename = Date.now() + '';
  chrome.downloads.download({ url: info.srcUrl, filename: filename});
});

chrome.contextMenus.create({
  id: 'open',
  title: chrome.i18n.getMessage('openContextMenuTitle'),
  contexts: ['image'],
});
