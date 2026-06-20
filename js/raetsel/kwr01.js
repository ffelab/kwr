const puzzleData = {
	PUZZLE_ID: "01",
	SIZE: 10,
	MIN_WORD_LENGTH: 3,
	BLACK_FIELDS: [
		[0, 0],
		[0, 2],
		[0, 7],
		[0, 9],

		[2, 2],
		[2, 7],
		[3, 1],
		[3, 8],
		[4, 4],
		[4, 5],
		[5, 0],
		[5, 4],
		[5, 5],
		[5, 9],

		[7, 0],
		[7, 2],
		[7, 7],
		[7, 9],
		[8, 3],
		[8, 6],
		[9, 0],
		[9, 4],
		[9, 5],
		[9, 9],
	],

	CLUES: {
		WAAGERECHT: {
			2: { c: "Gehört zu Wasser wie Kabel zu Strom", l: "4", s: "ROHR" },
			7: {
				c: "Bietet jenen eine Plattform, die nach 3 senkrecht wollen",
				l: "10",
				s: "HEBEBUEHNE",
			},
			9: {
				c: "Wird der getroffen, hat das empfindliche Folgen",
				l: "4",
				s: "NERV",
			},
			10: {
				c: "Zwei Wörter auf One-Hit-Stürmers singulärer Erfolgsliste",
				l: "3,3",
				s: "EINTOR",
			},
			12: { c: "Kurzer Binärcode tausendfach", l: "4", s: "KBIT" },
			14: { c: "Wurstursprung an der Rhone", l: "4", s: "LYON" },
			16: { c: "Bier aus der Saale", l: "3", s: "ALE" },
			17: { c: "Mit Geseitung wirds ganz lesbar", l: "3", s: "TAZ" },
			18: {
				c: "Freiheitlich nach denen: \nMia san mia",
				l: "10",
				s: "MUENCHENER",
			},
			21: {
				c: "Zwar Bleifrei, die Bezinnachfrage, dennoch metallhaltig",
				l: "4",
				s: "ZINN",
			},
			22: {
				c: "Der Kerl steckt mit dem \nKopf voran im Nektar",
				l: "3",
				s: "KEN",
			},
			23: {
				c: "Sollte EIGENTLICH häufiger an CAPTCHA scheitern als ich",
				l: "3",
				s: "BOT",
			},
			24: {
				c: "Hier eine missliche Lage, anderswo nicht",
				l: "3",
				s: "NOT",
			},
			25: {
				c: "Software für Leute \nohne Angst vor Commitments: In der IT wirds ekelhaft",
				l: "3",
				s: "GIT",
			},
		},
		SENKRECHT: {
			1: {
				c: "Forschung and dem einen oder anderen mag ein Schritt ... Nobelpreis sein",
				l: "3",
				s: "GEN",
			},
			2: {
				c: "Den 5 senkrecht \nursprüngliche Stimmungslage",
				l: "8",
				s: "RENITENZ",
			},
			3: { c: "Hat höchsten Stellenwert", l: "4", s: "OBEN" },
			4: { c: "Cash besingts im letzten Cover", l: "4", s: "HURT" },
			5: {
				c: "Ägyptischer Sonnengott + buchstäblicher Alkoholgehalt + Auftakt vom Countdown",
				l: "8",
				s: "REVOLTEN",
			},
			6: {
				c: "Die steht nämlich am Ende \nder lateinischen Seite",
				l: "3",
				s: "INA",
			},
			7: {
				c: "Plötzlich ganz grün hinter den Ohren nach Wutausbruch",
				l: "4",
				s: "HULK",
			},
			8: {
				c: "Gerade so: \nZeitlich und räumlich",
				l: "4",
				s: "EBEN",
			},
			10: { c: "Darin wenn fast schon zu spät", l: "4", s: "EILE" },
			11: {
				c: "Verkörpert 22 waagerecht \nim Spiel-Film",
				l: "4",
				s: "RYAN",
			},
			13: {
				c: "Architektenopus: \nDie ..., die wir ...",
				l: "6",
				s: "BAUTEN",
			},
			15: {
				c: "Der größte unter den kleinen Leopardimitatoren",
				l: "6",
				s: "OZELOT",
			},
			19: {
				c: "Wenn Geschlechtszuweisung bei der Geburt und Geschlechtsidentität übereinstimmen",
				l: "3",
				s: "CIS",
			},
			20: {
				c: "Dreifach spezialisiert \nauf Entschleimung",
				l: "3",
				s: "HNO",
			},
		},
	},
};
