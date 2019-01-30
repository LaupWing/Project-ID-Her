<template>
    <div>
        <div class="filteropties">
            <div class="flexCenter">
                <p>Gemiddelde</p>
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider2 round"></span>
                </label>
            </div>
            <div class="flexCenter">
                <p>Provinicie</p>
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
            </div>
            <div class="flexCenter">
                <p>Afkomst</p>
                <select name="nationaliteiten" id="nationaliteiten" @change="changeNationaliteit">
                    <option value="Alle">Alle Afkomsten</option>
                    <option 
                        v-for="(n, index) in nationaliteiten" 
                        v-bind:key="index"
                        :value="n"
                    >
                        {{n}}
                    </option>
                </select>
            </div>
        </div>
        <div class="table-container">
            <table>
                <tr class="headers">
                    <th>Afkomst</th>
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
.filteropties{
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: #bf975a;
}
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

select{
    padding: 5px;
    border-radius: 10px;
    width: 150px;
}


/* Custom Slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider2 {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider2:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider2 {
  background-color: #bf975a;;
}

/* input:focus + .slider2 {
  box-shadow: 0 0 1px #2196F3;
} */

input:checked + .slider2:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider2.round {
  border-radius: 34px;
}

.slider2.round:before {
  border-radius: 50%;
}
</style>
