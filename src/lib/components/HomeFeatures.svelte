<script lang="ts">
interface FeatureCard {
	icon: string;
	title: string;
	description: string;
}

const featureCards: FeatureCard[] = [
	{
		icon: 'bi-clipboard-data-fill',
		title: 'Analíticas Avanzadas',
		description:
			'Visualiza el rendimiento de tu ganado con dashboards intuitivos y reportes detallados.'
	},
	{
		icon: 'bi-people-fill',
		title: 'Gestión Multi-Usuario',
		description:
			'Colabora con tu equipo asignando roles específicos para veterinarios y trabajadores.'
	},
	{
		icon: 'bi-shield-fill-check',
		title: 'Trazabilidad Completa',
		description: 'Seguimiento detallado del historial médico y alimentario de cada animal.'
	},
	{
		icon: 'bi-leaf-fill',
		title: 'Huella de Carbono',
		description:
			'Monitorea y reduce el impacto ambiental con seguimiento inteligente de alimentación.'
	},
	{
		icon: 'bi-cloud-upload-fill',
		title: 'Carga Masiva',
		description: 'Importa y gestiona grandes volúmenes de datos de animales de forma eficiente.'
	},
	{
		icon: 'bi-database-fill-down',
		title: 'Exportación PDF',
		description: 'Genera hojas de vida y reportes profesionales en formato PDF para cada animal.'
	}
];
</script>

<div class="relative flex flex-col bg-neutral-100 px-4 py-16">
	<div class="invisible absolute -top-16 left-0 w-full border" id="features"></div>
	<div class="mx-auto flex max-w-2xl flex-col text-center">
		<h2 class="mb-6 text-5xl font-bold text-neutral-800">Lo que estamos construyendo</h2>
		<p class="text-xl leading-relaxed text-neutral-700">
			Una plataforma integral que reemplazará sistemas antiguos y montañas de papeles por tecnología
			moderna, simple y eficiente.
		</p>
	</div>
	<div class="mx-auto mt-8 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each featureCards as c}
			<div class="w-full rounded-lg bg-white p-6 shadow">
				<div class="flex items-center gap-4">
					<div
						class="flex size-12 place-content-center-safe place-items-center-safe rounded-lg bg-lime-200 text-lime-800"
					>
						<span class="bi {c.icon}"></span>
					</div>
					<strong class="font-semibold text-neutral-800">{c.title}</strong>
				</div>
				<p class="mt-4 leading-relaxed text-neutral-700">{c.description}</p>
			</div>
		{/each}
	</div>
</div>
