<template>
    <p class="calc-title">Calculater</p>
    <div class="container">
        <div class="result">
            <span><input v-auto-focus v-model="operation" type="text" name="" id="" /></span><br />
            {{ result }}
        </div>
        <div class="nums"><button @click="operation += '7'">7</button></div>
        <div class="nums"><button @click="operation += '8'">8</button></div>
        <div class="nums"><button @click="operation += '9'">9</button></div>
        <div class="AG">
            <button @click="(operation = ''), (result = ''), (currVal = '')">AG</button>
        </div>
        <div class="CE">
            <button @click="operation = operation.substring(0, operation.length - 1)">
                CE
            </button>
        </div>
        <div class="nums"><button @click="operation += '4'">4</button></div>
        <div class="nums"><button @click="operation += '5'">5</button></div>
        <div class="nums"><button @click="operation += '6'">6</button></div>
        <div class="mod" id="operator">
            <button @click="operation += '/'">/</button>
        </div>
        <div class="mul" id="operator">
            <button @click="operation += '*'">*</button>
        </div>
        <div class="nums"><button @click="operation += '1'">1</button></div>
        <div class="nums"><button @click="operation += '2'">2</button></div>
        <div class="nums"><button @click="operation += '3'">3</button></div>
        <div class="plus" id="operator">
            <button @click="operation += '+'">+</button>
        </div>
        <div @click="Result()" class="equal"><button>=</button></div>
        <div class="zero"><button @click="operation += '0'">0</button></div>
        <div class="dot"><button @click="operation += '.'">.</button></div>
        <div class="min" id="operator">
            <button @click="operation += '-'">-</button>
        </div>
    </div>
     
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from 'vue-router';
const operation = ref<string>("")
const result = ref<number | string>()
    const vAutoFocus = {
    mounted: (item:any) => {
        item.focus()
    }
}
const Result = (): void => {
    let NewOperation: string[] = operation.value.split(/(\+|\-|\*|\/)/)
    let currVal: number | string = Number(NewOperation[0])
    for (let i = 1; i < NewOperation.length; i += 2) {
        const operator: string = NewOperation[i]
        const nextNumber: number = Number(NewOperation[i + 1])
        if (operator === "+") {
            currVal += nextNumber
        }
        else if (operator === "-") {
            currVal -= nextNumber
        }
        else if (operator === "*") {
            currVal *= nextNumber
        }
        else if (operator === "/") {
            currVal /= nextNumber
        }
    }

    if(isNaN(currVal)){
         currVal = "Result is undefined"
    }
    else if(currVal == 1/0){
        currVal = "Can not devide by Zero"
    }

    result.value = currVal
    operation.value = ''

    //if(currVal.value == ''){
    //  result.value = eval(operation.value)
    //  currVal.value = result.value
    //  operation.value = ''
    //}
    //else{
    //  currVal.value+=operation.value
    //  result.value = eval(currVal.value)
    //  currVal.value = result.value
    //  operation.value = ''
    //}
}


</script>

<style>
.container {
    margin-top: 2%;
    display: grid;
    gap: 10px;
    padding: 10px;
    width: 350px;
    border: 3px solid black;
    padding: 25px;
    border-radius: 10% 90% 8% 92% / 88% 7% 93% 12%;
}

button,
input,
input:focus {
    background: none;
    border: none;
    outline: none;
    text-align: center;
}

.zero {
    background-color: lightblue;
    grid-column: 1 / spna 2;
}

.AG,
.CE {
    background-color: red;
}

.plus,
.mod,
.mul,
.dot,
.min {
    background-color: orange;
}

.equal {
    background-color: green;
    grid-column: 5;
    grid-row: 4 / span 5;
    height: 100px;
}

.nums {
    background-color: lightblue;
}

.container>div {
    border: 3px solid black;
    border-radius: 88% 12% 90% 10% / 10% 89% 11% 90%;
    text-align: center;
    font-size: x-large;
}

.result {
    height: 75px;
    background-color: lightgray;
    grid-column: 1 / span 5;
    font-size: small;
}

.calc-title {
    text-align: center;
    font-size: xx-large;
    font-weight: bold;
    font-style: italic;
    font-family: "Times New Roman", Times, serif;
}
</style>
