import postMessage from "../models/postMessage.js";

export const getPost = async (req, res) => {
    try {
        const postMessages = await postMessage.find();
        //console.log(postMessages);

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message : error.message});
    }


}

export const submitSurvey = async(req, res) => {
    const body = req.body;

    const newSurvey = new postMessage(post);

    try {
        await newSurvey.save();

        res.status(201).json(newSurvey);
    } catch (error) {
        res.status(409).json({message : error.message});
    }
}