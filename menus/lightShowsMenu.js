const { Menu } = require("@grammyjs/menu");
const { startMenuVideo, baseVideo, freestyleVideo } = require("../media/videos.js");
const { premiumVideo } = require("../media/videos.js");
const { exclusiveVideo } = require("../media/videos.js");

const lightShowMenu = new Menu("light_show-menu")
	.text(
		(ctx) => ctx.t("base"),
		async (ctx) => {
			ctx.menu.nav("base-show-menu");
			await ctx.msg.editMedia(baseVideo);
			await ctx.msg.editCaption(ctx.t("base_text"), {
				parse_mode: "HTML",
			});
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("premium"),
		async (ctx) => {
			ctx.menu.nav("premium-show-menu");
			await ctx.msg.editMedia(premiumVideo);
			await ctx.msg.editCaption(ctx.t("premium_text"), {
				parse_mode: "HTML",
			});
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("exclusive"),
		async (ctx) => {
			ctx.menu.nav("exclusive-show-menu");
			await ctx.msg.editMedia(exclusiveVideo);
			await ctx.msg.editCaption(ctx.t("exclusive_text"), {
				parse_mode: "HTML",
			});
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("freestyle_show"),
		async (ctx) => {
			ctx.menu.nav("freestyle_show-services");
			await ctx.msg.editMedia(freestyleVideo);
			await ctx.msg.editCaption(ctx.t("freestyle_show_text"), {
				parse_mode: "HTML",
			});
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("other_shows"),
		async (ctx) => {
			ctx.menu.nav("other_shows-menu");
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("back"),
		(ctx) => {
			ctx.menu.nav("services-menu");
		}
	);

const baseShow = new Menu("base-show-menu")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://www.youtube.com/playlist?list=PLmttDpYhvh0-IVOFrF2Gza3qocsmrLT83"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("light_show-menu");
			await ctx.msg.editMedia(startMenuVideo);
			await ctx.msg.editCaption(ctx.t("services_text"), {});
		}
	);

const premiumShow = new Menu("premium-show-menu")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://www.youtube.com/playlist?list=PLmttDpYhvh0_MgtiqhGcDfz-U4-Zubiyn"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("light_show-menu");
			await ctx.msg.editMedia(startMenuVideo);
			await ctx.msg.editCaption(ctx.t("services_text"), {});
		}
	);

const exclusiveShow = new Menu("exclusive-show-menu")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://www.youtube.com/playlist?list=PLmttDpYhvh08PB42nXuo_2xD_pCFE7LRH"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("light_show-menu");
			await ctx.msg.editMedia(startMenuVideo);
			await ctx.msg.editCaption(ctx.t("services_text"), {});
		}
	);

module.exports = { lightShowMenu, baseShow, premiumShow, exclusiveShow };
