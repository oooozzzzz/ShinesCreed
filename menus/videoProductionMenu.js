const { Menu } = require("@grammyjs/menu");
const {
	recordVideo,
	montageVideo,
	turnkeyVideo,
	startMenuVideo,
} = require("../media/videos");

const videoProductionMenu = new Menu("video-production-menu")
	.text(
		(ctx) => ctx.t("record"),
		async (ctx) => {
			ctx.menu.nav("record-menu");
			await ctx.msg.editMedia(recordVideo);
			ctx.msg.editCaption(ctx.t("record_text"));
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("montage"),
		async (ctx) => {
			ctx.menu.nav("montage-menu");
			await ctx.msg.editMedia(montageVideo);
			ctx.msg.editCaption(ctx.t("montage_text"));
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("turnkey"),
		async (ctx) => {
			ctx.menu.nav("turnkey-menu");
			await	ctx.msg.editMedia(turnkeyVideo);
			ctx.msg.editCaption(ctx.t("turnkey_text"));
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			// await ctx.msg.editCaption(ctx.t("services_text"));
			ctx.menu.nav("services-menu");
		}
	);

const record = new Menu("record-menu")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://www.youtube.com/playlist?list=PLmttDpYhvh08gTUY2TTK1yKaZ_Gi-4l0l"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("video-production-menu");
			ctx.msg.editMedia(startMenuVideo);
			ctx.msg.editCaption(ctx.t("services_text"));
		}
	);
const montage = new Menu("montage-menu")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://www.youtube.com/playlist?list=PLmttDpYhvh0-taYYso9c5uZV_v5KAz4gq"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("video-production-menu");
			ctx.msg.editMedia(startMenuVideo);
			ctx.msg.editCaption(ctx.t("services_text"));
		}
	);
const turnkey = new Menu("turnkey-menu")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://www.youtube.com/playlist?list=PLmttDpYhvh0-7-RCGT9s2eqGkNyAkdVW3"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("video-production-menu");
			ctx.msg.editMedia(startMenuVideo);
			ctx.msg.editCaption(ctx.t("services_text"));
		}
	);

module.exports = {
	videoProductionMenu,
	record,
	montage,
	turnkey,
};
