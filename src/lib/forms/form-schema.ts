// Field definitions for the site's lead forms. Keep in sync with public/js/*.js until the
// forms move to the Affinity form receiver (pending Paul's decision).
export type FormFieldType = 'text' | 'email' | 'tel' | 'url' | 'number' | 'hidden';

export type FormField = {
  name: string;
  label: string;
  type: FormFieldType;
  required: boolean;
};

export type FormDefinition = {
  formId: string;
  formName: string;
  pagePath: string;
  fields: FormField[];
};

export const contactFields: FormField[] = [
  { name: 'name', label: 'First name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: false },
  { name: 'handle', label: 'Social handle', type: 'text', required: false },
];
