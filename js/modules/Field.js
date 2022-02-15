export class Field {
    constructor(options) {
        this.width = options.width;
        this.height = options.height;
        this.el = options.el;
    }

    render() {
        this.canvas = document.getElementById(this.el);
    }

    getClickPosition() {

    }


}
