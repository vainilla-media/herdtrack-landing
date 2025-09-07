<script lang="ts">
interface ButtonProps {
	loading?: boolean;
	variant?: 'default' | 'light';
}

const { loading = false, variant = 'default' }: ButtonProps = $props();

const wrapperClass = $derived(
	{
		default: ' bg-lime-600 text-white hover:bg-lime-500 active:bg-lime-700',
		light: 'hover:bg-lime-100 active:bg-lime-200 text-lime-600 bg-white'
	}[variant]
);
</script>

<button class="relative disabled:pointer-events-none disabled:opacity-75" disabled={loading}>
	<div
		class="{wrapperClass} inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium transition-all sm:justify-start"
	>
		<i class="bi bi-envelope-fill"></i>
		Subscribirme
	</div>
</button>
