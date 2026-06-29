function mobileCheck() {
	let check = false;
	(function (a) {
		if (
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
				a,
			) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				a.substr(0, 4),
			)
		)
			check = true;
	})(navigator.userAgent || navigator.vendor || window.opera);
	return check;
}
if (!mobilecheck) window.location.href = "https://ffelab.github.io/kwr/";

function loadPuzzleFromStorage(index) {
	const key = `finished${String(index).padStart(2, "0")}`;
	const raw = localStorage.getItem(key);

	if (!raw) return [];

	const parsed = JSON.parse(raw);
	return gridToBlackFields(parsed.grid);
}

function gridToBlackFields(grid) {
	const result = [];

	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[r].length; c++) {
			if (grid[r][c] === "") {
				result.push([r, c]);
			}
		}
	}

	return result;
}

SIZE = 10;

const BLACK_FIELDS1 = [
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
const BLACK_FIELDS2 = [
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
const BLACK_FIELDS3 = [
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
const BLACK_FIELDS4 = [
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
const BLACK_FIELDS5 = [
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
const BLACK_FIELDS6 = [
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
const BLACK_FIELDS7 = [
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
const BLACK_FIELDS8 = [
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
const BLACK_FIELDS9 = [
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
const BLACK_FIELDS10 = [
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
const BLACK_FIELDS11 = [
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
const BLACK_FIELDS12 = [
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
const BLACK_FIELDS13 = [
	[0, 0],

	[0, 4],

	[1, 0],
	[1, 4],

	[2, 0],
	[2, 4],

	[3, 1],
	[3, 3],

	[4, 2],
];
const BLACK_FIELDS14 = [
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
const BLACK_FIELDS15 = [
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
const BLACK_FIELDS16 = [
	[0, 2],

	[1, 1],
	[1, 2],

	[2, 0],
	[2, 2],

	[3, 2],
	[4, 0],
	[4, 1],
	[4, 2],
	[4, 3],
	[4, 4],
];

const blackFieldsList = [
	BLACK_FIELDS1,
	BLACK_FIELDS2,
	BLACK_FIELDS3,
	BLACK_FIELDS4,
	BLACK_FIELDS5,
	BLACK_FIELDS6,
	BLACK_FIELDS7,
	BLACK_FIELDS8,
	BLACK_FIELDS9,
	BLACK_FIELDS10,
	BLACK_FIELDS11,
	BLACK_FIELDS12,
	BLACK_FIELDS13,
	BLACK_FIELDS14,
	BLACK_FIELDS15,
	BLACK_FIELDS16,
];

const savedPuzzlesList = Array.from({ length: 16 }, (_, i) =>
	loadPuzzleFromStorage(i),
);

const containers = Array.from({ length: 16 }, (_, i) =>
	document.getElementById(`titel-container${i + 1}`),
);

const raetsel = Array.from({ length: 16 }, (_, i) =>
	document.getElementById(`raetsel-container${i + 1}`),
);

function isBlackField(arr, r, c) {
	return arr.some(([br, bc]) => br === r && bc === c);
}

// function randomLetter() {
// 	const random = Math.floor(Math.random() * 26);
// 	const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// 	const randomLetter = letter[random];
// 	return randomLetter;
// }

function buildGrid(container, blackFields) {
	const grid = [];

	for (let r = 0; r < 5; r++) {
		grid[r] = [];

		for (let c = 0; c < 5; c++) {
			const cell = document.createElement("div");
			cell.className = "titel-box";
			cell.dataset.row = r;
			cell.dataset.col = c;

			if (isBlackField(blackFields, r, c)) {
				cell.classList.add("black");
			}

			const letterEl = document.createElement("div");
			letterEl.className = "letter";
			// const letter = randomLetter();
			// letterEl.textContent = letter;
			cell.appendChild(letterEl);

			container.appendChild(cell);
			grid[r][c] = { el: cell, letter: "", letterEl };
		}
	}

	return grid;
}

function buildPuzzle(container, blackFields) {
	const grid = [];

	for (let r = 0; r < SIZE; r++) {
		grid[r] = [];

		for (let c = 0; c < SIZE; c++) {
			const cell = document.createElement("div");
			cell.className = "titel-box";
			cell.dataset.row = r;
			cell.dataset.col = c;

			if (isBlackField(blackFields, r, c)) {
				cell.classList.add("black");
				container.style.border =
					"solid var(--primary-highlight-color) 2.5px";
				container.style.opacity = "1";
			}

			const letterEl = document.createElement("div");
			letterEl.className = "letter";
			// const letter = randomLetter();
			// letterEl.textContent = letter;
			cell.appendChild(letterEl);

			container.appendChild(cell);
			grid[r][c] = { el: cell, letter: "", letterEl };
		}
	}

	return grid;
}

const grids = containers.map((container, i) =>
	buildGrid(container, blackFieldsList[i]),
);

const raetselGrids = raetsel.map((container, i) => {
	buildPuzzle(container, savedPuzzlesList[i]);
});

function getRandomCoordinates() {
	const all = [];

	for (let r = 0; r < 5; r++) {
		for (let c = 0; c < 5; c++) {
			all.push([r, c]);
		}
	}

	return all.filter(() => Math.random() < 0.9);
}

const targetIndex = 7;
const targetContainer = containers[targetIndex];

setInterval(() => {
	targetContainer.innerHTML = "";

	const randomBlackFields = getRandomCoordinates();

	grids[targetIndex] = buildGrid(targetContainer, randomBlackFields);
}, 800);

document.getElementById("start").addEventListener("click", async () => {
	document.getElementById("animationtitel-wrapper").style.opacity = "0";
	document.getElementById("animationtitel-wrapper").style.pointerEvents =
		"none";
	const body = document.querySelector("body");
	body.classList.remove("dark");
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
	container.innerHTML = "";
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

	const TOTAL_DURATION = 5000;
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
		}
	}, TICK);
}

runSequence();
