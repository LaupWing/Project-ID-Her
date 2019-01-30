<template>
  <div class="container">
    <h1>Insert your post</h1>
    <div class="create-post">
      <label for="create-provincie">Uw provincie</label>
      <input type="text" id="create-provincie" v-model="provincie">
      <br>
      <label for="create-geslacht">Uw Geslacht</label>
      <input type="text" id="create-geslacht" v-model="geslacht">
      <br>
      <label for="create-leeftijd">Uw Leeftijd</label>
      <input type="text" id="create-leeftijd" v-model="leeftijd">
      <br>
      <label for="create-afkomst">Uw Afkomst</label>
      <input type="text" id="create-afkomst" v-model="afkomst">
      <br>
      <label for="create-veilig">Uw Veiligheidsgevoel</label>
      <input type="text" id="create-veilig" v-model="veilig">
      <br>
      <label for="vraag1">Vraag 1</label>
      <input type="text" id="vraag1" v-model="vraag1">
      <br>
      <label for="vraag2">Vraag 2</label>
      <input type="text" id="vraag2" v-model="vraag2">
      <br>
      <label for="vraag3">Vraag 3</label>
      <input type="text" id="vraag3" v-model="vraag3">
      <br>
      <label for="vraag4">Vraag 4</label>
      <input type="text" id="vraag4" v-model="vraag4">
      <br>
      <label for="avatarpath">Avatarpath</label>
      <input type="text" id="avatarpath" v-model="avatarpath">
      <br>
      <button class="button2" @click="createPost">Post</button>
    </div>
    <hr>
    <p class="error" v-if="error">{{error}}</p>
    <div class="posts-container">
      <div class="post"
        v-for="(post,index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:dblclick="deletePost(post._id)"
      >
        {{`${post.gemaakt.getDate()}/${post.gemaakt.getMonth()+1}/${post.gemaakt.getFullYear()}`}}
        <p class="text">Woonplaats: {{post.provincie}}</p>
        <p>Afkomst: {{post.afkomst}}</p>
        <p>Geslacht: {{post.geslacht}}</p>
        <p>Leeftijd: {{post.leeftijd}}</p>
        <p>Veiligheidsgevoel: {{post.veilig}}</p>
        <p>Vraag1: {{post.vraag1}}</p>
        <p>Vraag2: {{post.vraag2}}</p>
        <p>Vraag3: {{post.vraag3}}</p>
        <p>Vraag4: {{post.vraag4}}</p>
        <p>Avatarpath: {{post.avatarpath}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from '../PostService.js'

export default {
  name: 'PostComponent',
  data(){
    return{
      posts:[],
      provincie:'',
      veilig: '',
      afkomst: '',
      error: '',
      geslacht: '',
      leeftijd:'',
      vraag1: '',
      vraag2: '',
      vraag3: '',
      vraag4: '',
      avatarpath: ''
    }
  },
  async created(){
    try {
      this.posts = await PostService.getPosts();
      console.log(this.posts)
    }catch(err){
      this.error = err.message;
    }
    document.querySelector('body').style.overflowY = 'scroll'
  },
  methods:{
    async createPost(){
      await PostService.insertPost(this.provincie, this.veilig, this.afkomst, this.leeftijd, this.geslacht, this.vraag1, this.vraag2,this.vraag3,this.vraag4,this.avatarpath)
      this.posts = await PostService.getPosts();
    },
    async deletePost(id){
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container{
  max-width: 800px;
  margin: 0 auto;
  animation: slideIn 4s forwards;
}
p.error{
  border: 1px solid #ff5b5f;
  background: #ffc5c1;
  margin-bottom: 15px;
  padding: 10px;
}
div.post{
  position: relative;
  border: 1px solid #5bd658;
  background: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at{
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  color: white;
  font-size: 13px;
}

p.text{
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
label{
  font-weight: 700;
  margin: 10px;
}
</style>
