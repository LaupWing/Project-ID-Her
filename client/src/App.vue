<template>
  <div id="app">
     <transition name="router-anim" mode="out-in">
        <router-view 
            class="view" 
            v-on:userInput='userInput'
            v-on:inputDone='inputDone'
            v-on:showDatabase='showDatabase'
            v-bind:userInfo='userInfo'
            v-if="!dataBase"
        >
        </router-view>
     </transition>
     <PostComponent
        v-if="dataBase"
     ></PostComponent>
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue'
import PostService from './PostService.js'

export default {

  name: 'app',
  data(){
	  return{
        input: false,
        dataBase: false,
        userInfo:{
                // geslacht:'',
                // woonplaats: '',
                // avatarPath: '',
                // leeftijd:'',
                // afkomst:'',
                // veiligheidsGevoel: '',
            },
	  }
  },
  components: {
      PostComponent
  },
  methods:{
	  startQuiz(){
		  setTimeout(()=>{
			  this.startQuiz = true
			  document.querySelector("body").style.background = '#023274'
			  this.input = true
		  },2000)
    },
    showDatabase(){
      setTimeout(()=>{
			  document.querySelector("body").style.background = '#023274'
			  this.dataBase = true
		  },2000)
    },
    userInput(property, info){
        this.userInfo[property] = info
        console.log(this.userInfo)
    },
    inputDone(){
        console.log(this.userInfo)
        this.createPost()
    },
    async createPost(){
      await PostService.insertPost(
          this.userInfo.Provincie, 
          this.userInfo.veiligheidsGevoel, 
          this.userInfo.Afkomst, 
          this.userInfo.Leeftijd, 
          this.userInfo.Geslacht, 
          this.userInfo.Vraag1, 
          this.userInfo.Vraag2,
          this.userInfo.Vraag3,
          this.userInfo.Vraag4,
          this.userInfo.AvatarPath,)
    },
  },
}
</script>

<style>
/* Global elements styling 
################################*/
body{
  background: black;
  overflow: hidden;
  margin: 0;
  transition: 2s;
}
.view{
    width: 100vw;
    height: 100vh;
}
#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1{
    margin: 0;
}
h2{
    margin: 0;
    color:#bf975a
}
p{
    margin: 0;
}
li{
	list-style: none;
}



/* Globale input styling 
################################*/
label{
	color: #bf975a;
	font-size: 25px;
}
select{
	padding: 10px;
	width: 200px;
	border-radius: 10px;
	outline: none;
}
svg > path{
  transition: .25s;
}



/* Position styling classes 
################################*/
.flexCenter{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.flexAround{
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
}
.flexBetween{
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
}
.offsetTop{
	margin-top: 30px;
}



/* Styling States 
################################*/
.invisible{
  opacity: 0;
}



/* Default button styling de rest staan in de buttons component
################################*/
button{
  background: rgba(0, 0, 0, .3);
  border: none;
  padding: 15px 20px;
  color: #bf975a;
  font-size: 20px;
  cursor: pointer;
  border-radius: 20px;
  transition: .25s;
  outline: none;
  width: 100px;
}
button:hover{
  background: #023274;
}

.sliderBorder{
  bottom: 110px;
  padding: 5px;
  border: solid white 5px;
  border-radius: 40px;
  margin-top: 100px;
  position: fixed;
  animation: slideIn 3s;
}
/* Custom Slider */
.slider {
  -webkit-appearance: none;
  width: 500px;
  height: 50px;
  /* background: #d3d3d3; */
  background-color: transparent;
  background-image: linear-gradient(to right, green , red);
  outline: none;
  opacity: 0.7;
  margin: 3px 3px 0 3px;
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-radius: 30px;
  padding-bottom: 1px;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #bf975a;
  cursor: pointer;
}




/* Page components global elements 
################################*/
.tekst{
    position: fixed;
    top: 0;
    margin: 10px;
    color: white;
    background: rgba(0,0,0,.4);
    padding: 20px;
    display: inline-block;
    margin: auto;
    border-radius: 0 0 20px 20px;
    animation: slideInTekst 2s forwards;
    max-width: 800px;
}
.wrapper{
    padding: 80px 50px;
    border: #bf975a solid 4px;
    border-radius: 30px;
    /* display: inline-block; */
    animation: slideIn 3s forwards;
    margin-top: 30px;
}



/* Scrollbar 
################################*/

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

/* Globale keyframes 
################################*/

/* Enter quiz keyframes elements */
.slideInItem1{
    animation: slideIn 2s forwards;
}
.slideInItem2{
    animation: slideIn 3s forwards;
}
.slideInItem3{
    animation: slideIn 4s forwards;
}
@keyframes slideIn {
  from {transform: translate(0, 100vh);}
  to {transform: translate(0, 0)}
}

/* Default keyframe for tekst div */
@keyframes slideInTekst{
  from {transform: translate(0, -50px);}
  to {transform: translate(0, 0)}
}

/* Dissapear elements through the bottom */
.slidingOutBottom{
  animation: slideOutBottom 2s forwards !important;
}
@keyframes slideOutBottom{
  100% {bottom: -10vh}
}

/* Dissapear elements through the top */
.router-anim-leave-active{
    animation: slideOutTop 2s forwards;
}
.slidingOutTop{
  animation: slideOutTop 2s forwards !important;
}
@keyframes slideOutTop{
  from {transform: translate(0, 0);}
  to {transform: translate(0, -100vh)}
}


/* Car keyframe */
@keyframes carRide {
  from {transform: translate(0, 0);}
  to {transform: translate(200vw, 0);}
}

/* Fading away (Mainly used for the avatar img fading out) */
.fadeAway{
    animation: fadingAway 1s forwards;
}
@keyframes fadingAway{
  from {transform: translate(0, 0);}
  to {transform: translate(300px, 0); opacity: 0;}
}


/* Fading away (Mainly used for the avatar img fading in) */
.fadeIn{
    animation: fadingIn 1s forwards;
}
@keyframes fadingIn{
  0% {transform: translate(-300px, 0); opacity: 0}
  25% {opacity: 0}
  50% {opacity: 1}
  75% {opacity: 1}
  100% {transform: translate(0, 0); opacity: 1;}
}

</style>
