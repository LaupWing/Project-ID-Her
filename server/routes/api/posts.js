const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res)=>{
    const posts = await loadPostCollection();
    res.send(await posts.find({}).toArray());
});

// Add Posts
router.post('/', async (req, res)=>{
    const posts = await loadPostCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send()
});

// Delete Posts
router.delete('/:id', async (req,res)=>{
    const posts = await loadPostCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send()
})

async function loadPostCollection(){
    const client = await mongodb.MongoClient.connect('mongodb://abc123:abc123@ds143614.mlab.com:43614/cad_database',{
        useNewUrlParser: true
    })
    return client.db('cad_database').collection('posts');
}


module.exports = router;