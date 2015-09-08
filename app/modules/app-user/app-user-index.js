(function() {
  Polymer({
    is: 'app-user-index',
    propierties: {
      name: String,
      lastname: String
    },

    ready: function(){      
      this.users = [
        { name: "Rob", lastname: "Tompson" },
        { name: "Maria", lastname: "James" },
        { name: "Carl", lastname: "Stevens" },
        { name: "Ken", lastname: "Robinson" }
      ]
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