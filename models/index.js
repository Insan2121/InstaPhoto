const conn = require('./connection');
const Post = require('./Post');
const User = require('./User')

//relations
User.hasMany(Post,{foreignKey: 'user_id'})
Post.belongsTo(User, {foreignKey: 'user_id'})


//sync
const giveSeeds = require('../seeds')
var force = true
conn.sync({
    force
}).then(()=> {
    console.log("database syncronized")
    if (force) {
        giveSeeds();    
    }
    
}).catch((error)=>{
    console.log("Error", error)
})

module.exports = conn