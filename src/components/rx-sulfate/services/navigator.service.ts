import { Observable, Subject } from "rxjs";

class NavigatorService {
  private _currPos = new Subject<number>();
  public _currPosStr = new Subject<string>();

  public setPosition(distance: number): void {
    this._currPos.next(distance);
  }

  public setPositionString(str: string): void {
    this._currPosStr.next(str);
  }

  public onListenPositionChanges(): Observable<number> {
    return this._currPos;
  }
}

export default new NavigatorService();
