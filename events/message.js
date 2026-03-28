const
	crosspost = require('../modules/Crosspost.js'),
	{ commands } = require('../bot.js'),
	{ botOwner, publishing } = require('../config.json');

module.exports = async message => {
	// Publish (crosspost) the message
	if (message.channel.type === 'news') {
		const { publish_keywords, allowed_roles, blacklisted_channels } = publishing;

		// 1. Check Blacklist
		if (blacklisted_channels && blacklisted_channels.includes(message.channel.id)) return;

		// 2. Check Roles (if configured)
		if (allowed_roles && allowed_roles.length > 0) {
			const hasRole = message.member?.roles.cache.some(role => allowed_roles.includes(role.id));
			if (!hasRole) return;
		}

		// 3. Check Keywords (if configured)
		if (publish_keywords && publish_keywords.length > 0) {
			const content = message.content.toLowerCase();
			const hasKeyword = publish_keywords.some(keyword => content.includes(keyword.toLowerCase()));
			if (!hasKeyword) return;
		}

		crosspost(message);
	}

	// DM commands handler for the bot owner
	if (message.channel.type === 'dm' && message.author.id === botOwner) {
		const [command, argument] = message.content
			.toLowerCase()
			.split(/ +/g)
			.splice(0, 2);

		const cmd = commands.get(command);
		if (!cmd) return;
		cmd.run(message, argument);
	}
};