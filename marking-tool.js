module.exports = (mans) =>
{
	var result = [];
	mans.forEach((man) =>
	{
		result.push({
			name: man,
			isMarking: Math.random() >= 0.5
		})
	});

	var count = 0;
	var countMarked = 0;
	result.forEach((item) =>
	{
		if (item.isMarking)
		{
			countMarked++;
		}
		count++;
	});
	console.log(countMarked + " " + count);
	console.log(result);

	while (countMarked !== Math.round(count / 2))
	{
		console.log("here");

		mans = result;
		mans.forEach((item) =>
		{
			item.isMarking = Math.random() >= 0.5
		});
		result = mans;

		count = 0;
		countMarked = 0;
		result.forEach((item) =>
		{
			if (item.isMarking)
			{
				countMarked++;
			}
			count++;
		});
		console.log(countMarked + " " + count);
	}
	console.log(result);
	return result;
};