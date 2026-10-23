import { useEffect } from 'react';
export function useDialogFocus(open: boolean, selector: string, close: () => void) {
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const dialog = document.querySelector<HTMLElement>(selector);
    if (!dialog) return;
    const focusables = () => Array.from(dialog.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input,select,textarea,[tabindex="0"]')).filter(el => el.getClientRects().length);
    focusables()[0]?.focus();
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); close(); }
      if (event.key === 'Tab') {
        const elements = focusables(), first = elements[0], last = elements.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    dialog.addEventListener('keydown', handler);
    return () => { dialog.removeEventListener('keydown', handler); previous?.focus(); };
  }, [open, selector, close]);
}
