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

// var moonarray = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];
var newmoon = '🌑';
var waxingcrescent = '🌒';
var firstquarter = '🌓';
var waxinggibbous = '🌔';
var fullmoon = '🌕';
var waninggibbous = '🌖';
var lastquarter = '🌗';
var waningcrescent = '🌘';

// full moon
var nov = new Date(2018, 11, 23, 21, 39, 0);
var dec = new Date(2018, 12, 22, 12, 49, 0);
var jan = new Date(2019, 1, 20, 21, 17, 0);
var dates = [nov, dec, jan]

var fullmoon = schedule.scheduleJob(dates, function(){
  client.channels.get(gamb).send(fullmoon);
  console.log('moon stuff\n' + fullmoon);
});

client.on('message', (message, err) => {
  if (message.author.bot) return;
  if (message.content.match(/moon/gi)) {
    message.channel.send('🌕');
  }
});
