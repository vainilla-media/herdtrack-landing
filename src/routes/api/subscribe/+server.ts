import fetcher from '@saez-juan/fetcher';
import type { RequestHandler } from './$types';

const GMACRO_URL =
	'https://script.google.com/macros/s/AKfycbxWgPuko-srhueHkLwx9l90A-boaRjyPIkXEIqJ-SFzEJpEVlvOFkIgFH5xykfv9aV4/exec';

export const POST: RequestHandler = async ({ request }) => {
	let email = '';
	try {
		const body = await request.json();
		email = body.email ?? '';
	} catch (e) {
		console.warn('Error on /api/subscribe', e);
		return Response.json(
			{
				success: false,
				error: {
					code: 'InvalidBody',
					message: 'Invalid body'
				}
			},
			{ status: 200 }
		);
	}

	const mUrl = new URL(GMACRO_URL);
	mUrl.searchParams.append('email', email);
	const response = await fetcher.json<{
		status: number;
		success: boolean;
		error?: {
			code: string;
			message: string;
		};
	}>(mUrl.toString(), { method: 'POST' });

	if (response.isErr) {
		return Response.json(
			{
				success: false,
				error: {
					code: 'InternalError',
					message: 'Internal error'
				}
			},
			{ status: 200 }
		);
	}

	return Response.json(
		{
			...response.value,
			status: undefined,
			data: { message: 'Successfully added email to newsletter' }
		},
		{ status: 200 }
	);
};
