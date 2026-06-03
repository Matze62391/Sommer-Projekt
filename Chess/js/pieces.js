let pawn_b = {
    name: "pawn_b",
    value: 1,
    src: "images/black/pawn.png",
    moves: [[1, 0], [2, 0], [1, 1], [1, -1]],
    moveType: ["move", "move", "capture", "capture"],
    hasMoved: false
}
let pawn_w = {
    name: "pawn_w",
    value: 1,
    src: "images/white/pawn.png",
    moves: [[-1, 0], [-2, 0], [-1, 1], [-1, -1]],
    moveType: ["move", "move", "capture", "capture"],
    hasMoved: false
}
let rook_b = {
    name: "rook_b",
    value: 5,
    src: "images/black/rook.png",
    moves: [[1, 0], [-1, 0], [0, 1], [0, -1]],
    moveType: ["move", "move", "move", "move"]
}
let rook_w = {
    name: "rook_w",
    value: 5,
    src: "images/white/rook.png",
    moves: [[1, 0], [-1, 0], [0, 1], [0, -1]],
    moveType: ["move", "move", "move", "move"]
} 
let knight_b = {
    name: "knight_b",
    value: 3,
    src: "images/black/knight.png",
    moves: [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]],
    moveType: ["move", "move", "move", "move", "move", "move", "move", "move"]
}
let knight_w = {
    name: "knight_w",
    value: 3,
    src: "images/white/knight.png",
    moves: [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]],
    moveType: ["move", "move", "move", "move", "move", "move", "move", "move"]
} 
let bishop_b = {
    name: "bishop_b",
    value: 3,
    src: "images/black/bishop.png",
    moves: [[1, 1], [1, -1], [-1, 1], [-1, -1]],
    moveType: ["move", "move", "move", "move"]
}
let bishop_w = {
    name: "bishop_w",
    value: 3,
    src: "images/white/bishop.png",
    moves: [[1, 1], [1, -1], [-1, 1], [-1, -1]],
    moveType: ["move", "move", "move", "move"]
}
let queen_b = {
    name: "queen_b",
    value: 9,
    src: "images/black/queen.png",
    moves: [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]],
    moveType: ["move", "move", "move", "move", "move", "move", "move", "move"]
}
let queen_w = {
    name: "queen_w",
    value: 9,
    src: "images/white/queen.png",
    moves: [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]],
    moveType: ["move", "move", "move", "move", "move", "move", "move", "move"]
}
let king_b = {
    name: "king_b",
    value: 100,
    src: "images/black/king.png",
    moves: [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]],
    moveType: ["move", "move", "move", "move", "move", "move", "move", "move"],
    hasMoved: false
}
let king_w = {
    name: "king_w",
    value: 100,
    src: "images/white/king.png",
    moves: [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]],
    moveType: ["move", "move", "move", "move", "move", "move", "move", "move"],
    hasMoved: false
}

let pieces = {
    "pawn_b": pawn_b,
    "pawn_w": pawn_w,
    "rook_b": rook_b,
    "rook_w": rook_w,
    "knight_b": knight_b,
    "knight_w": knight_w,
    "bishop_b": bishop_b,
    "bishop_w": bishop_w,
    "queen_b": queen_b,
    "queen_w": queen_w,
    "king_b": king_b,
    "king_w": king_w
}
