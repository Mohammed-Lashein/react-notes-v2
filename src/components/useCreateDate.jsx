const useCreateDate = () => {
	const dateObj = new Date();
	const month = dateObj.getMonth();
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
	const monthName = months[month];
	/* sice months are ordered from 0 to 11 in the date object , we can
    access the name of the month from the array .  */

	const day = dateObj.getDay();
	const year = dateObj.getFullYear();
	let hour = dateObj.getHours();
	let mins = dateObj.getMinutes();

	hour = hour < 10 ? `0${hour}` : hour;
	mins = mins < 10 ? `0${mins}` : mins;
	const date = `${monthName} ${day}, ${year} [${hour}:${mins}]`;

	return date;

	/* Using a return statement is important because a function by 
    default returns undefined .  */

	
};
export default useCreateDate;
