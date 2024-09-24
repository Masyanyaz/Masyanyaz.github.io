import type { DataType as ModalAccounts } from './en-001/modal.pwa';

export type Index = {
  'modal.pwa': ModalAccounts;
};

export const files = import.meta.glob('./*/*.ts');

export const dictionaries = [...new Set(Object.keys(files).map((it) => it.split('/').at(-2))).values()] as string[];

export const referenceDictionary = 'en-001';
