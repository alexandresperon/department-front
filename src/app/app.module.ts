import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {DepartmentModule} from './department/department.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ConfirmationModelComponent} from './shared/components/confirmation-model/confirmation-model.component';
import {MatDialogModule} from '@angular/material/dialog';
import {StoreModule} from '@ngrx/store';
import {spinnerReducer} from './spinner/reducers/spinner.reducer';
import {LoaderInterceptorService} from './spinner/services/interceptor.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ErrorModelComponent} from './shared/components/error-model/error-model.component';
import {ErrorHandlerImpl} from './handler/error.handler';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationModelComponent,
    ErrorModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    DepartmentModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({spin: spinnerReducer})
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true
  }, {
    provide: ErrorHandler, useClass: ErrorHandlerImpl
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
