$(document).ready(function () {});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  sendResponse({
    msg: 'token: ' + window.localStorage.getItem('token'),
  });
  window.localStorage.clear();
});
