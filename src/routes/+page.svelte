<script>
import HomeFeaturedArticle from '$lib/components/HomeFeaturedArticle.svelte';
import HomeFeatures from '$lib/components/HomeFeatures.svelte';
import HomeFirstPaint from '$lib/components/HomeFirstPaint.svelte';
import HomeNewsletter from '$lib/components/HomeNewsletter.svelte';
</script>

<svelte:head>
	<title>HerdTrack - Solución Integral para la Gestión Ganadera</title>
	<meta name="title" content="HerdTrack - El Futuro de la Ganadería Argentina" />
	<meta
		name="keywords"
		content="gestión ganadera, software ganadero, trazabilidad bovina, salud animal, cabañas bovinas, tecnología ganadera, ganadería moderna, HerdTrack, Argentina, administración de ganado, gestión de cabañas, alimentación de bovinos"
	/>
	<meta
		name="description"
		content="HerdTrack es una plataforma moderna que simplifica la gestión ganadera. Optimiza la trazabilidad, salud y alimentación de tus bovinos. Potenciá la eficiencia de tu cabaña con tecnología innovadora."
	/>
	<meta property="og:title" content="HerdTrack - El futuro de la Ganadería Argentina" />
	<meta
		property="og:description"
		content="Descubrí la solución moderna que optimiza la trazabilidad, salud y alimentación de tu ganado. Ideal para cabañas en Argentina y Uruguay."
	/>
	<meta property="og:url" content="https://www.herdtrack.com.ar" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://www.herdtrack.com.ar/assets/meta_image.png" />

	<meta name="twitter:title" content="HerdTrack - Solución Integral para la Gestión Ganadera" />
	<meta
		name="twitter:description"
		content="Simplificá la gestión de tus bovinos con HerdTrack. Modernizá tu cabaña con tecnología innovadora"
	/>
	<meta property="twitter:image" content="https://www.herdtrack.com.ar/assets/meta_image.png" />

	<meta name="robots" content="index, follow" />
</svelte:head>

<HomeFirstPaint />
<HomeFeatures />
<HomeFeaturedArticle />
<HomeNewsletter />
