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
    console.log(this)
    this.cacheSelectors()
    this.bindEvents()
  },

  cacheSelectors: function() {
    this.$form1 = document.forms[0]
  },

  bindEvents: function() {
    this.$form1.onsubmit = this.Events.inputCheck
  },

  Events : {

    inputCheck : function(e) {
      e.preventDefault()

      let form1 = document.forms[0]
      let nameInput = form1.name
      let emailInput = form1.email
      let cpfInput= form1.cpf

      console.log(nameInput)
      console.log(emailInput)
      console.log(cpfInput)
      
      if (nameInput.value == ''){
        console.log(this)
        this.inputError() // Como seria se o this funcionasse como funciona no 'Main'

        /* Meu objetivo era fazer uma função separada para adicionar as classes de "erro" porém eu não sei como navegar até essa função aqui de baixo 'inputError' já que o 'this' não é o Events aqui.*/
      }
    },

    inputError : function() {
      // funcão que colocaria as clases de erros nos inputs.
    }

  }
}

Main.init()