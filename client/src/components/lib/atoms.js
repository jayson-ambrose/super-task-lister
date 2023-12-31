import { atom } from 'recoil'  

export const activeAccountAtom = atom({
    key: 'activeAccountKey',
    default: null
})

export const loggedInAtom = atom({
    key: 'loggedInKey',
    default: false
})

export const nightMode = atom({
    key: 'nightModeKey',
    default: true
})