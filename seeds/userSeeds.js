const { User } = require('../models');

const userData = [
    {
        username: "winston",
        github: "WAN2748",
        email: "niera.w.a@gmail.com",
        password: "password01",
    },
    {
        username: "alex",
        github: "gitAlex",
        email: "alex@hello.com",
        password: "password02"
    },
    {
        username: "mammie",
        github: "mamgit",
        email: "mammie@hello.com",
        password: "password03"
    },
    {
        username: "rocky",
        github: "rockygit",
        email: "rocky@hello.com",
        password: "password04"
    }
    
    
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true, returning: true});

module.exports = seedUsers;