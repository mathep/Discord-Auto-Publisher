module.exports = async (interaction) => {
    // Only handle slash commands
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'status') {
        const uptime = Math.floor(process.uptime());
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = uptime % 60;

        await interaction.reply({
            content: `🤖 **Discord Auto Publisher Status**\n` +
                     `**Uptime:** ${hours}h ${minutes}m ${seconds}s\n` +
                     `**Latency:** ${interaction.client.ws.ping}ms\n` +
                     `**Guilds:** ${interaction.client.guilds.cache.size}`,
            ephemeral: true
        });
    }

    if (commandName === 'test-publish') {
        const isNews = interaction.channel.type === 'news';
        await interaction.reply({
            content: isNews 
                ? "✅ This is an announcement channel. The bot is ready to publish here!" 
                : "❌ This is not an announcement channel. The bot will only publish in News channels.",
            ephemeral: true
        });
    }
};
