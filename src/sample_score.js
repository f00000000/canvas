const sample_score = 
[
    {
        "bpm"         :   150,
        "fraction"    :   8,
        "1"           :   [1, 0, 1, 0, 0, 0, 1, 0],
        "2"           :   [0, 0, 0, 0, 1, 0, 1, 1],
        "3"           :   [1, 0, 1, 1, 1, 1, 0, 0],
        "4"           :   [1, 1, 1, 0, 1, 1, 0, 0],
        "5"           :   [0, 0, 0, 0, 1, 0, 1, 1],
        "6"           :   [1, 0, 1, 0, 0, 0, 1, 0]
    },
    {
        "bpm"         :   150,
        "fraction"    :   8,
        "1"           :   [1, 1, 0, 0, 0, 0, 0, 0],
        "2"           :   [0, 0, 0, 0, 0, 0, 0, 0],
        "3"           :   [0, 0, 0, 0, 1, 1, 0, 0],
        "4"           :   [0, 0, 0, 0, 1, 1, 0, 0],
        "5"           :   [0, 0, 0, 0, 0, 0, 0, 0],
        "6"           :   [1, 1, 0, 0, 0, 0, 0, 0]
    },
    {
        "bpm"         :   150,
        "fraction"    :   8,
        "1"           :   [1, 0, 1, 0, 0, 0, 0, 0],
        "2"           :   [0, 0, 0, 0, 1, 0, 1, 0],
        "3"           :   [0, 0, 0, 0, 0, 0, 0, 0],
        "4"           :   [0, 0, 0, 0, 0, 0, 0, 0],
        "5"           :   [0, 0, 0, 0, 0, 1, 0, 1],
        "6"           :   [0, 1, 0, 1, 0, 0, 0, 0]
    },
    {
        "bpm"         :   150,
        "fraction"    :   16,
        "1"           :   [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "2"           :   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        "3"           :   [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        "4"           :   [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        "5"           :   [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
        "6"           :   [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        "bpm"         :   150,
        "fraction"    :   16,
        "1"           :   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "2"           :   [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        "3"           :   [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        "4"           :   [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        "5"           :   [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        "6"           :   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        "bpm"         :   150,
        "fraction"    :   24,
        "1"           :   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        "2"           :   [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        "3"           :   [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        "4"           :   [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        "5"           :   [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        "6"           :   [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        "bpm"         :   150,
        "fraction"    :   32,
        "1"           :   [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        "2"           :   [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        "3"           :   [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        "4"           :   [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
        "5"           :   [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        "6"           :   [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
    }
]