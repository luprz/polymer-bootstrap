(function() {
  Polymer({
    is: 'app-user-index',
    propierties: {
      name: String,
      lastname: String,
      users: Array
    },

    ready: function(){      

    },
    
    clickBtn: function(event){  
      person = event.model.item;
      this.name = person.name;
      this.lastname = person.lastname;
    },

    clickBtnTwo: function(event){
      person = event.toElement.attributes;        
      this.name = person.name.value;
      this.lastname = person.lastname.value;
    }
  });
})();