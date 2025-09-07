<script lang="ts">
import fetcher from '@saez-juan/fetcher';
import Button from './Button.svelte';
import InputText from './InputText.svelte';

interface NewsletterMoleculeProps {
	variant?: 'default' | 'light';
	onSubscribe?: () => void;
}

const { variant = 'default', onSubscribe }: NewsletterMoleculeProps = $props();

let email = $state('');
let sending = $state(false);
let subscribed = $state(false);
let errorMessage: string | null = $state(null);

const onSubmit = async (e: Event) => {
	e.preventDefault();
	errorMessage = null;

	sending = true;
	const response = await fetcher.forward('/api/subscribe', {
		method: 'POST',
		body: JSON.stringify({ email: $state.snapshot(email) })
	});
	sending = false;

	if (response.isErr) {
		errorMessage =
			{
				MissingEmail: 'El correo es requerido',
				InvalidEmail: 'El correo es inválido',
				EmailAlreadySubscribed: 'Este correo ya está subscripto'
			}[response.error.code] ?? 'Ocurrió un error...';
		return;
	}

	subscribed = true;
	onSubscribe?.();
};

const successVariant = $derived({
	icon: {
		default: 'text-lime-600',
		light: 'text-white'
	}[variant],
	title: {
		default: 'text-neutral-800',
		light: 'text-white'
	}[variant],
	description: {
		default: 'text-neutral-700',
		light: 'text-white/80'
	}[variant]
});
</script>

{#if !subscribed}
	<form
		onsubmit={onSubmit}
		class="mx-auto flex flex-col place-items-start gap-x-4 gap-y-2 sm:flex-row"
	>
		<InputText
			status={errorMessage ? { type: 'error', message: errorMessage } : undefined}
			loading={sending}
			bind:value={email}
		/>
		<Button {variant} loading={sending} />
	</form>
{:else}
	<div class="text-center">
		<span class="inline-flex gap-2 text-xl font-medium {successVariant.title}">
			<i class="bi bi-check-circle-fill {successVariant.icon}"></i>
			¡Gracias por subscribirte!
		</span>
		<p class="mx-auto mt-4 max-w-sm text-sm {successVariant.description}">
			Pronto recibirás actualizaciones sobre el desarrollo y la beta. Gracias por sumarte a la lista
			de espera.
		</p>
	</div>
{/if}
