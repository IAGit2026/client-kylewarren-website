import { formDelivery } from './form-config';

export type SubmitResult = { ok: true } | { ok: false; message: string };

// Submits a form to the Affinity form receiver once one is configured.
// Not used by the live pages yet; they still post from public/js/*.js.
export async function submitToAffinityReceiver(
  formId: string,
  formName: string,
  values: Record<string, string>,
): Promise<SubmitResult> {
  const receiver = formDelivery.affinityReceiver;
  if (!receiver) return { ok: false, message: 'Form receiver is not configured.' };
  const response = await fetch(receiver.endpointUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      siteToken: receiver.siteToken,
      formId,
      formName,
      pageUrl: window.location.href,
      ...values,
    }),
  });
  if (response.ok) return { ok: true };
  const body = await response.json().catch(() => ({}));
  return { ok: false, message: typeof body.message === 'string' ? body.message : 'Something went wrong. Please try again.' };
}
