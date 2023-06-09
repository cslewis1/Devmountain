console.log("hello");
let baseURL = "http://localhost:4004";
const displaySection = document.querySelector("#display-section");
const form = document.querySelector('#form')
const nameInput = document.querySelector('#song-name')
const artistInput = document.querySelector('#artist-name')
const categories = document.querySelector('#categories')

const getAllSongs = () => {
  console.log("I ran");

  axios.get(`${baseURL}/api/songs`).then((res) => {
      console.log(res.data);
      createSongDisplay()
  });
};

const createSongCard = (obj) => {
    let card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <h2>${obj.name}</h4>
    <h4>${obj.singer}</h6>
    <ul>
        <li>${obj.category[0]}</li>
        <li>${obj.category[1]}</li>
        <li>${obj.category[2]}</li>
    </ul>
    <br>
    `
    displaySection.appendChild(card)
}

const createSongDisplay = (arr) => {
    displaySection.innerHTML = ``
  arr.map((song) => {
    return createSongCard(song);
  });
};

const formHandler = (e) => {
    e.preventDefault()
    //'pop, rock,grunge' = ['pop', 'rock', 'grunge']
    
    let newCat = categories.split(',')
    console.log(newCat)

    const body = {
        name: 'nameInput.value',
        singer: '',
        category: []
    }
    axios.post(`${baseURL}/api/song`, body)
    .then(res => createSongDisplay(res.data)).catch(err => console.log(err))
}

form.addEventListener('submit', formHandler)


