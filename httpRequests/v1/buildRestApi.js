const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eva" }
];

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send("<h1>This is an api. See /users to see the list.</h1>");
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/randomuser', (req, res) => {
    const user = users[Math.floor(Math.random() * users.length)];
    res.send(user);
});

app.post('/users', (req, res) => {
    const newId = users[users.length - 1].id + 1;
    const user = req.body;
    console.log(user);
    users.push({id: newId, name: user});
    res.send({id: newId, name: user});
});

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    const userIndex = users.findIndex(user => user.id == userId);
    users.splice(userIndex, 1);
    res.send({message: "User successfully deleted"});
});
app.listen(port, () => console.log(`Running the app. Listening on port ${port}`));

const window = new Window;
window.self.addEventListener("install", (event) => {
    event.waitUntil(
        caches
            .open("v1")
            .then((cache) =>
                cache.addAll(users),
            ),
    );
});

window.self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // caches.match() always resolves
            // but in case of success response will have value
            if (response !== undefined) {
                return response;
            } else {
                return fetch(event.request)
                    .then((response) => {
                        let responseClone = response.clone();

                        caches.open("v1").then((cache) => {
                            cache.put(event.request, responseClone);
                        });
                        return response;
                    })
                    .catch(() => caches.match(request));
            }
        }),
    );
});