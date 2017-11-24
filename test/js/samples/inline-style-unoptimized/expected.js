/* generated by Svelte vX.Y.Z */
import { assign, createElement, createText, detachNode, init, insertAll, noop, proto } from "svelte/shared.js";

function create_main_fragment(state, component) {
	var div, text, div_1, div_1_style_value;

	return {
		c: function create() {
			div = createElement("div");
			text = createText("\n");
			div_1 = createElement("div");
			this.h();
		},

		h: function hydrate() {
			div.style.cssText = state.style;
			div_1.style.cssText = div_1_style_value = "" + state.key + ": " + state.value;
		},

		m: function mount(target, anchor) {
			insertAll(target, anchor, [div, text, div_1]);
		},

		p: function update(changed, state) {
			if (changed.style) {
				div.style.cssText = state.style;
			}

			if ((changed.key || changed.value) && div_1_style_value !== (div_1_style_value = "" + state.key + ": " + state.value)) {
				div_1.style.cssText = div_1_style_value;
			}
		},

		u: function unmount() {
			detachNode(div);
			detachNode(text);
			detachNode(div_1);
		},

		d: noop
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent.prototype, proto);
export default SvelteComponent;