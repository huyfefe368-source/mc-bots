const mineflayer = require('mineflayer');

const HOST = 'vortexx.mooo.com';
const PORT = 25565;
const NAMES = ['MinhKhoa', 'AnTran', 'LinhNguyen', 'DucPham', 'HieuLe'];

function createBot(index) {
  const username = NAMES[index];
  console.log(`[${new Date().toISOString()}] [${username}] Starting...`);
  
  const bot = mineflayer.createBot({
    host: HOST,
    port: PORT,
    username: username,
    version: false,
    auth: 'offline'
  });

  bot.on('connect', () => console.log(`[${username}] Connected`));
  bot.on('login', () => console.log(`[${username}] Logged in, version: ${bot.version}`));
  bot.on('spawn', () => console.log(`[${username}] SPAWNED!`));
  bot.on('error', (err) => console.log(`[${username}] Error: ${err.message}`));
  bot.on('kicked', (reason) => console.log(`[${username}] Kicked: ${JSON.stringify(reason)}`));
  bot.on('end', (reason) => console.log(`[${username}] End: ${reason}`));

  return bot;
}

console.log('Bot script started');
for (let i = 0; i < NAMES.length; i++) {
  setTimeout(() => createBot(i), i * 8000);
}

setInterval(() => console.log('Alive...'), 60000);
