<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/politie-logo.png"> -->
    <!-- <PostComponent/> -->
    <StartScherm class="offsetTop" v-if="!startDone" v-on:startQuiz="startQuiz"/>
	 <user-input v-if="input"/>
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue'
import StartScherm from './components/startScherm/Startscherm.vue'
import UserInput from './components/gebruikersInput/Input.vue'

export default {
  name: 'app',
  data(){
	  return{
		  startDone : false,
		  input: false
	  }
  },
  components: {
    PostComponent,
	 StartScherm,
	 UserInput
  },
  methods:{
	  startQuiz(){
		  setTimeout(()=>{
			  this.startDone = true
			  document.querySelector("body").style.background = '#023274'
			  this.input = true
		  },2000)
	  },
  }
}
</script>

<style>
body{
  /* background: linear-gradient(to bottom, #90dffe 0%, #38a3d1 100%); */
  background: #38a3d1;
  overflow: hidden;
  height: 100vh;
  margin: 0;
  transition: 2s;
}
#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.offsetTop{
	margin-top: 30px;
}
.flexCenter{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
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
}
button:hover{
  background: #023274;
}
.clicked{
	background: #bf975a;
   color: #023274;
}
.disabled{
	cursor: default;
	background: rgba(0, 0, 0, .3);
	opacity: .5;
}
button.disabled:hover{
	cursor: default;
	background: rgba(0, 0, 0, .3);
	opacity: .5;
	color: #bf975a;
}

/* Globale input styling */
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

/* Scrollbar */
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

/* Globale keyframes */

.slidingOutBottom{
  animation: slideOutBottom 2s forwards !important;
}
.slidingOutTop{
  animation: slideOutTop 2s forwards !important;
}

@keyframes slideIn {
  from {transform: translate(0, 100vh);}
  to {transform: translate(0, 0)}
}

@keyframes slideInTekst{
  from {transform: translate(0, -50px);}
  to {transform: translate(0, 0)}
}

@keyframes slideOutBottom{
  100% {bottom: -10vh}
}

@keyframes slideOutTop{
  from {transform: translate(0, 0);}
  to {transform: translate(0, -100vh)}
}

@keyframes carRide {
  from {transform: translate(0, 0);}
  to {transform: translate(200vw, 0);}
}

</style>
