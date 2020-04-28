import { Component } from 'react';

/**
 * Mixin для всех функциональных элементов формы.
 * Сохраняет id и название частицы.
 */
export class FunctionalParticle extends Component {
	constructor(props, type, id) {
		super(props);
		this.title = type;
		this.id = id;

		this.getId = this.getId.bind(this);
		this.getTitle = this.getTitle.bind(this);
	}

	getTitle(){
		return this.title;
	}

	getId() {
		return this.id;
	}

	render() {
		return (this.props.children.render());
	}
}
