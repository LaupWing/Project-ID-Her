<template>
<svg id="Laag_9" data-name="Laag 9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 284">
  <path id="avatar" d="M1176,329H946l6-50c3-40,29.8-66,65.3-66H1034V185.4c-14.2-11.2-24.3-31.4-26.6-55.1a87.7,87.7,0,0,1-.5-10.3,108,108,0,0,1,1.7-19.2c6.1-32.1,26.7-55.8,51.3-55.8h2.2c24.6,0,45.2,23.7,51.3,55.8a108,108,0,0,1,1.7,19.2c0,3.5-.2,6.9-.5,10.3-2.3,23.7-12.4,43.9-26.6,55.1V213h16.8c35.4,0,62.2,26,65.2,66Z" transform="translate(-946 -45)"/>
  <path class="avatar-overlay" d="M1061,45V329H946l6-50c3-40,29.8-66,65.3-66H1034V185.4c-14.2-11.2-24.3-31.4-26.6-55.1a87.7,87.7,0,0,1-.5-10.3,108,108,0,0,1,1.7-19.2c6.1-32.1,26.7-55.8,51.3-55.8Z" transform="translate(-946 -45)"/>
  <path id="linker-schaduw" class="cls-2" d="M1061,195v5h-1.1c-9.4,0-18.2-3.5-25.9-9.6v-5c7.7,6.1,16.5,9.6,25.9,9.6Z" transform="translate(-946 -45)"/>
  <path id="rechter-schaduw" class="cls-2" d="M1061,195v5h1.1c9.4,0,18.2-3.5,25.9-9.6v-5c-7.7,6.1-16.5,9.6-25.9,9.6Z" transform="translate(-946 -45)"/>
</svg>

</template>

<script>
export default {
  name: 'app',
  data(){
	  return{
		  colors:[
			  'bf975a','E3B79E', 'F1D0AF', 'EAD4AB', 'F0C9A2', 'F1C9AF', 'CCA07D' , 'D1A179', 'D19B6F', 'BC9584', '704C2C', '73461D', '734224', '70391B', '5C331F', '4a352c'
			],
			restartAtMax: ''
	  }
	},
	methods:{
		colorTransition(){
			for (let i = 0; i < this.colors.length; i++) {
				this.changeFill(i)
			}
		},
		changeFill(i){
			const element = this.colors[i];
			setTimeout(() => {
                this.$el.querySelector("#avatar").style.fill = `#${element}`
                document.querySelector(".left-hand").style.background = `#${element}`
                document.querySelector(".right-hand").style.background = `#${element}`
				this.checkMax()
				}, 1000 +(i*1000));				
		},
		checkMax(){
			this.restartAtMax++
			if(this.restartAtMax == this.colors.length){
				this.colorTransition()
				this.restartAtMax = ''
			}
		}
	},
	created(){
		setTimeout(()=>{
			this.colorTransition()
		},3000)
	}
  
}
</script>

<style>
	svg{
		max-width: 240px;
        margin-top: 40px;
	}
    .avatar-overlay{
        fill: rgba(255,255,255,.1)
    }
    #avatar{
        fill:#bf975a;
    }
</style>