
import model from './model'
console.log(model)
let
    Pet = model.Pets,
    User = model.User;

(async () => {
    var user = await User.create({
        name: 'sam-4',
        gender: false,
        email: 'sam-' + Date.now() + '@sam.pet',
        birth: '1990-08-08',
        passwd: 'sam'
    });
    console.log('created: ' + JSON.stringify(user));
    console.log(Pet)
    var dog = await Pet.create({
        ownerId: user.id,
        name: 'Odie',
        gender: false,
        birth: '2008-08-08',
    });
    console.log('created: ' + JSON.stringify(dog));
})();