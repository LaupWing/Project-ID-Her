<template>
    <div class="vraag2 flexCenter">
        <Popup
            v-if="popupShow"
            v-bind:popupProperties='popupProperties'
        ></Popup>
        <div class="tekst">
            <h2>Hoeveel procent van de jongeren met een Turkse, Marrokaanse, Surinaamse en Antiliaanse achtergrond wil zeker niet of waarschijnlijk niet bij de politie werken?</h2>
        </div>
        <buttons 
            class="buttons"
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
                values: ['21%', '29%', '83%'],
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
            antwoord: ''
        }
    },
    methods:{
        showPopup(){
            this.antwoord = event.target.textContent.trim()
            if(event.target.textContent.trim() == '83%'){
                this.popupProperties.antwoord = "Dat klopt!"
            }else{
                this.popupProperties.antwoord = "Helaas!"
            }
            this.popupShow = true;
        },
        gekozen(){
            this.popupShow = false
            this.keuzeGemaakt = true
        },
        sendInfo(){
            console.log("sending info")
            this.$emit('userInput', 'Vraag2', this.antwoord)
        }
    },
    created(){
        
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
</style>

