const useCreateDate = () => {
	const dateObj = new Date();
	const month = dateObj.getMonth();
	let monthName;
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	monthName = months[month];
	/* sice months are ordered from 0 to 11 in the date object , we can
    access the name of the month from the array .  */

	const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()}]`;
	return date;

	/* Using a return statement is important because a function by 
    default returns undefined .  */
};
export default useCreateDate;
