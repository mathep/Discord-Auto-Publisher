# Discord Auto Publisher

An efficient, lightweight Discord bot designed to automatically publish (cross-post) messages in announcement channels. Built with `discord.js-light` for minimal resource usage, it ensures updates reach all following servers instantly.

> [!CAUTION]
> **SECURITY WARNING:** This bot requires your **Discord Bot Token**. **Never share your token or the `.env` file with anyone.** If someone gets your token, they have full control over your bot and its associated permissions.

## Features

- **Automated Crossposting**: Instantly publishes messages in News/Announcement channels.
- **Selective Filtering**: Configure specific keywords or required roles to trigger a publish.
- **Blacklist Support**: Exclude certain announcement channels from being processed.
- **Dedicated Logging**: Sends a status update to a designated log channel upon every successful publish.
- **Slash Commands**: Includes `/status` and `/test-publish` for easy configuration and health checks.
- **Lightweight Architecture**: Optimized for performance with `discord.js-light` and `p-queue`.

## Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-link>
   cd "Discord-Auto-Publisher"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a file named `.env` in the root directory and add your credentials:
   ```env
   BOT_TOKEN=YOUR_BOT_TOKEN_HERE
   APPLICATION_ID=YOUR_APPLICATION_ID_HERE
   ```

## Configuration

1. **Bot Settings**: Open `config.json` and configure the basics:
   - `botOwner`: Your Discord User ID.
   - `publishing.log_channel_id`: (Optional) Channel ID where the bot should send success logs.

2. **Filtering (Optional)**:
   - `publishing.publish_keywords`: Add tags like `["#pub"]` to only publish messages containing those words.
   - `publishing.allowed_roles`: Add Role IDs to only publish messages from authorized members.

3. **Register Commands**:
   Run the following script once to register the slash commands with Discord:
   ```bash
   node scripts/deploy-commands.js
   ```

## Usage

Start the bot using:
```bash
npm start
```

The bot will:
1. Log in and initialize its event handlers.
2. Listen for messages in announcement channels.
3. Apply filtering rules (keywords, roles, blacklist).
4. Publish the message to all followers and log the action if successful.

## Disclaimer

This project is for educational purposes only. Automated publishing should comply with the Discord Developer Terms of Service. Use at your own risk. The developer is not responsible for any server issues or account bans resulting from its use.
