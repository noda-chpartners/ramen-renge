export const site = {
	name: "ラーメン居酒屋 蓮華",
	url: "https://ramen-renge.pages.dev",
	description:
		"埼玉県飯能市、飯能駅徒歩1分のラーメン居酒屋 蓮華。安くて美味しく、気軽に呑める12席のカウンターです。営業は18:30から。定休日は水曜・日曜。ご予約はお電話で。",
	phoneDisplay: "0429-78-7642",
	phoneTel: "0429787642",
	postal: "〒357-0035",
	address: "埼玉県飯能市柳町23-13",
	station: "飯能駅 徒歩1分",
	hours: "18:30〜",
	closed: "水曜日・日曜日",
	seats: "12席",
	smoking: "喫煙可能",
	takeout: "テイクアウトあり（店頭でのお持ち帰りのみ）",
	parking: "駐車場なし（隣がコインパーキング）",
	payment: "現金・カード・電子マネー・PayPay",
	instagram: "https://www.instagram.com/hannouizakayarenge_y",
	instagramHandle: "@hannouizakayarenge_y",
	fleurirName: "Fleurir",
	fleurirUrl: "https://fleurir.pages.dev/",
	tagline: "安くて美味しく、気軽に呑める。",
} as const;

export const nav = [
	{ href: "#about", label: "お店について" },
	{ href: "#featured", label: "おすすめ" },
	{ href: "#menu", label: "メニュー" },
	{ href: "#gallery", label: "写真" },
	{ href: "#access", label: "アクセス" },
] as const;

export const facts = [
	{ label: "席数", value: site.seats },
	{ label: "喫煙", value: site.smoking },
	{ label: "テイクアウト", value: site.takeout },
	{ label: "駐車場", value: site.parking },
	{ label: "お支払い", value: site.payment },
	{ label: "ご予約", value: "お電話にて" },
] as const;
