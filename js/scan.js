var clues = {
	1: "→ So manche Kreaturen vor Indesign \n↓ Erbinfo vorne in Hafen-Città + \nGibt es in dick, dünn, blind + \nDer südlichste von Nordamerikas \nXXL-Seen = Police-Pendant",
	2: "↓ Möglicher Vorstand von Engel, Bischof und Gebirge",
	3: "↓ Atmen wird überbewertet, \nwenn die der Wespe nachstrebt",
	4: "↓ Knapp hinter Mercedes: \nAuto mit Geltungsdrang",
	5: "↓ Entfernt: Liegt verborgen \nim Chlorsee",
	6: "→ Dieser Stoff ist der Knaller \n↓ Klingt lustig, sind mehr Wellness",
	7: "↓ Die Four Tops gehen loco in Aca...",
	8: "↓ Zufluchtsort für Schutzsuchende",
	9: "↓ Gelispeltes Ohne-Zweck? \nKann keine Spuren von Schalenfrüchten enthalten!",
	10: "↓ Die Verbindung zwischen \nSack und Rettung",
	11: "↓ Chillige Wortwahl hätte man \nsonst streng genommen",
	12: "→ In diese Berge geht's zum schlafen\n↓ Klingt nach User-Name, ist weltberühmte Halle-Persönlichkeit",
	13: "→ Unter liebevollen \nUmständen Capitale",
	14: "→ Anstoßend, wer den gibt",
	15: "↓ Die Disziplin macht einen systematischen Deep Dive",
	16: "→ Vorwärts Platinen-Schnittstelle, rückwärts Aufforderung zum Mut",
	17: "→ Die eine steht in der Zeitung, \ndie andere führt zum Ermittlungsverfahren",
	18: "↓ Im Musical besingt gleichnamiges Waisenkind das harte Leben",
	19: "→ Englisch als Lernziel: \nDaF-Äquivalent",
	20: "→ In Oslo vermittelte Bill den historischen Handschlag zwischen Jitzchak und ihm (engl. Schreibw.)",
	21: "↓ So ein Wind lässt den Segler \n...wärts schrauben",
	22: "→ Ende: Anfang für Bernd das Brot",
	23: "↓ Wie Herbstsonne täglich untergeht",
	24: "↓ Mehr als eins in Seoul",
	25: "↓ Er und seine Schutzbefohlenen haben Angst vorm bösen Wolf",
	26: "→ Versorgungsschlauch für Fruchtwassertaucher*innen",
	27: "↓ Kein kleiner Brummer \nim London Zoo",
	28: "→ #FLECK",
	29: "↓ Steht dort im Curriculum, \nwenn's hier Analysis heißt",
	30: "→ Der Dr. hat still love for the streets",
	31: "→ Zeit kann's, doch Hinzuziehung \nvon Fachpersonal ist ratsam",
	32: "↓ Eins von 16 in der Punschessenz",
	33: "→ Ist der Rückwärts am Anfang \nvon 113 senkrecht",
	34: "→ Der Wolf erwacht zum full moon \n↓ #WANNE",
	35: "→ Frau aus Fluten + 14ter von 26 + Erste Silbensilbe = Nützliches Ding \n↓ Nichtinvasive Tapetenwechselweise",
	36: "↓ Geschwollenes Wort \nist gleich ungleich",
	37: "→ Paukschänke? \nWissensaneignung möglich!",
	38: "↓ Hat seinen Ursprung in Süßkramgebacke oder Insektenattacke",
	39: "→ Denen hinzubestellte Soße trägt nicht nur Farben vom Schlagbaum \n↓ Dieser Man: Automaten-Großmaul, Geisterjäger, Kirschenliebhaber",
	40: "→ Klingt deftig, ist \nschwäbische Marmelade \n↓ Kurz vor San Andreas: Ein schwerer Autodiebstahl",
	41: "↓ Gegenpol zum Haben",
	42: "→ Aufmerksamkeitsaufforderung: \n... 12 waagerecht!",
	43: "↓ Kurz angewandt: \n79 waagerecht in Karlsruhe",
	44: "→ Rheinischer Liebesbeweis vorm Haus? Schlappen-Monopol! \n↓ Trägt auf, wer Teint-Täuschung betreiben will",
	45: "↓ Begrenzt jeweils die beiden Köln-Seiten, egal ob gut oder schlecht",
	46: "↓ Die wird reproduktiv \nvom Winde verweht",
	47: "→ Kindeskindeskind",
	48: "↓ Folgt aufs Du während des Spanischunterrichts",
	49: "→ Blickt mit großen Augen \nzurück auf 12 waagerecht",
	50: "→ Land der hervorragenden Aussicht auf herausragende Plätze",
	51: "→ Spendet Funktionalität im Inneren wie Äußeren: Anderswo Verwechslungsgefahr zur Orgel",
	52: "↓ Das R in RBG",
	53: "→ #AQUA ",
	54: "↓ Fügt man Näs gleich hinter den Anfang wird der Zweifel zur Narkose",
	55: "→ #EHE",
	56: "↓ Den erreichen Beschwerden rund ums Hören, Riechen, Schlucken",
	57: "→ Farbe vom erstgenannten Teletubby",
	58: "↓ #ATTRAKTION",
	59: "→ Guter Ausgangspunkt um auf \neinen grünen Zweig zu kommen",
	60: "→ Wenn die Gedanken \neine Zeitreise unternehmen",
	61: "↓ Gefragtes Bier von hier bis Izmir",
	62: "↓ Verkehrter Stoff aus der Blase durch die Röhre",
	63: "→ #TOD",
	64: "→ Der Ausgang gibt den Taten \nihre ... (Aristophanes)",
	65: "↓ Immer wieder wiederholte Versionenoptimierungen",
	66: "↓ Slippery swimmer in Neuseeland",
	67: "→ Steht vor Tu als Gruselklassiker",
	68: "↓ Kreuzungskonfliktpotenzial: \nSteht sie ... muss sie stets ...",
	69: "→ RasierklingenhersteLer",
	70: "↓ Kennzeichen der Lebensmittel-Kennzeichnungsverordnung",
	71: "↓ Chat-Alternative zu ICQ: Millennials schickten Nachrichten",
	72: "→ Wie das Jahr, so die \nPläne und Ideen",
	73: "→ Blutschwamm aus verdrehter Gin-Oma",
	74: "→ Angedichteter Königsname + ausgefuchste Ärmelreserve = Ergeht verordnend durchs Amt",
	75: "↓ Schmerzhafter Ruf \nin den Umbauarbeiten",
	76: "→ An der Theke geht's um die Wurst",
	77: "↓ Den Macher bringt's \nganz durcheinander, die Unwiderstehlichkeit",
	78: "→ Eingangs steht westafrikanische Harfe bei gefährdeter Unterwasserfarbenpracht",
	79: "→ Stark verkürzt: \nStätte höheren Wissens",
	80: "→ Randständige Fluchttaste oder schriller Musikwettbewerb",
	81: "↓ Gallagher-Brothers and the others",
	82: "↓ Die gegen Rechts steigern den Antifa-Altersdurchschnitt",
	83: "→ Wannen-Schlitten der Bergrettung steckt im Kakianzug",
	84: "Scheibt manche hin, die mit da \nweiter unterschreibt",
	85: "↓ Merkspruch für den Infektionsverlauf: „Es geht \nnicht weiter ohne ...“",
	86: "→ Gezinkter Entwirrer",
	87: "↓ Abschließende Aktivität von Kletternden, Badenden, Hitzköpfigen",
	88: "↓ Zeigt schließlich Wirkung, \nnach Schubkrafteinsatz",
	89: "→ Das Kraut im Brotteig macht \neinen lustigen Sandwich\n↓ Notiert, wer das Zählen in der Escuela lernt oder Hochofen beschreibt",
	90: "↓ Standortübergreifender Internetzugang an 79 waagerechts",
	91: "↓ Passt zwischen Control und Command beim 125 senkrecht",
	92: "→ Mehrfach kommen die in den Einkaufswagen bei Freunden des weißen Schimmels, einfach Kalbs-51-waagerecht",
	93: "→ Grundlage für digitale Schrift \nund eine Art von Computerkunst",
	94: "↓ Lautschreibweise \nvon alpinen Läufern",
	95: "↓ Beansprucht Dienste: Seine Side steht dem Server gegenüber",
	96: "↓ Vermeintlicher Grund für \nmorgiges Regenwetter",
	97: "→ Finden sich irgendwo zwischen Jiaozi und Ravioli",
	98: "→ Bringt die Kids von \nA nach B nach C",
	99: "→ Traditioneller Baustoff wo der Spruch lautet: „Lieber den Spatz in der Hand als die Möwe aufm Dach“",
	100: "→ Markenname: Auf Elektro-Geräten",
	101: "↓ Könnte Funkes Farb-Franchise nach 63 waagerecht dickköpfig erweitern",
	102: "→ Klingt nach süßem Spitznamen vom DDErich",
	103: "→ Irgendein Spezial-Satellit: Großräumige Station in der Weltfremde",
	104: "↓ Rauchen für Leute, die ihre Lunge lieben aber ihre Mundschleimhaut hassen",
	105: "↓ #ITEM",
	106: "→ #INI",
	107: "↓ #NGO",
	108: "→ #CONSULTING",
	109: "↓ #ULKIGEN",
	110: "↓ #ISIS",
	111: "↓ Schmierstoff + Rauschquelle + Gegenpol zu Off = Der hat aufs richtige Fett gesetzt",
	112: "→ Regenbogenkatze singt das unendliche Miau-Lied",
	113: "→ Fettes Brot hängt ihm ein A an und will dass wir die Finger davon lassen",
	114: "↓ Kneipier in der Welt \nvon den Gelben",
	115: "→ Stereo ganz verdreht: \nWarenhaus wo die Regale aus ones and zeros bestehen",
	116: "↓ #RAW",
	117: "↓ #ETLICHE",
	118: "→ #SNK",
	119: "→ Nudeliges Ende der Gotteslästerung",
	120: "→ Bedeutet einiges in zwei words",
	121: "↓ #OZEANE",
	122: "→ Blattbasierte Flüssigkeiten oder grasbasierte Abschlagorte\n↓ Folgt dem Fan zum Tagträumer",
	123: "↓ #ECART",
	124: "↓ Jene im Kopf vom \nmusikalisch aktivsten Ed",
	125: "↓ Elegante Versuchung aus dem technischen Garten Eden",
	126: "→ Zchneebälle für Leute mit dyzlexia",
	127: "↓ Eingetragen im \nangelsächsischen Grundbuch",
	128: "→ Sam Altmans Labermaschine",
	129: "↓ Einer von zwei Hinterhofjargonlern mit verdrehten Konsonanten",
	130: "↓ Umgestellte Handlung am Ende vom Schiffswettrennen",
	131: "↓ Dem folgt Wan im Halbleiterland",
	132: "→  #EMS",
	133: "↓ Kurz kaum zu unterscheiden: Abschiedsfloskel oder Transportoption?",
	134: "→ Kommt nach Citybekanntschaft und vor Metropolenehe in der urbanen Liebesgeschichte",
	135: "↓ Darauf stehen die Amis: \nEiner von Zehn",
	136: "↓ Markant in der Tube: \nVervollständigt die Sewäsche",
	137: "↓ Eingefärbtes Code-Wort: Zauberhaft, wenn's Bibi \nzweimal spricht",
	138: "→ Sein Hüter Plan: dass es keins gibt!",
	139: "→ Vor-Kamera-Ort der Miserablen und des Hasses",
	140: "→ Stone-alt, rundum monumental",
	141: "→ Elektrisches Touristik-\nunternehmen? Bewahrer unsere kleinen Zerbrechlichkeiten!",
	142: "→ Jene ... über den Holzweg",
	143: "→ Klingt nach Kaltblüter, \nauf Windows ausführbar",
};

var video, canvas, context, imageData, detector, info, body;
var tickStarted = false;

// --- Stable center-focus ID detection ---
var confirmedId = null;
var candidateId = null;
var candidateSeen = 0;
var lostFrames = 0;
var CONFIRM_FRAMES = 6;
var LOST_FRAMES = 18;

// --- Hold/lock state ---
var isHeld = false;
var lockedId = null;
var lockedMarker = null;

var isHeld = false;
var lockedId = null;
var lockedMarker = null;
var frozenFrame = null;

function openInfo() {
	info.classList.remove("hidden");
	info.classList.add("flex");
	body.classList.add("dark");
}
function closeInfo() {
	info.classList.add("hidden");
	info.classList.remove("flex");
	body.classList.remove("dark");
}

function startCamera() {
	var display = document.getElementById("id-display");
	document.getElementById("start-btn").style.display = "none";
	document.getElementById("hold-btn").style.display = "block";

	var constraints = {
		video: {
			facingMode: { exact: "environment" },
			width: { ideal: 960 },
			height: { ideal: 540 },
		},
	};

	navigator.mediaDevices
		.getUserMedia(constraints)
		.catch(function () {
			return navigator.mediaDevices.getUserMedia({
				video: { facingMode: "environment" },
			});
		})
		.catch(function () {
			return navigator.mediaDevices.getUserMedia({
				video: true,
			});
		})
		.then(attachStream)
		.catch(function () {
			document.getElementById("id-value").textContent = "Camera error";
			document.getElementById("id-value").className = "empty";
		});
}

function attachStream(stream) {
	video.srcObject = stream;

	video.addEventListener("loadedmetadata", function () {
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;
	});

	video.addEventListener("playing", function () {
		if (!tickStarted) {
			tickStarted = true;
			requestAnimationFrame(tick);
		}
	});

	video.play().catch(function () {});
}

var lastDetectTime = 0;
var DETECT_INTERVAL = 160; // ms, ~24fps

function tick(timestamp) {
	requestAnimationFrame(tick);
	if (video.readyState !== video.HAVE_ENOUGH_DATA) return;

	if (isHeld) {
		if (frozenFrame !== null) {
			context.drawImage(frozenFrame, 0, 0);
		}
		return;
	}

	if (timestamp - lastDetectTime < DETECT_INTERVAL) return;
	lastDetectTime = timestamp;

	context.drawImage(video, 0, 0, canvas.width, canvas.height);
	imageData = context.getImageData(0, 0, canvas.width, canvas.height);

	var markers = detector.detect(imageData);
	var best = pickCenterMarker(markers);

	if (best !== null) {
		lostFrames = 0;
		drawMarker(best);

		if (best.id === candidateId) {
			candidateSeen++;
		} else {
			candidateId = best.id;
			candidateSeen = 1;
			confirmedId = null;
		}

		if (candidateSeen >= CONFIRM_FRAMES) {
			confirmedId = candidateId;
		}
	} else {
		lostFrames++;
		if (lostFrames >= LOST_FRAMES) {
			confirmedId = null;
			candidateId = null;
			candidateSeen = 0;
		}
	}

	drawCenterCrosshair();
	updateDisplay();
}

function pickCenterMarker(markers) {
	if (!markers || markers.length === 0) return null;

	var cx = canvas.width / 2;
	var cy = canvas.height / 2;
	var best = null;
	var bestDist = Infinity;

	for (var i = 0; i < markers.length; i++) {
		var corners = markers[i].corners;
		var mx = 0,
			my = 0;
		for (var j = 0; j < corners.length; j++) {
			mx += corners[j].x;
			my += corners[j].y;
		}
		mx /= corners.length;
		my /= corners.length;

		var dist = Math.sqrt((mx - cx) * (mx - cx) + (my - cy) * (my - cy));
		if (dist < bestDist) {
			bestDist = dist;
			best = markers[i];
		}
	}
	return best;
}

function drawCenterCrosshair() {
	var cx = canvas.width / 2;
	var cy = canvas.height / 2;
	var arm = Math.max(16, canvas.width / 48);
	var lw = Math.max(1.5, canvas.width / 480);
	var r = arm * 0.7;

	context.save();
	context.globalCompositeOperation = "difference";
	context.strokeStyle = "#ffffff";
	context.lineWidth = lw;
	context.lineCap = "butt";

	context.beginPath();
	context.moveTo(cx - arm, cy);
	context.lineTo(cx + arm, cy);
	context.moveTo(cx, cy - arm);
	context.lineTo(cx, cy + arm);
	context.stroke();

	context.beginPath();
	context.arc(cx, cy, r, 0, Math.PI * 2);
	context.stroke();

	context.restore();
}

function drawMarker(marker) {
	var corners = marker.corners;

	context.strokeStyle = "#676cfd";
	context.lineWidth = Math.max(3, canvas.width / 100);
	context.beginPath();
	for (var j = 0; j < corners.length; j++) {
		var c = corners[j];
		var next = corners[(j + 1) % corners.length];
		context.moveTo(c.x, c.y);
		context.lineTo(next.x, next.y);
	}
	context.stroke();
	context.closePath();

	context.fillStyle = "#676cfd";
	context.fillRect(corners[0].x - 3, corners[0].y - 3, 6, 6);

	var fontSize = Math.max(24, canvas.width / 10);
	context.font = "bold " + fontSize + "px 'JetBrainsMono'";
	context.fillStyle = "#676cfd";
	var clueNum = marker.id + 1;

	var xMax = -Infinity,
		ySum = 0;
	for (var k = 0; k < corners.length; k++) {
		xMax = Math.max(xMax, corners[k].x);
		ySum += corners[k].y;
	}
	var yCenter = ySum / corners.length;

	context.fillText(clueNum, xMax + 8, yCenter + fontSize * 0.35);
}

function updateDisplay() {
	var el = document.getElementById("id-value");
	if (confirmedId !== null) {
		el.textContent = clues[confirmedId + 1];
		el.className = "locked";
	} else if (candidateId !== null) {
		el.textContent = clues[candidateId + 1];
		el.className = "";
	} else {
		el.textContent = "Point at a marker";
		el.className = "empty";
	}
}

function holdStart() {
	if (confirmedId === null && candidateId === null) return;

	frozenFrame = document.createElement("canvas");
	frozenFrame.width = canvas.width;
	frozenFrame.height = canvas.height;
	frozenFrame.getContext("2d").drawImage(canvas, 0, 0);

	isHeld = true;
	lockedId = confirmedId !== null ? confirmedId : candidateId;

	var btn = document.getElementById("hold-btn");
	btn.classList.add("held");

	var display = document.getElementById("id-display");
	display.classList.add("held");

	var clue = document.getElementById("id-value");
	clue.classList.add("held");

	var el = document.getElementById("id-value");
	if (lockedId !== null) {
		el.textContent = clues[lockedId + 1];
		el.className = "locked";
	}
}

function holdEnd() {
	isHeld = false;
	lockedId = null;
	lockedMarker = null;
	frozenFrame = null;

	var btn = document.getElementById("hold-btn");
	btn.classList.remove("held");

	var display = document.getElementById("id-display");
	display.classList.remove("held");

	var clue = document.getElementById("id-value");
	clue.classList.remove("held");

	// Resume live display immediately
	updateDisplay();
}

window.onload = function () {
	body = document.querySelector("body");
	info = document.getElementById("info");
	video = document.getElementById("video");
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	detector = new AR.Detector();

	var btn = document.getElementById("hold-btn");

	// Touch events for mobile
	btn.addEventListener(
		"touchstart",
		function (e) {
			e.preventDefault();
			holdStart();
		},
		{ passive: false },
	);

	btn.addEventListener(
		"touchend",
		function (e) {
			e.preventDefault();
			holdEnd();
		},
		{ passive: false },
	);

	btn.addEventListener(
		"touchcancel",
		function (e) {
			e.preventDefault();
			holdEnd();
		},
		{ passive: false },
	);

	// Mouse events for desktop fallback
	btn.addEventListener("mousedown", function (e) {
		e.preventDefault();
		holdStart();
	});

	btn.addEventListener("mouseup", function (e) {
		e.preventDefault();
		holdEnd();
	});

	btn.addEventListener("mouseleave", function (e) {
		if (isHeld) holdEnd();
	});

	// Prevent any context menu on long-press anywhere
	document.addEventListener("contextmenu", function (e) {
		e.preventDefault();
	});

	// Prevent selection on the whole document
	document.addEventListener("selectstart", function (e) {
		e.preventDefault();
	});

	const menuBtn = document.getElementById("menu");
	menuBtn.addEventListener("click", () => {
		openInfo();
	});

	const infoButtons = info.querySelectorAll(".close-button");
	infoButtons.forEach((btn) => {
		btn.addEventListener("click", closeInfo);
	});
};
