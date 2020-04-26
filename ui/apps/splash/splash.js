elation.elements.define('janus.ui.splash', class extends elation.elements.base {
    create() {
        this.innerHTML = elation.template.get('janus.ui.splash');

        this.popular = this.getElementsByTagName('janus-ui-popular')[0];
        this.partymode = this.getElementsByTagName('janus-ui-partymode')[0];
        this.bookmarks = this.getElementsByTagName('janus-ui-bookmarks')[0];

        elation.events.add([this.popular, this.partymode, this.bookmarks], 'select', (ev) => this.handleSelect(ev));

        this.show();

    }
    handleSelect(ev) {
        this.hide();
    }
});