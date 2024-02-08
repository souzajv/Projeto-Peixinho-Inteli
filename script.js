var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var movimentoPeixe

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/peixinho_rosa.png');
    this.load.image('mamaco', 'assets/ultimo-romantico.jfif');
}
function create() {
    this.add.image(400, 300, 'mar')
    this.add.image(400,525, 'logo').setScale(0.5);
    this.add.image(30, 30, 'mamaco').setScale(0.2);
    movimentoPeixe = this.add.image(400, 300, 'peixe');
    movimentoPeixe.setFlip(true, false);
}

function update() {
    movimentoPeixe.x = this.input.x;
    movimentoPeixe.y = this.input.y;
}

