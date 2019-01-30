<template>
    <div class="flexCenter">
        <div class="newspaper">
            <h2>Controle Alt Delete</h2>
            <hr>
            <p>maandag 11 december 2017</p>
            <hr>
            <h2 class="titel">Ongelijkheid in Nederland groter dan in Amerika</h2>
            <div class="content">
                <div class="tekst-kolom">
                    <p class="tekst-kop">Kans op celstraf is groter voor Antilliaanse en Marokkaanse Nederlanders dan voor Afro-Amerikanen in de VS.</p>
                    <p class="tekst-paragraaf">
                        <span>Onderzoek 1</span>
                        In deze studie (gepubliceerd op Controle Alt Delete) werd onderzocht of jongeren die aangeven een strafbaar feit gepleegd te hebben, ook in beeld zijn bij de politie. Het gaat hier dus om allemaal mensen (van welke afkomst dan ook) die zeggen strafbare feiten te plegen. De uitkomst: heb je een migratieachtergrond, dan ben je 5.6 keer vaker verdacht. 
                    </p>
                </div>
                <img src="../../../assets/intro/intro1/racisme.jpg" alt="">
            </div>
            <a href="https://controlealtdelete.nl/blog/ongelijkheid-in-nederland-groter-dan-in-amerika">Klik hier om meer te lezen</a>
        </div>
        <buttons
            class="flexCenter"
            v-bind:pageChoices='pageChoices'
            v-bind:keuzeGemaakt='keuzeGemaakt'
        />
    </div>
</template>
<script>
import Buttons from '../InputComponents/Buttons.vue'
export default {
    name: 'Vraag1-Artikel',
    components:{
        Buttons
    },
    data(){
        return{
            keuzeGemaakt: true,
            pageChoices:{
                values: [],
                btnClass: 'button1',
                next: '/vraag2',
                eventFunction: '',
                btnCls: 'button2'
            }
        }
    }
}
</script>
<style scoped>
.newspaper{
    font-family: 'Times New Roman', Times, serif;
    width: 350px;
    height: 500px;
    background: white;
    padding: 10px;
    box-shadow: 0px 10px 97px -5px rgba(0,0,0,0.75);
    animation: slideIn 2s forwards;
}
.newspaper h2{
    color: black !important;
}
hr{
    margin: 0;
}
.titel{
    font-weight: 600;
    margin: 10px;
    font-style: italic;
}
.tekst-kolom{
    width: 50%;
}
.tekst-kop{
    text-align: left;
    font-size: 14px;
    font-weight: 600;
}
.tekst-paragraaf{
    margin: 10px 0;
    text-align: left;
    font-size: 14px;
}
span{
    font-weight: 600;
}
img{
    width: 50%;
}
.content{
    display: flex;
    align-items: center;
}
.buttons{
    margin-top: 40px;
    animation: slideIn 3s forwards;
}
</style>
