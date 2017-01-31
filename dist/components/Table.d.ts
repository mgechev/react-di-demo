/// <reference types="react" />
import * as React from 'react';
export default class Table extends React.Component<any, any> {
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    createTable(props: any): any[];
    open(cell: any): void;
    mark(cell: any): void;
    countMines(cell: any): number;
    openAround(cell: any): void;
    render(): JSX.Element;
}
