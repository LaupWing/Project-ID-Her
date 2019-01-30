<template>
    <div>
        <select name="provincie" id="provincie" @change="changeProvincie">
            <option value="Alle">Alle Provincies</option>
            <option
                v-for="(p, index) in provincies" 
                v-bind:key="'A'+index"
                :value="p"
            >
            {{p}}
            </option>
        </select>
        <select name="nationaliteiten" id="nationaliteiten" @change="changeNationaliteit">
            <option value="Alle">Alle Nationaliteiten</option>
            <option 
                v-for="(n, index) in nationaliteiten" 
                v-bind:key="index"
                :value="n"
            >
                {{n}}
            </option>
        </select>
        <div class="table-container">
            <table>
                <tr class="headers">
                    <th>Nationaliteit</th>
                    <th>Geslacht</th>
                    <th>Leeftijd</th>
                    <th>Provincie</th>
                    <th>Veiligheids-gevoel</th>
                </tr>
                <tr 
                    v-for="(p,index) in dataVoorkeur"
                    v-bind:key="'B'+index"
                >   
                    <td>{{p.afkomst}}</td>
                    <td>{{p.geslacht}}</td>
                    <td>{{p.leeftijd}}</td>
                    <td>{{p.provincie}}</td>
                    <td>{{p.veilig}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name:"provincie",
    props:['posts'],
    data(){
        return{
            nationaliteiten:[
                'Nederlands','Afrikaans', 'Pools', 'Marrokaans', 'Frans', 'Russische', 'Surinaams', 'Nigeria', 'Antiliaans', 'Turks' , 'Japans', 'Amerikaans' , 'Overige Aziatische'
            ],
            provincies:[
                'Groningen', 'Friesland', 'Drenthe', 'Overijssel', 'Gelderland', 'Utrecht', 'Noord-Holland', 'Brabant', "Zuid-Holland", "Zeeland", "Limburg"
            ],
            dataVoorkeur:[],
            provincie: '',
            nationaliteit:'Marrokaans'

        }
    },
    methods:{
        changeProvincie(){
            this.provincie = event.target.value
            this.setData()
        },
        changeNationaliteit(){
            this.nationaliteit = event.target.value
            this.setData()
        },
        setData(){
            this.dataVoorkeur = []
            if(this.provincie =='Alle' && this.nationaliteit=='Alle' ){
                this.posts.forEach((i)=>{
                    this.dataVoorkeur.push(i)
                })
            }
            if(this.provincie == 'Alle' && this.nationaliteit!='Alle'){
                this.posts.forEach((i)=>{
                    if(i.afkomst == this.nationaliteit){
                        this.dataVoorkeur.push(i)
                    }
                })
            }
            if(this.provincie != 'Alle' && this.nationaliteit =='Alle'){
                this.posts.forEach((i)=>{
                    if(i.provincie == this.provincie){
                        this.dataVoorkeur.push(i)
                    }
                })
            }
            this.posts.forEach((i)=>{
                if(i.provincie == this.provincie && i.afkomst == this.nationaliteit){
                        this.dataVoorkeur.push(i)
                    }
            })

        }
    },
    mounted(){
        this.provincie = this.$el.querySelector('#provincie').value
        this.nationaliteit = this.$el.querySelector('#nationaliteiten').value
        this.setData()
    }
}
</script>
<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    background: white;
}
.table-container{
    max-height: 460px;
    overflow-y: scroll;
    margin-top: 20px;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
tr:nth-child(even) {
    background-color: #dddddd;
}
</style>
