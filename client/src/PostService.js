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
	static insertPost(woonplaats, veilig, afkomst, leeftijd, geslacht){
		return axios.post(url,{
			woonplaats,
			veilig,
			afkomst,
			leeftijd,
			geslacht
		})
	}
	static deletePost(id){
		return axios.delete(`${url}${id}`)
	}
}
export default PostService;