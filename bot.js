const mineflayer = require('mineflayer');

const HOST = 'vortexx.mooo.com';
const PORT = 25565;

console.log('Creating single bot with detailed logging...');

const bot = mineflayer.createBot({
  host: HOST,
  port: PORT,
  username: 'TestBot',
  version: '1.21.8',
  auth: 'offline'
});

bot.on('connect', () => console.log('[CONNECT] TCP connected'));
bot.on('login', () => console.log('[LOGIN] Login packet'));
bot.on('spawn', () => console.log('[SPAWN] In world!'));

bot._client.on('packet', (data, meta) => {
  if (meta.name !== 'keep_alive' && meta.name !== 'ping') {
    console.log(`[PACKET] ${meta.name}`);
  }
});

bot.on('error', (err) => console.log(`[ERROR] ${err.message}`));
bot.on('kicked', (reason) => console.log(`[KICKED] ${JSON.stringify(reason)}`));
bot.on('end', (reason) => console.log(`[END] ${reason}`));

setTimeout(() => {
  console.log('Timeout reached, exiting');
  process.exit(0);
}, 30000);
