const mineflayer = require('mineflayer');

const HOST = 'vortexx.mooo.com';
const PORT = 25565;
const PASSWORD = 'BotPass123';
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
    console.log(`[${username}] Connected`);
  });

  bot.on('spawn', () => {
    console.log(`[${username}] Spawned`);
    setTimeout(() => {
      bot.chat(`/register ${PASSWORD} ${PASSWORD}`);
      console.log(`[${username}] Sent /register`);
    }, 1500);
    setTimeout(() => {
      bot.chat(`/login ${PASSWORD}`);
      console.log(`[${username}] Sent /login`);
    }, 3000);
  });

  bot.on('message', (msg) => {
    const text = msg.toString();
    if (text.includes('register') || text.includes('login') || text.includes('AuthMe')) {
      console.log(`[${username}] Chat: ${text}`);
    }
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
  }, i * 4000);
}

setInterval(() => {}, 1000);
