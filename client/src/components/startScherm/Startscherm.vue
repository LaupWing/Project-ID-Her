<template>
    <div>
        <div class="logo-container">
            <logo class="logo"/>
            <div class="banner flexAround">
                <div class="left-hand"></div>
                <div class="right-hand"></div>
                <div>
                    <h1>Vooroordelen</h1>
                    <p>Racisme onder politie?</p>
                </div>
                <div class="teller">
                    <div class="cijfer">0</div>
                    <div class="cijfer">0</div>
                    <div class="cijfer">0</div>
                    <div class="cijfer">0</div>
                    <div class="cijfer">0</div>
                    <div class="cijfer">0</div>
                    <div class="cijfer">0</div>
                    <div class="cijfer">0</div>
                    <div class="cijfer">0</div>
                    <div class="cijfer">0</div>
                    <div class="cijfer">0</div>
                    <div class="cijfer">0</div>
                    <div class="cijfer">0</div>
                </div>
        </div>
		</div>
		<button @click="start">???</button>
    <img @click="show" class="politie-auto" src="../../assets/politie-auto.png" alt="">
	 </div>
</template>
<script>
import PostService from '../../PostService.js'
import Logo from './startschermComponents/logo.vue'
export default {
    name: 'Startscherm',
    props:[''],
	components:{
		Logo
	},
	data(){
		return{
            posts:[],
            char:[]
		}
  },
  methods:{
    start(){
      this.$el.querySelector('.politie-auto').style.opacity = 0;
      setTimeout( () => this.$router.push({ path: '/intro1'}), 250);
    },
    show(){
      this.$el.querySelector('.grass').classList.add("slidingOutBottom")
      this.$el.querySelector('.politie-auto').classList.add("slidingOutBottom")
      this.$el.querySelector('.banner').classList.add("slidingOutTop")
      this.$el.querySelector('svg').classList.add("slidingOutTop")
      this.$el.querySelector('button').classList.add("slidingOutTop")
      this.$emit('showDatabase')
    },
    splitChar(){
        const aantal = this.posts.length
        const aantalString = aantal.toString()
        for (var i = 0; i < aantalString.length; i++) {
            this.char.push(aantalString.charAt(i))
        }
        this.setNumber()
    },
    setNumber(){
        const allNumbers = this.$el.querySelectorAll('.cijfer')
        let counter = 0;
        const start = allNumbers.length - this.char.length
        console.log(start)
        for (let index = start; index < allNumbers.length; index++) {
            allNumbers[index].textContent = this.char[counter]
            counter++
        }
    }
  },
  async created(){
        try {
            this.posts = await PostService.getPosts();
            this.splitChar()
        }catch(err){
            this.error = err.message;
        }
  }
}
</script>
<style scoped>
.politie-auto{
  width: 140px;
  position: fixed;
  left: -40vw;
  bottom: 0px;
  transition: .25s;
  animation: carRide 15s infinite;
}

.logo{
  animation: slideIn 2s;
}
button{
    background: #023274;
    animation: slideIn 3s;
}
button:hover{
    color:#023274;
    background: #bf975a;
}
.logo-container{
    width: 400px;
    margin: 20px auto;
    height: 550px;
    background: url(../../assets/intro/startscherm/suspect_height_chart.jpg);
    background-size: contain;
}
.banner{
  width: 300px;
  height:150px;
  margin: 10px auto;
  margin-top: -5px;
  background: rgba(0,0,0,.85);
  color: white;
  font-size: 20px;
  padding: 10px;
  animation: slideIn 3s;
  position: relative;
}
.banner h1{
    margin-top: 5px;
}

.teller{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.cijfer{
    background: black;
    display: inline;
    padding: 5px;
    margin: 1px;
}
.left-hand{
    position: absolute;
    left:-30px;
    height: 80px;
    width: 50px;
    border-radius: 40%;
    background: #bf975a;
}
.right-hand{
    position: absolute;
    right:-30px;
    height: 80px;
    width: 50px;
    border-radius: 40%;
    background: #bf975a;
}
</style>
