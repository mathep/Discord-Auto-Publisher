const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config();

const commands = [
	{
		name: 'status',
		description: 'Check the bot health and status.',
	},
	{
		name: 'test-publish',
		description: 'Verify if the current channel is a valid announcement channel.',
	},
];

if (!process.env.BOT_TOKEN) {
    console.error('ERROR: BOT_TOKEN is missing in .env');
    process.exit(1);
}

const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		if (!process.env.APPLICATION_ID) {
			console.error('ERROR: APPLICATION_ID is missing in .env. You can find this in the Discord Developer Portal.');
			process.exit(1);
		}

		await rest.put(
			Routes.applicationCommands(process.env.APPLICATION_ID),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
