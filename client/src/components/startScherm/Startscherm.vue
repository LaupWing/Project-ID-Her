<template>
    <div>
		<politie-logo class="politie-logo"/>
		<div class="banner">
			<p>Welkom!</p>
			<h1>Politie Quiz</h1>
		</div>
		<button @click="start">START</button>
    <img @click="show" class="politie-auto" src="../../assets/politie-auto.png" alt="">
    <div class="grass"></div>
	 </div>
</template>
<script>
import PolitieLogo from './startschermComponents/PolitieLogo.vue'
export default {
	name: 'StartScherm',
	components:{
		PolitieLogo
	},
	data(){
		return{

		}
  },
  methods:{
    start(){
      this.$el.querySelector('.grass').classList.add("slidingOutBottom")
      this.$el.querySelector('.politie-auto').classList.add("slidingOutBottom")
      this.$el.querySelector('.banner').classList.add("slidingOutTop")
      this.$el.querySelector('.politie-logo').classList.add("slidingOutTop")
      this.$el.querySelector('button').classList.add("slidingOutTop")
      this.$emit('startQuiz')
    },
    show(){
      this.$emit('showDatabase')
    }
  }
}
</script>
<style scoped>
.politie-auto{
  width: 140px;
  position: fixed;
  left: -40vw;
  bottom: 20px;
  animation: carRide 15s infinite;
}
.grass{
  width: 100%;
  height: 20px;
  background:green;
  position: fixed;
  bottom: 0;
}
.politie-logo{
  animation: slideIn 2s;
}
button{
  animation: slideIn 3s;
}
.banner{
  width: 500px;
  height:150px;
  /* transform: translate(0, -24px); */
  margin: auto;
  background: url('../../assets/banner.png');
  background-size: contain;
  background-repeat: no-repeat;
  color: white;
  font-size: 20px;
  padding: 10px;
  animation: slideIn 3s;
}



</style>
