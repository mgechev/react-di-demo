/// <reference types="react" />
import * as React from 'react';
export default class MineSweeper extends React.Component<any, any> {
    intervals: any;
    interval: any;
    constructor(props: any);
    componentWillUpdate(): void;
    componentWillMount(): void;
    tick(): void;
    judge(): void;
    gameOver(): void;
    checkFlagNum(update: any): void;
    setMine(): void;
    addOpenNum(): void;
    reset(): void;
    setEasy(): void;
    setNormal(): void;
    setHard(): void;
    render(): JSX.Element;
}
