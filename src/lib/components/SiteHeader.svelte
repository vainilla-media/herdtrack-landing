<script lang="ts">
import HerdtrackLogo from './HerdtrackLogo.svelte';
</script>

<header class="sticky top-0 z-20 h-16 border-b border-neutral-200 bg-white px-4 shadow-md/5">
	<div class="mx-auto flex h-full max-w-5xl items-center justify-center">
		<a href="#top">
			<span class="absolute opacity-0">Go to main landing</span>
			<HerdtrackLogo class="relative bottom-0.5 h-6" />
		</a>
		<div class="hidden grow sm:block"></div>
		<nav class="hidden items-center gap-4 sm:flex">
			<a class="font-medium text-lime-800 transition-all hover:text-lime-600" href="#features">
				Características
			</a>
			<a
				class="font-medium text-lime-800 transition-all hover:text-lime-600"
				href="#sustainability"
			>
				Sostenibilidad
			</a>
			<a
				href="#newsletter"
				class="inline-flex gap-2 rounded-md bg-lime-700 px-3 py-1.5 text-white transition-all hover:bg-lime-600"
			>
				<i class="bi bi-bell-fill"></i>
				Notificarme
			</a>
		</nav>
	</div>
</header>
