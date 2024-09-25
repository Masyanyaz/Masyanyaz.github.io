import type { DataType as ModalAccounts } from './en-001/modal.pwa';
import type { DataType as Footer } from './en-001/footer';

export type Index = {
  'modal.pwa': ModalAccounts;
  footer: Footer;
};

export const files = import.meta.glob('./*/*.ts');

export const dictionaries = [...new Set(Object.keys(files).map((it) => it.split('/').at(-2))).values()] as string[];

export const referenceDictionary = 'en-001';
