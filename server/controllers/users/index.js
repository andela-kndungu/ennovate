import create from './create.js';
import find from './find.js';
import update from './update.js';
import login from './login.js';
import destroy from './destroy.js';

const UserController = {};

UserController.create = create;
UserController.find = find;
UserController.update = update;
UserController.login = login;
UserController.destroy = destroy;

export default UserController;

