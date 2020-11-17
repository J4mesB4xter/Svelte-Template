<script>
    import Nested from './Nested.svelte';
    let name = 'Friend';
    let src = 'Images/iceking.jpg';
    let string = 'Welcome to my Template. I hope you find something worth looking at eventually. It aint much yet, but its <i>honest<i> work'

    let count = 0;
    $: doubled = count * 2;
    function handleClick() {
        count += 1;
    }
</script>


<style>
    p {
        color: grey;
        font-family:'Times New Roman', Times, serif;
        font-size: 2em;
    }
</style>
<h1>Hello {name}!</h1>

<p>{@html string}</p>

<img {src} alt="{name} is yet to succeed">

<Nested/>

<button on:click={handleClick}>
    Click to prove you love the Ice King 3000: {count} {count === 1 ? 'time' : '<3'}
</button>

<p>{count} doubled is {doubled}</p>