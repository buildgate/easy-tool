$(document).ready(function () {
  $('#clearToken').on('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          fn: 'clearToken',
        },
        function (response) {
          console.log(response);
        }
      );
    });
  });

  $('#csdn').on('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          fn: 'csdn',
        },
        function (response) {
          console.log(response.msg);
        }
      );
    });
  });
});
