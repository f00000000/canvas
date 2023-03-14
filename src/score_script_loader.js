class ScoreScriptLoader
{
    #score_script = {};
    constructor()
    {

    }

    load()
    {
        const score = sample_score;
        try
        {
            score.forEach((v) =>
            {
                this.validate(v);
            });
            this.#score_script = score;
        }
        catch(e)
        {
            alert(e.message);
        }
    }

    validate(score)
    {
        const fraction = score.fraction;
    
        if  (
            fraction !== score[LANE_ONE].length    ||
            fraction !== score[LANE_TWO].length    ||
            fraction !== score[LANE_THREE].length  ||
            fraction !== score[LANE_FOUR].length   ||
            fraction !== score[LANE_FIVE].length   ||
            fraction !== score[LANE_SIX].length
        )
        {
            throw new Error('譜面読み込みエラー : 各レーンの配列の要素数とfractionの値を一致させてください');
        }
    
        const one =     [...score[LANE_ONE]];
        const two =     [...score[LANE_TWO]];
        const three =   [...score[LANE_THREE]];
        const four =    [...score[LANE_FOUR]];
        const five =    [...score[LANE_FIVE]];
        const six =     [...score[LANE_SIX]];
    
        const validate_lane = [one, two, three, four, five, six];
    
        validate_lane.forEach((lane) =>
        {
            validate(lane);
        });
    
        function validate(lane)
        {
            lane.forEach((v) =>
            {
                if (v !== NO_NOTE && v !== BE_NOTE)
                {
                    throw new Error(`譜面読み込みエラー : 不正な値が使用されています レーン : ${v}`);
                }
            });
        }
    }

    getScoreScript()
    {
        return this.#score_script;
    }
}