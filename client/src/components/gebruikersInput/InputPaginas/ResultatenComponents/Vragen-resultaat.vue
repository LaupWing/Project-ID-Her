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
                <p>Vragen</p>
                <select @change="handleChange" name="vragen" id="vragen">
                    <option value="Alle">Alle Vragen</option>
                    <option value="Vraag 1">Vraag 1</option>
                    <option value="Vraag 2">Vraag 2</option>
                    <option value="Vraag 3">Vraag 3</option>
                    <option value="Vraag 4">Vraag 4</option>
                </select>
            </div>
    </div>
    <div class="vragen flexCenter">
        <div class="vragen-menu">
            <li 
                @click="handleClick" 
                :class="{active: vraag === 'Vraag 1'}"
            >
                Vraag 1
            </li>
            <li 
                @click="handleClick" 
                :class="{active: vraag === 'Vraag 2'}"
            >
                Vraag 2
            </li>
            <li 
                @click="handleClick" 
                :class="{active: vraag === 'Vraag 3'}"
            >
                Vraag 3
            </li>
            <li 
                @click="handleClick"
                :class="{active: vraag === 'Vraag 4'}"
            >
                Vraag 4
            </li>
        </div>
        <p v-if="vraag == 'Vraag 1'">Marokkaans-Nederlandse verdachten hebben een grotere kans om in de cel gezet te worden dan autochtone verdachten. Hoeveel groter is die kans?</p>
        <p v-if="vraag == 'Vraag 2'">Hoeveel procent van de jongeren met een Turkse, Marrokaanse, Surinaamse en Antiliaanse achtergrond wil zeker niet of waarschijnlijk niet bij de politie werken?</p>
        <p v-if="vraag == 'Vraag 3'">In welk jaar heeft de politie voor het eerst beleid gemaakt dat etnische profileren tegen gaat</p>
        <p v-if="vraag == 'Vraag 4'">De overheid meet jaarlijks de tevredenheid over de politie. Hoeveel procent van de Nederlandse bevolking is tevreden over het optreden van de politie in de buurt?</p>
    </div>
    <div class="table-container">
        <table>
            <tr class="headers">
                <th>Afkomst</th>
                <th 
                    v-if="vraagFilter === 'Alle' || vraagFilter === 'Vraag 1'"
                >
                    Vraag1
                </th>
                <th
                    v-if="vraagFilter === 'Alle' || vraagFilter === 'Vraag 2'"
                >
                    Vraag2
                </th>
                <th 
                    v-if="vraagFilter === 'Alle' || vraagFilter === 'Vraag 3'"
                >
                    Vraag3
                </th>
                <th 
                    v-if="vraagFilter === 'Alle' || vraagFilter === 'Vraag 4'"
                >
                    Vraag4
                </th>
            </tr>
            <tr 
                v-for="(p,index) in posts"
                v-bind:key="index"
            >   
                <td>{{p.afkomst}}</td>
                <td 
                    v-if="vraagFilter === 'Alle' || vraagFilter === 'Vraag 1'"
                >
                {{p.vraag1}}
                </td>
                <td 
                    v-if="vraagFilter === 'Alle' || vraagFilter === 'Vraag 2'"
                >
                    {{p.vraag2}}
                </td>
                <td 
                    v-if="vraagFilter === 'Alle' || vraagFilter === 'Vraag 3'"
                >
                    {{p.vraag3}}
                </td>
                <td 
                    v-if="vraagFilter === 'Alle' || vraagFilter === 'Vraag 4'"
                >
                    {{p.vraag4}}
                </td>
            </tr>
        </table>
    </div>
</div>
</template>
<script>
export default {
    name:'vragen',
    props:['posts'],
    data(){
        return{
            vraag: 'Vraag 1',
            vraagFilter: 'Alle'
        }
    },
    methods:{
        handleClick(){
            this.removeClass()
            this.vraag = event.target.textContent.trim()
            console.log(this.vraag)
            event.target.classList.add('active')
        },
        removeClass(){
            this.$el.querySelectorAll('li').forEach((i)=>{
                i.classList.remove('active')
            })
        },
        handleChange(){
            this.vraagFilter = event.target.value
            this.vraag = event.target.value
        }
    }
}
</script>
<style>
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
    max-height: 350px;
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

.vragen{
    color: white;
    width: 80%;
    margin:30px auto;
}
.vragen p{
    font-size: 14px;
}
.vragen-menu{
    display: flex;
    justify-content: space-around;
    width: 100%;
}
li{
    padding: 10px;
    cursor: pointer;
    color: #bf975a;
}
.active{
    background: #bf975a;
    color: #023274;
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

