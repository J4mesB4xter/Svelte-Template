<script>
    import Nested from './Nested.svelte';
    let name = "Friend";
    let src = 'Images/iceking.jpg';
</script>


<style>
    p {
        color: grey;
        font-family:'Times New Roman', Times, serif;
        font-size: 2em;
    }
</style>
<h1>Hello {name}!</h1>

<p>Welcome to my Template. I hope you find something worth looking at eventually. It aint much yet, but it's honest work</p>

<img {src} alt="{name} is yet to succeed">

<Nested/>