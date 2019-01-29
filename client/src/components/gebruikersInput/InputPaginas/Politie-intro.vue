<template>
    <div class="flexCenter">
        <div class="tekst">
            <h2>Kan toch niet waar zijn dat etnische profileren? Nou... hieronder zie je een filmpje van een agent die door zijn eigen collega werd staande gehouden.</h2>
        </div>
        <video width="600" controls>
            <source src="../../../assets/politie-intro/agentfilmpje.mp4" type="video/mp4">
        </video>
        <buttons 
            class="buttons flexCenter"
            v-bind:pageChoices='pageChoices'
            v-bind:keuzeGemaakt='keuzeGemaakt'
        >
        </buttons>
    </div>
</template>
<script>
import Buttons from '../InputComponents/Buttons.vue'
export default {
    name:'intro1',
    components:{
        Buttons
    },
    data(){
        return{
            keuzeGemaakt: true,
            pageChoices:{
                values: [],
                btnClass: 'button1',
                next: '/vraag3',
                eventFunction: '',
                btnCls: 'button2'
            }
        }
    }
}
</script>
<style scoped>
.tekst{
    max-width: 500px;
}
.buttons{
    margin-top: 50px;
}
</style>