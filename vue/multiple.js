const {createApp} = Vue
const app1 = createApp({
    data(){
        return{
            players :[
                {
                    id : 1,
                    img :"./images/Messi.jpg",
                    name : "Lionel Messi",
                    position : "The best in any position",
                    foot : "Left Foot"
                },
                {
                    id : 2,
                    img :"./images/suarez.jpg",
                    name : "Luis Suarez",
                    position : "Striker",
                    foot : "Right Foot"
                },
                {
                    id : 3,
                    img :"./images/neymar.jpg",
                    name : "Neymar JR",
                    position : "Left Wing",
                    foot : "Right Foot"
                }
            ],
            friends : [
                {id:1,name:"ahmad"},
                {id:2,name:"khaled"},
                {id:3,name:"mosab"},
            ],
            age : 23

        }
    },
    methods:{
        
    },
    computed : {
        
    }
}).mount('#players')

const app2 = createApp({
    data(){
        return{
            
            friends : [
                {id:1,name:"ahmad"},
                {id:2,name:"khaled"},
                {id:3,name:"mosab"},
            ]
        }
    },
    methods:{
        increaseAge(){
            app1.age++
        }
    },
    computed : {
        
    }
}).mount('#friends')