export interface IProduct{
    CoverLetterURL:string
    LetterDate:string
    ManufacturerId:number
    ManufacturerName:string
    ModelYearFrom:null|number
    ModelYearTo:null|number
    Name:string
    Type:string
    URL:string
}

export interface IGetmanufacturerdetails{
    Address: string | null;
    Address2: string | null;
    City: string;
    ContactEmail: string | null;
    ContactFax: string | null;
    ContactPhone: string | null;
    Country: string;
    DBAs: string | null;
    EquipmentItems: any[]; 
    LastUpdated: string; 
    ManufacturerTypes: ManufacturerTypes[]; 
    Mfr_CommonName: string;
    Mfr_ID: number;
    Mfr_Name: string;
    OtherManufacturerDetails: string;
    PostalCode: string;
    PrimaryProduct: string | null;
    PrincipalFirstName: string;
    PrincipalLastName: string | null;
    PrincipalPosition: string;
    SubmittedName: string;
    SubmittedOn: string; 
    SubmittedPosition: string;
    VehicleTypes: VehicleType[];
}
interface VehicleType {
    GVWRFrom: string;
    GVWRTo: string;
    IsPrimary: boolean;
    Name: string;
}
interface ManufacturerTypes{
    Name: string
}