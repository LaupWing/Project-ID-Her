<template>
    <div class="vraag3 flexCenter">
        <Popup
            v-if="popupShow"
            v-bind:popupProperties='popupProperties'
        ></Popup>
        <div class="tekst">
            <h2>In welk jaar heeft de politie voor het eerst beleid gemaakt dat etnische profileren tegen gaat</h2>
        </div>
        <img src="http://www.shopotticatre.it/pimages/Work-in-progress-big-527-814.png" alt="">
        <buttons
            v-bind:pageChoices='pageChoices'
            v-bind:keuzeGemaakt='keuzeGemaakt'
            v-on:sendInfo ='sendInfo'
    	/>
    </div>
</template>
<script>
import Popup from '../InputComponents/Popup.vue'
import Buttons from '../InputComponents/Buttons.vue'
export default { 
    name: 'vraag3',
    components:{
        Buttons,
        Popup
    },
    data(){
        return{
            keuzeGemaakt: false,
            pageChoices:{
                values: ['1993', '2002', '2017'],
                btnClass: 'button1',
                next: '/vraag4',
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
            if(event.target.textContent.trim() == '2017'){
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
            this.$emit('userInput', 'Vraag3', this.antwoord)
        }
    },
    created(){
        document.querySelector("body").style.background = '#023274'
    }
    
}
</script>
<style scoped>

</style>

