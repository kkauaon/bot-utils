# Bot Utils

**Want a embed builder like in discord.js?**
*This is the right package!*

## Example

```js
const { EmbedBuilder } = require('@kkauabr/bot-utils');

const  embed = new  EmbedBuilder()

.setTitle("Hi")
.setDescription("Hello World!")
channel.createMessage({ embed: embed })
```

## Functions

- .setTitle(title)
- .setDescription(description)
- .setThumbnail(url)
- .setImage(url)
- .setTimestamp(date) - ***"date" is optional and must be a Date in ISO Format***
- .addField(name, value)
- .setAuthor(text, url) - ***"url" is optional***
- .setFooter(text, url) - ***"url" is optional***