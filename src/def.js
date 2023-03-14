// Global variables
const canvas = document.getElementById("myCanvas");
canvas.setAttribute("width", '1280');
canvas.setAttribute("height", '720');

const ctx = canvas.getContext("2d");

// JUDGE TYPE
const JUDGE_NONE        = 0;
const JUDGE_AWESOME     = 1;
const JUDGE_NICE        = 2;
const JUDGE_NOT_GOOD    = 3;
const JUDGE_AWFUL       = 4;

const JUDGE_AWESOME_MS     = 30;
const JUDGE_NICE_MS        = 50;
const JUDGE_NOT_GOOD_MS    = 90;
const JUDGE_AWFUL_MS       = 120;

const JUDGE_TEXT =
{
    [JUDGE_AWESOME]   :   'AWESOME!',
    [JUDGE_NICE]      :   'NICE',
    [JUDGE_NOT_GOOD]  :   'NOT GOOD',
    [JUDGE_AWFUL]     :   'AWFUL',
    [JUDGE_NONE]      :   ''
}

// LANE
const LANE_NONE     =   0;
const LANE_ONE      =   1;
const LANE_TWO      =   2;
const LANE_THREE    =   3;
const LANE_FOUR     =   4;
const LANE_FIVE     =   5;
const LANE_SIX      =   6;

// SCORE SCRIPT
const NO_NOTE       =   0;
const BE_NOTE       =   1;

// KEY
let LANE_ONE_KEY = 'S';
let LANE_TWO_KEY = 'D';
let LANE_THREE_KEY = 'F';
let LANE_FOUR_KEY = 'J';
let LANE_FIVE_KEY = 'K';
let LANE_SIX_KEY = 'L';

const KEY_TO_LANE =
{
    [LANE_ONE_KEY]      :   LANE_ONE,
    [LANE_TWO_KEY]      :   LANE_TWO,
    [LANE_THREE_KEY]    :   LANE_THREE,
    [LANE_FOUR_KEY]     :   LANE_FOUR,
    [LANE_FIVE_KEY]     :   LANE_FIVE,
    [LANE_SIX_KEY]      :   LANE_SIX
};

function getKeyName(str)
{
    // e.codeを投げ込んでほしい(ex.keyS)
    return str.slice(-1);
}

// NOTES
const NOTES_WIDTH = 100;
const NOTES_HEIGHT = 15;

const NOTES_X_POS =
{
    [LANE_ONE]    :   (canvas.width / 2) - NOTES_WIDTH * 3,
    [LANE_TWO]    :   (canvas.width / 2) - NOTES_WIDTH * 2,
    [LANE_THREE]  :   (canvas.width / 2) - NOTES_WIDTH,
    [LANE_FOUR]   :   (canvas.width / 2),
    [LANE_FIVE]   :   (canvas.width / 2) + NOTES_WIDTH,
    [LANE_SIX]    :   (canvas.width / 2) + NOTES_WIDTH * 2
}
const NOTES_Y_INIT_POS = 0;

let NOTES_DROP_SPEED = 4;

const NOTES_STATE_LIVE = 1;
const NOTES_STATE_DEAD = 2;

// JUDGE LINE
const JUDGE_LINE_Y_POS = 0.9 * canvas.height;
const COLOR_JUDGE_LINE = "#F00";
const JUDGE_MS = (JUDGE_LINE_Y_POS * 4) / NOTES_DROP_SPEED;

// COLOR
const COLOR_INIT = "#000";
const COLOR_TRANSPARENT = "rgba(0, 0, 0, 0)";
const COLOR_NOTES_DEFAULT = "#0095DD";

// JUDGE TEXT
const JUDGE_TEXT_SHOW_DURATION = 200;
const X_POS_JUDGE_TEXT = canvas.width / 2;
const Y_POS_JUDGE_TEXT = canvas.height / 2;
const JUDGE_TEXT_FONT = '60px sans-serif';
const JUDGE_TEXT_ALIGN_INIT = 'start';
const JUDGE_TEXT_ALIGN = 'center';

// RESULT
const X_POS_RESULT_TEXT             = canvas.width / 2;
const Y_POS_RESULT_TEXT             = canvas.height / 2 - 100;
const Y_POS_RESULT_TEXT_AWESOME     = Y_POS_RESULT_TEXT + 50;
const Y_POS_RESULT_TEXT_NICE        = Y_POS_RESULT_TEXT + 100;
const Y_POS_RESULT_TEXT_NOT_GOOD    = Y_POS_RESULT_TEXT + 150;
const Y_POS_RESULT_TEXT_AWFUL       = Y_POS_RESULT_TEXT + 200;

const RESULT_TEXT = 'RESULT';

// KEY BEAM
const KEY_BEAM_WIDTH = NOTES_WIDTH;
const KEY_BEAM_HEIGHT = 200;