<template>
    <div class="flexCenter">
        <div class="tekst">
            <h2>Maar zoiets gebeurt toch niet in Nederland? Kom achter de harde realiteit door middel van een quiz. Kom er ook achter wat andere mensen over de politie denken in Nederland.</h2>
        </div>
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
                next: '/intro3',
                eventFunction: '',
                btnCls: 'button1'
            }
        }
    }
}
</script>
<style scoped>
.tekst{
    max-width: 500px;
}
</style>