import { createAction, props } from "@ngrx/store";
import { Users, Banners, BasicInfo, Professionals, Bookings } from '../models/usersList';

export const retrieveUsers = createAction('[Users Api]Api Success');
export const retrieveUsersSuccess = createAction('[Users Api]Api SuccessSuccess',
props<{allUsers:Users[]}>()
);

export const retrieveBanners = createAction('[Banners Api]Api Success');
export const retrieveBannersSuccess = createAction('[Banners Api]Api SuccessSuccess',
props<{allBanners:Banners[]}>()
);

export const retrieveFirms = createAction('[Firms Api]Api Success');
export const retrieveFirmsSuccess = createAction('[Firms Api]Api SuccessSuccess',
props<{allFirms:BasicInfo[]}>()
);

export const retrievePro = createAction('[Pro Api]Api Success');
export const retrieveProSuccess = createAction('[Pro Api]Api SuccessSuccess',
props<{allPro:Professionals[]}>()
);

export const retrieveUserFirm = createAction('[UserFirm Api]Api Success');
export const retrieveUserFirmSuccess = createAction('[UserFirm Api]Api SuccessSuccess',
props<{allUserFirms:BasicInfo[]}>()
);

export const retrieveBooking = createAction('[Booking Api]Api Success');
export const retrieveBookingSuccess = createAction('[Booking Api]Api SuccessSuccess',
props<{allBookings:Bookings[]}>()
);