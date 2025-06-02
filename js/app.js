const searchBtn = document.querySelector("#search-btn")
const wordInput = document.querySelector("#inp-word")
const resultElem = document.querySelector("#result")
const sound = document.querySelector("#sound")

const showResult = () => {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`)
    .then(response => response.json())
    .then(data =>{
      const wordDetails = data[0]
      resultElem.innerHTML = ""
      
      resultElem.innerHTML =
        `
        <div class="word">
          <h3>${wordDetails.word}</h3>
          <button onclick="playSound()">
            <i class="fas fa-volume-up"></i>
          </button>
        </div>
        <div class="details">
          <p>${wordDetails.meanings[0].partOfSpeech}</p>
          <p>${wordDetails.phonetic}</p>
        </div>
        <p class="word-meaning">${wordDetails.meanings[0].definitions[0].definition}</p>
        `

      if (wordDetails.phonetics[0].audio){
        sound.setAttribute("src" , `${wordDetails.phonetics[0].audio}`)
      } else if (wordDetails.phonetics[1].audio){
        sound.setAttribute("src" , `${wordDetails.phonetics[1].audio}`)
      } else if (wordDetails.phonetics[2].audio){
        sound.setAttribute("src" , `${wordDetails.phonetics[2].audio}`)
      }
    })
    // .catch(err => new Error("the word is not found"));
  }

searchBtn.addEventListener("click" , showResult)
function playSound() {
  sound.play()
}