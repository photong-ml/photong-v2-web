<script lang="ts">
    import { fade } from "svelte/transition";

    export let fadeDuration: number;
    export let err: Error;
    export let retry: boolean;
    export let fileUploaded: boolean;
</script>

<!-- Error screen -->
<div transition:fade={{ duration: fadeDuration }} class="flex flex-col items-center justify-center space-y-4 text-center h-full">
    <h2 class="text-error-500">Error: {err.message}</h2>
    <div class="flex space-x-4">
        <button class="btn bg-primary-400" on:click={() => (retry = !retry)}>Try again</button>
        <button class="btn bg-primary-400" on:click={() => (fileUploaded = false)}>Restart</button>
    </div>
</div>
