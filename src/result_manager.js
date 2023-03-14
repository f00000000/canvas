class ResultManager
{
    #combo = 0;
    #result = {};

    constructor()
    {
        this.init();
    }

    init()
    {
        this.#combo = 0;
        this.#result =
        {
            [JUDGE_AWESOME] :   0,
            [JUDGE_NICE]    :   0,
            [JUDGE_NOT_GOOD]:   0,
            [JUDGE_AWFUL]   :   0
        }
    }

    add(judge_state)
    {
        this.#result[judge_state] ++;

        if (judge_state === JUDGE_AWFUL)
        {
            this.#combo = 0;
        }
        else
        {
            this.#combo ++;
        }
    }

    getCombo()
    {
        return this.#combo;
    }

    showResult()
    {
        ctx.font = JUDGE_TEXT_FONT;
        ctx.textAlign = JUDGE_TEXT_ALIGN;
        ctx.fillText(
                        RESULT_TEXT,
                        X_POS_RESULT_TEXT,
                        Y_POS_RESULT_TEXT
                    );

        ctx.fillText(
                        JUDGE_TEXT[JUDGE_AWESOME] + ' : ' + String(this.#result[JUDGE_AWESOME]),
                        X_POS_RESULT_TEXT,
                        Y_POS_RESULT_TEXT_AWESOME
                    );

        ctx.fillText(
                        JUDGE_TEXT[JUDGE_NICE] + ' : ' + String(this.#result[JUDGE_NICE]),
                        X_POS_RESULT_TEXT,
                        Y_POS_RESULT_TEXT_NICE
                    );

        ctx.fillText(
                        JUDGE_TEXT[JUDGE_NOT_GOOD] + ' : ' + String(this.#result[JUDGE_NOT_GOOD]),
                        X_POS_RESULT_TEXT,
                        Y_POS_RESULT_TEXT_NOT_GOOD
                    );

        ctx.fillText(
                        JUDGE_TEXT[JUDGE_AWFUL] + ' : ' + String(this.#result[JUDGE_AWFUL]),
                        X_POS_RESULT_TEXT,
                        Y_POS_RESULT_TEXT_AWFUL
                    );
        ctx.textAlign = JUDGE_TEXT_ALIGN_INIT;
        clearInterval(mainLoopId);
    }
}