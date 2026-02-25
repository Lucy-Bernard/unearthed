const renderGifts = async () => {
  const response = await fetch("/gifts");
  const data = await response.json();

  if (data) {
    data.map((gift) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");
    });
  }
};

const mainContent = document.getElementById("main-content");
