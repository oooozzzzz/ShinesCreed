const { Bot, session } = require("grammy");
const { adminMenu } = require("./menus/adminMenu");
const {
	conversations,
	createConversation,
} = require("@grammyjs/conversations");
const { hydrate } = require("@grammyjs/hydrate");
const { I18n } = require("@grammyjs/i18n");
const { startMenu } = require("./menus/startMenu");
const { ownerMenu } = require("./menus/ownerMenu");
const { setShopUrl } = require("./conversations/setShopUrl");
const { changeAdminPassword } = require("./conversations/changeAdminPassword");
const { changeOwnerPassword } = require("./conversations/changeOwnerPassword");
const {
	handleNegativeReview,
} = require("./conversations/handleNegativeReview");
const { notifyUsers } = require("./conversations/notifyUsers");
const {
	handlePositiveReview,
} = require("./conversations/handlePositiveComment");
const { createPoll } = require("./conversations/createPoll");
require("dotenv").config();
const { hydrateReply, parseMode } = require("@grammyjs/parse-mode");
const token = process.env.TOKEN;

const bot = new Bot(token);
bot.use(hydrateReply);

bot.api.config.use(parseMode("HTML"));
const i18n = new I18n({
	defaultLocale: "en",
	useSession: true, // whether to store user language in session
	directory: "locales", // Load all translation files from locales/.
});

bot.use(hydrate());
bot.use(
	session({
		initial() {
			return {};
		},
	})
);

bot.use(i18n);

bot.api.setMyCommands([
	{ command: "start", description: "Menu" },
	// { command: "language", description: "Choose your language"},
]);

bot.use(conversations());
bot.use(createConversation(setShopUrl));
bot.use(createConversation(changeAdminPassword));
bot.use(createConversation(changeOwnerPassword));
bot.use(createConversation(handleNegativeReview));
bot.use(createConversation(handlePositiveReview));
bot.use(createConversation(createPoll));
bot.use(createConversation(notifyUsers));
bot.use(startMenu);
bot.use(adminMenu);
bot.use(ownerMenu);
module.exports = { bot };
