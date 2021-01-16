let buttonCanvas = function (p) {
    let canabis, heading, up, down, left, right;

    p.setup = function () {
        canabis = p.createCanvas(9*blockSize, 9*blockSize);
        canabis.style("border", "none");
        canabis.style("margin", "auto");
        canabis.style("float", "none");
        canabis.mouseClicked(p.handleClicks);
        p.clear();

        p.noFill();
P.stroke(0);
        p.StrokeWeight(4);
        up = p.rect(3*blockSize, 0*blockSize, 3*blockSize, 3*blockSize, 40);
        down = p.rect(3*blockSize, 6*blockSize, 3*blockSize, 3*blockSize, 40);
        left = p.rect(0*blockSize, 3*blockSize, 3*blockSize, 3*blockSize, 40);
        right = p.rect(6*blockSize, 3*blockSize, 3*blockSize, 3*blockSize, 40);

    }
    p.handleClicks = function () {
        let x = p.mouseX;
        let y = p.mouseY;
        if (x >= 3*blockSize && y >=0 && x <= 6*blockSize && y <= 3*blockSize)
            activePiece.rotatePiece(1); //up
        if (x >= 3*blockSize && y >=6*blockSize && x <= 6*blockSize && y <= 9*blockSize)
            activePiece.moveDown(); //down
        if (x >= 0*blockSize && y >=3*blockSize && x <= 3*blockSize && y <= 6*blockSize)
            activePiece.moveLeft(); //left
        if (x >= 6*blockSize && y >=3*blockSize && x <= 9*blockSize && y <= 6*blockSize)
            activePiece.moveRight();
    }
}

let bpc = new p5(buttonCanvas, "buttons");
