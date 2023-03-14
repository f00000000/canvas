class ScoreScriptExecuter
{
    #score_script = {};
    #interval = 0;
    #handling_notes = {};
    #exist_notes =
    {
        [LANE_ONE]      :   [],
        [LANE_TWO]      :   [],
        [LANE_THREE]    :   [],
        [LANE_FOUR]     :   [],
        [LANE_FIVE]     :   [],
        [LANE_SIX]      :   [],
    };
    #time = 0;
    #notes_count = 0;

    #measure = {};
    #lane = [];

    constructor(score_script)
    {
        this.#score_script = score_script;
    }

    isEmpty(obj)
    {
        return Object.keys(obj).length === 0;
    }

    exec()
    {
        const diff_time = Date.now() - this.#time;

        if (this.isEmpty(this.#score_script) && this.isEmpty(this.#measure))
        {
            this.updateExistNotes();
            if (this.isFinishScoreScript())
            {
                setTimeout(() => resultManager.showResult(), 1000);
            }
            return;
        }

        if (diff_time >= this.#interval)
        {
            if (this.isEmpty(this.#measure))
            {
                // 小節および小節の各レーンをセット
                this.#measure = this.#score_script.shift();
                this.#lane =
                [
                    this.#measure['1'],
                    this.#measure['2'],
                    this.#measure['3'],
                    this.#measure['4'],
                    this.#measure['5'],
                    this.#measure['6'],
                ];
            }

            this.#lane.forEach((v, i) =>
            {
                const lane = i + 1;
                this.#handling_notes['lane_' + lane] = v.shift();

                // ノーツ誕生
                if (this.#handling_notes['lane_' + lane] === BE_NOTE)
                {
                    this.#exist_notes[lane].push(new Notes(lane));
                    this.#notes_count ++;
                }
            });
            
            this.#time = Date.now();
            this.#interval = ((60 / this.#measure.bpm) * 4000) / this.#measure.fraction;

            // 小節内のすべてのノーツを処理したら、小節情報を削除(見るのは1レーンだけでOK?足並み揃える仕様だから)
            if (this.#lane[0].length === 0)
            {
                this.#measure   = {};
                this.#lane      = [];
            }
        }
        else
        {

        }

        this.updateExistNotes();
    }

    updateExistNotes()
    {
        // 寿命を終えたノーツ以外のみのリストに更新
        for (let i = 0; i < Object.keys(this.#exist_notes).length; i++)
        {
            const lane = i + 1;
            const lives = this.#exist_notes[lane].filter(v => !(v.state === NOTES_STATE_DEAD));
            this.#exist_notes[lane] = lives;
        }
    }

    getFlatExistNotes()
    {
        return  [
                    this.#exist_notes[LANE_ONE],
                    this.#exist_notes[LANE_TWO],
                    this.#exist_notes[LANE_THREE],
                    this.#exist_notes[LANE_FOUR],
                    this.#exist_notes[LANE_FIVE],
                    this.#exist_notes[LANE_SIX],
                ].flat();
    }

    getExistNotes()
    {
        return this.#exist_notes;
    }

    isFinishScoreScript()
    {
        if (!this.isEmpty(this.#score_script)) { return false; }
        if (!this.isEmpty(this.#measure)) { return false;}

        if  (
                this.#exist_notes[LANE_ONE].length      === 0   &&
                this.#exist_notes[LANE_TWO].length      === 0   &&
                this.#exist_notes[LANE_THREE].length    === 0   &&
                this.#exist_notes[LANE_FOUR].length     === 0   &&
                this.#exist_notes[LANE_FIVE].length     === 0   &&
                this.#exist_notes[LANE_SIX].length      === 0
            )
        {
            return true;
        }
        return false;
    }
}