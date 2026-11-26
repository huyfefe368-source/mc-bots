const mineflayer = require('mineflayer');

const HOST = 'vortexx.mooo.com';
const PORT = 25565;
const NAMES = ['MinhKhoa', 'AnTran', 'LinhNguyen', 'DucPham', 'HieuLe'];

function createBot(index) {
  const username = NAMES[index];
  console.log(`[${username}] Creating with version 1.21.8...`);
  
  const bot = mineflayer.createBot({
    host: HOST,
    port: PORT,
    username: username,
    version: '1.21.8',
    auth: 'offline'
  });

  bot.on('connect', () => console.log(`[${username}] TCP OK`));
  bot.on('login', () => console.log(`[${username}] LOGIN OK`));
  bot.on('spawn', () => console.log(`[${username}] SPAWN OK!`));
  bot.on('error', (err) => console.log(`[${username}] ERR: ${err.message}`));
  bot.on('kicked', (reason) => console.log(`[${username}] KICK: ${JSON.stringify(reason)}`));
  bot.on('end', (reason) => console.log(`[${username}] END: ${reason}`));

  return bot;
}

console.log('Starting bots with 1.21.8...');
for (let i = 0; i < NAMES.length; i++) {
  setTimeout(() => createBot(i), i * 6000);
}

setInterval(() => console.log('alive'), 60000);
