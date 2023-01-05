<script lang="ts">
    import { fade } from "svelte/transition";

    export let fadeDuration: number;
    export let image: string;
    export let audio: string;
    export let fileUploaded: boolean;
</script>

<!-- Result screen -->
<div transition:fade={{ duration: fadeDuration }} class="flex flex-col items-center justify-center space-y-4 text-center h-full">
    <h2 class="text-primary">Here is your melody!</h2>
    <img src={image} class="h-96" alt="Uploaded file." />
    <audio controls src={audio} />
    <button class="btn bg-primary-400" on:click={() => (fileUploaded = false)}>Try another</button>
</div>
