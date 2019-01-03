<template>
    <div class="container flexCenter">
        <div class="tekst">
            <h2>Wat is je leeftijd en afkomst?</h2>
        </div>
        <div class="wrapper flexCenter">
            <img v-bind:src="imgUrl()" alt="">
            <!-- <img src="../../../assets/Avatar/onbekend.png" alt=""> -->
        </div>
        <div v-if="afkomstSelect" class="selecteer-afkomst">
            <li @click="afkomstIs(nationaliteit)" v-for="(nationaliteit, index) in nationaliteiten" v-bind:key="index">
                {{nationaliteit}}
            </li>
        </div>
        <div class="buttons">
            <div class="input flexCenter">
                <div @click="toggleAfkomst" class="selecteer flexCenter">
                    <p v-if="afkomst == ''">                
                    Selecteer je afkomst
                    </p>
                    <p v-if="afkomst !== '' ">
                        {{afkomst}}
                    </p>
                </div>
            </div>
            <div class="leeftijd">	
            <p v-if="leeftijd == ''">Gebruik de slider om je leeftijd aan te geven!</p>
            <h3 v-if="leeftijd !== ''">Leeftijd: {{leeftijd}}</h3>
            <input @change="sliderAge" class="slider" type="range" min="12" max="80" value="1">
            </div>
        </div>
        <button @click="nextInput" :class="['next', ((afkomst == '') && (leeftijd == '')) ? 'disabled' : '']">>></button>
    </div>
</template>
<script>
export default {
    name: 'LeeftEnAfkomst',
    props:['userInfo'],
    data(){
        return{
            afkomst: '',
            avatar: 'onbekend.png',
            leeftijd: '',
            vorigeLeeftijd: '',
            afkomstSelect: false,
            nationaliteiten:[
                'Nederlands','Afrikaans', 'Pools', 'Marrokaans', 'Frans', 'Russische', 'Surinaams', 'Nigeria', 'Antiliaans', 'Turks' , 'Japans', 'Amerikaans' , 'Overige Aziatische'
            ]
        }
    },
    methods:{
        afkomstIs(nationaliteit){
            this.afkomst = nationaliteit
            this.toggleAfkomst()
        },
        toggleAfkomst(){
            console.log(this.userInfo)
            this.afkomstSelect = !this.afkomstSelect;
            // this.changeAvatar()
        },
        sliderAge(event){
            this.vorigeLeeftijd = this.leeftijd
            this.leeftijd = event.target.value
            this.changeAvatar()
        },
        checkLeeftijdCategorie(){
            if(this.categorie(this.vorigeLeeftijd)===this.categorie(this.leeftijd)){
                return
           }else{
               this.transitionAvatar()
           }
        },
        categorie(leeftijd){
            if(leeftijd < 20){
                return 'jong'
            }else if(leeftijd >= 20 && leeftijd <= 40){
                return 'volwassen'
            }else{
                return 'oud'
            }
        },
        changeAvatar(){
            if(this.afkomst !== '' && this.leeftijd !== ''){
                this.checkLeeftijdCategorie()
                console.log(this.vorigeLeeftijd, this.leeftijd)
            }
        },
        transitionAvatar(){
            this.$el.querySelector('img').classList.add("fadeAway")
            this.avatarProperties()
        },
        avatarProperties(){
            if(this.$el.querySelector('img').classList.contains('fadeAway')){
                this.changeImgUrl()
            }else{
                this.$el.querySelector('img').classList.add('fadeAway')
                this.changeImgUrl()
            }
        },
        changeImgUrl(){
            const currentAvatar = this.avatar
             setTimeout(()=>{
                if(this.leeftijd < 20){
                   this.avatar = 'jonge-vrouw.png' 
                 }else if(this.leeftijd >= 20 && this.leeftijd <= 40){
                   this.avatar = 'volwassen-vrouw.png'
                 }else{
                   this.avatar = 'ouwe-vrouw.png'
                 }
                   this.$el.querySelector('img').classList.add("fadeIn")
                   this.removeImgClasses()
                 },1000)
        },
        imgUrl(){
            return require(`../../../assets/Avatar/${this.avatar}`)
        },
        removeImgClasses(){
            setTimeout(()=>{
                this.$el.querySelector('img').classList.remove("fadeAway")
                this.$el.querySelector('img').classList.remove("fadeIn")
            },1000)
        },
        nextInput(){
            this.$el.querySelector('.tekst').classList.add("slidingOutTop")
            this.$el.querySelector('.wrapper').classList.add("slidingOutTop")
            this.$el.querySelector('.buttons').classList.add("slidingOutTop")
            this.$el.querySelector('.next').classList.add("slidingOutTop")
            this.$emit('nextInput')
        }
    }
}
</script>
<style scoped>
img{
    width: 200px;
}
.wrapper{
    height: 350px;
    width: 250px;
    padding: 0;
}
.leeftijd p, .leeftijd h3{
    color: white;
    margin: 5px;
}
.flexCenter{
    margin: 10px;
}
.container{
    margin: 0;
}
.selecteer{
    background: rgba(0,0,0,.4);
    padding: 15px 10px;
    width: 100%;
    border-radius: 20px;
    cursor: pointer;
    color: white;
    transition: .25s;
}
.selecteer:hover{
    background: white;
    color: black;
}
.selecteer-afkomst{
    width: 300px;
    height: 500px;
    background: rgba(0,0,0,.9);
    position: fixed;
    top: 20vh;
    overflow-y: scroll;
    z-index: 10;

}
li{
    width: 100%;
    background: rgba(255,255,255,.7);
    border: rgba(0,0,0,.3) solid 1px;
    border-right: none;
    border-left: none;
    padding: 10px 0;
    cursor: pointer;
}
li:hover{
    background: white;
}
.input{
    animation: slideIn 3.5s;
}
.leeftijd{
    margin: 20px 0 30px 0;
    animation: slideIn 4s;
    background: rgba(0,0,0,.3);
    padding: 10px;
}

.buttons{
    margin-top: 10px;
    width: 300px;
}


/* Custom Slider */
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  margin: 0;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #bf975a;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #bf975a;
  cursor: pointer;
}
button{
    animation: slideIn 4.5s;
}
button:hover{
    background: #bf975a;
    color: #023274;
}
.fadeAway{
    animation: fadingAway 1s forwards;
}
@keyframes fadingAway{
  from {transform: translate(0, 0);}
  to {transform: translate(300px, 0); opacity: 0;}
}

.fadeIn{
    animation: fadingIn 1s forwards;
}
@keyframes fadingIn{
  from {transform: translate(-300px, 0); opacity: 0}
  to {transform: translate(0, 0); opacity: 1;}
}




</style>

