<script lang="ts">
    import { FileDropzone, ProgressRadial } from "@brainandbones/skeleton";
    import { fade } from "svelte/transition";

    import { getPredictionAudioURL } from "$lib/utils";

    const fadeDuration = 400;

    let files: FileList;
    let file: File;

    let initialised = false;
    let fileUploaded = false;
    let retry = false;
    let notes = "Select an image.";

    const sleep = async (ms: number, override = false) => override || (await new Promise((resolve) => setTimeout(resolve, ms)));

    const onDrop = (_e: Event): void => {
        const dropInput = document.querySelector(".file-dropzone-input");
        if (!files[0].type.startsWith("image/")) {
            dropInput?.classList.add("input-invalid");
            notes = "<span class='text-warning-900'>Please select an image.</span>";
            return;
        }
        file = files[0];
        dropInput?.classList.remove("input-invalid");
        dropInput?.classList.add("input-valid");
        notes = "Select an image.";
        fileUploaded = true;
        initialised = true; // this value will only be set to true once
    };

    const toggleLock = (locked: boolean): boolean => {
        document.querySelectorAll("a").forEach((link) => {
            link.classList.toggle("cursor-wait");
            link.classList.toggle("pointer-events-none");
        });
        window.onbeforeunload = locked ? () => true : null;
        // For chaining
        return true;
    };
</script>

{#if !fileUploaded}
    {#await initialised && sleep(fadeDuration) then}
        <div in:fade={{ duration: initialised ? fadeDuration : 0 }} out:fade={{ duration: fadeDuration }} class="h-full">
            <FileDropzone bind:files on:change={onDrop} class="h-full photong-img" height="h-full" {notes} accept="image/*" />
        </div>
    {/await}
{:else}
    {#key retry}
        {#await toggleLock(true) && sleep(fadeDuration) then}
            {#await getPredictionAudioURL(file)}
                <div transition:fade={{ duration: fadeDuration }} class="flex flex-col items-center justify-center space-y-4 text-center h-full">
                    <div class="h-12 w-12"><ProgressRadial stroke={60} /></div>
                    <div class="">Please wait while a melody is being generated.</div>
                </div>
            {:then src}
                {#await toggleLock(false) && sleep(fadeDuration) then}
                    <div transition:fade={{ duration: fadeDuration }} class="flex flex-col items-center justify-center space-y-4 text-center h-full">
                        <h2 class="text-primary">Here is your melody!</h2>
                        <audio controls {src} />
                        <button class="btn bg-primary-400" on:click={() => (fileUploaded = false)}>Try another</button>
                    </div>
                {/await}
            {:catch e}
                {#await toggleLock(false) && sleep(fadeDuration) then}
                    <div transition:fade={{ duration: fadeDuration }} class="flex flex-col items-center justify-center space-y-4 text-center h-full">
                        <h2 class="text-warning-500">Error: {e.message}</h2>
                        <div class="flex space-x-4">
                            <button class="btn bg-primary-400" on:click={() => (retry = !retry)}>Try again</button>
                            <button class="btn bg-primary-400" on:click={() => (fileUploaded = false)}>Restart</button>
                        </div>
                    </div>
                {/await}
            {/await}
        {/await}
    {/key}
{/if}

<style>
    :global(.photong-img input.file-dropzone-input.input-invalid, .photong-img input.file-dropzone-input.input-valid) {
        color: transparent !important;
    }
</style>
