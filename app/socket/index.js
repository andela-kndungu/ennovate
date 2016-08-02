import io from 'socket.io-client';
console.log('$$$$$$$$$$$$');
console.log(location.origin);
console.log('$$$$$$$$$$$');
const socket = io.connect('');

export default socket;

