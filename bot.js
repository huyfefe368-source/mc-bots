const mineflayer = require('mineflayer');

const HOST = 'vortexx.mooo.com';
const PORT = 25565;
const NAMES = [
  'MinhKhoa',
  'AnTran',
  'LinhNguyen',
  'DucPham',
  'HieuLe',
  'TuanAnh',
  'QuangHuy',
  'NamTran',
  'KhanhVo',
  'PhucNguyen'
];

function createBot(index) {
  const username = NAMES[index];
  console.log(`[${username}] Creating bot...`);
  
  const bot = mineflayer.createBot({
    host: HOST,
    port: PORT,
    username: username,
    version: '1.21.4',
    auth: 'offline',
    hideErrors: false
  });

  bot.on('connect', () => {
    console.log(`[${username}] TCP connected`);
  });

  bot.on('login', () => {
    console.log(`[${username}] Login packet received`);
  });

  bot.on('spawn', () => {
    console.log(`[${username}] SPAWNED IN WORLD!`);
  });

  bot.on('error', (err) => {
    console.log(`[${username}] ERROR: ${err.message}`);
  });

  bot.on('kicked', (reason) => {
    console.log(`[${username}] KICKED: ${JSON.stringify(reason)}`);
  });

  bot.on('end', (reason) => {
    console.log(`[${username}] DISCONNECTED: ${reason}`);
  });

  return bot;
}

console.log('Starting bots...');
for (let i = 0; i < NAMES.length; i++) {
  setTimeout(() => {
    createBot(i);
  }, i * 5000);
}

setInterval(() => {
  console.log('Heartbeat...');
}, 30000);
