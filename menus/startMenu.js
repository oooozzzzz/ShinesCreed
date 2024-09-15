const { Menu } = require("@grammyjs/menu");
const { langVideo, aboutUsVideo } = require("../media/videos.js");
const { startMenuVideo } = require("../media/videos.js");
const {
	servicesMenu,
	smPromotion,
	videoProduction,
	freestyleShowMenu,
} = require("./servicesMenu");
const { portfolioMenu } = require("./portfolioMenu");
const {
	lightShowMenu,
	baseShow,
	premiumShow,
	exclusiveShow,
} = require("./lightShowsMenu");
const { contactsMenu } = require("./contactsMenu");
const {
	otherShowsMenu,
	pixelPoi,
	ledScreen,
	jumpers,
	seerCircle,
	ledDrums,
	laserShow,
	acrobaticShow,
	customShow,
	neonShow,
} = require("./otherShowsMenu");
const {
	smPromotionMenu,
	compositions,
	bloggers,
	events,
	movies,
	brands,
} = require("./smPromotionMenu.js");
const { videoProductionMenu, record, montage, turnkey } = require("./videoProductionMenu.js");

const startMenu = new Menu("startMenu")
	.text(
		(ctx) => ctx.t("about"),
		async (ctx) => {
			try {
				ctx.menu.nav("back-menu");
				await ctx.msg.editMedia(aboutUsVideo);
				await ctx.msg.editCaption(
					ctx.t("about-text", { name: ctx.from?.first_name }),
					{
						parse_mode: "HTML",
					}
				);
			} catch (error) {
				console.log(error);
			}
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("services"),
		async (ctx) => {
			ctx.msg.editCaption(ctx.t("services_text"), {
				reply_markup: servicesMenu,
			});
		}
	)
	.row()
	.url((ctx) => ctx.t("order_show"), "https://forms.gle/FZUVktsYKeejbDgT7")
	.row()
	.url(
		(ctx) => ctx.t("order_ad"),
		"https://docs.google.com/forms/d/1ACb3bdapD-_xkhoa8GaAC8I3tdTdO1V7jjkAG1LMuE8/edit"
	)
	.row()
	.text(
		(ctx) => ctx.t("portfolio"),
		async (ctx) => {
			try {
				await ctx.msg.editCaption(ctx.t("portfolio-text"), {
					parse_mode: "HTML",
					reply_markup: portfolioMenu,
				});
			} catch (error) {}
		}
	)
	.row()
	.url((ctx) => ctx.t("leave_review"), "https://forms.gle/LbSvfrEDMhzXTgZG7")
	.row()
	.submenu((ctx) => ctx.t("contacts"), "contacts-menu");

const backMenu = new Menu("back-menu")
	.submenu((ctx) => ctx.t("contacts"), "contacts-menu")
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			try {
				await ctx.msg.editMedia(startMenuVideo);
				await ctx.msg.editCaption(ctx.t("start"), { reply_markup: startMenu });
			} catch (error) {}
		}
	);

const chooseLanguageMenu = new Menu("chooseLanguageMenu")
	.text("🇷🇺", async (ctx) => {
		await ctx.i18n.setLocale("ru");
		try {
			await ctx.editMessageMedia(startMenuVideo);
			await ctx.msg.editCaption(ctx.t("start"), { reply_markup: startMenu });
		} catch (error) {
			console.log(error.message);
		}
	})
	.text("🇬🇧", async (ctx) => {
		await ctx.i18n.setLocale("en");
		try {
			await ctx.editMessageMedia(startMenuVideo);
			await ctx.msg.editCaption(ctx.t("start"), { reply_markup: startMenu });
		} catch (error) {
			console.log(error.message);
		}
	})
	.text("🇦🇪", async (ctx) => {
		await ctx.i18n.setLocale("ar");
		try {
			await ctx.editMessageMedia(startMenuVideo);
			await ctx.msg.editCaption(ctx.t("start"), { reply_markup: startMenu });
		} catch (error) {
			console.log(error.message);
		}
	});

startMenu.register([
	chooseLanguageMenu,
	smPromotionMenu,
	servicesMenu,
	smPromotion,
	videoProduction,
	freestyleShowMenu,
	lightShowMenu,
	baseShow,
	premiumShow,
	exclusiveShow,
	contactsMenu,
	portfolioMenu,
	backMenu,
	otherShowsMenu,
	pixelPoi,
	ledScreen,
	jumpers,
	seerCircle,
	ledDrums,
	laserShow,
	neonShow,
	acrobaticShow,
	customShow,
	compositions,
	brands,
	movies,
	events,
	bloggers,
	videoProductionMenu,
	record,
	montage,
	turnkey,
]);

module.exports = { startMenu, chooseLanguageMenu };
