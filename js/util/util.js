export function getTeamColor() {
	let col = function() {
		return Math.floor(Math.random() * (255 - 1 + 1)) + 1
	};

	let rCol = col();
	let gCol = col();
	let bCol = col();

	return {
		background: `rgba( ${rCol}, ${gCol}, ${bCol}, 1)`,
		opacity: 0.7
	};
}