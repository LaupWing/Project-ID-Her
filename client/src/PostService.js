import axios from 'axios';

const url = 'api/posts/';

class PostService{
    // Get Post
	static getPosts(){
		return new Promise(async (resolve, reject)=> {
			try{
				const res = await axios.get(url)
				const data = res.data;
				resolve(
					data.map(post=>({
						...post,
						gemaakt: new Date(post.gemaakt)
					}))
				);
			}catch(err){
				reject(err);
			}
		})
	}
    // Add Post
	static insertPost(provincie, veilig, afkomst, leeftijd, geslacht, vraag1, vraag2, vraag3, vraag4){
		return axios.post(url,{
			provincie,
			veilig,
			afkomst,
			leeftijd,
            geslacht,
            vraag1,
            vraag2,
            vraag3,
            vraag4
		})
	}
	static deletePost(id){
		return axios.delete(`${url}${id}`)
	}
}
export default PostService;