const { Menu } = require("@grammyjs/menu");
const {
	compositionsVideo,
	brandsVideo,
	eventsVideo,
	bloggersVideo,
	moviesVideo,
	startMenuVideo,
} = require("../media/videos");

const smPromotionMenu = new Menu("sm-promotion-menu")
	.text(
		(ctx) => ctx.t("compositions"),
		async (ctx) => {
			ctx.menu.nav("compositions-menu");
			await ctx.msg.editMedia(compositionsVideo);
			await ctx.msg.editCaption(ctx.t("compositions_text"));
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("brands"),
		async (ctx) => {
			ctx.menu.nav("brands-menu");
			await ctx.msg.editMedia(brandsVideo);
			await ctx.msg.editCaption(ctx.t("brands_text"));
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("events"),
		async (ctx) => {
			ctx.menu.nav("events-menu");
			await ctx.msg.editMedia(eventsVideo);
			await ctx.msg.editCaption(ctx.t("events_text"));
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("bloggers"),
		async (ctx) => {
			ctx.menu.nav("bloggers-menu");
			await ctx.msg.editMedia(bloggersVideo);
			await ctx.msg.editCaption(ctx.t("bloggers_text"));
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("movies"),
		async (ctx) => {
			ctx.menu.nav("movies-menu");
			await ctx.msg.editMedia(moviesVideo);
			await ctx.msg.editCaption(ctx.t("movies_text"));
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

const compositions = new Menu("compositions-menu")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://youtube.com/playlist?list=PLmttDpYhvh0-4rlLxQoNMNIWbr9TGhw1G&si=URxS9JAYtc4H0dhX"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("sm-promotion-menu");
			await ctx.msg.editMedia(startMenuVideo);
			await ctx.msg.editCaption(ctx.t("services_text"));
		}
	);
const brands = new Menu("brands-menu")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://www.youtube.com/playlist?list=PLmttDpYhvh09we1iie2tEnz853G7pqzSJ"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("sm-promotion-menu");
			await ctx.msg.editMedia(startMenuVideo);
			await ctx.msg.editCaption(ctx.t("services_text"));
		}
	);
const bloggers = new Menu("bloggers-menu")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://youtube.com/playlist?list=PLmttDpYhvh0_kCcoLBBKys0G3BMeMEixG&si=RbDVxPZ_FBieKJbJ"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("sm-promotion-menu");
			await ctx.msg.editMedia(startMenuVideo);
			await ctx.msg.editCaption(ctx.t("services_text"));
		}
	);
const events = new Menu("events-menu")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://www.youtube.com/playlist?list=PLmttDpYhvh0-6mzFCvDeK_SgudhQx5dEd"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("sm-promotion-menu");
			await ctx.msg.editMedia(startMenuVideo);
			await ctx.msg.editCaption(ctx.t("services_text"));
		}
	);
const movies = new Menu("movies-menu")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://www.youtube.com/playlist?list=PLmttDpYhvh08gTUY2TTK1yKaZ_Gi-4l0l"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("sm-promotion-menu");
			await ctx.msg.editMedia(startMenuVideo);
			await ctx.msg.editCaption(ctx.t("services_text"));
		}
	);

module.exports = {
	smPromotionMenu,
	compositions,
	brands,
	movies,
	events,
	bloggers,
};
