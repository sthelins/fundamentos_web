/* acesso:
por tag -> getElementByTagName()
por id -> getElementeById()
por nome -> getElementByName()
por classe: getElementsByClassName() --elements
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {
  let txtNome = document.querySelector('#txtNome')
  if (nome.value.length < 3) {
    txtNome.innerHTML = 'Nome inválido'
    txtNome.style.color = 'red'
  } else {
    txtNome.innerHTML = 'Nome Válido'
    txtNome.style.color = 'green'
    let nomeOk = true
  }
}

function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail')

  if (email.value.indexOf('@') == -1 || email.value.indexOf('.')) {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
  } else {
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'
    let emailOk = true
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector('#txtAssunto')

  if (assunto.value.length >= 200) {
    txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 200 caracteres'
    txtAssunto.style.color = 'red'
    txtAssunto.style.display = 'block'
  } else {
    txtAssunto.style.display = 'none'
    let assuntoOk = true
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert('formulário enviado com sucesso')
  } else alert('Por favor, preencha o formulário corretamente antes de enviar.')
}

function mapaZoom() {
  mapa.style.width = '800px'
  mapa.style.height = '600px'
}

function mapaNormal() {
  mapa.style.width = '400px'
  mapa.style.height = '400px'
}
