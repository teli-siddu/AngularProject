
export interface EmployeeViewModel {
    Id: number;
    FirstName: string;
    LastName: string;
    EmployeeId: string

    Designation: string;

    DateofJoining: Date;

    DateOfBirth: Date

    FatherName: string;

    PassportNumber: string;

    UserName: string;
    Gender: string;
    MaritialStatus: string;
    Mobiles: MobileViewModel[];
    Emails: EmailViewModel[];
    Roles: RoleViewModel[];
    Addresses: AddressViewModel;
    ProfilePictureUrl: string;
}
export interface EmailViewModel {
    EmailId: string
}

export interface MobileViewModel {
    MobileNumber: string
}
export interface AddAddressViewModel {
    CountryMasterId?: number;
    StateMasterId?: number;
    CityMasterId?: number;
    AddressTypeId?: number;
    LandMark: number;
}
export interface RoleViewModel {
    RoleId: number;
    RoleName: string;
    IsSelected: boolean;
}
export interface AddressViewModel {
    CityName: string;
    StateName: string;
    CountryName: string;
    PermnentAddress: boolean;
    EmployeeId: string;
    AddressType: string;
}


export interface AddEmployeeViewModel {
    Id: number;
    FirstName: string;
    LastName: string;
    EmployeeId: string

    Designation: string;

    DateofJoining: Date;

    DateOfBirth: Date

    FatherName: string;

    PassportNumber; string;

    UserName: string;
    GenderId?: number;
    MaritialStatusId?: number;
    NationalityId?: number;
    AddressTypeId?: number;
    DepartmentId: number;
    Mobiles: string[];
    Emails: string[];
    Addresses: AddAddressViewModel[];
    Roles: RoleViewModel[];
}

