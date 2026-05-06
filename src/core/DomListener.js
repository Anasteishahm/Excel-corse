export class DomListener {
  constructor($root, listeners = []) {
	  if (!$root) {
		  // eslint-disable-next-line no-tabs
		  throw new Error('No $root provided for DomListener!');
	  }
    this.$root = $root;
  }

  initDOMListener() {

  }

  removeDOMListeners() {}
}
