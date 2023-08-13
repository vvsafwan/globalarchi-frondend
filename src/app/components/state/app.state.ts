import { Users, Banners, BasicInfo, Professionals, Bookings } from '../models/usersList';

export interface UserList{
    allUsers:Users[];
}

export interface BannerList{
    allBanners:Banners[]
}

export interface FirmList{
    allFirms:BasicInfo[]
}

export interface ProList{
    allPro:Professionals[]
}

export interface FirmUserList{
    allUserFirms:BasicInfo[]
}

export interface BookingList{
    allBookings:Bookings[]
}