const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert('dia já incluso')
    return
  }
  alert('Adicionado com sucesso')
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
  // salva dados no navegador local
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
// recebe os dados em 'data'

nlwSetup.setData(data)
nlwSetup.load()
// inicia a lib

// const data = {
//   run: ['01-23', '01-24', '01-25'],
//   water: ['01-23', '01-24', '01-25'],
//   food: ['01-24', '01-25'],
//   study: ['01-24', '01-25'],
//   gym: ['01-24', '01-25']

// formas de adicionar informações manualmente que não serão usadas pois a lib nlw fará esta função através de JS configurado previmente
// }
