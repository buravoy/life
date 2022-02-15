export class Life {
    constructor(options) {
        this.el = document.querySelector(options.el);
        this.scale = options.scale || 100;
        // this.gridStep = (this.el.clientWidth / options.width <= 3) ? 3 : this.el.clientWidth / options.width;
        this.gridStep = (this.el.clientWidth / options.width <= 3) ? 3 : (this.el.clientWidth / options.width > 3) ? 7 : this.el.clientWidth / options.width;
        this.grid = {
            x: options.width,
            y: options.height,
        }
        this.life = [];


    }

    init() {
        this.makeCanvas();
        this.gridRender();

        this.fillLife();

        this.canvas.addEventListener('click', (e) => this.onClickHandler(e))
    }

    newGeneration () {
        this.prevGen = this.life();

        for(let y = 0; y < this.grid.y; y++) {
            for(let x = 0; x < this.grid.x; x++){
                console.log(this.life[x][y])

                // if()
            }
        }
    }

    isLiveNextGen(x, y){
        const prev = this.prevGen[x][y];





    }

    getMates(x, y) {
        const
            t_l = this.life[x-1][y-1],
            t_c = this.life[x-1][y],
            t_r = this.life[x-1][y+1],
            c_l = this.life[x][y-1],
            c_r = this.life[x][y+1],
            b_l = this.life[x+1][y-1],
            b_c = this.life[x+1][y],
            b_r = this.life[x+1][y+1];

        const mates = [];
    }

    fillLife() {
        for(let y = 0; y < this.grid.y; y++){
            for(let x = 0; x < this.grid.x; x++){
                if(typeof this.life[x] == 'undefined'){
                    this.life[x] = [];
                }
                const live = (Math.random() < 0.3)

                this.life[x][y] = live;

                if (live) this.fillCell(x,y);
            }
        }
    }

    makeCanvas() {
        this.el.innerHTML = '';
        const canvas = document.createElement('canvas');
        canvas.setAttribute('width', (this.grid.x * this.gridStep + 1).toString());
        canvas.setAttribute('height', (this.grid.y * this.gridStep + 1).toString());
        this.el.append(canvas);
        this.canvas = this.el.querySelector('canvas');
    }

    gridRender() {
        const grid = this.canvas.getContext('2d');

        for (let x = 0.5; x <= this.canvas.width; x += this.gridStep) {
            grid.moveTo(x, 0);
            grid.lineTo(x, this.canvas.height);
        }

        for (let y = 0.5; y <= this.canvas.height; y += this.gridStep) {
            grid.moveTo(0, y);
            grid.lineTo(this.canvas.width, y);
        }

        grid.strokeStyle = '#eee';
        grid.stroke();
    }

    onClickHandler(e) {
        const
            location = this.getCellLocation(e),
            x = location.x,
            y = location.y;
        console.log( this.life[x][y] )

        if(this.life[x][y] === true) {
            this.cleanCell(x, y);
        } else {
            this.fillCell(x, y);
        }

        this.invertCell(x, y)
    }

    getCellLocation(e) {
        const clickX = e.pageX - this.canvas.offsetLeft;
        const clickY = e.pageY - this.canvas.offsetTop;

        return {
            x: Math.floor((clickX - 1) / this.gridStep),
            y: Math.floor((clickY - 1) / this.gridStep),
        }
    }

    invertCell(x, y) {
        this.life[x][y] = !this.life[x][y];
    }

    fillCell(x, y) {
        const cell = this.canvas.getContext('2d');
        cell.fillStyle = '#000';
        cell.fillRect(x * this.gridStep + 1, y * this.gridStep+ 1, this.gridStep-1, this.gridStep-1);
    }

    cleanCell(x, y) {
        const cell = this.canvas.getContext('2d');
        cell.fillStyle = '#fff';
        cell.fillRect(x * this.gridStep + 1, y * this.gridStep+ 1, this.gridStep-1, this.gridStep-1);
    }
}
