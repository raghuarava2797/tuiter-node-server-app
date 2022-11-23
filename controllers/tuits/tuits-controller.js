// import posts from "./tuits.js";
import * as tuitsDao from "../tuits/tuits-dao.js"
// let tuits = posts;

const createTuit = async (req, res) => {
    const newTuit = req.body
    // newTuit._id = (new Date()).getTime()
    newTuit.likes = 20;
    newTuit.liked = false
    newTuit.disliked = true
    newTuit.dislikes = 10
    newTuit.image = "../../../images/spacex-logo.jpg"
    // tuits.push(newTuit)
    const insertedTuit = await tuitsDao.createTuit(newTuit)
    res.json(insertedTuit)
}

const findTuits  = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits)
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    // const tuitIndex = tuits.findIndex((t) => t._id === parseInt(tuitdIdToUpdate));
    // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates)
    res.json(status);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params["tid"];
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete)
    // tuits = tuits.filter((t) => t._id !== parseInt(tuitdIdToDelete));
    res.json(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
   }
   