require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { SERVER_PORT } = process.env;
const { login, register } = require('./controllers/auth');
const {
	getAllPosts,
	getCurrentUserPosts,
	addPost,
	editPost,
	deletePost,
} = require('./controllers/posts');
const { isAuthenticated } = require('./middleware/isAuthenticated');
const { sequelize } = require('./util/database');
const { User } = require('./models/user');
const { Post } = require('./models/post');

const app = express();

app.use(express.json());
app.use(cors());

User.hasMany(Post);
Post.belongsTo(User);

app.post('/login', login);
app.post('/register', register);

app.get('/posts', getAllPosts);
app.post('/posts', isAuthenticated, addPost);
app.put('/posts/:id', isAuthenticated, editPost);
app.delete('/posts/:id', isAuthenticated, deletePost);

app.get('/userposts/:userId', getCurrentUserPosts);

sequelize
	.sync()
	.then((res) => {
		console.log(res);
		app.listen(SERVER_PORT, () =>
			console.log('listening on port:', SERVER_PORT)
		);
	})
	.catch((err) => console.log(err));
