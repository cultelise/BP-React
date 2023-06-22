const { Post } = require('../models/post');
const { User } = require('../models/user');

async function getAllPosts(req, res) {
	try {
		const posts = await Post.findAll({
			where: { privateStatus: false },
			include: [
				{
					model: User,
					required: true,
					attributes: [`username`],
				},
			],
		});
		res.status(200).send(posts);
	} catch (error) {
		console.log('ERROR IN getAllPosts');
		console.log(error);
		res.sendStatus(400);
	}
}

async function getCurrentUserPosts(req, res) {
	try {
		const { userId } = req.params;
		console.log('USER ID!!!!!!!!!!', userId);
		const posts = await Post.findAll({
			where: { userId: userId },
			include: [
				{
					model: User,
					required: true,
					attributes: [`username`],
				},
			],
		});
		res.status(200).send(posts);
	} catch (error) {
		console.log('ERROR IN getCurrentUserPosts');
		console.log(error);
		res.sendStatus(400);
	}
}

async function addPost(req, res) {
	try {
		const { title, content, status, userId } = req.body;

		await Post.create({
			title: title,
			content: content,
			privateStatus: status,
			userId: userId,
		});

		res.sendStatus(200);
	} catch (error) {
		console.log('ERROR IN addPost');
		console.log('error');
		res.sendStatus(400);
	}
}

async function editPost(req, res) {
	try {
		const { id } = req.params;
		const { status } = req.body;

		console.log('ID AND STATUS', id, status);
		await Post.update(
			{
				privateStatus: status,
			},
			{
				where: { id: id },
			}
		);

		res.sendStatus(200);
	} catch (error) {
		console.log('ERROR IN getCurrentUserPosts');
		console.log(error);
		res.sendStatus(400);
	}
}

async function deletePost(req, res) {
	try {
		const { id } = req.params;
		console.log('here', id);
		await Post.destroy({
			where: { id: id },
		});

		res.sendStatus(200);
	} catch (error) {
		console.log('ERROR IN getCurrentUserPosts');
		console.log(error);
		res.sendStatus(400);
	}
}

module.exports = {
	getAllPosts,
	getCurrentUserPosts,
	addPost,
	editPost,
	deletePost,
};
