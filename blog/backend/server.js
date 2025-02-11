const { default: mongoose } = require("mongoose");

//read all users
app.get("/users", async (req, res) => {
    try {
        const fetchedUsers = await User.find();
        return res.status(200).json({ message: "all user fetched successfully", users: fetchuser })
    } catch (error) {
        console.log("something went wrong", error);
        return res.status(500).json({ message: "internal server error" });

    }
});

//read single user
app.get("/users/:id", async (req, res) => {
    try {
        const fetchedUsers = await User.findById(req.params.id);
        return res.status(200).json({ message: "user fetch successfully", users: fetchuser })
    } catch (error) {
        console.log("something went wrong", error);
        return res.status(500).json({ message: "internal server error" });

    }
});

//update a user
app.patch("/users/:id", async (req, res) => {
    try {
        const userExist = await User.findById(req.params.id);
        if (!userExist) {
            return res.status(404).json({ message: "user not found" });
        }
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json({ message: "user updatd successfully", user: updateUser })
    } catch (error) {
        console.log("something went wrong", error);
        return res.status(500).json({ message: "server internal error" })

    }
})

//delete a user
app.delete("/users/:id", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser)
            return res.status(400).json({ message: "user not fond" });

    } catch (error) {
        console.log("something went wrong", error);
        return res.status(500).json({ message: "internal server error" })
    }
})

//Articles
const articleSchema = new mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
   thumbnail :{type:String, required: true},
})
const ArticleTable = mongoose.model('article',)
app.post("/articles", async (req, res)=>{
try {
    const fetchArticles = await ArticleTable.find();
    return res.status(200).json({message : "all articles fetch successfully" , artcles:fetchArticles});
} catch (error) {
    console.log("something went wrong",error);
    return res.status(500).json({message:" server error"})
    
}
})

app.get("/articles/:id", async (req, res)=>{
    try {
        const fetchArticle = await ArticleTable.findById(req.params.id);
        return res.status(200).json({message: " all articles fetch successfully", articles:fetchArticle,});
    } catch (error) {
        console.log("something went wrong",error);
    }

})

app.update("/article", async ( req,res)=>{
    try {
        
    } catch (error) {
        
    }

})