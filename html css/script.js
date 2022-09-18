let modeloQt = 1
let modeloKey = 0
let cart = []
const dc = el => document.querySelector(el)
const d = el => document.querySelectorAll(el)

// LISTAGEM DOS POKEMONS
pokemonJson.map((item, index) => {
  let pokemonItem = dc('.models .pokemon-item').cloneNode(true)

  pokemonItem.setAttribute('data-key', index)

  pokemonItem.querySelector('.pokemon-item--img img').src = item.img
  pokemonItem.querySelector(
    '.pokemon-item--price'
  ).innerHTML = `R$ ${item.price.toFixed(2)}`
  pokemonItem.querySelector('.pokemon-item--name').innerHTML = item.name
  pokemonItem.querySelector('.pokemon-item--desc').innerHTML = item.description
  pokemonItem.querySelector('a').addEventListener('click', e => {
    e.preventDefault()
    let key = e.target.closest('.pokemon-item').getAttribute('data-key')
    modeloQt = 1
    modeloKey = key

    dc('.pokemonBig img').src = pokemonJson[key].img
    dc('.pokemonInfo h1').innerHTML = pokemonJson[key].name
    dc('.pokemonInfo--desc').innerHTML = pokemonJson[key].description
    dc('.pokemonInfo--actualPrice').innerHTML = `R$ ${pokemonJson[
      key
    ].price.toFixed(2)}`
    dc('.pokemonInfo--size.selected').classList.remove('selected')
    d('.pokemonInfo--size').forEach((size, sizeIndex) => {
      if (sizeIndex == 2) {
        size.classList.add('selected')
      }
      size.querySelector('span').innerHTML = pokemonJson[key].sizes[sizeIndex]
    })

    dc('.pokemonInfo--qt').innerHTML = modeloQt
    dc('.pokemonWindowArea').style.opacity = 0

    dc('.pokemonWindowArea').style.display = 'flex'
    setTimeout(() => {
      dc('.pokemonWindowArea').style.opacity = 1
    }, 200)
  })

  dc('.pokemon-area').append(pokemonItem)
})
// Eventos do Modelo
function closeModelo() {
  dc('.pokemonWindowArea').style.opacity = 0
  setTimeout(() => {
    dc('.pokemonWindowArea').style.display = 'none'
  }, 500)
}

d('.pokemonInfo--cancelButton, .pokemonInfo--cancelMobileButton').forEach(
  item => {
    item.addEventListener('click', closeModelo)
  }
)

dc('.pokemonInfo--qtmenos').addEventListener('click', () => {
  if (modeloQt > 1) {
    modeloQt--
    dc('.pokemonInfo--qt').innerHTML = modeloQt
  }
})
dc('.pokemonInfo--qtmais').addEventListener('click', () => {
  modeloQt++
  dc('.pokemonInfo--qt').innerHTML = modeloQt
})

// PRECISO ARRUMAR O SELECIONAR
d('.pokemonInfo--size').forEach((size, sizeIndex) => {
  size.addEventListener('click', el => {
    d('.pokemonInfo--size.selected').classList.remove('selected')
    size.classList.add('selected')
  })
})

dc('.pokemonInfo--addButton').addEventListener('click', () => {
  // lista pokemon , tamanho e quantidade
  let size = parseInt(
    dc('.pokemonInfo--size.selected').getAttribute('data-key')
  )

  cart.push({
    id: pokemonJson[modeloKey].id,
    size,
    qt: modeloQt
  })
  updateCart()
  closeModelo()
})

function updateCart() {
  if (cart.length > 0) {
    d('aside').classList.add('show')
  } else {
    d('aside').classList.remove('show')
  }
}
