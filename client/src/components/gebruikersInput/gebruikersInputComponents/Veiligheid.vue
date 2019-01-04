<template>
    <div class="veiligheid flexCenter">
        <div class="tekst">
            <h2>Hoe veilig voel jij je rondom poltie-agenten?</h2>
        </div>
        <div class="paspoort">
            <div class="paspoort-logo flexCenter">Paspoort</div>
            <!-- <img src="../../../assets/Avatar/man/jong.png" alt=""> -->
            <img v-bind:src="imgUrl()" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:'veiligheid',
    props:['userInfo'],
    data(){
        return{
            avatarPath: this.userInfo.avatarPath,
            leeftijd: this.userInfo.leeftijd,
            woonplaats: this.userInfo.woonplaats,
            geslacht: this.userInfo.geslacht,
            afkomst: this.userInfo.afkomst,
            veiligheidsGevoel: 0
        }
    },
    methods:{
        imgUrl(){
            return require(`../../../assets/Avatar/${this.avatarPath}`)
        },
    },
    beforeMount(){
        console.log(this.avatarPath)
    }
}
</script>
<style scoped>
.paspoort{
    width: 600px;
    height: 350px;
    background: radial-gradient(circle farthest-side, #ddf2d1,#D0D8E0);
    border-radius: 10px;
    position: relative;
    box-shadow: 15px 14px 5px 1px rgba(0,0,0,0.3);
}
.paspoort-logo{
    background: blue;
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
    padding: 10px 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
}
.tekst{
    margin-bottom: 50px;
}
img{
    width: 180px;
    position: absolute;
    left: 20px;
    top: 70px;
}
</style>

