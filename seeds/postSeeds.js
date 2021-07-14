const { Post } = require('../models');

const postData = [
    {
        title: "Add comment here",
        post_content: "Add a comment.",
        user_id: 3
    },
    {
        title: "Add comment here.",
        post_content: "Add a comment.",
        user_id: 1
    },
    {
        title: "Add comment here.",
        post_content: "Add a comment.",
        user_id: 2

    },
    {
        title: "Add comment here.",
        post_content: "Add a comment.",
        user_id: 2
    },
    {
        title: "Add comment here.",
        post_content: "Add a comment.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;