<template>
    <div class="vraag3 flexCenter">
        <Popup
            v-if="popupShow"
            v-bind:popupProperties='popupProperties'
        ></Popup>
        <div class="tekst">
            <h2>De overheid meet jaarlijks de tevredenheid over de politie. Hoeveel procent van de Nederlandse bevolking is tevreden over het optreden van de politie in de buurt?</h2>
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
    name: 'vraag4',
    components:{
        Buttons,
        Popup
    },
    data(){
        return{
            keuzeGemaakt: false,
            pageChoices:{
                values: ['27%', '56%', '73%'],
                btnClass: 'button1',
                next: '/veilig',
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
            if(event.target.textContent.trim() == '27%'){
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
            this.$emit('userInput', 'Vraag4', this.antwoord)
        }
    },
    created(){
        document.querySelector("body").style.background = '#38a3d1'
    }
    
}
</script>
<style scoped>

</style>

