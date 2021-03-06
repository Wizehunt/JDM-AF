import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordsComponent } from './words.component';
import { WordsSearchComponent } from './words-search/words-search.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RelationsSearchComponent } from './relations-search/relations-search.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {RelationsPrintComponent } from './relations-print/relations-print.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


const routes: Routes = [
  // {
  //   path: 'word-search/:word/relation',
  //   component: RelationsSearchComponent,
  //   outlet: 'relations',
  // },
  {
    path: 'word-search/:word',
    component: WordsSearchComponent,
    // children: [
    //   {
    //     path : 'relation',
    //     component : RelationsSearchComponent,
    //     // outlet: 'relations'
    //   }
    // ]
  },

];


@NgModule({
  imports: [
    CommonModule, HttpClientModule, RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule, MatButtonModule, MatAutocompleteModule,
    MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatChipsModule, MatIconModule,
    MatDividerModule, MatButtonToggleModule, MatCardModule, MatExpansionModule, MatTooltipModule,
    MatRadioModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule
  ],
  exports: [WordsComponent, WordsSearchComponent, RelationsSearchComponent, RouterModule],
  declarations: [WordsComponent, WordsSearchComponent, RelationsSearchComponent, RelationsPrintComponent],
  providers: []
})
export class WordsModule {}

