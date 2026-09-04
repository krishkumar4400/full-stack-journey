



const sendMessage = async (req,res) => {
    const {message} = req.body;

    try {
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}

export { sendMessage };
