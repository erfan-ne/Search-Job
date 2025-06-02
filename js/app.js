const searchBtn = document.querySelector("#search-btn")
const wordInput = document.querySelector("#inp-word")

const showResult = () => {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${}`)
}

searchBtn.addEventListener("click" , showResult)