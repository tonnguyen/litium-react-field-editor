[![CircleCI](https://circleci.com/gh/tonnguyen/litium-react-field-editor/tree/master.svg?style=shield)](https://circleci.com/gh/tonnguyen/litium-react-field-editor/tree/master)

# LitiumReactFieldEditor

A component to render Litium custom field in React.

## Installation

```sh
yarn add litium-react-field-editor --dev
```

or using npm:
```sh
npm install litium-react-field-editor --save-dev
```

## Live demo:
https://storiesofmyfield.tonnguyen.com/?path=/story/react-text--text

## Usage

For a working example, check [Litium Field type collection](https://github.com/tonnguyen/litium-fieldtype-bag/tree/master/src/FieldTypeBag/components/react-text) for the sample React text component

The library provides the component `<react-field-editor />` which should be used in the template to render React component. Note that we still need to create and declare a Angular component, and register it in the module as described [here](https://docs.litium.com/documentation/architecture/field-framework/creating-a-custom-field-type).

What `<react-field-editor />` does is, instead of having to use `<field-editor />` and writing your component in Angular, you can use `<react-field-editor />` component which wraps your React component and make it run inside Angular's context. Below is the template of the component you should create:

```html
<react-field-editor
    [fieldEditor]="fieldEditor"
    [previewComponent]="previewComponent"
    [editComponent]="editComponent"
></react-field-editor>
```

And the .ts file:
```ts
import { BaseFieldEditor } from 'litium-ui';
import { Text } from './react-text'; // import the React component from react-text.tsx
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    } from '@angular/core';

@Component({
    selector: 'field-editor-react-text',
    templateUrl: './field-editor-react-text.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldEditorReactText extends BaseFieldEditor {
    previewComponent = Text; // declare the React component to be used in preview mode
    editComponent = Text; // declare the React component to be used in edit mode

    constructor(changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
    }

    get fieldEditor() : BaseFieldEditor {
        return this;
    }
}
```

The only thing we need to replace here is the reference to the React component. Here is the sample Text component, written in React:

```tsx
import * as React from "react";

export const Text = ({ name, value, editable, valueChange }) => {
    return (
        <>
            {!editable && <div>{ value || '' }</div>}
            {editable && <input id={name} type='text' value={value || ''} onChange={(event) => valueChange(event.target.value)} />}
        </>
    );
};
```

The React component will be passed the `value`, `editable` and `valueChange` callback which should be used to render and to notify when the value changes.