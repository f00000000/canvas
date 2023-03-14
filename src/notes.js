class Notes
{
    #birth_time = 0;
    #x_pos      = 0;
    #y_pos      = 0;
    #lane       = LANE_NONE;
    #is_judged  = false;
    #judge_state = JUDGE_NONE;
    #distance_ms   = 0;

    constructor(lane)
    {
        this.init(lane)
    }

    init(lane)
    {
        this.#lane  = lane;
        this.state  = NOTES_STATE_LIVE;
        this.#x_pos = NOTES_X_POS[lane];
        this.#y_pos = NOTES_Y_INIT_POS;
        this.#distance_ms = JUDGE_MS;
    }

    draw()
    {
        if (this.state === NOTES_STATE_DEAD) { return; }

        ctx.beginPath();
        ctx.rect(this.#x_pos, this.#y_pos, NOTES_WIDTH, NOTES_HEIGHT);
        ctx.fillStyle = this.#is_judged ? COLOR_TRANSPARENT : COLOR_NOTES_DEFAULT;
        ctx.fill();
        ctx.fillStyle = COLOR_INIT;
        ctx.stroke();
        ctx.closePath();

        if (this.#y_pos === NOTES_Y_INIT_POS)
        {
            this.#birth_time = Date.now()
        }

        this.#y_pos += NOTES_DROP_SPEED;
        this.#distance_ms = JUDGE_MS - (Date.now() - this.#birth_time);

        if (this.#y_pos > canvas.height)
        {
            this.state = NOTES_STATE_DEAD;
        }
    }

    getDistanceMs()
    {
        return this.#distance_ms;
    }

    getIsJudged()
    {
        return this.#is_judged;
    }

    setIsJudged(is_judged)
    {
        this.#is_judged = is_judged;
    }
}