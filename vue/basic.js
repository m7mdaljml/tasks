const {createApp} = Vue
createApp({
    data(){
        return{
            name : "Mohammad",
            age : 23,
            link : "mohd.com",
            email:"",
            password:""
        }
    },
    methods:{
        sayHello(){
            return "Hello To Vue"
        },
        sayMyName : function(text,name){
            return  text + name ;
        },
        count(){
            this.age++;
        },
        keyUp(){
            console.log(this.name)
        },
        editName(){
           // this.name = document.getElementById('name').value
        },
        sendData(){
            const User = {
                name : this.name,
                email:this.email,
                password : this.password
            }
            console.log(User)
        }
    },
}).mount('#main')