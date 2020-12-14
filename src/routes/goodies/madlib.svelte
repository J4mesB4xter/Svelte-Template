<script>
    import Nested3 from './nested3.svelte';

    var words = {
        job: '',
        category_of_measurement: '',
        emotion: '',
        noun: '',
        verb: '',
        adverb1: '',
        adverb2: '',
        adverb3: '',
        scary_verbed: '',
        important_noun: '',
        thing1: '',
        thing2: '',
        adjecting: '',
    };
</script>
<style>
    li {
        Background: green;
        Border: blue;
        color: white;
        font-size: larger;
        height: 400px;
        width: 600px;
        flex-direction: row;
        align-content: center;
    }
</style>
<li>
job = <input bind:value={words.job}><br>
metric = <input bind:value={words.category_of_measurement}><br>
emotion = <input bind:value={words.emotion}><br>
noun = <input bind:value={words.noun}><br>
verb = <input bind:value={words.verb}><br>
-ly adverb = <input bind:value={words.adverb1}><br>
-ly adverb = <input bind:value={words.adverb2}><br>
-ly adverb = <input bind:value={words.adverb3}><br>
scary verb ending with -ed = <input bind:value={words.scary_verbed}><br>
noun precious to you = <input bind:value={words.important_noun}><br>
abstract thing = <input bind:value={words.thing1}><br>
concrete thing = <input bind:value={words.thing2}><br>
adjective ending with -ing = <input bind:value={words.adjecting}><br>
<p>scroll down when done</p>
</li>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<Nested3 {...words}/>