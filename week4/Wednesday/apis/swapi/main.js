let residentsBtn = document.querySelector("button");

let buttonClicked = (event) => {
  event.preventDefault();
  console.log("Button clicked");

  axios
    .get(`https://swapi.dev/api/planets/2/`)
    .then((res) => {
      let residentsArr = res.data.residents;
      residentsArr.forEach((el) => {
        axios.get(el).then((res) => {
          let residentHeader = document.createElement("h2");
          residentHeader.innerText = res.data.name;
          document.body.appendChild(residentHeader);
        });
      });
    })
    .catch((err) => console.log(err));
};

residentsBtn.addEventListener("click", buttonClicked);
