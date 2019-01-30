<template>
    <div class="flexCenter">
        <div class="tekst">
            <h2>In Amerika worden mensen door de politie bevooroordeeld op grond van hun afkomst. Dit is ondertussen algemeen bekend</h2>
        </div>
        <div class="img-container">
            <img class="img1" src="../../../assets/intro/intro1/murderdeByPolice.jpg" alt="">
            <img class="img2" src="../../../assets/intro/intro1/police-brutality.jpg" alt="">
            <img class="img3" src="../../../assets/intro/intro1/racisme.jpg" alt="">
            <img class="img4" src="../../../assets/intro/intro1/racisme2.jpg" alt="">
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
                next: '/intro2',
                eventFunction: '',
                btnCls: 'button1'
            }
        }
    }
}
</script>
<style scoped>
img{
    opacity: 0;
    width: 250px;
}
.img-container{
    height: 300px;
}
.img1{
    animation: slide 2s forwards;
    animation-delay: 3s;
}
.img2{
    animation: slide 2s forwards;
    animation-delay: 5s;
}
.img3{
    animation: slide 2s forwards;
    animation-delay: 7s;
}

.img4{
    animation: slide 2s forwards;
    animation-delay: 9s;
}
@keyframes slide{
    from{transform: translate(0,50px); opacity: 0;}
    to{transform: translate(0,0); opacity: 1;}
}
</style>
