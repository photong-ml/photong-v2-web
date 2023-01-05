<script lang="ts">
    import { ProgressRadial } from "@skeletonlabs/skeleton";
    import { fade } from "svelte/transition";

    export let fadeDuration: number;
</script>

<!-- Loading screen -->
<div transition:fade={{ duration: fadeDuration }} class="flex flex-col items-center justify-center space-y-4 text-center h-full">
    <div class="h-12 w-12"><ProgressRadial stroke={60} /></div>
    <div class="">Please wait while a melody is being generated.</div>
</div>
