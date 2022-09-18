let pokemonJson = [
  {
    id: 1,
    name: 'Pikachu',
    img: 'images/pokemon.png',
    price: 700.2,
    sizes: ['4kg', '8kg', '10kg'],
    description:
      'Pikachu que pode gerar eletricidade poderosa tem bolsas nas bochechas que são extra macias e super elásticas.'
  },
  {
    id: 2,
    name: 'Charmander',
    img: 'images/pokemon2.png',
    price: 40.0,
    sizes: ['7kg', '22kg', '40kg'],
    description:
      'Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.'
  },
  {
    id: 3,
    name: 'Bulbasaur',
    img: 'images/pokemon3.png',
    price: 15.45,
    sizes: ['5kg', '7kg', '10kg'],
    description:
      'Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.'
  },
  {
    id: 4,
    name: 'Squirtle',
    img: 'images/pokemon4.png',
    price: 60.62,
    sizes: ['400g', '3kg', '8kg'],
    description:
      'Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa.'
  },
  {
    id: 5,
    name: 'Caterpie',
    img: 'images/pokemon5.png',
    price: 12.0,
    sizes: ['320g', '530g', '860g'],
    description:
      'Para proteção, ele libera um cheiro horrível da antena em sua cabeça para afastar os inimigos.'
  },
  {
    id: 6,
    name: 'Vulpix',
    img: 'images/pokemon6.png',
    price: 399.99,
    sizes: ['3kg', '5kg', '10kg'],
    description:
      'Enquanto jovem, tem seis caudas lindas. Quando cresce, várias novas caudas brotam.'
  },
  {
    id: 7,
    name: 'Pidgey',
    img: 'images/pokemon7.png',
    price: 150.69,
    sizes: ['800g', '1kg', '5kg'],
    description:
      'Muito dócil. Se atacado, ele geralmente levanta areia para se proteger, em vez de revidar.'
  }
]

const pesquisa = pokemonJson.filter(function (pokemonJson) {
  return pokemonJson.id

  console.log(pesquisa)
})
