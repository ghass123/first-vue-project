const express = require("express");
const path = require("path");
const fs = require("fs").promises; // Importing promises version of fs
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const tempelatePath = path.join(__dirname, '../tempelates');
const publicPath = path.join(__dirname, '../public');
app.set('view engine', 'hbs');
app.set('views', tempelatePath);
app.use(express.static(publicPath));

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/', (req, res) => {
    res.render('login');
});

app.post('/signup', async (req, res) => {
    try {
        const usersData = await getUsersData();
        const userExists = usersData.users.some(user => user.email === req.body.email);
        if (userExists) {
            res.send("User already exists");
        } else {
            usersData.users.push(req.body);
            await saveUsersData(usersData);
            res.status(201).render("home", { naming: req.body.name });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error occurred");
    }
});

app.post('/login', async (req, res) => {
    try {
        const usersData = await getUsersData();
        const user = usersData.users.find(user => user.email === req.body.email && user.password === req.body.password);
        if (user) {
            res.status(201).render("home", { naming: user.name });
        } else {
            res.send("Incorrect email or password");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error occurred");
    }
});

app.listen(port, () => {
    console.log('Server is running on port:', port);
});

async function getUsersData() {
    const data = await fs.readFile("database.json", "utf-8");
    return JSON.parse(data);
}

async function saveUsersData(usersData) {
    await fs.writeFile("database.json", JSON.stringify(usersData, null, 2));
}

