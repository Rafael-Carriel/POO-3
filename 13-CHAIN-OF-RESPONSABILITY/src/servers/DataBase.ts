import PermissionType from "./PermissionType";

interface DataBaseItem{
    email: string;
    password : string;
    permission : PermissionType;
}

const DataBase : DataBaseItem[] = [
    {email : "rafatop@gmail.com", password : "124142", permission : PermissionType.ADMIN},
    {email : "eric@gmail.com", password : "24235", permission : PermissionType.USER},
    {email : "felipezorzo@gmail.com", password : "2414124124", permission : PermissionType.USER}];


    export default DataBase;