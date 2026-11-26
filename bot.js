const mineflayer = require('mineflayer');

const HOST = 'vortexx.mooo.com';
const PORT = 25565;
const NAMES = ['MinhKhoa', 'AnTran', 'LinhNguyen'];

function createBot(index) {
  const username = NAMES[index];
  console.log(`[${username}] Starting...`);
  
  const bot = mineflayer.createBot({
    host: HOST,
    port: PORT,
    username: username,
    version: '1.21.8',
    auth: 'offline'
  });

  bot.on('connect', () => console.log(`[${username}] Connected`));
  
  bot.on('login', () => {
    console.log(`[${username}] Login OK`);
  });

  bot._client.on('resource_pack_send', (packet) => {
    console.log(`[${username}] Resource pack received, accepting...`);
    bot._client.write('resource_pack_receive', { result: 3 });
  });

  bot.on('spawn', () => {
    console.log(`[${username}] SPAWNED!`);
  });

  bot.on('error', (err) => console.log(`[${username}] Error: ${err.message}`));
  bot.on('kicked', (reason) => console.log(`[${username}] Kicked: ${JSON.stringify(reason)}`));
  bot.on('end', (reason) => console.log(`[${username}] End: ${reason}`));

  return bot;
}

console.log('Starting bots...');
for (let i = 0; i < NAMES.length; i++) {
  setTimeout(() => createBot(i), i * 8000);
}

setInterval(() => console.log('alive'), 60000);
