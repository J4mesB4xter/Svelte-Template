<script>
	let numbers2 = [-1, -2, -3, -4];

	function subNumber() {
		numbers2 = [...numbers2, -1*(numbers2.length + 1)];
	}

	$: sum = numbers2.reduce((t, n) => t + n, 0);
</script>

<p>{numbers2.join(' + ')} = {sum}</p>

<button on:click={subNumber}>
	subtract a number
</button>