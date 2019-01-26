<template>
    <div>
		<politie-logo class="politie-logo"/>
		<div class="banner">
			<p>Welkom!</p>
			<h1>Politie Quiz</h1>
		</div>
        <!-- <router-link to="/geslacht"> -->
		    <button @click="start">START</button>
        <!-- </router-link> -->
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
    //   this.$el.querySelector('.grass').classList.add("slidingOutBottom")
    //   this.$el.querySelector('.politie-auto').classList.add("slidingOutBottom")
      this.$el.querySelector('.politie-auto').style.opacity = 0;
      this.$el.querySelector('.grass').style.opacity = 0;
    //   this.$el.querySelector('.banner').classList.add("slidingOutTop")
    //   this.$el.querySelector('.politie-logo').classList.add("slidingOutTop")
    //   this.$el.querySelector('button').classList.add("slidingOutTop")
    //   this.$emit('startQuiz')
      setTimeout( () => this.$router.push({ path: '/geslacht'}), 250);
    },
    show(){
      this.$el.querySelector('.grass').classList.add("slidingOutBottom")
      this.$el.querySelector('.politie-auto').classList.add("slidingOutBottom")
      this.$el.querySelector('.banner').classList.add("slidingOutTop")
      this.$el.querySelector('.politie-logo').classList.add("slidingOutTop")
      this.$el.querySelector('button').classList.add("slidingOutTop")
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
  transition: .25s;
  animation: carRide 15s infinite;
}
.grass{
  width: 100%;
  height: 20px;
  background:green;
  position: fixed;
  bottom: 0;
  transition: .25s;
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
