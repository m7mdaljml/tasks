const {createApp} = Vue
createApp({
    data(){
        return{
            name : "mohammad Aljamal",
            skills : ["C++","HTML","JS","CSS","BootStrap","Vue.js"],
            friends : [
                {id:1,name:"ahmad"},
                {id:2,name:"khaled"},
                {id:3,name:"mosab"},
            ]
        }
    },
    methods:{
        
    },
    computed : {
        
    }
}).mount('#main')