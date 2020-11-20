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
import {LoginComponent} from './login/login/login.component';
import {BasicAuthInterceptor} from './auth/interceptors/basic-auth.interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SuccessModelComponent } from './shared/components/success-model/success-model.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationModelComponent,
    ErrorModelComponent,
    LoginComponent,
    SuccessModelComponent
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
    StoreModule.forRoot({spin: spinnerReducer}),
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: ErrorHandler, useClass: ErrorHandlerImpl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
