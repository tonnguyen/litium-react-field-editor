import { BaseFieldEditor } from 'litium-ui';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    } from '@angular/core';

@Component({
    selector: 'react-field-editor',
    templateUrl: './react-field-editor.component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactFieldEditor {
    @Input() previewComponent;
    @Input() editComponent;
    @Input() fieldEditor: BaseFieldEditor;

    generateProps(editable: boolean): any {
        return {
            // ...this.field,
            name: this.fieldEditor.name,
            editable,
            value: this.fieldEditor.getValue(editable ? this.fieldEditor.editLanguage : this.fieldEditor.viewLanguage),
            valueChange: (value) => {
                this.fieldEditor.valueChange(value, this.fieldEditor.editLanguage);
            },
        };
    }
}