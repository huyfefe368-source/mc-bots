const mineflayer = require('mineflayer');

const HOST = 'vortexx.mooo.com';
const PORT = 25565;
const BOT_COUNT = 10;
const BOT_PREFIX = 'ActionBot';

function createBot(index) {
  const username = BOT_PREFIX + (index + 1);
  const bot = mineflayer.createBot({
    host: HOST,
    port: PORT,
    username: username,
    version: '1.21.8',
    auth: 'offline'
  });

  bot.on('spawn', () => {
    console.log(`[${username}] Joined the server`);
  });

  bot.on('error', (err) => {
    console.log(`[${username}] Error: ${err.message}`);
  });

  bot.on('kicked', (reason) => {
    console.log(`[${username}] Kicked: ${reason}`);
  });

  bot.on('end', () => {
    console.log(`[${username}] Disconnected`);
  });

  return bot;
}

const bots = [];
for (let i = 0; i < BOT_COUNT; i++) {
  setTimeout(() => {
    bots.push(createBot(i));
  }, i * 2000);
}

process.on('SIGINT', () => {
  bots.forEach(b => b.quit());
  process.exit();
});
