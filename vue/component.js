const {createApp} = Vue

const my_component = {
    template : `<h2>My First Component</h2>
    <h2>My name is {{name}}</h2>
    <h2>My age is {{age}}</h2>
    `,
    data(){
        return{
            name:"mohammad aljamal",
            age : 23
        }
    }
}
const app1 = createApp({
    data(){
        return{
           
        }
    },
    methods:{
        
    },
    computed : {
        
    },
    components:{
        my_component
    }
}).mount('#main')