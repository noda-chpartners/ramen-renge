export type MenuItem = {
	name: string;
	price: number;
	suffix?: string;
	note?: string;
};

export type MenuGroup = {
	title: string;
	items: MenuItem[];
};

export type MenuPanel = {
	id: "food" | "drink";
	label: string;
	groups: MenuGroup[];
};

export const featured = [
	{
		name: "中華そば",
		price: 800,
		image: "ramen" as const,
		text: "チャーシュー、味玉、メンマ、海苔。",
	},
	{
		name: "サーモンソテー",
		price: 650,
		image: "salmon" as const,
		text: "レモンを添えて。",
	},
	{
		name: "だし巻き玉子",
		price: 500,
		image: "dashimaki" as const,
		text: "だしの効いた卵焼き。",
	},
	{
		name: "有頭海老焼き",
		price: 600,
		image: null,
		text: "頭付きの海老を一尾。",
	},
	{
		name: "特製唐揚げ",
		price: 650,
		image: null,
		text: "店の特製。",
	},
];

export function yen(price: number, suffix = "") {
	return `¥${price.toLocaleString("ja-JP")}${suffix}`;
}

export const menuPanels: MenuPanel[] = [
	{
		id: "food",
		label: "料理",
		groups: [
			{
				title: "一押し",
				items: [
					{ name: "中華そば", price: 800 },
					{ name: "サーモンソテー", price: 650 },
					{ name: "有頭海老焼き", price: 600 },
					{ name: "特製唐揚げ", price: 650 },
				],
			},
			{
				title: "一品料理",
				items: [
					{ name: "梅干し（2個）", price: 100 },
					{ name: "やっこ（冷・温）", price: 350 },
					{ name: "たこわさび", price: 400 },
					{ name: "塩辛", price: 400 },
					{ name: "枝豆", price: 400 },
					{ name: "きゅうりの一本漬け", price: 400 },
					{ name: "ねぎチャーシュー", price: 450 },
					{ name: "梅水晶", price: 500 },
					{ name: "漬物盛り合わせ", price: 600 },
				],
			},
			{
				title: "焼蒸料理",
				items: [
					{ name: "子持ちししゃも", price: 450 },
					{ name: "たこ焼き（6個）", price: 500 },
					{ name: "餃子（6個）", price: 500 },
					{ name: "ウインナー盛り合わせ", price: 500 },
					{ name: "だし巻き玉子", price: 500 },
					{ name: "野菜炒め", price: 550 },
					{ name: "あさりバター", price: 700 },
					{ name: "あさり酒蒸し", price: 700 },
					{ name: "ほっけ", price: 750 },
				],
			},
			{
				title: "サラダ",
				items: [
					{ name: "冷やしトマト", price: 300 },
					{ name: "シーザーサラダ", price: 500 },
					{ name: "豚しゃぶサラダ", price: 750 },
				],
			},
			{
				title: "めの一品",
				items: [
					{ name: "おにぎり（大1個）", price: 350 },
					{ name: "お茶漬け（梅・しゃけ）", price: 500 },
					{ name: "チャーハン", price: 700 },
					{ name: "焼きうどん", price: 700 },
					{ name: "焼きそば", price: 700 },
				],
			},
			{
				title: "揚げ物",
				items: [
					{ name: "揚げたこ（6個）", price: 500 },
					{ name: "なんこつ", price: 400 },
					{ name: "ポテトフライ", price: 400 },
					{ name: "ポテトもちチーズ（2個）", price: 400 },
					{ name: "海苔とチーズの春巻き（4個）", price: 400 },
					{ name: "鶏肉大葉チーズフライ（2個）", price: 400 },
					{ name: "鶏の梅しそ巻き（4個）", price: 400 },
					{ name: "山芋梅しそ巻き（4個）", price: 450 },
					{ name: "唐揚げ", price: 500 },
					{ name: "イカリング", price: 500 },
					{ name: "揚げ物ミックス", price: 1000 },
				],
			},
			{
				title: "デザート",
				items: [
					{ name: "アイス", price: 300 },
					{ name: "チュロス", price: 400 },
					{ name: "メープルケーキ", price: 500 },
					{ name: "アイス追加", price: 100, note: "メープルケーキへ" },
				],
			},
		],
	},
	{
		id: "drink",
		label: "ドリンク",
		groups: [
			{
				title: "ソフトドリンク",
				items: [
					{ name: "ウーロン茶", price: 300 },
					{ name: "お茶", price: 300 },
					{ name: "紅茶", price: 300 },
					{ name: "ジャスミン", price: 300 },
					{ name: "オレンジ", price: 300 },
					{ name: "コーラ", price: 300 },
					{ name: "ジンジャーエール", price: 300 },
					{ name: "ノンアルコールビール", price: 400 },
					{ name: "アイスのせ", price: 150, note: "追加" },
				],
			},
			{
				title: "ビール・ホッピー・サワー",
				items: [
					{ name: "生ビール（一番搾り）", price: 550 },
					{ name: "瓶ビール（ドライ・ラガー）", price: 600 },
					{ name: "レッドアイ（トマトジュース）", price: 600 },
					{ name: "ホッピー（白・黒）", price: 300 },
					{ name: "ホッピー（中）", price: 300, suffix: "〜", note: "各種あります" },
					{ name: "角ハイ", price: 400 },
					{ name: "角ハイ（レモン・グレープフルーツ）", price: 450 },
				],
			},
			{
				title: "日本酒",
				items: [
					{ name: "天覧山（本生）", price: 750, note: "300ml" },
					{ name: "八海山", price: 800, note: "300ml" },
					{ name: "澤乃井", price: 400, note: "1合" },
					{ name: "久保田 百寿", price: 550, note: "1合" },
					{ name: "久保田 萬寿", price: 1700, note: "1合" },
					{ name: "八海山", price: 500, note: "1合" },
					{ name: "八海山 大吟醸", price: 800, note: "1合" },
					{ name: "獺祭", price: 1150, note: "1合" },
					{ name: "久保田 飲み比べ（百寿・萬寿）", price: 2000 },
				],
			},
			{
				title: "カクテル",
				items: [
					{ name: "カシスウーロン", price: 550 },
					{ name: "カシスオレンジ", price: 550 },
					{ name: "カシスソーダ", price: 550 },
					{ name: "レゲエパンチ", price: 550 },
					{ name: "ピーチソーダ", price: 550 },
					{ name: "ピーチアイスティー", price: 550, note: "無糖・加糖" },
					{ name: "ロンドンビーチ", price: 550 },
					{ name: "レモネード", price: 600, note: "炭酸・レモンロック" },
					{ name: "ブラッディメアリー", price: 600 },
					{ name: "モスコミュール", price: 550 },
					{ name: "ジンソーダ", price: 550 },
					{ name: "ジンソーダ レモン", price: 600 },
					{ name: "すっきり（ロック・紅茶）", price: 550, note: "梅酒" },
					{ name: "すっきり（炭酸）", price: 550, note: "梅酒" },
					{ name: "テキーラ ゴールド", price: 300 },
					{ name: "クエルボ", price: 700 },
					{ name: "クライナー", price: 500 },
				],
			},
			{
				title: "焼酎",
				items: [
					{ name: "焼酎", price: 350, note: "水・ウーロン茶・お茶" },
					{ name: "金宮", price: 500, note: "甲類" },
					{ name: "ジンロ", price: 500, note: "甲類" },
					{ name: "鍛高譚", price: 500, note: "甲類" },
					{ name: "白", price: 500, note: "米" },
					{ name: "二階堂", price: 500, note: "麦" },
					{ name: "中々", price: 700, note: "麦" },
					{ name: "いいちこスペシャル", price: 850, note: "麦" },
					{ name: "吉四六", price: 800, note: "麦" },
					{ name: "れんと", price: 500, note: "黒糖" },
					{ name: "黒霧島", price: 600, note: "芋" },
					{ name: "魔王", price: 1000, note: "芋" },
					{ name: "炭酸割り", price: 100, note: "追加" },
				],
			},
			{
				title: "ウイスキー",
				items: [
					{ name: "ウイスキー", price: 350 },
					{ name: "碧 AO", price: 1000 },
					{ name: "知多", price: 1000 },
					{ name: "オールドパー", price: 1100 },
					{ name: "白州", price: 1200 },
					{ name: "山崎", price: 1200 },
					{ name: "山崎 12年", price: 2500 },
				],
			},
			{
				title: "ボトル",
				items: [
					{ name: "金宮", price: 2000, note: "焼酎・甲類" },
					{ name: "ジンロ", price: 2000, note: "焼酎・甲類" },
					{ name: "鍛高譚", price: 2000, note: "焼酎・甲類" },
					{ name: "二階堂", price: 2300, note: "焼酎・麦" },
					{ name: "中々", price: 3500, note: "焼酎・麦" },
					{ name: "いいちこスペシャル", price: 4000, note: "焼酎・麦" },
					{ name: "吉四六", price: 4000, note: "焼酎・麦" },
					{ name: "白", price: 3200, note: "焼酎・米" },
					{ name: "黒霧島", price: 3000, note: "焼酎・芋" },
					{ name: "れんと", price: 3000, note: "焼酎" },
					{ name: "角", price: 3200, note: "ウイスキー" },
					{ name: "オールドパー", price: 7000, note: "ウイスキー" },
					{ name: "碧 AO", price: 8000, note: "ウイスキー" },
					{ name: "氷", price: 250, note: "ボトルセット" },
					{ name: "水・お湯", price: 250, note: "ボトルセット" },
					{ name: "お茶・ウーロン・無糖紅茶", price: 350, note: "ボトルセット" },
					{ name: "ジャスミン・午後の紅茶ストレート", price: 400, note: "ボトルセット" },
				],
			},
		],
	},
];
