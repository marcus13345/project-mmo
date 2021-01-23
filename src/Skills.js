import { Serializable } from './Serializable';

class CSkills extends Serializable {

	constructor() {
		super('skills');
		this.base = 0;
		this.load();
	}

	resetSkills() {
		this.base = 0;
		this.save();
	}


}


export const Skills = new CSkills();