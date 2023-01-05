<script lang="ts">
    import birdAud from "$lib/assets/audios/bird.mp3";
    import bubblesAud from "$lib/assets/audios/bubbles.mp3";
    import dogAud from "$lib/assets/audios/dog.mp3";
    import personAud from "$lib/assets/audios/person.mp3";
    import birdImg from "$lib/assets/images/bird.png";
    import bubblesImg from "$lib/assets/images/bubbles.png";
    import dogImg from "$lib/assets/images/dog.png";
    import personImg from "$lib/assets/images/person.png";
</script>

<div class="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-3">
    <div
        class="rounded p-4 bg-gradient-to-br from-blue-100 to-red-200 dark:from-blue-900 dark:to-red-800 flex flex-col flex-wrap gap-3 text-center content-center justify-center"
    >
        <div class="text-2xl font-bold">Low valence, high arousal</div>
        <div><img src={birdImg} class="h-56 m-auto" alt="A bird flying with its beak open" /></div>
        <div><audio src={birdAud} controls /></div>
    </div>
    <div
        class="rounded p-4 bg-gradient-to-bl from-blue-200 to-red-200 dark:from-blue-800 dark:to-red-800 flex flex-col flex-wrap gap-3 text-center content-center justify-center"
    >
        <div class="text-2xl font-bold">High valence, high arousal</div>
        <div><img src={dogImg} class="h-56 m-auto" alt="A dog smiling at the camera with its tongue sticking out" /></div>
        <div><audio src={dogAud} controls /></div>
    </div>
    <div
        class="rounded p-4 bg-gradient-to-tr from-blue-100 to-red-100 dark:from-blue-900 dark:to-red-900 flex flex-col flex-wrap gap-3 text-center content-center justify-center"
    >
        <div class="text-2xl font-bold">Low valence, low arousal</div>
        <div>
            <img
                src={personImg}
                class="h-56 m-auto"
                alt="An illustration of a dejected person standing between two rocks above the sea with the moon and stars in the background"
            />
        </div>
        <div><audio src={personAud} controls /></div>
    </div>
    <div
        class="rounded p-4 bg-gradient-to-tl from-blue-200 to-red-100 dark:from-blue-800 dark:to-red-900 flex flex-col flex-wrap gap-3 text-center content-center justify-center"
    >
        <div class="text-2xl font-bold">High valence, low arousal</div>
        <div><img src={bubblesImg} class="h-56 m-auto" alt="A person creating large bubbles above children playing with them" /></div>
        <div><audio src={bubblesAud} controls /></div>
    </div>
</div>
