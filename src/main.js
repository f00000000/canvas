// load score script
const loader = new ScoreScriptLoader();
loader.load();


const hooker = new KeyHandler();
const executer = new ScoreScriptExecuter(loader.getScoreScript());
const judge_line = new JudgeLine();

const resultManager = new ResultManager();

function update()
{
    // canvas clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 判定ライン描画
    judge_line.draw();

    // ノーツ描画
    executer.exec();

    const drawList = executer.getFlatExistNotes();
    drawList.forEach((v) =>
    {
        v.draw();
    })

    // 判定文字描画
    judger.showText();

    // TOO LATE処理
    judger.tooLate();
}

// TODO READYやRETRY部分のクラスにわけたい
let isBeforeStart = true;

ctx.font        = JUDGE_TEXT_FONT;
ctx.textAlign   = JUDGE_TEXT_ALIGN;
ctx.fillText(
                'PRESS ENTER KEY TO START',
                X_POS_JUDGE_TEXT,
                Y_POS_JUDGE_TEXT
            );
ctx.textAlign = JUDGE_TEXT_ALIGN_INIT;

// main loop
let mainLoopId = undefined;
function mainLoop()
{
    mainLoopId = setInterval(update, 1);
}