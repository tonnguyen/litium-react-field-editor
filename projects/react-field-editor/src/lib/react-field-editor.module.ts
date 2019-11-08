import { NgModule } from '@angular/core';
import { ReactComponent } from './react.component';
import { ReactFieldEditor } from './react-field-editor.component';
import { CommonModule } from '@angular/common';
import { UiModule } from 'litium-ui';

@NgModule({
    declarations: [
        ReactComponent,
        ReactFieldEditor,
    ],
    imports: [
        CommonModule,
        UiModule,
    ],
    exports: [
        CommonModule,
        ReactComponent,
        ReactFieldEditor,
    ]
})
export class ReactFieldEditorModule {

}