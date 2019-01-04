<template>
    <div>
        <man-of-vrouw 
            v-if="geslachtShow" 
            v-on:nextInput="nextInput" 
            v-on:inputUser="inputUser"
        />
        <leeftijd-afkomst 
            v-bind:userInfo="userInfo" 
            v-on:nextInput="nextInput"
            v-on:inputUser="inputUser" 
            v-if="leeftijdAfkomstShow"
        />
        <adres 
            v-if="woonplaatsShow"
            v-on:nextInput="nextInput"
            v-on:inputUser="inputUser" 
        />
        <veilig
            v-if="veiligheidShow"
            v-bind:userInfo="userInfo"        
        />
    </div>
</template>
<script>
import ManOfVrouw from './gebruikersInputComponents/ManOfVrouw.vue'
import LeeftijdAfkomst from './gebruikersInputComponents/leeftijdAfkomst.vue'
import Adres from './gebruikersInputComponents/Adres.vue'
import Veilig from './gebruikersInputComponents/Veiligheid.vue'

export default {
    name: 'Input',
    components:{
        ManOfVrouw,
        LeeftijdAfkomst,
        Adres,
        Veilig
    },
    data(){
        return{
            vragenBeantwoord: 0,
            geslachtShow: true,
            leeftijdAfkomstShow: false,
            woonplaatsShow: false,
            veiligheidShow: false,
            userInfo:{
                geslacht:'',
                woonplaats: '',
                avatarPath: '',
                leeftijd:'',
                afkomst:'',
                veiligheidsGevoel: '',
            }
        }
    },
    methods:{
        nextInput(){
            this.vragenBeantwoord++         
            console.log(this.vragenBeantwoord)
            setTimeout(()=>{
                switch(this.vragenBeantwoord){
                    case 1: this.leeftijdAfkomstShow = true
                            this.geslachtShow = false
                            break;
                    case 2: this.woonplaatsShow = true
                            this.leeftijdAfkomstShow = false
                            break;
                    case 3: this.woonplaatsShow = false
                            this.veiligheidShow = true
                            break;
                }
            }, 2000)
        },
        inputUser(prop, value){
            switch(prop){
                case 'geslacht': this.userInfo.geslacht = value
                                 break;
                case 'woonplaats': this.userInfo.woonplaats = value
                                 break;
                case 'veiligheidsGevoel': this.userInfo.veiligheidsGevoel = value
                                 break;
                case 'leeftijd': this.userInfo.leeftijd = value
                                 break;
                case 'afkomst': this.userInfo.afkomst = value
                                 break;
                case 'avatarPath': this.userInfo.avatarPath = value
                                 break;
            }
            console.log(this.userInfo)
        }
    },
}
</script>
<style>
.tekst{
    margin: 10px;
    color: white;
    background: rgba(0,0,0,.4);
    padding: 20px;
    display: inline-block;
    margin: auto;
    border-radius: 0 0 20px 20px;
    animation: slideInTekst 2s forwards;
}
.buttons{
    margin-top: 30px;
    animation: slideIn 4s forwards;
}
.wrapper{
    padding: 80px 50px;
    border: #bf975a solid 4px;
    border-radius: 30px;
    display: inline-block;
    animation: slideIn 3s forwards;
    margin-top: 30px;
}
button{
    width: 100px;
}
</style>


