<script>
    import "../theme.postcss";
    import "@brainandbones/skeleton/styles/all.css";
    import "../app.postcss";
    import { AppBar, AppShell } from "@brainandbones/skeleton";
</script>

<AppShell>
    <svelte:fragment slot="header">
        <AppBar>
            <svelte:fragment slot="lead">
                <a href="/" class="text-base md:text-3xl font-bold">Photong</a>
            </svelte:fragment>
            <nav class="hidden lg:flex space-x-1">
                <a class="btn btn-sm" href="/">Home</a>
                <a class="btn btn-sm" href="/about">About</a>
            </nav>
        </AppBar>
    </svelte:fragment>
    <div class="container mx-auto p-8 space-y-8 h-full">
        <slot />
    </div>
</AppShell>
