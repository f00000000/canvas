class JudgeLine
{
    #x_pos = 0;
    #y_pos = 0;
    #color = COLOR_INIT;
    constructor()
    {
        this.init();
    }

    init()
    {
        this.#x_pos = 0;
        this.#y_pos = JUDGE_LINE_Y_POS;
        this.#color = COLOR_JUDGE_LINE;
    }

    draw()
    {
        ctx.beginPath();
        ctx.rect(this.#x_pos, this.#y_pos, canvas.width, NOTES_HEIGHT);
        ctx.fillStyle = COLOR_JUDGE_LINE;
        ctx.fill();
        ctx.fillStyle = COLOR_INIT;
        ctx.closePath();
    }

    getPos()
    {
        return this.#y_pos;
    }
}