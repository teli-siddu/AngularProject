import { RoleViewModel } from './employees.model';

export interface AddAddressViewModel {
    CountryMasterId?: number;
    StateMasterId?: number;
    CityMasterId?: number;
    AddressTypeId?: number;
    LandMark:number;
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
    GenderId?:number;
    MaritialStatusId?:number;
    NationalityId?:number;
    AddressTypeId?:number;
    DepartmentId:number;
    Mobiles:string[];
    Emails:string[];
    Addresses:AddAddressViewModel[];
    Roles:RoleViewModel[];
}