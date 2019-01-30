<template>
    <div class="vraag1 flexCenter">
        <div class="tekst">
            <h2>Marokkaans-Nederlandse verdachten hebben een grotere kans om in de cel gezet te worden dan autochtone verdachten. Hoeveel groter is die kans?</h2>
        </div>
        <Popup
            v-if="popupShow"
            v-bind:popupProperties='popupProperties'
        ></Popup>
        <div class="imgContainer">
            <img 
                v-bind:src="imgUrl()" alt=""
                v-for="(h, index) in hoeveel"
                v-bind:key="index"
            >
            <img 
                src="../../../assets/Avatar/onbekend.png"
                v-for="(h, index) in over"
                v-bind:key="'A'+index"
            >
        </div>
        <div class="buttons">
            <button @click="plus" class="button2">+</button>
            <h2
                v-if="over === 0 "
            >
                {{hoeveel}}
            </h2>
            <h2
                v-else
            >
                {{over}}
            </h2>
            <button @click="minus">-</button>
        </div>
        <buttons
            v-bind:pageChoices='pageChoices'
            v-bind:keuzeGemaakt='keuzeGemaakt'
            v-on:sendInfo ='sendInfo' 
        />
    </div>
</template>
<script>
import Buttons from '../InputComponents/Buttons.vue'
import Popup from '../InputComponents/Popup.vue'
export default { 
    name: 'vraag1',
    components:{
        Buttons,
        Popup
    },
    props:['userInfo'],
    data(){
        return{
            keuzeGemaakt: false,
            pageChoices:{
                values: ['Klaar'],
                btnClass: 'button1',
                next: '/vraag2',
                eventFunction: this.showPopup,
                btnCls: 'button2'
            },
            hoeveel:1,
            over: 0,
            popupShow: false,
            popupProperties:{
                antwoord: '',
                event: this.gekozen
            }
        }
    },
    methods:{
        nextInput(){
            this.$el.querySelector('.tekst').classList.add("slidingOutTop")
            this.$el.querySelector('img').classList.add("slidingOutTop")
            this.$el.querySelector('button').classList.add("slidingOutTop")
            this.$emit('nextInput')
        },
        plus(){
            if(this.hoeveel <20){
                this.hoeveel ++
            }
        },
        minus(){
            if(this.hoeveel >0){                    
                this.hoeveel -- 
            }
        },
        imgUrl(){
            return require(`../../../assets/Avatar/${this.userInfo.AvatarPath}`)
        },
        showPopup(){
            if(this.hoeveel!== 17){
                this.popupProperties.antwoord = "Fout! Het juiste antwoord is 17! Marrokaans-Nederlandse burgers hebben 17 keer grotere kans om in de cel te komen vergeleken met Autochtone Nederlanderse burgers"
            }else{
                this.popupProperties.antwoord = "Goed! Marrokaans-Nederlandse burgers hebben 17 keer grotere kans om in de cel te komen vergeleken met Autochtone Nederlanderse burgers"
            }
            this.popupShow = true;
        },  
        gekozen(){
            this.popupShow = false
            const aantal = 17 - this.hoeveel;
            for (let index = 0; index < aantal; index++) {
                setTimeout(()=>{
                    this.over++
                },500*index)
            }
            this.keuzeGemaakt = true
        },
        sendInfo(){
            console.log("sending info")
            this.$emit('userInput', 'Vraag1', this.hoeveel)
        }
        
    },
    created(){
        document.querySelector("body").style.background = '#023274'
        console.log(this.userInfo)
    },
  
    
}
</script>
<style scoped>
img{
    width: 60px;
    margin: 10px;
}
.imgContainer{
    width: 400px;
    height: 450px;
    margin-top: 70px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    /* align-content: flex-start; */
}
.buttons{
    animation: slideIn 4s forwards;
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
}
.buttons > button{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-weight: 500;
}
.buttons > button:hover{
    background: #bf975a;
    color: #023274;
}
</style>

