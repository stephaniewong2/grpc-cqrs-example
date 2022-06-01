import { Observable } from 'rxjs';
import { GetHeroRequest, GetHeroResponse, GetHeroRank, ListHeroResponse } from './hero.interface';

export interface HeroService {
    get(data: GetHeroRequest): Observable<GetHeroResponse>;

    // get(data: GetHeroRank): Observable<GetHeroResponse>; //?

    list(data: any): Observable<ListHeroResponse>;

    post(data: GetHeroRequest): Observable<ListHeroResponse>;
}
