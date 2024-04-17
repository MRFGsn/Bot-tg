// Import necessary modules
const Telegraf = require('telegraf');
const ytdl = require('ytdl-core');

// Initialize the Telegram bot
const bot = new Telegraf('YOUR_TELEGRAM_BOT_TOKEN');

// Command to handle YouTube video download
bot.command('download', async (ctx) => {
    const videoLink = ctx.message.text.split(' ').slice(1).join(' ');
    const info = await ytdl.getInfo(videoLink);
    const videoStream = ytdl(videoLink, { quality: 'highest' });

    ctx.reply(`Download your video from: ${info.videoDetails.title}`);
    ctx.replyWithVideo({ source: videoStream });
});

// Start the bot
bot.launch();
