import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { retrieveBanners, retrieveBannersSuccess, retrieveBooking, retrieveBookingSuccess, retrieveFirms, retrieveFirmsSuccess, retrievePro, retrieveProSuccess, retrieveUserFirm, retrieveUserFirmSuccess, retrieveUsers, retrieveUsersSuccess } from './app.action';
import { map, switchMap } from 'rxjs';
import { Banners, BasicInfo, Bookings, Professionals, Users } from '../models/usersList';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { UserserviceService } from 'src/app/services/userservice.service';


@Injectable()
export class appEffects{
    constructor(
        private actions$: Actions,
        private adminservice: AdminserviceService,
        private userservice: UserserviceService
    ){}

    loadAllUsers$ = createEffect(()=>
    this.actions$.pipe(
        ofType(retrieveUsers),
        switchMap(()=>{
            return this.adminservice.loadUsers()
            .pipe(map((data)=>retrieveUsersSuccess({allUsers:data as Users[]})))
        })
    )
    )

    loadAllBanners$ = createEffect(()=>
    this.actions$.pipe(
        ofType(retrieveBanners),
        switchMap(()=>{
            return this.adminservice.loadBanners()
            .pipe(map((data)=>retrieveBannersSuccess({allBanners:data as Banners[]})))
        })
    )
    )

    loadAllFirms$ = createEffect(()=>
    this.actions$.pipe(
        ofType(retrieveFirms),
        switchMap(()=>{
            return this.adminservice.loadFirms()
            .pipe(map((data)=>retrieveFirmsSuccess({allFirms:data as BasicInfo[]})))
        })
    )
    )

    loadAllPro$ = createEffect(()=>
    this.actions$.pipe(
        ofType(retrievePro),
        switchMap(()=>{
            return this.adminservice.loadPro()
            .pipe(map((data)=>retrieveProSuccess({allPro:data as Professionals[]})))
        })
    )
    )

    loadUserFirms$ = createEffect(()=>
    this.actions$.pipe(
        ofType(retrieveUserFirm),
        switchMap(()=>{
            return this.userservice.loadFirm()
            .pipe(map((data)=>retrieveUserFirmSuccess({allUserFirms:data as BasicInfo[]})))
        })
    )
    )

    loadBookings$ = createEffect(()=>
    this.actions$.pipe(
        ofType(retrieveBooking),
        switchMap(()=>{
            return this.adminservice.loadBookings()
            .pipe(map((data)=>retrieveBookingSuccess({allBookings:data as Bookings[]})))
        })
    )
    )
}