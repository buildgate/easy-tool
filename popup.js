$(document).ready(function () {
  $('#sendmessageid').on('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          message: 'clear',
        },
        function (response) {
          console.log(response.msg);
        }
      );
    });
  });
});
