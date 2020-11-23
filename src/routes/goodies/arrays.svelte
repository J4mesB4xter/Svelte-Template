<script>

    let Cast = [" Galavant", " Richard", " Sid", " Isabella"]

    function AddCast(str) {
        Cast.push(str);
        Cast = Cast;
    }
    let member = ''
</script>

<h1>The cast includes: </h1>
<p>{Cast}</p>

<input bind:value={member}>


<button on:click= {AddCast(member)}></button>