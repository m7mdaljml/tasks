const {createApp} = Vue
createApp({
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
            ]
        }
    },
    methods:{
        
    },
    computed : {
        
    }
}).mount('#main')