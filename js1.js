const shipsWrapper = document.getElementById("ship-wrapper");

const shipOptionCreation = (ship) => {
  console.log(ship);
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "ship");
  const image = document.createElement("img");
  image.setAttribute("src", ship.photo_url);

  const titleWrapper = document.createElement("div");
  titleWrapper.setAttribute("class", "title-wrapper");

  const title = document.createElement("span");
  title.setAttribute("class", "title");

  const price = document.createElement("span");

  const maxPersons = document.createElement("div");

  maxPersons.innerHTML = `max: ${ship.max_persons} persons`;
  maxPersons.setAttribute("class", "max-persons");

  title.innerHTML = ship.name;
  price.innerHTML = ship.price;

  titleWrapper.append(title);
  titleWrapper.append(price);

  wrapper.append(image);
  wrapper.append(titleWrapper);
  wrapper.append(maxPersons);

  shipsWrapper.append(wrapper);
};

fetch("https://642d8f99bf8cbecdb4099bf5.mockapi.io/ship")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((ship) => {
      shipOptionCreation(ship);
    });
  });
