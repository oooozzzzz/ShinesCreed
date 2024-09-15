const { Menu } = require("@grammyjs/menu");
const { freestyleShow, freestyleShowMedia } = require("../media/mediaGroups");
const { freestyleVideo } = require("../media/videos.js");
const { startMenuVideo } = require("../media/videos.js");

const servicesMenu = new Menu("services-menu")
	.submenu((ctx) => ctx.t("light_show"), "light_show-menu")
	.row()
	.text(
		(ctx) => ctx.t("sm_promotion"),
		async (ctx) => {
			ctx.menu.nav("sm-promotion-menu");
			// await ctx.msg.editCaption(ctx.t("sm_promotion_text"), {
			// 	parse_mode: "HTML",
			// });
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("video_production"),
		async (ctx) => {
			ctx.menu.nav("video-production-menu");
			// await ctx.msg.editCaption(ctx.t("video_production_text"), {
			// 	parse_mode: "HTML",
			// });
		}
	)
	// .row()
	// .text(
	// 	(ctx) => ctx.t("freestyle_show"),
	// 	async (ctx) => {
	// 		ctx.menu.nav("freestyle_show-services");
	// 		await ctx.msg.editMedia(freestyleVideo); // TODO:
	// 		await ctx.msg.editCaption(ctx.t("freestyle_show_text"), {
	// 			parse_mode: "HTML",
	// 		});
	// 	}
	// )
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("startMenu");
			ctx.msg.editCaption(ctx.t("start"), {
				parse_mode: "HTML",
			});
		}
	);

const smPromotion = new Menu("sm-promotion")
	.url(
		(ctx) => ctx.t("order"),
		"https://docs.google.com/forms/d/1ACb3bdapD-_xkhoa8GaAC8I3tdTdO1V7jjkAG1LMuE8/edit"
	)
	.row() //
	.text(
		(ctx) => ctx.t("back"),
		(ctx) => {
			ctx.menu.nav("services-menu");
			ctx.msg.editCaption(ctx.t("services_text"), {});
		}
	);

const videoProduction = new Menu("video-production")
	.url(
		(ctx) => ctx.t("order"),
		"https://docs.google.com/forms/d/14JR29rL9NIv6CdWUNYsHGysuSKUQBkgAP8J7INljk94/edit"
	)
	.row() //
	.text(
		(ctx) => ctx.t("back"),
		(ctx) => {
			ctx.menu.nav("services-menu");
			ctx.msg.editMedia(startMenuVideo);
			ctx.msg.editCaption(ctx.t("services_text"), {});
		}
	);

const freestyleShowMenu = new Menu("freestyle_show-services")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://youtube.com/playlist?list=PLmttDpYhvh0-O9abiMOTMH3N9IXSa8lNH&si=f2F4viZsNR9eBJtr"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("services-menu");
			await ctx.msg.editMedia(startMenuVideo);
			await ctx.msg.editCaption(ctx.t("services_text"), {});
		}
	);

module.exports = {
	servicesMenu,
	smPromotion,
	videoProduction,
	freestyleShowMenu,
};
