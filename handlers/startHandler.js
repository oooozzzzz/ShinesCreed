const { createUser } = require("../db");

const { chooseLanguageMenu } = require("../menus/startMenu");

module.exports = async (ctx) => {
	await ctx.msg.delete();
	ctx.replyWithVideo("BAACAgIAAxkBAAIBcmbW5wipro2CcrDnJioW4YbRI2jFAAKoWQAC9eq4SozBrKzkZoxRNQQ", { reply_markup: chooseLanguageMenu, caption: ctx.t("start-lang") });
	// await ctx.reply(ctx.t("start-lang"), {reply_markup: chooseLanguageMenu})
	await createUser(ctx.from.id, ctx.from.first_name);
};
