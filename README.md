# NgRx-Store
### Installing NgRx and Effects for Angular

To add state management to your Angular project using NgRx, follow the steps below:

1. **Install NgRx Packages**:
   Run the following command to install the necessary NgRx packages:

   ```bash
   npm install @ngrx/store @ngrx/effects
   ```

2. **Add NgRx Store Module**:
   Import `StoreModule` into your `AppModule` and initialize it:

   ```typescript
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { AppRoutingModule } from './app-routing.module';
   import { AppComponent } from './app.component';
   import { StoreModule } from '@ngrx/store';
   import { reducers } from './store/reducers';

   @NgModule({
     declarations: [
       AppComponent
     ],
     imports: [
       BrowserModule,
       AppRoutingModule,
       StoreModule.forRoot(reducers),
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```

   Replace `reducers` with your own root reducers configuration.

3. **Add NgRx Effects Module**:
   Import `EffectsModule` and register your effects:

   ```typescript
   import { EffectsModule } from '@ngrx/effects';
   import { MyEffects } from './store/effects/my.effects';

   @NgModule({
     imports: [
       EffectsModule.forRoot([MyEffects]),
     ],
   })
   export class AppModule {}
   ```

4. **Define Reducers and Effects**:
   - Create reducers in a `store/reducers` folder.
   - Create effects in a `store/effects` folder.

#### Your application is now set up with NgRx for state management and Effects for handling side effects like HTTP requests.