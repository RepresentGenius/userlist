import express from "express";

const app = express();
const userExample = {rows:[{"id":"taro", "password":"abc"},{"id":"hanako", "password":"efg"}]};
const userNothing = {rows:[]};

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", (req, res) => {
    const result = userExample;
    res.render('list', {users: result.rows});
});

app.get("/add", (req, res) => {
    res.render('add');
});

app.get("/list", (req, res) => {
    const result = userExample;
    res.render('list', {users: result.rows});
});

app.get("/list/:id" , (req, res) => {
    const result = {rows:[userExample.rows.find((user) => user.id === req.params.id)]};
    if(!result.rows[0]) {
        res.render('list', {users: userNothing.rows});
    }
    res.render('list', {users: result.rows});
    
});

app.get("/api", (req, res) => {
    const result = userExample;
    res.json({users: result.rows});
});

app.use((req, res) => {
    res.status(404).render("not-found", { message : "ページが見つかりません"});
});

app.listen(3000);