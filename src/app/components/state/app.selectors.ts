import { createSelector } from "@ngrx/store";
import { UserList, BannerList, FirmList, ProList, FirmUserList, BookingList } from "./app.state";
import { Banners, BasicInfo, Bookings, Professionals, Users } from "../models/usersList";

export const userRootSelector = (state:UserList)=>state.allUsers;
export const uniqueUser = createSelector(
    userRootSelector,
    (allUsers:Users[])=>{
        return [...allUsers]
    }
)

export const bannerRootSelector = (state:BannerList)=>state.allBanners;
export const uniqueBanner = createSelector(
    bannerRootSelector,
    (allBanners:Banners[])=>{
        return [...allBanners]
    }
)

export const firmRootSelector = (state:FirmList)=>state.allFirms;
export const uniqueFirm = createSelector(
    firmRootSelector,
    (allFimrs:BasicInfo[])=>{
        return [...allFimrs]
    }
)

export const proRootSelector = (state:ProList)=>state.allPro;
export const uniquePro = createSelector(
    proRootSelector,
    (allPro:Professionals[])=>{
        return [...allPro]
    }
)

export const userFirmRootSelector = (state:FirmUserList)=>state.allUserFirms;
export const uniqueUserFirm = createSelector(
    userFirmRootSelector,
    (allUserFirms:BasicInfo[])=>{
        return [...allUserFirms]
    }
)

export const BookingRootSelector = (state:BookingList)=>state.allBookings;
export const uniqueBooking = createSelector(
    BookingRootSelector,
    (allBookings:Bookings[])=>{
        return [...allBookings]
    }
)
