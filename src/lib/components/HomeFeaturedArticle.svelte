<script lang="ts">
import AnalyticsPicture from '../assets/analytics.webp';

const hlItems = [
	'Reducción del 25% en huella de carbono promedio',
	'Optimización de recursos alimentarios',
	'Trazabilidad completa para mercados internacionales',
	'Certificaciones de calidad automatizadas'
];
</script>

<div class="relative mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 py-16 lg:grid-cols-2">
	<div class="invisible absolute -top-16 left-0 w-full" id="sustainability"></div>
	<div class="flex flex-col items-start">
		<div
			class="inline-flex gap-x-2 rounded-full bg-neutral-200 px-4 py-1.5 text-sm font-semibold text-neutral-800"
		>
			<i class="bi bi-leaf-fill"></i>
			Compromiso Ambiental
		</div>
		<strong class="my-8 text-5xl font-bold text-neutral-800">
			Argentina Líder en <span class="text-lime-600">Calidad Bovina</span> Sostenible
		</strong>
		<p class="text-xl text-balance text-neutral-700">
			Nuestra misión es posicionar a Argentina como referente mundial en producción bovina de
			calidad, utilizando tecnología que reduce el impacto ambiental y mejora la eficiencia.
		</p>
		<div class="mt-8 flex flex-col gap-2 text-neutral-800">
			{#each hlItems as i}
				<div class="inline-flex gap-2">
					<i class="bi bi-patch-check-fill text-lime-600"></i>
					<span>{i}</span>
				</div>
			{/each}
		</div>
		<!-- <button
			class="mt-8 inline-flex h-10 cursor-pointer items-center gap-2 rounded-lg bg-lime-600 px-4 py-2 font-medium text-white transition-all hover:bg-lime-500 active:bg-lime-700"
		>
			Conocer más
			<i class="bi bi-arrow-right"></i>
		</button> -->
	</div>
	<div
		class="grid grid-flow-col gap-6 self-start rounded-xl border border-neutral-300 p-6 shadow-md lg:grid-flow-row"
	>
		<figure class="grow">
			<img
				src={AnalyticsPicture}
				alt="Analytics Dashboard"
				class="size-full h-56 rounded-lg object-cover"
			/>
		</figure>
		<div class="flex h-full flex-col gap-6 lg:h-20 lg:flex-row">
			<div
				class="flex h-full grow flex-col place-content-center place-items-center rounded-lg bg-lime-100 p-1 lg:h-auto"
			>
				<strong class="text-2xl font-bold text-lime-600">-25%</strong>
				<p class="text-sm text-neutral-700">Huella de Carbono</p>
			</div>
			<div
				class="flex h-full grow flex-col place-content-center place-items-center rounded-lg bg-lime-100 p-1"
			>
				<strong class="text-2xl font-bold text-lime-600">+40%</strong>
				<p class="text-sm text-neutral-700">Eficiencia</p>
			</div>
		</div>
	</div>
</div>
