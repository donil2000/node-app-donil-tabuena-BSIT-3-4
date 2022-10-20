const read = require ('./read')
const add = require ('./add')
const del = require('./del')
// const present = require('./present')
const update = require('./update')

const cmd = process.argv

if  (cmd[2]==='add' ) {

const note = {
    "id":cmd[3] ,
    "title" : cmd [4] ,
    "body" :cmd [5]
}

const oldNote = read()
add(note, oldNote)

}

if (cmd [2]==='read') {
console.log(read())

}

if ( cmd[2]==='delete') {
    id = cmd[3]
    oldNote = read()
    del(id,oldNote)
    read()
}


if (cmd[2]== 'update') {
    let note  = {
        id: cmd[3],
        title: cmd[4],
        body: cmd[5]
    }
    const oldNote = read ()
    update (note, oldNote)
    console.log (update)
 }  











