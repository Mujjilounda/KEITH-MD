const API_URL = 'https://favqs.com/api/qotd';

module.exports = async (context) => {
    const { client, m } = context;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch data');

        const { fact } = await response.json();
        const quoteMessage = `
  ┏━━━ *KEITH-FACT* ━━━◆                     
  ┃
*◇* _${data.quote.body}_
  ┃   
  ┃     *◇* *AUTHOR:* ${data.quote.author}
  ┃      
  ╭──────────────◆
  │ *_Powered by keithkeizzah._*
  ╰──────────────◆
        `;

        await client.sendMessage(m.chat, { text: factMessage }, { quoted: m });
    } catch (error) {
        console.error('Error fetching data:', error);
        await client.sendMessage(m.chat, { text: 'An error occurred while fetching the fact.' }, { quoted: m });
    }
};