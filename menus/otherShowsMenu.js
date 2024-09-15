const { Menu } = require("@grammyjs/menu");
const { poiVideo, neonVideo } = require("../media/videos.js");
const { startMenuVideo } = require("../media/videos.js");
const { ledScreenVideo } = require("../media/videos.js");
const { jumpersVideo } = require("../media/videos.js");
const { seerCircleVideo } = require("../media/videos.js");
const { drumsVideo } = require("../media/videos.js");
const { lazersVideo } = require("../media/videos.js");
const { customShowVideo } = require("../media/videos.js");
const { acrobaticVideo } = require("../media/videos.js");

const otherShowsMenu = new Menu("other_shows-menu")
	.text(
		(ctx) => ctx.t("pixel_poi"),
		async (ctx) => {
			ctx.menu.nav("pixel_poi_show");
			await ctx.msg.editMedia(poiVideo);
			await ctx.msg.editCaption(ctx.t("pixel_poi_text"), {
				parse_mode: "HTML",
			});
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("led_screen"),
		async (ctx) => {
			ctx.menu.nav("led_screen_show");
			await ctx.msg.editMedia(ledScreenVideo);
			await ctx.msg.editCaption(ctx.t("led_screen_text"), {
				parse_mode: "HTML",
			});
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("led_jumpers"),
		async (ctx) => {
			ctx.menu.nav("jumpers_show");
			await ctx.msg.editMedia(jumpersVideo);
			await ctx.msg.editCaption(ctx.t("led_jumpers_text"), {
				parse_mode: "HTML",
			});
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("seer_cicle"),
		async (ctx) => {
			ctx.menu.nav("seer_circle_show");
			await ctx.msg.editMedia(seerCircleVideo);
			await ctx.msg.editCaption(ctx.t("seer_cicle_text"), {
				parse_mode: "HTML",
			});
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("led_drums"),
		async (ctx) => {
			ctx.menu.nav("led_drums_show");
			await ctx.msg.editMedia(drumsVideo);
			await ctx.msg.editCaption(ctx.t("led_drums_text"), {
				parse_mode: "HTML",
			});
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("laser_show"),
		async (ctx) => {
			ctx.menu.nav("laser_show");
			await ctx.msg.editMedia(lazersVideo);
			await ctx.msg.editCaption(ctx.t("laser_show_text"), {
				parse_mode: "HTML",
			});
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("neon_show"),
		async (ctx) => {
			ctx.menu.nav("neon_show");
			await ctx.msg.editMedia(neonVideo);
			await ctx.msg.editCaption(ctx.t("neon_show_text"), {
				parse_mode: "HTML",
			});
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("acrobatic_show"),
		async (ctx) => {
			ctx.menu.nav("acrobatic_show");
			await ctx.msg.editMedia(acrobaticVideo);
			await ctx.msg.editCaption(ctx.t("acrobatic_show_text"), {
				parse_mode: "HTML",
			});
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("custom_show"),
		async (ctx) => {
			ctx.menu.nav("custom_show");
			await ctx.msg.editMedia(customShowVideo);
			await ctx.msg.editCaption(ctx.t("custom_show_text"), {
				parse_mode: "HTML",
			});
		}
	)
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("light_show-menu");
		}
	);



const pixelPoi = new Menu("pixel_poi_show")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://www.youtube.com/playlist?list=PLmttDpYhvh09iCSAwPwKApEKkftNJg5Nr"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("other_shows-menu");
			await ctx.msg.editMedia(startMenuVideo);
		}
	);

const ledScreen = new Menu("led_screen_show")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://www.youtube.com/playlist?list=PLmttDpYhvh09bV8RQbCQkgWgnqAJwWFwr"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")

	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("other_shows-menu");
			await ctx.msg.editMedia(startMenuVideo);
		}
	);

const jumpers = new Menu("jumpers_show")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://www.youtube.com/playlist?list=PLmttDpYhvh09sxBQEYzFGaA-vbWcy3S0L"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")

	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("other_shows-menu");
			await ctx.msg.editMedia(startMenuVideo);
		}
	);

const seerCircle = new Menu("seer_circle_show")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://www.youtube.com/playlist?list=PLmttDpYhvh09U7t65_LHTnIv1Unq1B881"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")

	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("other_shows-menu");
			await ctx.msg.editMedia(startMenuVideo);
		}
	);

const ledDrums = new Menu("led_drums_show")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://www.youtube.com/playlist?list=PLmttDpYhvh0-w1NV5E4lzuGD7NU3zhv6K"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")

	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("other_shows-menu");
			await ctx.msg.editMedia(startMenuVideo);
		}
	);

const laserShow = new Menu("laser_show")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://youtube.com/playlist?list=PLmttDpYhvh088CE-T0No2CITNuqHlv6uo&si=Pcjhsr24AKEgBnug"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")

	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("other_shows-menu");
			await ctx.msg.editMedia(startMenuVideo);
		}
	);
	
const neonShow = new Menu("neon_show")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://youtube.com/playlist?list=PLmttDpYhvh09aNPfBebU3rZ5t2_5I1-hm&si=t4Q7Rt8Sh14oYqGf"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")

	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("other_shows-menu");
			await ctx.msg.editMedia(startMenuVideo);
		}
	);

const acrobaticShow = new Menu("acrobatic_show")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://youtube.com/playlist?list=PLmttDpYhvh0-1kryixyHEnDg5cfllV4CV&si=wS4TgxsvTJUKVw1D"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")

	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("other_shows-menu");
			await ctx.msg.editMedia(startMenuVideo);
		}
	);

const customShow = new Menu("custom_show")
	.url(
		(ctx) => ctx.t("more_videos"),
		"https://www.youtube.com/playlist?list=PLmttDpYhvh095EPl1_IYVl-i6S7HAtTfc"
	)
	.url((ctx) => ctx.t("order"), "https://forms.gle/FZUVktsYKeejbDgT7")

	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			ctx.menu.nav("other_shows-menu");
			await ctx.msg.editMedia(startMenuVideo);
		}
	);

module.exports = {
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
};
