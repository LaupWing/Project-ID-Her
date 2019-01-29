<template>
    <div class="flexCenter">
        <div class="tekst">
            <h2>Voordat de quiz begint vragen we je eerst wat informatie over jezelf in te vullen, zodat je je eigen mening en kennis over de politie kan delen met andere mensen!</h2>
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
                next: '/geslacht',
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