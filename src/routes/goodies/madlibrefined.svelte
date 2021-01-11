<script>
    import Nested3 from './nested3.svelte';

    var words = [
        {category: 'job', value: ''},
        {category: 'metric', value: ''},
        {category: 'emotion', value: ''},
        {category: 'noun', value: ''},
        {category: 'verb', value: ''},
        {category: 'adverb1', value: ''},
        {category: 'adverb2', value: ''},
        {category: 'adverb3', value: ''},
        {category: 'scary_verbed', value: ''},
        {category: 'important_noun', value: ''},
        {category: 'thing1', value: ''},
        {category: 'thing2', value: ''},
        {category: 'adjective ending with -ing', value: ''},
];
</script>


<ul>
    {#each words as word}
    <li>
        <p>{words.word}: </p><input bind:value={words.word.value}>
    </li>
    {/each}
</ul>

<Nested3 {...words}/>