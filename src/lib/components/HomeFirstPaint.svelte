<script lang="ts">
import InputText from './InputText.svelte';
import NewsletterMolecule from './NewsletterMolecule.svelte';

interface StatChip {
	title: string;
	description: string;
}

let stats: StatChip[] = [
	{ title: 'Q1 2025', description: 'lanzamiento beta' },
	{ title: '+500', description: 'en lista de espera' },
	{ title: '100%', description: 'argentino' }
];

let isSubscribed = $state(false);
const onSubscribe = () => (isSubscribed = true);
</script>

<section
	class="home-first-paint-wrapper z-10 flex flex-col place-content-center-safe place-items-center bg-gradient-to-b from-lime-50 px-4"
	id="top"
>
	<div
		class="mb-16 inline-flex items-center gap-3 rounded-full bg-lime-200 px-4 py-2 text-center text-sm font-semibold text-lime-800"
	>
		<i class="bi bi-leaf-fill"></i>
		Próximamente - Tecnología Sostenible para el Campo Argentino
	</div>
	<h1 class="max-w-3xl text-center text-5xl font-bold text-neutral-800 sm:text-7xl">
		El Futuro de la
		<span class="text-lime-600">Ganadería</span> Argentina
	</h1>
	<p class="mt-8 max-w-2xl text-center text-xl leading-relaxed text-neutral-700">
		Estamos desarrollando la plataforma que transformará la gestión de cabañas bovinas con
		tecnología de vanguardia. Sé el primero en conocer cuando esté disponible.
	</p>
	<div class="mt-16 flex flex-col items-center gap-4">
		<NewsletterMolecule {onSubscribe} />
		{#if !isSubscribed}
			<span class="max-w-md text-center text-neutral-700"
				>Recibe actualizaciones exclusivas sobre el desarrollo y fecha de lanzamiento</span
			>
		{/if}
	</div>
	<div class="mt-16 flex gap-8">
		{#each stats as s}
			<div class="flex flex-col gap-1.5 text-center">
				<strong class="text-3xl font-bold text-lime-600">{s.title}</strong>
				<span class="font-medium text-neutral-700">{s.description}</span>
			</div>
		{/each}
	</div>
</section>

<style>
.home-first-paint-wrapper {
	min-height: calc(100dvh - 4rem - 8rem);
}
</style>
