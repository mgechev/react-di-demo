/// <reference types="react" />
import * as React from 'react';
export default class Cell extends React.Component<any, any> {
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    open(): void;
    mark(e: any): void;
    render(): JSX.Element;
}
