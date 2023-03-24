const notificationButton = document.getElementById("notification-button");

const debounce = (func, delay = 300) => {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
};

const processChange = debounce(() => randomNotification(), 1000);

if (notificationButton) {
  notificationButton.addEventListener("click", () => {
    Notification.requestPermission().then((result) => {
      if (result === "granted") {
        processChange();
      }
    });
  });
}

const getNewQuote = async () => {
  var url = "https://type.fit/api/quotes";
  const response = await fetch(url);
  const allQuotes = await response.json();
  const indx = Math.floor(Math.random() * allQuotes.length);
  return allQuotes[indx];
};

async function randomNotification() {
  const quote = await getNewQuote();
  const notifTitle = "This is a Quote";
  const notifBody = quote
    ? `${quote.text} - ${quote.author}`
    : "There was an error getting the quote.";
  const options = {
    body: notifBody,
  };
  new Notification(notifTitle, options); // doesn't work on all browsers or devices
}
