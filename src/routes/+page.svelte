<script lang="ts">
    import ErrorScreen from "$lib/components/ErrorScreen.svelte";
    import InitialScreen from "$lib/components/InitialScreen.svelte";
    import LoadingScreen from "$lib/components/LoadingScreen.svelte";
    import ResultScreen from "$lib/components/ResultScreen.svelte";
    import { getPredictionAudioURL, sleep } from "$lib/utils";

    const fadeDuration = 400;

    let files: FileList;
    let file: File;

    let initialised = false;
    let fileUploaded = false;
    let retry = false;
    let notes = "Select an image.";

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
    <InitialScreen bind:initialised {fadeDuration} bind:files bind:notes on:change={onDrop} />
{:else}
    {#key retry}
        {#await toggleLock(true) && sleep(fadeDuration) then}
            {#await getPredictionAudioURL(file)}
                <LoadingScreen {fadeDuration} />
            {:then { image, audio }}
                {#await toggleLock(false) && sleep(fadeDuration) then}
                    <ResultScreen {fadeDuration} {image} {audio} bind:fileUploaded />
                {/await}
            {:catch err}
                {#await toggleLock(false) && sleep(fadeDuration) then}
                    <ErrorScreen {fadeDuration} {err} bind:retry bind:fileUploaded />
                {/await}
            {/await}
        {/await}
    {/key}
{/if}

<style>
    :global(.photong-img input.file-dropzone-input) {
        color: transparent !important;
    }
    :global(.photong-img ::file-selector-button) {
        display: none;
    }
</style>
