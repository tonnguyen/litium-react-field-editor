import * as React from 'react';
import {
    Component,
    ChangeDetectionStrategy,
    ElementRef,
    Input,
    ViewChild,
    OnInit,
    OnDestroy,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import * as ReactDom from 'react-dom';
// import * as _isEqual from 'lodash-es/isEqual';

@Component({
    selector: 'react-component',
    template: '<div #container></div>',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactComponent implements OnInit, OnDestroy, OnChanges {
    @ViewChild('container') container: ElementRef;
    @Input() component;
    @Input() props;

    ngOnInit() {
        this._render();
    }
    
    private _render() {
        this.component && ReactDom.render(React.createElement(this.component, this.props, null), this.container.nativeElement);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!changes['props']) {
            return;
        }
        const { previousValue, currentValue } = changes['props'];
        // if (_isEqual.default(previousValue ? previousValue.value : '', currentValue ? currentValue.value : '')) {
        if ((previousValue ? previousValue.value : '') === (currentValue ? currentValue.value : '')) {
            return;
        }
        this._render();
    }

    ngOnDestroy() {
        this.component && ReactDom.unmountComponentAtNode(this.container.nativeElement);
    }
}