/*
Eu ainda não tenho muita habilidade com JS, tenho um pouco de prática com alguns projetos
que eu completei no FrontEnd Mentor, mas em todos esses projetos eu só me preocupei em fazer o
JS funcionar, sem me preoucupar se eu estava usando os melhores métodos.
*/

/*
Como eu ainda não sei quais os métodos mais comuns de trabalhar com JS vou me basear bastante na estrutura que o professor utiliziou com o projeto da TO DO LIST para fazer o JS desse site.
*/

/*
Nessa Modificação fiz umas alterações para diminuir a repetição de códigos e finalmente consegui fazer o botão de mais produtos funcionar de um jeito que me deixa feliz, eu quebrei minha cabeça tentando e errando até chegar a essa conclusão.   
 */

const Main = {

  init: function() {
    this.cacheSelectors()
    this.bindEvents()
    this.fetchRequest()
  },

  cacheSelectors: function() {
    this.$form1 = document.forms[0]
    this.$form2 = document.forms[1]
    this.$product = document.querySelectorAll('.products')
  },

  bindEvents: function() {
    this.$form1.onsubmit = this.Events.inputCheck
    this.$form2.onsubmit = this.Events.inputCheck2
  },

  fetchRequest : function() {
    fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
    .then(fetchRequests.getJson)
    .then(fetchRequests.createProductWrapper)
    .then(fetchRequests.moreProducts)
    .catch()
  },

  Events : {

    inputCheck : function(e) {
      e.preventDefault()
      
      const form1 = document.forms[0]
      const genderInput1 = document.querySelector('#male').checked
      const genderInput2 = document.querySelector('#female').checked

      campChecks.nameInputCheck(0)
      campChecks.emailInputCheck(0)
      campChecks.cpfInputCheck(0)

      if (campChecks.nameInputCheck(0) == true && campChecks.emailInputCheck(0) == true && campChecks.cpfInputCheck(0) == true){

        if (genderInput1 == true || genderInput2 == true) {
          form1.innerHTML= 
          `
          <div class = "sentData">
            <alert>
            Seus dados foram enviados com sucesso!
            <alert>
          <div>
          `
        }  
      }
    },

    inputCheck2 : function(e) {
      e.preventDefault()

      const form2 = document.forms[1]      

      campChecks.nameInputCheck(1)
      campChecks.emailInputCheck(1)

      if (campChecks.nameInputCheck(1) == true && campChecks.emailInputCheck(1) == true){
        form2.innerHTML= 
          `
          <div class = "sentData">
            <alert>
            Seus dados foram enviados com sucesso!
            <alert>
          <div>
         `
      }
    }
  }
}

const campChecks = {

  nameInputCheck: function(x) {

    const nameInput = document.forms[x].name
        
    function stringContainsNumber(_string) {
      return /\d/.test(_string);
    }
  
    let containnumber = stringContainsNumber(nameInput.value)? true:false
    
    if (nameInput.value == '' || containnumber == true){
      nameInput.classList.add('inputError')
      return false
    }
    nameInput.classList.remove('inputError')
    return true
  },

  emailInputCheck: function(x) {

    const form = document.forms[x]
    const emailInput = form.email

    {
      if (emailInput.value == '' || emailInput.value.includes('@') == false || emailInput.value.includes('.com') == false)  {

        emailInput.classList.add('inputError')
        return false
      }

      emailInput.classList.remove('inputError')
      return true
    }
  },

  cpfInputCheck: function (x) {

    const cpfInput = document.forms[x].cpf
        
    const isnum = /^\d+$/.test(cpfInput.value)
    
    if (cpfInput.value == '' || isnum == false)  {

      cpfInput.classList.add('inputError')
      return false
    }
    cpfInput.classList.remove('inputError')
    return true
  }
}

const fetchRequests = {

  getJson : function(response){
    return response.json()
  },

  createProductWrapper : function(dados){
      
    let productDetails = dados.products
    let productWrapper = document.querySelector('.productWrapper')
    
    for (let count = 0; count <= 3; count ++){
      productWrapper.innerHTML += 
      `
        <div class="product">
        <img src="https:${productDetails[count].image}" alt="product Image">   
          <div class="productInfo">
            <h3>${productDetails[count].name}</h3>
            <p>
            ${productDetails[count].description}
            </p>
            <span>De: R$${productDetails[count].oldPrice},00</span>
            <span><b>Por: R$${productDetails[count].price},00</b></span>
            <span>ou ${productDetails[count].installments.count}x de R$${productDetails[count].installments.value}0</span>
            <a href="#" class="clickable-button">Comprar</a>
          </div>
        </div>
      `
    }

    for (let count = 4; count < 8; count ++){
      productWrapper.innerHTML += 
      `
        <div class="product mobileHide">
        <img src="https:${productDetails[count].image}" alt="product Image">   
          <div class="productInfo">
            <h3>${productDetails[count].name}</h3>
            <p>
            ${productDetails[count].description}
            </p>
            <span>De: R$${productDetails[count].oldPrice},00</span>
            <span><b>Por: R$${productDetails[count].price},00</b></span>
            <span>ou ${productDetails[count].installments.count}x de R$${productDetails[count].installments.value}0</span>
            <a href="#" class="clickable-button">Comprar</a>
          </div>
        </div>
      `
    }

    return dados.nextPage
  },

  moreProducts: function(dados) {
    const moreProductsButton = document.querySelector('.moreProductsButton')

    moreProductsButton.onclick = function(e) {
      e.preventDefault()

      fetch(`https://${dados}`)
      .then(fetchRequests.getJson)
      .then(fetchRequests.createProductWrapper)
      .then(fetchRequests.moreProducts)
      .catch()
    }
  }
}

Main.init()