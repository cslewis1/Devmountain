console.log("connected");

const getAllBtn = document.querySelector("#all");
const charBtns = document.querySelectorAll(".char-btns");
const ageForm = document.querySelector("#age-form");
const ageInput = document.querySelector("#age-input");
const createForm = document.querySelector("#create-form");
const newFirstInput = document.querySelector("#first");
const newLastInput = document.querySelector("#last");
const newGenderDropDown = document.querySelector("select");
const newAgeInput = document.querySelector("#age");
const newLikesText = document.querySelector("textarea");
const charContainer = document.querySelector("section");

const baseURL = `https://localhost:4000`;

function createCharacterCard(char) {
  let charCard = document.createElement("div");
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`;

  charContainer.appendChild(charCard);
}

function clearCharacters() {
  charContainer.innerHTML = ``;
}

const getAllChars = () => {
  axios
    .get(`${baseURL}/characters`)
    .then((res) => {
      console.log(res.data);
      res.data.map((char) => createCharacterCard(char));
    })
    .catch((err) => console.log(err));
};

const getSingleChar = (event) => {
  console.log(event.target);
  axios
    .get(`${baseURL}/character/${event.target.id}`)
    .then((res) => {
      console.log(res);
      createCharacterCard(res.data);
    })
    .catch((err) => console.log(err));
};

const getOldChars = (event) => {
  event.preventDefault();

  axios
    .get(`${baseURL}/character?age=${ageInput.value}`)
    .then((res) => {
      console.log(res.data);
      clearCharacters();
      res.data.map((char) => createCharacterCard(char));
    })
    .catch((err) => console.log(err));
};

const addNewChar = (event) => {
  event.preventDefault();
  const body = {
    firstName: newFirstInput.value,
    lastName: newLastInput.value,
    gender: newGenderDropDownvalue,
    age: newAgeInput.value,
    likes: newLikesText.value,
  };
  axios
    .post(`${baseURL}/character`, body)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

getAllBtn.addEventListener("click", getAllChars);

for (i = 0; i < charBtns.length; i++) {
  charBtns[i].addEventListener("click", getSingleChar);
}

ageForm.addEventListener("submit", getOldChars);
createForm.addEventListener("submit", addNewChar);
