# ng-filter

A simple string filter pipe for Angular 8, an Angular 1.x staple mysteriously disappeared :spooky:

## Usage

Case-sensitive string searches the first "level" of a JSONable structure in the form of `[Object]`. Has the same syntax as its Angular 1.x counterpart.

```ts
// controller snippet
data = [{
  name: 'Leo',
  address: '1234 Main Street',
  phone: '999-999-9999',
  active: true,
  balance: 1,
}];

searchText = '';
```

```html
<!-- component html -->
<input type="text" [(ngModel)]="searchText" placeholder="Search this table" />
<ul>
  <li *ngFor="let d of data | filter: searchText">{{ d.name }}</li>
</ul>
```

You can download the `filter.pipe.ts` file directly from this repo and move it into your project at the `src/app` level.

Inject the pipe dependency into your `app.module.ts` (or equivalent top-level module) by importing it and putting it in your declarations like so:

```ts
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    ...
    FilterPipe
  ],
  ...
})
export class AppModule { ... }
```
