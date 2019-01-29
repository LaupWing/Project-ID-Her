<template>
    <div class="container">
        <div class="popup flexAround">
            <p class="antwoord">{{popupProperties.antwoord}}</p>
            <button
                @click="popupProperties.event"
            >OK</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Popup',
    props:['popupProperties'],
    data(){
        return{
            
        }
    }
}
</script>
<style scoped>
.popup{
    width: 400px;
    height: 300px;
    background: #023274;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
}
.antwoord{
    color: #bf975a;
    width: 80%;
    font-size: 24px;
}
.container{
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.6);
    position: fixed;
    z-index: 100000;
}
button:hover{
    background: #bf975a;
    color: #023274;
}
</style>


