// Cadastro dos pokemons

const fields = document.querySelectorAll('[required]')

console.log(fields)

function customValidation(event) {
  const field = event.target

  // verificar se tem erro
  function verifyErros() {
    let acheiErro = false

    for (error in field.validity) {
    }
    return acheiErro
  }
  if (field.validity)
    // trocar mensagem de required
    field.setCustomValidity('Esse campo é obrigatório')
}

for (field of fields) {
  field.addEventListener('invalid', customValidation)
}

dc('form').addEventListener('submid', event => {
  console.log('Enviar o formulario')

  event.preventDefault()
})
