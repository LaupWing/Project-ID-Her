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
        woonplaats: req.body.woonplaats,
        veilig: req.body.veilig,
        afkomst: req.body.afkomst,
        leeftijd: req.body.leeftijd,
        geslacht: req.body.geslacht,
        vraag1: req.body.vraag1,
        vraag2: req.body.vraag2,
        vraag3: req.body.vraag3,
        vraag4: req.body.vraag4,
        gemaakt: new Date()
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