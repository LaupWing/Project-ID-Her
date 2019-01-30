<template>
    <div>
        <div class="filteropties flexCenter">
            <div class="flexCenter">
                <p>Sorteer op Datum</p>
                <select name="sorteerDatum" id="vragen">
                    <option value="Alle">Meest Recente</option>
                    <option value="OudEerst">Van Oud naar Nieuw</option>
                </select>
            </div>
        </div>
        <div class="artikel-container">
            <div v-for="(a, index) in aantal" v-bind:key="index" class="artikel">
                <img src="../../../../assets/placeholder.jpg" alt="">
                <div class="beschrijving">
                    <div class="labels">
                        <p>Datum:</p>
                        <p>Titel:</p>
                        <p>Beschrijving:</p>
                    </div>
                    <div class="inserts flexBetween">
                        <p>???</p>
                        <p>???</p>
                        <p>???</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'recent',
    data(){
        return{
            aantal: 10
        }
    }
}
</script>
<style scoped>
.artikel{
    width: 95%;
    height: 100px;
    padding: 10px;
    background: rgba(255,255,255,.2);
    display: flex;
    align-items: center;
    margin: auto;
    margin-bottom: 20px;
}
img{
    width: 150px;
}
.filteropties{
    width: 100%;
    color: #bf975a;
    margin-bottom: 30px;
}
.labels{
    width: 100px;
    height: 100px;
    text-align: right;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    color: #bf975a;
}
.inserts{
    color:black;
    margin-left: 5px;
}
.beschrijving{
    display: flex;
}
.artikel-container{
    max-height: 450px;
    overflow-x: hidden;
    overflow-y: scroll;
}
</style>
