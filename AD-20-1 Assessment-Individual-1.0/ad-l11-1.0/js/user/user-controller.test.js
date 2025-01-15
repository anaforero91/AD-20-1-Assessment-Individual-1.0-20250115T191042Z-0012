const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('should find a user by email', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    let foundUser = userController.findByEmail("santiago@generation.org");
    expect(foundUser).toStrictEqual(user);
});

test('should find a user by ID', () => {

    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    let foundUser = userController.findById(1234);
    expect(foundUser).toStrictEqual(user);

});

