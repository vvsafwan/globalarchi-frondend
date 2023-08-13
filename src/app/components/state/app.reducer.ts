import { createReducer, on } from "@ngrx/store";
import { Banners, Users, BasicInfo, Professionals, Bookings } from "../models/usersList";
import { retrieveBannersSuccess, retrieveBookingSuccess, retrieveFirmsSuccess, retrieveProSuccess, retrieveUserFirmSuccess, retrieveUsers, retrieveUsersSuccess } from "./app.action";
import { state } from "@angular/animations";

export const initialState: Users[] = [];

const _UserListReducer = createReducer(
    initialState,
    on(retrieveUsersSuccess,(state,{allUsers})=>{
        return [...allUsers]
    })
)

export function UserListReducer(state:any,action:any){
    return _UserListReducer(state,action);
}

export const initialStateBanner: Banners[] = [];

const _BannerListReducer = createReducer(
    initialStateBanner,
    on(retrieveBannersSuccess,(state,{allBanners})=>{
        return [...allBanners]
    })
)

export function BannerListReducer(state:any,action:any){
    return _BannerListReducer(state,action);
}

export const initialStateFirm: BasicInfo[] = [];

const _FirmsListReducer = createReducer(
    initialStateFirm,
    on(retrieveFirmsSuccess,(state,{allFirms})=>{
        return [...allFirms]
    })
)

export function FirmsListReducer(state:any,action:any){
    return _FirmsListReducer(state,action);
}

export const initialStatePro: Professionals[] = [];

const _ProListReducer = createReducer(
    initialStatePro,
    on(retrieveProSuccess,(state,{allPro})=>{
        return [...allPro]
    })
)

export function ProListReducer(state:any,action:any){
    return _ProListReducer(state,action);
}

export const initialStateUserFirm: BasicInfo[] = [];

const _UserFirmReducer = createReducer(
    initialStateUserFirm,
    on(retrieveUserFirmSuccess,(state,{allUserFirms})=>{
        return [...allUserFirms]
    })
)

export function UserFirmReducer(state:any,action:any){
    return _UserFirmReducer(state,action);
}

export const initialStateBooking: Bookings[] = [];

const _BookingReducer = createReducer(
    initialStateBooking,
    on(retrieveBookingSuccess,(state,{allBookings})=>{
        return [...allBookings]
    })
)

export function BookingReducer(state:any,action:any){
    return _BookingReducer(state,action);
}
