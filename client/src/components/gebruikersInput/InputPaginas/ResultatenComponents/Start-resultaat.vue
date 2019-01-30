<template>
    <div>
        <h2>Resultaten Pagina</h2>
        <p>Op deze pagina kun je het laatste nieuws over etnische profileren vinden en de resultaten van andere mensen. Je heb ook de mogelijkheid om de website te delen om awereness te creëren. Hieronder staat uitleg over de verschillenden menu items dat je hierboven ziet.</p>
        <div class="uitleg">
            <p><span>Recent: </span>Recente nieuws op het gebied van etnische profileren bij de politie</p>
        </div>
        <div class="uitleg">
            <p><span>Veiligheid: </span>Hoe veilig voelen Nederlandse burgers zich in de buurt van politie-agenten?</p>
        </div>
        <div class="uitleg">
            <p><span>Vragen: </span>Wat waren de antwoorden van de gebruikers?</p>
        </div>
        <div class="uitleg">
            <p><span>Delen: </span>Deel de website op je favoriete social media om awereness te creëren!</p>
        </div>

        <div class="latest">
            <h2>Recente gebruikers</h2>
            <div class="list">
                <div 
                    class="list-item"
                    v-for="(p, index) in posts.slice(0,10)"
                    v-bind:key="index"
                >
                <img v-bind:src="imgUrl(p.avatarpath)" alt="">
                <p>{{p.afkomst}}</p>
                <p>{{p.geslacht}}</p>
                <p>{{p.leeftijd}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Start',
    props:['posts'],
    data(){
        return{

        }
    },
    methods:{
        imgUrl(path){
            return require(`../../../../assets/Avatar/${path}`)
        }
    },
    created(){
        setTimeout(()=>{
            console.log(this.posts)
            this.posts.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return b.gemaakt - a.gemaakt;
            });
            console.log(this.posts)
        }, 1000)
    }
}
</script>
<style scoped>
p{
    color: white;
    text-align: left;
}
span{
    color: #bf975a;
    font-weight: 600;
}
.uitleg{
    margin: 10px 0;
}
.latest{
    margin-top: 20px;
    width: 600px;
    height: 300px;
    background: white; 
}
.latest h2{
    text-align: left;
    color: black;
    padding: 5px;
    font-weight: 400;
}
.list{
    width: 95%;
    margin: auto;
    max-height: 80%;
    overflow-y: scroll;
}
.list-item{
    width: 100%;
    height: 50px;
    border-bottom: rgba(0,0,0,.3) solid 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.list-item p{
    color: black;
    width: 20%;
}
img{
    width: 30px;
}
</style>
