import { writable } from 'svelte/store'
import { AsyncChessGame } from './types'

export let game = writable(new AsyncChessGame())