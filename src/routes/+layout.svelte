<script lang="ts">
import '../app.css';
import favicon from '$lib/assets/favicon.svg';
import SiteHeader from '$lib/components/SiteHeader.svelte';
import SiteFooter from '$lib/components/SiteFooter.svelte';

let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<SiteHeader />
{@render children?.()}
<SiteFooter />
