// add User(id, name, roomname)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
	constructor() {
		this.users = [];
	}
	addUser(id, name, room) {
		var user = {
			id, 
			name: name,
			room: room
		};
		this.users.push(user);
		return user;
	}
	removeUser(id) {
		var user = this.getUser(id);
		
		if (user) {
			this.users = this.users.filter((user) => user.id !== id);
		}
		
		return user;
	}
	getUser(id) {
		return this.users.filter((user) => user.id === id)[0];
	}
	checkUser(name, room) {
		return this.users.filter((user) => (user.name.toLowerCase() === name.toLowerCase() && user.room.toLowerCase() === room.toLowerCase()))[0];
	}
	getUserList(room) {
		var users = this.users.filter((user) => user.room === room);
		var namesArray = users.map((user) => user.name);
		
		return namesArray;
	}
	getRoomList() {
		var rooms = [];
		this.users.forEach(function(user) {
			rooms.push(user.room);
		});
		return rooms;
	}
}

module.exports = {Users};

//class Person {
//	constructor (name, age) {
//		this.name = name;
//		this.age = age;
//	}
//	getUserDescription () {
//		return `${this.name} is ${this.age} year(s) old.`;
//	}
//}
//
//var me = new Person('Rob', 37);
//var description = me.getUserDescription();
//
//console.log('this.name', me.name);
//console.log('this.age', me.age);
//console.log('description', description);