import generateResponse from "../services/ai.service.js";




const sendMessage = async (req,res) => {
    const {message} = req.body;

    try {
        console.log(message);
        const aiResponse = await generateResponse(message);
        console.log(aiResponse);

        return res.status(200).json({
            aiResponse
        });

    } catch (error) {
        console.error(error);
    }
}

export { sendMessage };
