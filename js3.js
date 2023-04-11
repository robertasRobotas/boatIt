const button = document.getElementById("submit_button");

const fetchShips = (newShip) => {
  fetch(`https://642d8f99bf8cbecdb4099bf5.mockapi.io/ship`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newShip),
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const successMessage = document.getElementById("success_message");
      successMessage.innerHTML = "Shipp added";

      setTimeout(() => {
        window.location.replace("./index.html");
      }, 1000);
    });
};

button.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const max_persons = document.getElementById("max_persons").value;
  const model = document.getElementById("model").value;
  const price = document.getElementById("price").value;
  const photo_url = document.getElementById("photo_url").value;
  const description = document.getElementById("description").value;

  const newShip = {
    name: name,
    max_persons: max_persons,
    model: model,
    price: price,
    photo_url: photo_url,
    description: description,
  };

  fetchShips(newShip);
});
