export interface Users{
    _id:string,
    name:string,
    email:string,
    mobile:number,
    password:string,
    is_varified:boolean,
    is_admin:boolean,
    is_blocked:boolean,
    otp:string,
    __v:number,
    token:string
}

export interface Banners{
    _id:string,
    header:string,
    description:string,
    image:string,
    status:boolean,
    __v:number
}

export interface BasicInfo{
    _id:string,
    userid:string,
    companyname:string,
    city:string,
    mobile:string,
    state:string,
    address:string,
    country:string,
    pincode:string,
    image:string,
    is_blocked:boolean,
    __v:string
}

export interface Professionals{
    _id:string,
    name:string,
    email:string,
    mobile:number,
    password:string,
    is_varified:boolean,
    is_admin:boolean,
    is_blocked:boolean,
    otp:string,
    __v:number,
    token:string
}

export interface Bookings{
    _id:string,
    professional:string,
    user:string,
    name:string,
    address:string,
    mobile:number,
    place:string,
    state:string,
    country:string,
    pincode:string,
    date:Date,
    status:boolean,
    paymentId:string,
    __v:number
}