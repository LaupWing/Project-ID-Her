<template>
  <div id="app">
     <transition name="router-anim" mode="out-in">
        <router-view 
            class="view" 
            v-on:userInput='userInput'
            v-bind:userInfo='userInfo'
        >
        </router-view>
     </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
	  return{
		// startQuiz : false,
        input: false,
        dataBase: false,
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
  components: {
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
			  this.startDone = true
			  document.querySelector("body").style.background = '#023274'
			  this.dataBase = true
		  },2000)
    },
    userInput(property, info){
        this.userInfo[property] = info
    }
  },
}
</script>

<style>
/* Global elements styling 
################################*/
body{
  background: #38a3d1;
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





/* Page components global elements 
################################*/
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
