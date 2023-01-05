<script lang="ts">
    import { FileDropzone } from "@skeletonlabs/skeleton";
    import { fade } from "svelte/transition";

    import { sleep } from "$lib/utils";

    export let fadeDuration: number;
    export let initialised: boolean;
    export let files: FileList;
    export let notes: string;
</script>

<!-- Initial screen -->
<!-- Don't fade if it's already initialised -->
{#await initialised && sleep(fadeDuration) then}
    <div in:fade={{ duration: initialised ? fadeDuration : 0 }} out:fade={{ duration: fadeDuration }} class="h-full">
        <FileDropzone bind:files on:change class="h-full photong-img" height="h-full" {notes} accept="image/*" required />
    </div>
{/await}
