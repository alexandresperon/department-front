import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {activate, deactivate} from '../actions/spinner.action';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {
  constructor(private store: Store<{ spin: number }>) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.showLoader();
    return next.handle(req).pipe(finalize(() => this.onEnd()));
  }

  private onEnd(): void {
    this.hideLoader();
  }

  private showLoader(): void {
    this.store.dispatch(activate());
  }

  private hideLoader(): void {
    this.store.dispatch(deactivate());
  }
}
