<script>
	import Nestednum from './Nestednum.svelte';
	let numbers = [1, 2, 3, 4];

	function addNumber() {
		numbers = [...numbers, numbers.length + 1];
	}

	$: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
	Add a number
</button>

<style>
	p {
		color: black;
        font-family:'Times New Roman', Times, serif;
        font-size: 2em;
	}
</style>

<p>
Above: a basic function from Svelte's new user tutorial
<br>
Below: a negative version of the above function which I modified in another file and nested here
</p>

<Nestednum/>