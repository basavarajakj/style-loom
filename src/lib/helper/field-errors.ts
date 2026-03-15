// Helper function to normalize field meta errors into the shape expected by `FieldError`
export default function getFieldErrors(
  errors: any
): Array<{ message?: string } | undefined> {
  if (!Array.isArray(errors)) return [];

  return errors
    .map((error): { message?: string } | undefined => {
      if (!error) return undefined;

      // Handle plain string errors
      if (typeof error === 'string') {
        return { message: error };
      }

      // Handle objects that already have a message field
      if (typeof error === 'object' && 'message' in error) {
        const msg = (error as { message?: unknown }).message;
        return {
          message: typeof msg === 'string' ? msg : String(msg ?? ''),
        };
      }

      return undefined;
    })
    .filter(Boolean);
}