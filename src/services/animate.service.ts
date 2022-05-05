import { Observable, Subject } from "rxjs";

class AnimateService {
  private _subject = new Subject();
  private _animateSubj = new Subject();

  public emitState(): void {
    this._subject.next(true);
  }

  public listenState(): void {
    this._subject.subscribe((res: any) => {
      console.log(res);
    });
  }

  public requestTransform(value: boolean): void {
    this._animateSubj.next(value);
  }

  public listenTransform(): Observable<any> {
    return this._animateSubj;
  }
}

export default new AnimateService();
