const renderGifts = async () => {
  const response = await fetch("/gifts");
  const data = await response.json();
  const mainContent = document.getElementById("main-content");
  //   console.log("all gifts", data);

  if (data) {
    data.map((gift) => {
      //   console.log("gift", gift);
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");
      topContainer.style.backgroundImage = `url(${gift.image})`;

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      const giftName = document.createElement("h3");
      giftName.textContent = gift.name;
      bottomContainer.appendChild(giftName);

      const pricePoint = document.createElement("p");
      pricePoint.textContent = "Price: " + gift.pricePoint;
      bottomContainer.appendChild(pricePoint);

      const giftAudience = document.createElement("p");
      giftAudience.textContent = `Greate For: ${gift.audience}`;
      bottomContainer.appendChild(giftAudience);

      const readMoreLink = document.createElement("a");
      readMoreLink.textContent = "Read More";
      readMoreLink.href = `/gifts/${gift.id}`;
      bottomContainer.appendChild(readMoreLink);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);
      mainContent.appendChild(card);
    });
  } else {
    const errorMessage = document.createElement("h2");
    errorMessage.textContent = "No Gifts Available :( ";
    mainContent.appendChild(errorMessage);
  }
};

const requestedURL = parseInt(window.location.href.split("/").pop());
if (requestedURL) {
  window.location.href = "../404.html";
} else {
  renderGifts();
}
