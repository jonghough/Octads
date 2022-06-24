function getOctads() {
    Oct1 = [
        [1, 1, 1, 1, 2, 2, 2, 2],
        [1, 1, 1, 1, 2, 2, 2, 2],
        [3, 3, 3, 3, 4, 4, 4, 4]
    ];
    Oct2 = [
        [1, 2, 2, 2, 2, 1, 1, 1],
        [1, 2, 3, 4, 1, 2, 3, 4],
        [1, 2, 3, 4, 1, 2, 3, 4]
    ];
    Oct3 = [
        [1, 2, 1, 1, 2, 1, 2, 2],
        [1, 2, 3, 4, 1, 2, 3, 4],
        [2, 1, 4, 3, 2, 1, 4, 3]
    ];
    Oct4 = [
        [1, 1, 2, 1, 2, 2, 1, 2],
        [1, 2, 3, 4, 1, 2, 3, 4],
        [3, 4, 1, 2, 3, 4, 1, 2]
    ];
    Oct5 = [
        [1, 1, 1, 2, 2, 2, 2, 1],
        [1, 2, 3, 4, 1, 2, 3, 4],
        [4, 3, 2, 1, 4, 3, 2, 1]
    ];
    Oct6 = [
        [1, 2, 1, 2, 2, 1, 2, 1],
        [1, 2, 1, 2, 2, 1, 2, 1],
        [3, 4, 3, 4, 4, 3, 4, 3]
    ];
    Oct7 = [
        [1, 2, 2, 1, 1, 2, 1, 2],
        [1, 1, 2, 2, 3, 3, 4, 4],
        [1, 1, 2, 2, 3, 3, 4, 4]
    ];
    Oct8 = [
        [1, 2, 2, 1, 2, 1, 2, 1],
        [1, 1, 2, 2, 3, 3, 4, 4],
        [2, 2, 1, 1, 4, 4, 3, 3]
    ];
    Oct9 = [
        [1, 2, 1, 2, 1, 2, 2, 1],
        [1, 1, 2, 2, 3, 3, 4, 4],
        [3, 3, 4, 4, 1, 1, 2, 2]
    ];
    Oct10 = [
        [1, 2, 1, 2, 2, 1, 1, 2],
        [1, 1, 2, 2, 3, 3, 4, 4],
        [4, 4, 3, 3, 2, 2, 1, 1]
    ];
    Oct11 = [
        [1, 2, 2, 1, 2, 1, 1, 2],
        [1, 2, 2, 1, 2, 1, 1, 2],
        [3, 4, 4, 3, 4, 3, 3, 4]
    ];
    Oct12 = [
        [1, 1, 2, 2, 1, 2, 2, 1],
        [1, 3, 1, 3, 4, 2, 4, 2],
        [1, 3, 1, 3, 4, 2, 4, 2]
    ];
    Oct13 = [
        [1, 2, 2, 1, 2, 2, 1, 1],
        [1, 3, 1, 3, 4, 2, 4, 2],
        [2, 4, 2, 4, 3, 1, 3, 1]
    ];
    Oct14 = [
        [1, 1, 2, 2, 2, 1, 1, 2],
        [1, 3, 1, 3, 4, 2, 4, 2],
        [3, 1, 3, 1, 2, 4, 2, 4]
    ];
    Oct15 = [
        [1, 2, 2, 1, 1, 1, 2, 2],
        [1, 3, 1, 3, 4, 2, 4, 2],
        [4, 2, 4, 2, 1, 3, 1, 3]
    ];
    Oct16 = [
        [1, 2, 2, 1, 1, 2, 2, 1],
        [1, 2, 2, 1, 1, 2, 2, 1],
        [3, 4, 4, 3, 3, 4, 4, 3]
    ];
    Oct17 = [
        [1, 1, 1, 2, 2, 2, 1, 2],
        [1, 4, 3, 2, 4, 1, 2, 3],
        [1, 4, 3, 2, 4, 1, 2, 3]
    ];
    Oct18 = [
        [1, 2, 2, 2, 1, 2, 1, 1],
        [1, 4, 3, 2, 4, 1, 2, 3],
        [2, 3, 4, 1, 3, 2, 1, 4]
    ];
    Oct19 = [
        [1, 2, 1, 1, 1, 2, 2, 2],
        [1, 4, 3, 2, 4, 1, 2, 3],
        [3, 2, 1, 4, 2, 3, 4, 1]
    ];
    Oct20 = [
        [1, 1, 2, 1, 2, 2, 2, 1],
        [1, 4, 3, 2, 4, 1, 2, 3],
        [4, 1, 2, 3, 1, 4, 3, 2]
    ];
    Oct21 = [
        [1, 1, 2, 2, 2, 2, 1, 1],
        [1, 1, 2, 2, 2, 2, 1, 1],
        [3, 3, 4, 4, 4, 4, 3, 3]
    ];
    Oct22 = [
        [1, 2, 1, 2, 1, 1, 2, 2],
        [1, 4, 4, 1, 2, 3, 3, 2],
        [1, 4, 4, 1, 2, 3, 3, 2]
    ];
    Oct23 = [
        [1, 1, 2, 2, 1, 2, 1, 2],
        [1, 4, 4, 1, 2, 3, 3, 2],
        [2, 3, 3, 2, 1, 4, 4, 1]
    ];
    Oct24 = [
        [1, 1, 2, 2, 2, 1, 2, 1],
        [1, 4, 4, 1, 2, 3, 3, 2],
        [3, 2, 2, 3, 4, 1, 1, 4]
    ];
    Oct25 = [
        [1, 2, 1, 2, 2, 2, 1, 1],
        [1, 4, 4, 1, 2, 3, 3, 2],
        [4, 1, 1, 4, 3, 2, 2, 3]
    ];
    Oct26 = [
        [1, 2, 1, 2, 1, 2, 1, 2],
        [1, 2, 1, 2, 1, 2, 1, 2],
        [3, 4, 3, 4, 3, 4, 3, 4]
    ];
    Oct27 = [
        [1, 1, 2, 1, 2, 1, 2, 2],
        [1, 2, 4, 3, 3, 4, 2, 1],
        [1, 2, 4, 3, 3, 4, 2, 1]
    ];
    Oct28 = [
        [1, 1, 1, 2, 1, 2, 2, 2],
        [1, 2, 4, 3, 3, 4, 2, 1],
        [2, 1, 3, 4, 4, 3, 1, 2]
    ];
    Oct29 = [
        [1, 2, 1, 1, 2, 2, 1, 2],
        [1, 2, 4, 3, 3, 4, 2, 1],
        [3, 4, 2, 1, 1, 2, 4, 3]
    ];
    Oct30 = [
        [1, 2, 2, 2, 1, 1, 1, 2],
        [1, 2, 4, 3, 3, 4, 2, 1],
        [4, 3, 1, 2, 2, 1, 3, 4]
    ];
    Oct31 = [
        [1, 1, 2, 2, 1, 1, 2, 2],
        [1, 1, 2, 2, 1, 1, 2, 2],
        [3, 3, 4, 4, 3, 3, 4, 4]
    ];
    Oct32 = [
        [1, 2, 1, 1, 2, 2, 2, 1],
        [1, 3, 2, 4, 2, 4, 1, 3],
        [1, 3, 2, 4, 2, 4, 1, 3]
    ];
    Oct33 = [
        [1, 1, 1, 2, 2, 1, 2, 2],
        [1, 3, 2, 4, 2, 4, 1, 3],
        [2, 4, 1, 3, 1, 3, 2, 4]
    ];
    Oct34 = [
        [1, 2, 2, 2, 1, 1, 2, 1],
        [1, 3, 2, 4, 2, 4, 1, 3],
        [3, 1, 4, 2, 4, 2, 3, 1]
    ];
    Oct35 = [
        [1, 1, 2, 1, 1, 2, 2, 2],
        [1, 3, 2, 4, 2, 4, 1, 3],
        [4, 2, 3, 1, 3, 1, 4, 2]
    ];
    var OCTADS = [Oct1, Oct2, Oct3, Oct4, Oct5, Oct6, Oct7, Oct8, Oct9, Oct10, Oct11, Oct12, Oct13, Oct14, Oct15, Oct16, Oct17, Oct18, Oct19, Oct20, Oct21, Oct22, Oct23, Oct24, Oct25, Oct26, Oct27, Oct28, Oct29, Oct30, Oct31, Oct32, Oct33, Oct34, Oct35];
    return OCTADS;
}

function getCount(array) {

    return array.reduce((a, b) => a + b, 0);
}

function getOctad(array) {
    // STEP1 , find the heavy brick.
    var a0 = array.slice(0, 8);
    var a1 = array.slice(8, 16);
    var a2 = array.slice(16);

    var a0Count = getCount(a0);
    var a1Count = getCount(a1);
    var a2Count = getCount(a2);
    if (a0Count > 4) {
        return [1, 1, 1, 1, 1, 1, 1, 1,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0
        ];
    }
    if (a1Count > 4) {
        return [0, 0, 0, 0, 0, 0, 0, 0,
            1, 1, 1, 1, 1, 1, 1, 1,
            0, 0, 0, 0, 0, 0, 0, 0
        ];
    }
    if (a2Count > 4) {
        return [0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            1, 1, 1, 1, 1, 1, 1, 1
        ];
    }
    return findOctad([a0, a1, a2])

}



function findOctadWithHeavyBrick(heavy, brick1, brick2, heavyBrickIncidence, fatBrickIncidence) {
    octads = getOctads();
    var l = octads.length;
    var i = 0;
    var arrs = [];
    var br1 = [];
    var br2 = [];
    for (var k = 0; k < 8; k++) {
        if (heavy[k] > 0) {
            arrs.push(k);

        }
        if (brick1[k] > 0) {
            br1.push(k);
        }
        if (brick2[k] > 0) {
            br2.push(k + 8);
        }
    }
    var foundHeavy = null;
    var fatBrick = null;


    var fat = br1.concat(br2);
    for (j = 0; j < l; j++) {
        var octad = octads[j];
        var fb = octad[1].concat(octad[2]);
        var blockNum = fb[fat[0]]; //the number
        var filteredFB = [];
        var incidence = 0;
        for (i = 0; i < fat.length; i++) {
            if (fb[fat[i]] == blockNum) {
                filteredFB.push(i + 8);

            }
        }

        var hb = octad[0];
        var blockNumx = hb[arrs[0]]; //the number
        var filteredHB = [];
        for (i = 0; i < 8; i++) {
            if (hb[arrs[i]] == blockNumx) {
                filteredHB.push(i);
            }
        }
        if (filteredFB.length === fatBrickIncidence &&
            filteredHB.length === heavyBrickIncidence) {
            fatBrick = [];
            for (i = 0; i < 16; i++) {
                if (fb[i] == blockNum) {
                    fatBrick.push(i + 8);
                }
            }

            foundHeavy = [];
            for (i = 0; i < 8; i++) {
                if (hb[i] == blockNum) {
                    foundHeavy.push(i);

                }
            }
            break;
        }
    }
    var c = foundHeavy.concat(fatBrick);

    return c;
}

function findOctad(bricks) {
    octads = getOctads();
    var l = octads.length;
    var res = null;
    for (ci = 0; ci < 3; ci++) {
        var heavy = bricks[ci];
        var other1 = (ci + 1) % 3;
        var other2 = (ci + 2) % 3;
        if (other1 > other2) {
            tmp = other1;
            other1 = other2;
            other2 = tmp;
        }
        var others = bricks[other1].concat(bricks[other2]);
        for (j = 0; j < l; j++) {
            var [countHeavy, indicesHeavy] = findHeavyMatch(heavy, octads[j][0]);
            var [countFat, indicesFat] = findFatMatch(others, octads[j][1].concat(octads[j][2]));
            res = [0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0
            ];
            if (indicesFat.length == 4 && indicesHeavy.length == 4) {
                if (ci == 0) {
                    for (k = 0; k < indicesHeavy.length; k++) {
                        res[indicesHeavy[k]] = 1;
                    }
                    for (k = 0; k < indicesFat.length; k++) {
                        res[8 + indicesFat[k]] = 1;
                    }
                } else if (ci == 1) {
                    for (k = 0; k < indicesHeavy.length; k++) {
                        res[indicesHeavy[k] + 8] = 1;
                    }
                    for (k = 0; k < indicesFat.length; k++) {
                        var ind = indicesFat[k];
                        if (ind < 8)
                            res[ind] = 1;
                        else {
                            res[ind + 8] = 1;
                        }
                    }

                } else {
                    for (k = 0; k < indicesHeavy.length; k++) {
                        res[indicesHeavy[k] + 16] = 1;
                    }
                    for (k = 0; k < indicesFat.length; k++) {
                        var ind = indicesFat[k];
                        res[ind] = 1;

                    }

                }
                return res;
            }
        }

    }
    return null;
}

function findFatMatch(myBrick, octads) {
    var color = -1
    var count = 0;
    var indices = []
    for (i = 0; i < 16; i++) {
        if (color == -1 && myBrick[i] > 0) {
            color = octads[i];
            break;
        }
    }
    for (i = 0; i < 16; i++) {

        if (color > -1 && myBrick[i] > 0 && octads[i] == color) {
            count++;

            indices.push(i);
        } else if (color > -1 && myBrick[i] > 0 && octads[i] != color) {
            return [0, []];
        } else if (color > -1 && octads[i] == color) {

            indices.push(i);
        }
    }

    return [count, indices];
}

function findHeavyMatch(myBrick, octad) {
    var color = -1
    var count = 0;
    var indices = []
    for (i = 0; i < 8; i++) {
        if (color == -1 && myBrick[i] > 0) {
            color = octad[i];
            break;
        }
    }
    for (i = 0; i < 8; i++) {
        if (color > -1 && myBrick[i] > 0 && octad[i] == color) {
            count++;

            indices.push(i);
        } else if (color > -1 && myBrick[i] > 0 && octads[i] != color) {
            return [0, []];
        } else if (color > -1 && octad[i] == color) {

            indices.push(i);
        }
    }

    return [count, indices];

}

function findTetrads(array) {
    const map1 = new Map();
    const used = new Set();
    for (let ct = 0; ct < 24; ct++) {
        if (array[ct] === 0 && !used.has(ct)) {
            array[ct] = 1;
            let octad = getOctad(array);
            for (let o1 = 0; o1 < 24; o1++) {
                if (octad[o1] == 1) {
                    used.add(o1);
                }
            }
            let h = hashCode(arrayToString(octad));
            map1.set(h, octad);
            array[ct] = 0;
        }
        if (map1.values().length > 4) {
            break;
        }
    }

    return map1.values();
}

function arrayToString(array) {
    let res = "";
    for (let v = 0; v < 24; v++) {
        res += array[v] + "";
    }
    return res;
}

function hashCode(str) {
    var hash = 0,
        i, c;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        c = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + c + (c ^ 0x143912f2);
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};



var paf = [9, 10, 11];
//           0, 1, 2, 3, 4, 5, 6, 7, 8 
var paf0v = [5, 0, 2, 1, 6, 3, 4, 8, 7];
var paf1v = [4, 6, 2, 5, 8, 3, 1, 0, 7];
var paf2v = [4, 6, 2, 8, 3, 5, 7, 1, 0];

paf0v = [0, 1, 2, 3, 4, 5, 6, 7, 8];
paf1v = [6, 4, 2, 0, 7, 5, 3, 1, 8];
paf2v = [6, 4, 2, 7, 5, 0, 8, 3, 1];

var lines = [
    [
        1, 1, 1,
        0, 0, 0,
        0, 0, 0,
    ],
    [

        0, 0, 0,
        1, 1, 1,
        0, 0, 0,
    ],
    [
        0, 0, 0,
        0, 0, 0,
        1, 1, 1,
    ],
    [
        1, 0, 0,
        1, 0, 0,
        1, 0, 0
    ],
    [
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
    ],
    [
        0, 0, 1,
        0, 0, 1,
        0, 0, 1
    ],
    [
        1, 0, 0,
        0, 1, 0,
        0, 0, 1
    ],
    [
        0, 1, 0,
        0, 0, 1,
        1, 0, 0
    ],
    [
        0, 0, 1,
        1, 0, 0,
        0, 1, 0
    ],
    [
        0, 0, 1,
        0, 1, 0,
        1, 0, 0
    ],
    [
        1, 0, 0,
        0, 0, 1,
        0, 1, 0
    ],
    [
        0, 1, 0,
        1, 0, 0,
        0, 0, 1
    ]
]
var parallels = [
    [
        1, 1, 1,
        1, 1, 1,
        0, 0, 0
    ],
    [
        1, 1, 1,
        0, 0, 0,
        1, 1, 1
    ],
    [
        0, 0, 0,
        1, 1, 1,
        1, 1, 1
    ],
    [
        1, 1, 0,
        1, 1, 0,
        1, 1, 0
    ],
    [
        1, 0, 1,
        1, 0, 1,
        1, 0, 1
    ],
    [
        0, 1, 1,
        0, 1, 1,
        0, 1, 1
    ],
    [
        1, 0, 1,
        1, 1, 0,
        0, 1, 1
    ],
    [
        1, 1, 0,
        0, 1, 1,
        1, 0, 1
    ],
    [
        0, 1, 1,
        1, 0, 1,
        1, 1, 0
    ],
    [
        0, 1, 1,
        1, 1, 0,
        1, 0, 1
    ],
    [
        1, 0, 1,
        0, 1, 1,
        1, 1, 0
    ],
    [
        1, 1, 0,
        1, 0, 1,
        0, 1, 1
    ]
]
var crosses = [
    [
        1, 1, 1,
        1, 0, 0,
        1, 0, 0
    ],
    [
        1, 0, 0,
        1, 1, 1,
        1, 0, 0
    ],
    [
        1, 0, 0,
        1, 0, 0,
        1, 1, 1
    ],
    [
        1, 1, 1,
        0, 1, 0,
        0, 1, 0
    ],
    [
        1, 1, 1,
        0, 0, 1,
        0, 0, 1
    ],
    [
        0, 1, 0,
        1, 1, 1,
        0, 1, 0
    ],
    [
        0, 0, 1,
        1, 1, 1,
        0, 0, 1
    ],
    [
        0, 0, 1,
        0, 0, 1,
        1, 1, 1
    ],
    [
        0, 1, 0,
        0, 1, 0,
        1, 1, 1
    ],
    [
        1, 0, 1,
        0, 1, 0,
        1, 0, 1
    ],
    [
        0, 1, 1,
        0, 1, 1,
        1, 0, 0
    ],
    [
        0, 0, 1,
        1, 1, 0,
        1, 1, 0
    ],
    [
        1, 1, 0,
        1, 1, 0,
        0, 0, 1
    ],
    [
        1, 0, 0,
        0, 1, 1,
        0, 1, 1
    ],
    [
        0, 1, 1,
        1, 0, 0,
        0, 1, 1
    ],
    [
        0, 1, 0,
        1, 0, 1,
        1, 0, 1
    ],
    [
        1, 1, 0,
        0, 0, 1,
        1, 1, 0
    ],
    [
        1, 0, 1,
        1, 0, 1,
        0, 1, 0
    ]
];


function areArraysEqual(a1, a2) {
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) return false;

    }
    return true;
}

function areArraysDisjoint(a1, a2) {
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] === a2[i] && a1[i] === 1) return false;

    }

    return true;
}

function areArraysEqualBut1(a1, a2) {
    mismatchCount = 0;
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) {
            mismatchCount++;
            if (mismatchCount > 1) {
                return false;
            }
        }
    }
    return true;
}

function findHexad(infArray, affineArray) {
    let infCount = 0
    infArray.forEach(element => {
        infCount += element;
    });

    if (infCount == 0) {
        // find parallels
        // affine array should be of form (0,1,2,3,4...)
        // 

        let pafvs = [paf0v, paf1v, paf2v];
        for (let i = 0; i < 3; i++) {
            let v = pafvs[i];
            let a = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (let j = 0; j < 9; j++) {
                if (affineArray[j] === 1) {
                    for (let k = 0; k < 9; k++) {
                        if (v[k] === j) {
                            a[k] = 1;
                        }
                    }
                }
            }

            for (let l = 0; l < parallels.length; l++) {
                if (areArraysEqualBut1(parallels[l], a)) {
                    let b = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (let m = 0; m < parallels[l].length; m++) {
                        if (parallels[l][m] === 1) {
                            b[v[m]] = 1;
                        }
                    }
                    return [b, []];
                }
            }

            // handle case where no parallels were found. In that case we have 5 points
            // that must make a cross, and then we know the correpsonding paf.
            for (let l = 0; l < crosses.length; l++) {
                if (areArraysEqualBut1(crosses[l], a)) {
                    let b = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (let m = 0; m < crosses[l].length; m++) {
                        if (crosses[l][m] === 1) {
                            b[v[m]] = 1;
                        }
                    }
                    resPafs = [0, 0, 0]
                    for (let p = 0; p < 3; p++) {
                        if (p == i) {
                            resPafs[p] = 1;
                        }
                    }
                    return [b, resPafs];
                }
            }

        }
        // this should never happen.
        throw new Exception();
    } else if (infCount === 1) {

        let pafvs = [paf0v, paf1v, paf2v];
        let paf = null;
        let pafIdx = -1;
        for (let i = 0; i < 3; i++) {
            if (infArray[i] === 1) {
                paf = pafvs[i];
                pafIdx = i;
                break;
            }
        }
        let a = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let j = 0; j < 9; j++) {
            if (affineArray[j] === 1) {
                for (let k = 0; k < 9; k++) {
                    if (paf[k] === j) {
                        a[k] = 1;
                    }
                }
            }
        }
        for (let l = 0; l < crosses.length; l++) {
            if (areArraysEqualBut1(crosses[l], a)) {
                let b = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (let m = 0; m < crosses[l].length; m++) {
                    if (crosses[l][m] === 1) {
                        b[paf[m]] = 1;
                    }
                }
                resPafs = [0, 0, 0]
                for (let p = 0; p < 3; p++) {
                    if (p == pafIdx) {
                        resPafs[p] = 1;
                    }
                }

                return [b, resPafs];
            }
        }
        // if no cross found, then we must have 2 points at infinity, and
        // a square.
        for (let n = 0; n < 3; n++) {
            if (n === pafIdx) continue;
            let an = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (let j = 0; j < 9; j++) {
                if (affineArray[j] === 1) {
                    for (let k = 0; k < 9; k++) {
                        if (pafvs[n][k] === j) {
                            an[k] = 1;
                        }
                    }
                }
            }
            for (let l = 0; l < crosses.length; l++) {
                if (areArraysDisjoint(crosses[l], an)) {
                    let b = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (let m = 0; m < crosses[l].length; m++) {
                        if (crosses[l][m] === 0) {
                            b[pafvs[n][m]] = 1;
                        }
                    }
                    resPafs = [0, 0, 0]
                    for (let p = 0; p < 3; p++) {
                        if (p == pafIdx || p != n) {
                            resPafs[p] = 1;
                        }
                    }
                    return [b, resPafs];
                }
            }
        }
        // should not reach here

    } else if (infCount === 2) {
        // 2 points at inf
        let pafvs = [paf0v, paf1v, paf2v];
        let notpaf = null;
        let notpafIdx = -1;
        //point at inifnity not in final block
        for (let i = 0; i < 3; i++) {
            if (infArray[i] === 0) {
                notpaf = pafvs[i];
                notpafIdx = i;
                break;
            }
        }
        let a = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let j = 0; j < 9; j++) {
            if (affineArray[j] === 1) {
                for (let k = 0; k < 9; k++) {
                    if (notpaf[k] === j) {
                        a[k] = 1;
                    }
                }
            }
        }
        for (let l = 0; l < crosses.length; l++) {
            if (areArraysDisjoint(crosses[l], a)) {
                let b = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (let m = 0; m < crosses[l].length; m++) {
                    if (crosses[l][m] === 0) {
                        b[notpaf[m]] = 1;
                    }
                }
                resPafs = [0, 0, 0]
                for (let p = 0; p < 3; p++) {
                    if (p != notpafIdx) {
                        resPafs[p] = 1;
                    }
                }
                return [b, resPafs];
            }
        }
        // found nothing, the solution is all 3 paf
        return [affineArray, [1, 1, 1]]

    } else {
        // 3 points at inf

        // cycle each paf, looking for lines
        let pafvs = [paf0v, paf1v, paf2v];

        for (let i = 0; i < 3; i++) {
            let pafv = pafvs[i];

            let a = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (let j = 0; j < 9; j++) {
                if (affineArray[j] === 1) {
                    for (let k = 0; k < 9; k++) {
                        if (pafv[k] === j) {
                            a[k] = 1;
                        }
                    }
                }
            }
            for (let l = 0; l < lines.length; l++) {
                if (areArraysEqualBut1(lines[l], a)) {
                    let b = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (let m = 0; m < lines[l].length; m++) {
                        if (lines[l][m] === 1) {
                            b[pafv[m]] = 1;
                        }
                    }

                    return [b, [1, 1, 1]];
                }
            }
        }

        throw new Exception("Could not find hexad")
    }

}