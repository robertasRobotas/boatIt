const shipId = localStorage.getItem("id");

const addElementsToScreen = (data) => {
  const shipPhoto = document.getElementById("photo");
  shipPhoto.style.backgroundImage = `url(${data.photo_url})`;
  console.log(data);

  const title = document.getElementById("ship-title");
  title.innerHTML = data.name;

  const description = document.getElementById("ship-description");
  description.innerHTML = data.description;

  const price = document.getElementById("ship-price");
  price.innerHTML = `${data.price}€ / day`;

  const max = document.getElementById("ship-max");
  max.innerHTML = `max: ${data.max_persons} persons`;

  const model = document.getElementById("ship-model");
  model.innerHTML = data.model;
};

fetch(`https://642d8f99bf8cbecdb4099bf5.mockapi.io/ship/${shipId}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    addElementsToScreen(data);
  });
