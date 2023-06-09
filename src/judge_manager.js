class JudgeManager
{
    #already_pressed =
    {
        [LANE_ONE]      :   false, 
        [LANE_TWO]      :   false,
        [LANE_THREE]    :   false,
        [LANE_FOUR]     :   false,
        [LANE_FIVE]     :   false,
        [LANE_SIX]      :   false
    }

    #judge_text_duration = JUDGE_TEXT_SHOW_DURATION;
    #latest_judge_state = JUDGE_NONE;
    #latest_judge_ms = 0;

    constructor() {}

    judge(key)
    {
        this.#already_pressed[KEY_TO_LANE[key]] = true;

        const exist = executer.getExistNotes()[KEY_TO_LANE[key]];
        if (exist.length === 0) { return; }
        const latest = exist[0];
        if (latest.getDistanceMs() > JUDGE_AWFUL_MS) { return; }

        exist.shift();
        const judge_state = this.#getJudgeState(latest);
        latest.setIsJudged(true);

        this.#latest_judge_state = judge_state;
        this.#latest_judge_ms = latest.getDistanceMs();

        this.#judge_text_duration = JUDGE_TEXT_SHOW_DURATION;

        resultManager.add(judge_state);
    }

    #getJudgeState(notes)
    {
        const dist = Math.abs(notes.getDistanceMs());
        if (dist <= JUDGE_AWESOME_MS)
        {
            return JUDGE_AWESOME;
        }
        else if (dist <= JUDGE_NICE_MS)
        {
            return JUDGE_NICE;
        }
        else if (dist <= JUDGE_NOT_GOOD_MS)
        {
            return JUDGE_NOT_GOOD;
        }
        else
        {
            return JUDGE_AWFUL;
        }
    }

    getLatestJudgeState()
    {
        return this.#latest_judge_state;
    }

    keyUpProc(key)
    {
        this.#already_pressed[KEY_TO_LANE[key]] = false;
    }

    isAlreadyPressed(key)
    {
        return this.#already_pressed[KEY_TO_LANE[key]];
    }

    showText()
    {
        if (this.#latest_judge_state === JUDGE_NONE) { return; }
        if (this.#judge_text_duration === 0) { return; }

        const combo = resultManager.getCombo();
        const judge_text =  (combo === 0)                                           ?
                            JUDGE_TEXT[this.#latest_judge_state]                    :
                            JUDGE_TEXT[this.#latest_judge_state] + String(combo);

        const judge_ms = this.#latest_judge_ms;

        // 判定文字
        ctx.font = JUDGE_TEXT_FONT;
        ctx.textAlign = JUDGE_TEXT_ALIGN;
        ctx.fillText(
                        judge_text,
                        X_POS_JUDGE_TEXT,
                        Y_POS_JUDGE_TEXT
                    );

        // 判定文字ms
        // msがマイナスならSLOW
        ctx.font = JUDGE_MS_TEXT_FONT;
        ctx.fillStyle = (judge_ms < 0) ? COLOR_JUDGE_SLOW : COLOR_JUDGE_FAST;
        const text_ms = (judge_ms === 0) ? '' : String(-judge_ms) + 'ms';
        ctx.fillText(
                        text_ms,
                        X_POS_JUDGE_TEXT,
                        Y_POS_JUDGE_MS_TEXT
                    );

        ctx.fillStyle = COLOR_INIT;
        ctx.textAlign = JUDGE_TEXT_ALIGN_INIT;
        this.#judge_text_duration --;
    }

    tooLate()
    {
        const flat_exist_notes = executer.getFlatExistNotes();
        const deads = flat_exist_notes.filter(v => !(v.state === NOTES_STATE_LIVE));
        if (deads.length !== 0)
        {
            this.#latest_judge_state = JUDGE_AWFUL;
            this.#latest_judge_ms = 0;
            resultManager.add(JUDGE_AWFUL);
            this.#judge_text_duration = JUDGE_TEXT_SHOW_DURATION;
        }
    }
}