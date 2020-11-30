<script>
    import Nested3 from './nested3.svelte';

    var pkg = {
        job: '*',
        category_of_measurement: '*',
        emotion: '*',
        noun: '*',
        verb: '*',
        adverb1: '*',
        adverb2: '*',
        adverb3: '*',
        scary_verbed: '*',
        important_noun: '*',
        thing1: '*',
        thing2: '*',
        adjecting: '*',
    }
</script>
job = <input bind:value={pkg.job}><br>
metric = <input bind:value={pkg.category_of_measurement}><br>
emotion = <input bind:value={pkg.emotion}><br>
noun = <input bind:value={pkg.noun}><br>
verb = <input bind:value={pkg.verb}><br>
-ly adverb = <input bind:value={pkg.adverb1}><br>
-ly adverb = <input bind:value={pkg.adverb2}><br>
-ly adverb = <input bind:value={pkg.adverb3}><br>
scary verb ending with -ed = <input bind:value={pkg.scary_verbed}><br>
noun precious to you = <input bind:value={pkg.important_noun}><br>
abstract thing = <input bind:value={pkg.thing1}><br>
concrete thing = <input bind:value={pkg.thing2}><br>
adject ending with -ing = <input bind:value={pkg.adjecting}><br>

<Nested3 {...pkg}/>