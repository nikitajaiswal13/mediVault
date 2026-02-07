const app = require('./app');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

mongoose.connect( process.env.DB , {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log("Connection Done 😁")
}).catch((err) => {
    console.log("Connection Failed 💥" , err);
})

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})