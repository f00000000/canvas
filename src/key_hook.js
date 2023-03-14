document.addEventListener("keydown", keyDownCallBack, false);
document.addEventListener("keyup", keyUpCallBack, false);

class KeyHandler
{
    constructor()
    {
        this.is_down_lane_one_key    = false;
        this.is_down_lane_two_key    = false;
        this.is_down_lane_three_key  = false;
        this.is_down_lane_four_key   = false;
        this.is_down_lane_five_key   = false; 
        this.is_down_lane_six_key    = false;
    
        this.is_up_lane_one_key    = true;
        this.is_up_lane_two_key    = true;
        this.is_up_lane_three_key  = true;
        this.is_up_lane_four_key   = true;
        this.is_up_lane_five_key   = true; 
        this.is_up_lane_six_key    = true;
    }

    isDown(lane)
    {
        if (typeof lane !== 'string') { return false; }

        return this[`is_down_lane_${lane}_key`];
    }

    isUp(lane)
    {
        if (typeof lane !== 'string') { return false; }
    }
}

const keyHandler = new KeyHandler();
const judger = new JudgeManager();

function keyDownCallBack(e)
{
    const key = getKeyName(e.code);
    e.preventDefault();
    if (key === LANE_ONE_KEY)
    {
        keyHandler.is_down_lane_one_key     = true;
        keyHandler.is_up_lane_one_key       = false;
    }
    if (key === LANE_TWO_KEY)
    {
        keyHandler.is_down_lane_two_key     = true;
        keyHandler.is_up_lane_two_key       = false;
    }
    if (key === LANE_THREE_KEY)
    {
        keyHandler.is_down_lane_three_key   = true;
        keyHandler.is_up_lane_three_key     = false;
    }
    if (key === LANE_FOUR_KEY)
    {
        keyHandler.is_down_lane_four_key    = true;
        keyHandler.is_up_lane_four_key      = false;
    }
    if (key === LANE_FIVE_KEY)
    {
        keyHandler.is_down_lane_five_key    = true;
        keyHandler.is_up_lane_five_key      = false;
    }
    if (key === LANE_SIX_KEY)
    {
        keyHandler.is_down_lane_six_key     = true;
        keyHandler.is_up_lane_six_key       = false;
    }

    if (isBeforeStart && e.code === 'Enter')
    {
        isBeforeStart = false;
        mainLoop();
        return;
    }

    if (!judger.isAlreadyPressed(key))
    {
        judger.judge(key);
    }
}

function keyUpCallBack(e)
{
    const key = getKeyName(e.code);
    e.preventDefault();
    if (key === LANE_ONE_KEY)
    {
        keyHandler.is_down_lane_one_key     = false;
        keyHandler.is_up_lane_one_key       = true;
    }
    if (key === LANE_TWO_KEY)
    {
        keyHandler.is_down_lane_two_key     = false;
        keyHandler.is_up_lane_two_key       = true;
    }
    if (key === LANE_THREE_KEY)
    {
        keyHandler.is_down_lane_three_key   = false;
        keyHandler.is_up_lane_three_key     = true;
    }
    if (key === LANE_FOUR_KEY)
    {
        keyHandler.is_down_lane_four_key    = false;
        keyHandler.is_up_lane_four_key      = true;
    }
    if (key === LANE_FIVE_KEY)
    {
        keyHandler.is_down_lane_five_key    = false;
        keyHandler.is_up_lane_five_key      = true;
    }
    if (key === LANE_SIX_KEY)
    {
        keyHandler.is_down_lane_six_key     = false;
        keyHandler.is_up_lane_six_key       = true;
    }

    judger.keyUpProc(key);
}