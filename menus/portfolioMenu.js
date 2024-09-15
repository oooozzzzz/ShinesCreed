const { Menu } = require("@grammyjs/menu");

const portfolioMenu = new Menu("portfolio-menu")
	.url(
		(ctx) => ctx.t("video_materials"),
		"https://youtube.com/playlist?list=PLmttDpYhvh08eILieMnlyq8QCpSNTdLH8&si=Fcwq1--PGnmNSHMF"
	)
	.row()
	.url(
		(ctx) => ctx.t("photo_materials"),
		"https://drive.google.com/drive/folders/1VL67v3oSl-yc-Y5xes9RVB-R9qFvlDhT?usp=sharing"
	)
	.row()
	.text(
		(ctx) => ctx.t("back"),
		async (ctx) => {
			try {
				ctx.menu.nav('startMenu')
				await ctx.msg.editCaption(ctx.t("start"));
			} catch (error) {
				console.log(error.message);
			}
		}
	);

	module.exports = {portfolioMenu}