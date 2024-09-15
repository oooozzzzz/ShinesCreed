const { Menu } = require("@grammyjs/menu");

const contactsMenu = new Menu("contacts-menu")
	.url(
		"LinkedIn",
		"https://www.linkedin.com/in/shines-creed-784100259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
	)
	.row()
	.url("TikTok", "https://www.tiktok.com/@hishnikisveta")
	.row()
	.url("Instagram", "https://instagram.com/shines_creed_official")
	.row()
	.url("YouTube", "https://youtube.com/@Shines_creed")
	.row()
	.url("VK", "https://vk.com/shinescreed")
	.row()
	.row()
	.text(
		(ctx) => ctx.t("phone"),
		async (ctx) => {
			ctx.menu.nav("phones-menu")
			await ctx.msg.editCaption(ctx.t("phone_text"));
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("startMenu");
			await ctx.msg.editCaption(ctx.t("start"));
		}
	);

const phonesMenu = new Menu("phones-menu").text(
	(ctx) => ctx.t("back"),
	async (ctx) => {
		ctx.menu.nav("contacts-menu")
		await ctx.msg.editCaption(ctx.t("start"));
	}
);

module.exports = { contactsMenu, phonesMenu };
