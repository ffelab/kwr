document.getElementById("start").addEventListener("click", async () => {
	document.getElementById("animationtitel-wrapper").style.opacity = "0";
	document.getElementById("animationtitel-wrapper").style.pointerEvents =
		"none";
	const body = document.querySelector("body");
	body.classList.remove("dark");
});

const solved = document.querySelectorAll(".solved");
const uebersicht = document.querySelectorAll(".raetsel-container");
function formatTime(ms) {
	const totalSeconds = Math.floor(ms / 1000);

	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	if (hours > 0) {
		return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
			.toString()
			.padStart(2, "0")}`;
	}

	return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

solved.forEach((el) => {
	el.addEventListener("click", () => {
		solved.forEach((el) => {
			el.style.boxShadow = "0 0 0px 1px var(--primary-bg-color)";
		});
		el.style.boxShadow = "0 0 0px 2.5px var(--primary-highlight-color)";

		const num = parseInt(el.dataset.id) - 1;
		const PUZZLE_ID = String(num).padStart(2, "0");
		const saved = localStorage.getItem(`finished${PUZZLE_ID}`);
		const data = JSON.parse(saved);
		const schummelzaehler = data.schummelzaehler || 0;
		const zeit = formatTime(data.finalTime);
		let schummelMsg = "";
		if (schummelzaehler == 0) {
			schummelMsg = ``;
		} else {
			schummelMsg = `mit ${schummelzaehler}-mal schummeln<br>`;
		}
		document.querySelector(".uebersicht").innerHTML =
			`Du hast Rätsel ${el.dataset.id}<br>${schummelMsg}in ${zeit} gelöst.`;
	});
});

uebersicht.forEach((el) => {
	if (!el.classList.contains("solved")) {
		el.addEventListener("click", () => {
			solved.forEach((el) => {
				el.style.boxShadow = "0 0 0px 1px var(--primary-bg-color)";
			});
			document.querySelector(".uebersicht").style.color =
				"var(--primary-bg-color)";
			document.querySelector(".uebersicht").innerHTML =
				"Hier findest du deine <br />gelösten Rätsel.";
		});
	}
});

// ─── Field definitions (unchanged) ───────────────────────────────────────────

const animationTitel_FIELDS1 = [
	[0, 0],
	[0, 1],
	[0, 2],
	[0, 3],
	[1, 0],
	[1, 4],
	[2, 0],
	[2, 1],
	[2, 2],
	[2, 3],
	[3, 0],
	[3, 2],
	[4, 0],
	[4, 3],
	[4, 4],
];
const animationTitel_FIELDS2 = [
	[0, 1],
	[0, 2],
	[0, 3],
	[1, 0],
	[1, 4],
	[2, 0],
	[2, 1],
	[2, 2],
	[2, 3],
	[2, 4],
	[3, 0],
	[3, 4],
	[4, 0],
	[4, 4],
];
const animationTitel_FIELDS3 = [
	[0, 0],
	[0, 1],
	[0, 2],
	[0, 3],
	[0, 4],
	[1, 0],
	[2, 0],
	[2, 1],
	[2, 2],
	[2, 3],
	[3, 0],
	[4, 0],
	[4, 1],
	[4, 2],
	[4, 3],
	[4, 4],
];
const animationTitel_FIELDS4 = [
	[0, 0],
	[0, 1],
	[0, 2],
	[0, 3],
	[0, 4],
	[1, 2],
	[2, 2],
	[3, 2],
	[4, 2],
];
const animationTitel_FIELDS5 = [
	[0, 1],
	[0, 2],
	[0, 3],
	[0, 4],
	[1, 0],
	[2, 1],
	[2, 2],
	[2, 3],
	[3, 4],
	[4, 0],
	[4, 1],
	[4, 2],
	[4, 3],
];
const animationTitel_FIELDS6 = [
	[0, 0],
	[0, 1],
	[0, 2],
	[0, 3],
	[0, 4],
	[1, 0],
	[2, 0],
	[2, 1],
	[2, 2],
	[2, 3],
	[3, 0],
	[4, 0],
	[4, 1],
	[4, 2],
	[4, 3],
	[4, 4],
];
const animationTitel_FIELDS7 = [
	[0, 0],
	[1, 0],
	[2, 0],
	[3, 0],
	[4, 0],
	[4, 1],
	[4, 2],
	[4, 3],
	[4, 4],
];
const animationTitel_FIELDS8 = [
	[0, 0],
	[0, 1],
	[0, 2],
	[0, 3],
	[0, 4],
	[1, 0],
	[1, 1],
	[1, 2],
	[1, 3],
	[1, 4],
	[2, 0],
	[2, 1],
	[2, 2],
	[2, 3],
	[2, 4],
	[3, 0],
	[3, 1],
	[3, 2],
	[3, 3],
	[3, 4],
	[4, 0],
	[4, 1],
	[4, 2],
	[4, 3],
	[4, 4],
];
const animationTitel_FIELDS9 = [
	[0, 0],
	[0, 1],
	[0, 2],
	[0, 3],
	[1, 0],
	[1, 4],
	[2, 0],
	[2, 1],
	[2, 2],
	[2, 3],
	[3, 0],
	[3, 4],
	[4, 0],
	[4, 1],
	[4, 2],
	[4, 3],
];
const animationTitel_FIELDS10 = [
	[0, 0],
	[1, 0],
	[2, 0],
	[3, 0],
	[4, 0],
	[4, 1],
	[4, 2],
	[4, 3],
	[4, 4],
];
const animationTitel_FIELDS11 = [
	[0, 1],
	[0, 2],
	[0, 3],
	[1, 0],
	[1, 4],
	[2, 0],
	[2, 4],
	[3, 0],
	[3, 4],
	[4, 1],
	[4, 2],
	[4, 3],
];
const animationTitel_FIELDS12 = [
	[0, 1],
	[0, 2],
	[0, 3],
	[0, 4],
	[1, 0],
	[2, 0],
	[2, 2],
	[2, 3],
	[2, 4],
	[3, 0],
	[3, 4],
	[4, 1],
	[4, 2],
	[4, 3],
];

const animationTitelFieldsList = [
	animationTitel_FIELDS1,
	animationTitel_FIELDS2,
	animationTitel_FIELDS3,
	animationTitel_FIELDS4,
	animationTitel_FIELDS5,
	animationTitel_FIELDS6,
	animationTitel_FIELDS7,
	animationTitel_FIELDS8,
	animationTitel_FIELDS9,
	animationTitel_FIELDS10,
	animationTitel_FIELDS11,
	animationTitel_FIELDS12,
];

// ─── Setup ────────────────────────────────────────────────────────────────────

const NUM = 12;
const wrapper = document.getElementById("animationtitel-wrapper");

// Each container gets a flat array of 25 cell elements
const cells = [];

for (let i = 0; i < NUM; i++) {
	const container = document.getElementById(
		`animationtitel-container${i + 1}`,
	);
	// container.innerHTML = "";
	const containerCells = [];

	for (let r = 0; r < 5; r++) {
		for (let c = 0; c < 5; c++) {
			const cell = document.createElement("div");
			cell.className = "animationtitel-box";
			// all cells start completely hidden
			cell.style.opacity = "0";
			cell.style.border = "";
			container.appendChild(cell);
			containerCells.push({ el: cell, r, c });
		}
	}

	cells.push(containerCells);
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function isTarget(i, r, c) {
	return animationTitelFieldsList[i].some(([tr, tc]) => tr === r && tc === c);
}

// Show a specific cell as "on"
function cellOn(cell) {
	cell.el.style.opacity = "1";
	cell.el.style.background = "var(--primary-bg-color)";
	cell.el.style.border = "2px solid var(--primary-bg-color)";
}

// Hide a cell completely
function cellOff(cell) {
	cell.el.style.opacity = "0";
	cell.el.style.border = "";
}

// ─── Animation ────────────────────────────────────────────────────────────────

// All target cells across all containers, shuffled
function getAllTargetCells() {
	const all = [];
	for (let i = 0; i < NUM; i++) {
		for (const cell of cells[i]) {
			if (isTarget(i, cell.r, cell.c)) {
				all.push({ i, cell });
			}
		}
	}
	// shuffle
	for (let k = all.length - 1; k > 0; k--) {
		const j = Math.floor(Math.random() * (k + 1));
		[all[k], all[j]] = [all[j], all[k]];
	}
	return all;
}

function runSequence() {
	wrapper.style.transition = "";
	wrapper.style.opacity = "1";
	wrapper.style.display = "flex";

	for (let i = 0; i < NUM; i++) {
		for (const cell of cells[i]) cellOff(cell);
	}

	// ALL cells participate in flickering
	const allCells = [];
	for (let i = 0; i < NUM; i++) {
		for (const cell of cells[i]) {
			allCells.push({ i, cell, target: isTarget(i, cell.r, cell.c) });
		}
	}

	const targets = allCells.filter((c) => c.target);
	const total = targets.length;

	const TOTAL_DURATION = 3000;
	const TICK = 140;
	const totalTicks = Math.floor(TOTAL_DURATION / TICK);

	// Each target cell gets its own random lock tick
	const lockTick = targets.map(() =>
		Math.floor(totalTicks * (0.4 + Math.random() * 0.6)),
	);

	const lockedIn = new Array(total).fill(false);

	let tick = 0;

	const interval = setInterval(() => {
		const t = tick / totalTicks;

		// Lock in target cells whose time has come
		for (let idx = 0; idx < total; idx++) {
			if (!lockedIn[idx] && tick >= lockTick[idx]) {
				lockedIn[idx] = true;
				cellOn(targets[idx].cell);
			}
		}

		// All cells not yet locked in flicker randomly
		// Density grows from near-zero to fairly active, then tapers off
		// as more cells lock in (so the image "wins" gradually)
		const flickerDensity = Math.sin(t * Math.PI) * 0.4;

		for (const { cell, target, i } of allCells) {
			// Skip locked-in cells
			const targetIdx = targets.findIndex((tc) => tc.cell === cell);
			if (targetIdx !== -1 && lockedIn[targetIdx]) continue;

			if (Math.random() < flickerDensity) {
				cellOn(cell);
			} else {
				cellOff(cell);
			}
		}

		tick++;

		if (tick > totalTicks) {
			clearInterval(interval);

			// Final state: only target cells on, everything else off
			for (const { cell, target } of allCells) {
				const targetIdx = targets.findIndex((tc) => tc.cell === cell);
				if (targetIdx !== -1) {
					cellOn(cell);
				} else {
					cellOff(cell);
				}
			}

			document.getElementById("start-container").style.opacity = "1";
			document.querySelector(".buch").style.opacity = "1";
			document.querySelector("#desktop-qr").style.opacity = "1";
		}
	}, TICK);
}

runSequence();
