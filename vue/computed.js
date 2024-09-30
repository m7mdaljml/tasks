const {createApp} = Vue
createApp({
    data(){
        return{
            numberOne : 10,
            numberTwo : 20
        }
    },
    methods:{
        // in methods , every function executed , all functions will excuted with it
        //numberOneX2(){
        //    return this.numberOne * 2
        //},
        //numberTwoX4(){
        //    return this.numberTwo * 4
        //}
    },
    computed : {
        numberOneX2(){
            return this.numberOne * 2
        },
        numberTwoX4(){
            return this.numberTwo * 4
        }
    }
}).mount('#main')