/* # Exclusively from RAVANA 
# script original owner gos to @lasiya99X 
# Copyright 2021 All rights reserved 
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*command එකට පස්සේ වචනයක් ලියන්න ඕන"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'rwolf ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text1=RAVANA&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by RAVANA🇱🇰' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'rwolf ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text1=RAVANA&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by RAVANA🇱🇰' })

    }));
    
}
