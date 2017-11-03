
import db from '../db'

export default db.defineModel('users', {
    email: {
        type: db.STRING(100),
        unique: true
    },
    passwd: db.STRING(100),
    birth: db.STRING(10),
    name: db.STRING(100),
    gender: db.BOOLEAN
});
