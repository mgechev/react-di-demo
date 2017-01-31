"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Table_1 = require("./Table");
var MineSweeper = (function (_super) {
    __extends(MineSweeper, _super);
    function MineSweeper(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            level: "easy",
            mineNum: 10,
            rowNum: 9,
            colNum: 9,
            flagNum: 0,
            openNum: 0,
            time: 0,
            status: "playing" // playing, clear, gameover
        };
        return _this;
    }
    MineSweeper.prototype.componentWillUpdate = function () {
        if (this.state.status === "playing") {
            this.judge();
        }
    };
    MineSweeper.prototype.componentWillMount = function () {
        this.intervals = [];
    };
    MineSweeper.prototype.tick = function () {
        if (this.state.openNum > 0 && this.state.status === "playing") {
            this.setState({ time: this.state.time + 1 });
        }
    };
    MineSweeper.prototype.judge = function () {
        if (this.state.mineNum + this.state.openNum >= this.state.rowNum * this.state.colNum) {
            this.setState({ status: "clear" });
        }
    };
    MineSweeper.prototype.gameOver = function () {
        this.setState({ status: "gameover" });
    };
    MineSweeper.prototype.checkFlagNum = function (update) {
        this.setState({ flagNum: this.state.flagNum + update });
    };
    MineSweeper.prototype.setMine = function () {
        var mineTable = this.state.mineTable;
        for (var i = 0; i < this.state.mineNum; i++) {
            var cell = mineTable[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 10)];
            if (cell.hasMine) {
                i--;
            }
            else {
                cell.hasMine = true;
            }
        }
        this.setState({
            mineTable: mineTable
        });
    };
    MineSweeper.prototype.addOpenNum = function () {
        if (this.state.openNum === 0) {
            this.interval = setInterval(this.tick.bind(this), 1000);
        }
        this.setState({
            openNum: ++this.state.openNum
        });
    };
    MineSweeper.prototype.reset = function () {
        clearInterval(this.interval);
        this.setState({ openNum: 0, flagNum: 0, time: 0, status: "playing" });
    };
    MineSweeper.prototype.setEasy = function () {
        clearInterval(this.interval);
        this.setState({ level: "easy", mineNum: 10, rowNum: 9, colNum: 9, openNum: 0, flagNum: 0, time: 0, status: "playing" });
    };
    MineSweeper.prototype.setNormal = function () {
        clearInterval(this.interval);
        this.setState({ level: "normal", mineNum: 40, rowNum: 16, colNum: 16, openNum: 0, flagNum: 0, time: 0, status: "playing" });
    };
    MineSweeper.prototype.setHard = function () {
        clearInterval(this.interval);
        this.setState({ level: "hard", mineNum: 100, rowNum: 16, colNum: 30, openNum: 0, flagNum: 0, time: 0, status: "playing" });
    };
    MineSweeper.prototype.render = function () {
        var self = this;
        var level = function () {
            if (self.state.level === "easy") {
                return (React.createElement("div", { className: "MineSweeper__level" },
                    React.createElement("label", null,
                        React.createElement("input", { type: "radio", name: "level", onChange: this.setEasy.bind(this), checked: true }),
                        "easy"),
                    React.createElement("label", null,
                        React.createElement("input", { type: "radio", name: "level", onChange: this.setNormal.bind(this) }),
                        "normal"),
                    React.createElement("label", null,
                        React.createElement("input", { type: "radio", name: "level", onChange: this.setHard.bind(this) }),
                        "hard")));
            }
            else if (self.state.level === "normal") {
                return (React.createElement("div", { className: "MineSweeper__level" },
                    React.createElement("label", null,
                        React.createElement("input", { type: "radio", name: "level", onChange: this.setEasy.bind(this) }),
                        "easy"),
                    React.createElement("label", null,
                        React.createElement("input", { type: "radio", name: "level", onChange: this.setNormal.bind(this), checked: true }),
                        "normal"),
                    React.createElement("label", null,
                        React.createElement("input", { type: "radio", name: "level", onChange: this.setHard.bind(this) }),
                        "hard")));
            }
            else if (self.state.level === "hard") {
                return (React.createElement("div", { className: "MineSweeper__level" },
                    React.createElement("label", null,
                        React.createElement("input", { type: "radio", name: "level", onChange: this.setEasy.bind(this) }),
                        "easy"),
                    React.createElement("label", null,
                        React.createElement("input", { type: "radio", name: "level", onChange: this.setNormal.bind(this) }),
                        "normal"),
                    React.createElement("label", null,
                        React.createElement("input", { type: "radio", name: "level", onChange: this.setHard.bind(this), checked: true }),
                        "hard")));
            }
        }();
        return (React.createElement("div", null,
            level,
            React.createElement("div", { className: "MineSweeper " + this.state.level },
                React.createElement("span", { className: "MineSweeper__flagNum" },
                    " ",
                    this.state.mineNum - this.state.flagNum),
                React.createElement("span", { className: "MineSweeper__face", onClick: this.reset.bind(this) },
                    React.createElement("span", { className: "button " + this.state.status })),
                React.createElement("span", { className: "MineSweeper__time" },
                    " ",
                    this.state.time),
                React.createElement(Table_1.default, { openNum: this.state.openNum, mineNum: this.state.mineNum, rowNum: this.state.rowNum, colNum: this.state.colNum, gameOver: this.gameOver.bind(this), addOpenNum: this.addOpenNum.bind(this), checkFlagNum: this.checkFlagNum.bind(this) }))));
    };
    return MineSweeper;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MineSweeper;
//# sourceMappingURL=MineSweeper.js.map