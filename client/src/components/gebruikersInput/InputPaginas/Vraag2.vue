<template>
    <div class="vraag2 flexCenter">
        <Popup
            v-if="popupShow"
            v-bind:popupProperties='popupProperties'
        ></Popup>
        <div class="tekst">
            <h2>Hoeveel procent van de jongeren met een Turkse, Marrokaanse, Surinaamse en Antiliaanse achtergrond wil zeker niet of waarschijnlijk niet bij de politie werken?</h2>
        </div>
        <div class="meter-container">
            <div 
                class="meter-user"
                :style="{height: hoeveel+'%'}"
            ></div>
            <div class="meter-resultaat"></div>
        </div>
        <div class="buttons">
            <button @click="plus" class="button2">+</button>
            <h2
                v-if="over === 0 "
            >
                {{hoeveel}} %
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
        >
        </buttons>
    </div>
</template>
<script>
import Buttons from '../InputComponents/Buttons.vue'
import Popup from '../InputComponents/Popup.vue'
export default { 
    name: 'Vraag2',
    components:{
        Buttons,
        Popup
    },
    data(){
        return{
            keuzeGemaakt: false,
            pageChoices:{
                values: ['Klaar'],
                btnClass: 'button1',
                next: '/politie-intro',
                eventFunction: this.showPopup,
                btnCls: 'button2'
            },
            popupShow: false,
            popupProperties:{
                antwoord: '',
                event: this.gekozen
            },
            antwoord: '',
            hoeveel: 0,
            over: 0
        }
    },
    methods:{
        showPopup(){
            // this.antwoord = event.target.textContent.trim()
            // if(event.target.textContent.trim() == '83%'){
            //     this.popupProperties.antwoord = "Dat klopt!"
            // }else{
            //     this.popupProperties.antwoord = "Helaas!"
            // }
            if(this.hoeveel === 83){
                this.popupProperties.antwoord = "Dat klopt!"
            }else{
                this.popupProperties.antwoord = "Helaas!"
            }
            this.popupShow = true;
        },
        gekozen(){
            this.popupShow = false
            this.$el.querySelector('.meter-resultaat').classList.add("antwoord")
            this.keuzeGemaakt = true
        },
        sendInfo(){
            this.$emit('userInput', 'Vraag2', this.antwoord)
        },
        plus(){
            if(this.hoeveel <100){
                this.hoeveel ++
            }
        },
        minus(){
            if(this.hoeveel >0){                    
                this.hoeveel -- 
            }
        },
    },
    created(){
        document.querySelector("body").style.background = '#023274'
    }
    
}
</script>
<style scoped>
img{
    animation: slideIn 3s forwards;
}
button{
    animation: slideIn 4s forwards;
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
.meter-container{
    margin-top: 60px;
    width: 150px;
    height: 400px;
    border: solid 3px white;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    z-index: 10;
}
.meter-user{
    margin: auto;
    left: 0;
    right:0;
    height: 100px;
    background: #bf975a;
    position: absolute;
    bottom: 0;
    z-index: 5;
}
.meter-resultaat{
    margin: auto;
    left: 0;
    right:0;
    height: 0%;
    background: greenyellow;
    position: absolute;
    bottom: 0;
    z-index: 2;
    transition: 5s;
}
.antwoord{
    height: 83%;
}
</style>

