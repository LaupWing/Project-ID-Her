<template>
    <div class="veiligheid flexCenter">
        <div class="tekst">
            <h2>Hoe veilig voel jij je rondom poltie-agenten?</h2>
        </div>
        <div class="paspoort">
            <div class="paspoort-logo flexCenter">Paspoort</div>
        </div>
    </div>
</template>
<script>
export default {
    
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
</style>

