User.findById(1)
    .then((user) => {
        res.json(user);
    })
.catch((err) => {
    console.log(err);
})

app.get('/async', async (req, request) => {
    let users;
    try {
        users = await User.findById(1);
    } catch (err) {
        console.log(err);
    }
    return res.json(users)
})