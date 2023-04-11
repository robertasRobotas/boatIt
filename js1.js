const shipsWrapper = document.getElementById("ships-wrapper");

const shipOptionCreation = (ship) => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  const image = document.createElement("img");
  image.setAttribute("src", ship.photo_url);

  const titleWrapper = document.createElement("div");
  titleWrapper.setAttribute("class", "title-wrapper");

  const title = document.createElement("span");
  title.setAttribute("class", "title");

  const price = document.createElement("span");

  const maxPersons = document.createElement("div");

  const link = document.createElement("a");
  link.setAttribute("class", "ship-link");
  link.href = "./ship.html";

  link.addEventListener("click", () => {
    localStorage.setItem("id", ship.id);
  });

  maxPersons.innerHTML = `max: ${ship.max_persons} persons`;
  maxPersons.setAttribute("class", "max-persons");

  title.innerHTML = ship.name;
  price.innerHTML = `${ship.price} €`;

  titleWrapper.append(title);
  titleWrapper.append(price);

  wrapper.append(image);
  wrapper.append(titleWrapper);
  wrapper.append(maxPersons);

  link.append(wrapper);

  shipsWrapper.append(link);
};

fetch("https://642d8f99bf8cbecdb4099bf5.mockapi.io/ship")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data
      .sort((a, b) => Number(a.price) - Number(b.price))
      .forEach((ship) => {
        shipOptionCreation(ship);
      });
  });
