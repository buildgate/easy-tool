$(document).ready(function () {});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.fn) {
    case 'clearToken':
      sendResponse({
        msg: 'token: ' + window.localStorage.getItem('token'),
      });
      window.localStorage.clear();
      break;
    case 'csdn':
      $('#article_content').css('height', 'auto');
      $('.hide-article-box').hide();
      $('code').css('user-select', 'text');
      sendResponse({
        msg: 'set',
      });
      break;
    default:
      break;
  }
});
