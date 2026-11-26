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
  const bot = mineflayer.createBot({
    host: HOST,
    port: PORT,
    username: username,
    version: false,
    auth: 'offline'
  });

  bot.on('login', () => {
    console.log(`[${username}] Logged in`);
  });

  bot.on('spawn', () => {
    console.log(`[${username}] Spawned in world`);
  });

  bot.on('error', (err) => {
    console.log(`[${username}] Error: ${err.message}`);
  });

  bot.on('kicked', (reason) => {
    console.log(`[${username}] Kicked: ${JSON.stringify(reason)}`);
  });

  bot.on('end', (reason) => {
    console.log(`[${username}] Ended: ${reason}`);
  });

  return bot;
}

const bots = [];
for (let i = 0; i < NAMES.length; i++) {
  setTimeout(() => {
    bots.push(createBot(i));
  }, i * 3000);
}

setInterval(() => {}, 1000);
