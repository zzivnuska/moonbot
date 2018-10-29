// moonbot
const Discord = require('discord.js');
const client = new Discord.Client();
const private = require('./private.json');
const schedule = require('node-schedule');

const gamb = '442797683955073025';

client.login(private.token)
client.on('ready', () => {
  client.user.setActivity('with a ouija board');
  console.log(`\nThere are ${client.users.size} users in ${client.channels.size} channels of ${client.guilds.size} guilds.\n`);
});

var phases = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];
// var newmoon = '🌑';
// var waxingcrescent = '🌒';
// var firstquarter = '🌓';
// var waxinggibbous = '🌔';
// var fullmoon = '🌕';
// var waninggibbous = '🌖';
// var lastquarter = '🌗';
// var waningcrescent = '🌘';

// new moon
var novnm = new Date(2018, 11, 7, 12, 0, 0);
// first quarter
var novfq = new Date(2018, 11, 15, 18, 0, 0);
// full moon
var novfm = new Date(2018, 11, 23, 21, 39, 0);
var decfm = new Date(2018, 12, 22, 12, 49, 0);
var janfm = new Date(2019, 1, 20, 21, 17, 0);
// last quarter
var octlq = new Date(2018, 10, 31, 3, 0, 0);
var novlq = new Date(2018, 11, 30, 6, 0, 0);
// var dates = [nov, dec, jan];
var dates = [octlq, novnm, novfq, novfm, novlq, decfm, janfm];
// GET this shit tf out of hardcode

// full moon
var reminder = schedule.scheduleJob(dates, function(){
  client.channels.get(gamb).send(phases[4]);
  console.log('moon stuff\n' + phases[4]);
  // client.channels.get(gamb).send(fullmoon);
  // console.log('moon stuff\n' + fullmoon);
});

client.on('message', (message, err) => {
  if (message.author.bot) return;
  if (message.content.match(/moon/gi)) {
    message.channel.send('🌕');
  }
  if (message.content.match(/moonphase/gi)) {
    message.channel.send(phase)
  }
});

client.on('message', async message => {
  if (message.content === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
});
