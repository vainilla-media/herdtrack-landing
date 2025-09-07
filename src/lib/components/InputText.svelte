<script lang="ts">
interface InputTextProps {
	type?: 'text' | 'email';
	loading?: boolean;
	value?: string;
	status?: { type: 'error'; message?: string };
}

let { type = 'text', value = $bindable(''), loading = false, status }: InputTextProps = $props();

const showHelperMessage = $derived(!!status?.type);
const helperMessageClass = $derived(
	{
		default: 'text-neutral-600',
		error: 'text-rose-600'
	}[status?.type ?? 'default']
);

const inputStatusClass = $derived(
	{
		default: 'border-neutral-300 ring-green-600/25 focus:border-green-600',
		error: 'border-rose-600 ring-rose-600/25 focus:border-rose-600'
	}[status?.type ?? 'default']
);
</script>

<label class="relative">
	<input
		{type}
		placeholder="juan@mail.com"
		bind:value
		disabled={loading}
		class="{inputStatusClass} h-10 rounded-lg px-4 text-neutral-800 transition-all focus:ring-2 focus:outline-transparent"
	/>
	{#if showHelperMessage}
		<span class="{helperMessageClass} mt-1 ml-2 block text-sm">{status?.message}</span>
	{/if}
	{#if loading}
		<div
			class="absolute top-0 left-0 flex size-full place-content-center place-items-center rounded-lg bg-lime-200/80"
		>
			<span class="size-5 animate-spin rounded-full border-4 border-lime-700 border-r-transparent"
			></span>
		</div>
	{/if}
</label>
