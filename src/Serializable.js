const PREFIX = Symbol('prefix');
import { ImmortalDB } from 'immortal-db';
const db = ImmortalDB;
import EventEmitter from 'events';

export class Serializable extends EventEmitter {
	constructor(prefix) {
		super();
		this[PREFIX] = prefix;
	}

	save() {
		for(const key in this) {
			console.log(`${this[PREFIX]}-${key}`);
		}
	}

	async load() {
		for(const key in this) {
			const prefixedKey = `${this[PREFIX]}-${key}`;
			console.log(`${prefixedKey}: ${await db.get(prefixedKey)}`);
		}
	}
}