<script lang="ts">
import NewsletterMolecule from './NewsletterMolecule.svelte';
</script>

<div class="relative w-full px-4 py-16">
	<div class="invisible absolute -top-16 left-0 w-full" id="newsletter"></div>
	<div
		class="mx-auto flex max-w-5xl flex-col rounded-2xl bg-gradient-to-br from-lime-600 to-lime-700 p-16 text-center text-white"
	>
		<strong class="mx-auto max-w-2xl text-5xl">Sé Parte del Futuro Ganadero</strong>
		<p class="mx-auto my-8 max-w-2xl text-xl opacity-80">
			Únete a nuestra lista de espera y sé el primero en conocer cuando HerdTrack esté disponible.
			Recibe actualizaciones exclusivas sobre el desarrollo y acceso prioritario a la beta.
		</p>
		<NewsletterMolecule variant="light" />
	</div>
</div>
