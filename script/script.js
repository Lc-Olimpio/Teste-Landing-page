/*
Eu ainda não tenho muita habilidade com JS, tenho um pouco de prática com alguns projetos
que eu completei no FrontEnd Mentor, mas em todos esses projetos eu só me preocupei em fazer o
JS funcionar, sem me preoucupar se eu estava usando os melhores métodos.
*/

/*
Como eu ainda não sei quais os métodos mais comuns de trabalhar com JS vou me basear bastante na estrutura que o professor utiliziou com o projeto da TO DO LIST para fazer o JS desse site.
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
    .then(this.Events.getJson)
    .then(this.Events.createProductWrapper)
    .catch()
  },

  Events : {

    inputCheck : function(e) {
      e.preventDefault()

      const form1 = document.forms[0]
      const nameInput = form1.name
      const emailInput = form1.email
      const cpfInput= form1.cpf
      const genderInput1 = document.querySelector('#male').checked
      const genderInput2 = document.querySelector('#female').checked

      nameInputCheck()
      emailInputCheck()
      cpfInputCheck()


      if (nameInputCheck() == true && emailInputCheck() == true && cpfInputCheck() == true){

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

      function nameInputCheck() {
        
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
      }

      function emailInputCheck() {
        
        if (emailInput.value == '' || emailInput.value.includes('@') == false || emailInput.value.includes('.com') == false)  {

          emailInput.classList.add('inputError')
          return false
        }
        emailInput.classList.remove('inputError')
        return true
      }

      function cpfInputCheck() {
        
        const isnum = /^\d+$/.test(cpfInput.value)
        
        if (cpfInput.value == '' || isnum == false)  {

          cpfInput.classList.add('inputError')
          return false
        }
        cpfInput.classList.remove('inputError')
        return true
      }
    },

    inputCheck2 : function(e) {
      e.preventDefault()

      const form2 = document.forms[1]
      const nameInput = form2.name
      const emailInput = form2.email

      nameInputCheck()
      emailInputCheck()

      if (nameInputCheck() == true && emailInputCheck() == true){
        form2.innerHTML= 
          `
          <div class = "sentData">
            <alert>
            Seus dados foram enviados com sucesso!
            <alert>
          <div>
          `
      }  

      function nameInputCheck() {
        
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
      }

      function emailInputCheck() {
        
        if (emailInput.value == '' || emailInput.value.includes('@') == false || emailInput.value.includes('.com') == false)  {

          emailInput.classList.add('inputError')
          return false
        }
        emailInput.classList.remove('inputError')
        return true
      }
    },

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
          <img src="${productDetails[count].image}" alt="product Image">   
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

      for (let count = 0; count <= 3; count ++){
        productWrapper.innerHTML += 
        `
          <div class="product mobileHide">
          <img src="${productDetails[count].image}" alt="product Image">   
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
    }
  }
}

Main.init()