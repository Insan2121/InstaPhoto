const conn = require('../models/connection')
const Posts = require('./Posts')
const Users = require('./Users')



module.exports = async () => {
    await conn.models.User.bulkCreate(Users)
    await conn.models.Post.bulkCreate(Posts)
    let user = await conn.models.User.findOne({where: {id: 1}})
    console.log(await user.getPosts())
}
