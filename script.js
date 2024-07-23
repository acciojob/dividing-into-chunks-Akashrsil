const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let sum=0;
	let curr=[];
	let result=[];
	for( let num of arr)
		{
			if( sum+num<n)
			{
				curr.push(num);
				sum=sum+num;
            }
			else 
			{
				result.push(curr);
				curr=[n];
				sum=n;
}
           }
	if( curr.length>0)
	{
		result.push(curr);
}
	return result;
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
