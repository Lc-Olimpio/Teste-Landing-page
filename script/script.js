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
      console.log('Ok')
    }

  }
}

Main.init()