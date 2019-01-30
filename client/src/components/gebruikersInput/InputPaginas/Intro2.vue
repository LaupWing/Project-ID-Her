<template>
    <div class="flexCenter">
        <div class="tekst2">
            <h2>Maar komt etnisch profileren ook voor in Nederland? Speel de quiz om erachter te komen wat de realiteit is, en wat anderen over dit onderwerp denken.</h2>
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
.buttons{
    bottom: 120px;
    left: 0;
    right: 0;
    margin: auto;
    position: fixed;
    transform: translate(0,100vh);
    animation: slideIn 3s forwards;
    animation-delay: 8s;
}
.tekst2{
    opacity: 0;
    animation: slide 5s forwards;
    animation-delay: 2s;
    width: 600px;
}
@keyframes slide {
    from{transform: translate(0,50px); opacity: 0;}
    to{transform: translate(0,0); opacity: 1;}
}
</style>