import { contactFields, type FormDefinition } from './form-schema';

// Current lead capture: both forms POST JSON to the GHL inbound webhook
// "Fire Audit Lead Capture" from public/js/index.js and public/js/fire-audit.js.
// Events sent: audit_started (gate/popup) and audit_completed (with score fields).
// Affinity receiver (endpointUrl + wdf_ siteToken + Turnstile) is not configured yet.
export const formDelivery = {
  mode: 'ghl_inbound_webhook' as const,
  affinityReceiver: null as null | { endpointUrl: string; siteToken: string },
};

export const forms: FormDefinition[] = [
  { formId: 'fire-audit-popup', formName: 'Fire Audit popup (homepage)', pagePath: '/', fields: contactFields },
  { formId: 'fire-audit-gate', formName: 'Fire Audit results gate', pagePath: '/fire-audit/', fields: contactFields },
];
