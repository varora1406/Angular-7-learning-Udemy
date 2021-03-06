import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeComponentComponent } from './recipe-component/recipe-component.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe-component/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-component/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-component/recipe-item/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';

import { DropdownDirective } from '../app/shared/dropdown.directive';
import { RecipeEditComponent } from './recipe-component/recipe-item/recipe-edit/recipe-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipe-component/recipe-item/recipe-detail/recipe-start/recipe-start.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponentComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    HeaderComponent,
    DropdownDirective,
    RecipeStartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
