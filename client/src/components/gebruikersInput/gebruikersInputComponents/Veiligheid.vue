<template>
    <div class="veiligheid flexCenter">
        <div class="tekst">
            <h2>Hoe onveilig voel jij je rondom poltie-agenten?</h2>
        </div>
        <div class="paspoort">
            <div class="paspoort-logo flexCenter">Paspoort</div>
            <p class="cad">Control Alt Delete</p>
            <!-- <img src="../../../assets/Avatar/man/jong.png" alt=""> -->
            <div class="img-container">
                <img v-bind:src="imgUrl()" alt="">
                <p class="veiligheid">Onveiligheidsgevoel: {{veiligheidsGevoel}}</p>
            </div>
            <div class="info">
                <p class="label">Afkomst</p>
                {{afkomst}}
                <p class="label">Woonplaats</p>
                {{woonplaats}}
                <p class="label">Gemaakt op</p>
                {{gemaakt.getDate()}}/{{gemaakt.getMonth()}}/{{gemaakt.getFullYear()}}
                <p class="label">Leeftijd</p>
                {{leeftijd}}
                <p class="label">Geslacht</p>
                {{geslacht}}
            </div>
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
            veiligheidsGevoel: 0,
            gemaakt: new Date()
        }
    },
    methods:{
        imgUrl(){
            return require(`../../../assets/Avatar/${this.avatarPath}`)
        },
    },
    beforeMount(){
        console.log(this.gemaakt)
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
    width: 20%;
    background: blue;
    top: 10px;
    left: 10px;
    color: white;
    padding: 10px 15px;
    text-transform: uppercase;
    letter-spacing: 5px;
}
.paspoort > * {
    position: absolute;
}
.tekst{
    margin-bottom: 50px;
}
img{
    width: 180px;
    height: 250px;
}
.img-container{
    left: 20px;
    top: 60px;
    padding: 5px;
}
.cad{
    top: 17px;
    text-transform: uppercase;
    color: blue;
    left: 230px;
    letter-spacing: 8px;
    font-size: 20px;
}
.info{
    left: 220px;
    top: 60px;
    text-align: left;
}
.label{
    background: lightblue;
    width: 300px;
    /* margin: 5px; */
    margin-top: 10px;
    padding: 3px;
    font-size: 12px;
}
</style>

