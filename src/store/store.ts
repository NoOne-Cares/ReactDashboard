import { atom } from 'jotai';

export const showLeftSidebarAtom = atom<boolean>(true);
export const showRightSidebarAtom = atom<boolean>(false);
export const isDark = atom<boolean>(false)
export const shwoOrder = atom<boolean>(true)