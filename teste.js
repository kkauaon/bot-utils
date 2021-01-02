const botutils = require('./index');

const embed = new botutils.EmbedBuilder()
.setTimestamp()
.setTitle('kaua')
.setFooter('doide')
.addField('as', 'kok')
.setImage('nsei')
.setThumbnail('n')

console.log(embed);

// Dont read this