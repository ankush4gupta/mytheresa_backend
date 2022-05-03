const connect = require("./configs/db")
const port = process.env.PORT || 3080;
const app = require("./index")

app.listen(port, async () => {
    try {
        await connect()
        console.log("listening on port 3080")
    } catch (error) {
        console.error(error.message)
    }
})