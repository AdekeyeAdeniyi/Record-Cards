

var myDatabase = [

    {name: "emmmanuel", email: "adekeye@gmail.com", age: "30"},
    {name: "israel", email: "israel@gmail.com", age: "35"}
];

(function Avatars(db){

    var init = function(){

        generateList();
        grabUser();
    }
    
    var generateList= ()=> {
    var parent = document.querySelector("#parent_avatar");
    var template ="";

    for (var i = 0; i < db.length; i++) {
        
    template+='<div class="col-sm-4">';
            template+='<div class="card">';
               template+=' <div class="card-delete" data-card='+ [i] +'>X</div>'; 
                    template+='<div class="card-block">';
                        template+='<h3 class="card-title">'+ db[i].name +'</h3>';
                        template+='<p class="card-text">';
                            template+='<strong>Email</strong>: <span>'+ db[i].email +'</span>';
                        template+='</p>';
                        template+='<p class="card-text">';
                            template+='<strong>Age</strong>: <span>'+ db[i].age +'</span>';
                        template+='</p>';
                    template+='</div>';
                template+='</div>';
            template+='</div>';
        template+='</div>';
    }
    parent.innerHTML = " ";
    parent.insertAdjacentHTML("afterbegin", template);
    deleteCard();
}

    var grabUser = ()=>{

        function enterUsers() {

            var name = document.querySelector("#user_name").value;
            var email = document.querySelector("#user_email").value;
            var age = document.querySelector("#user_age").value;

            var details = [name, email, age];

            if(validator(details)){

                document.querySelector("#myForm").reset();

                 myDatabase.push({

                    name: name,
                    email: email,
                    age: age,
                 })

                 generateList();
            } else {

                var error = document.querySelector("#error");
                    error.style.display = "block";

                    setTimeout(function(){
                        error.style.display = "none";
                    }, 2000);
            }

        }

            document.querySelector('#myForm').addEventListener('submit', function(e){
            e.preventDefault();
            enterUsers();
        });

    }

    var validator = details =>{
        for (var i = 0; i < details.length; i++) {
         
            if(details[i] == ""){

            return false;
            }     
            
        }

        return true;
    }

    var deleteCard = ()=>{
        let buttons = document.querySelectorAll('.card-delete');

        function deleteThis(details) {
            let index = parseInt(details.getAttribute('data-card'));
            myDatabase.splice(index, 1);
            generateList();
        }

        for (var i = 0; i < buttons.length; i++) {

            buttons[i].addEventListener('click', function(){
                deleteThis(this);
                // console.log(buttons[i]);
            });
        }
    }

    init();

}(myDatabase));


