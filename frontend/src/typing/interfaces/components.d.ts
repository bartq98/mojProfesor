interface IRegisterModelRequest {
    email: string;
    password: string;
    role: 'ROLE_ADMIN' | 'ROLE_USER';
}

interface IRegisterModel {
    email: string;
    password: string;
    confirmPassword: string;
}

interface IAddProfessor {
    academicTitle: string;
    firstName: string;
    lastName: string;
}

interface IPagination {
    page: number;
    size: number;
}

interface IGetProfessorByDataRequest {
    firstName: string;
    lastName: string;
}

interface IAddOpinionRequest {
    content: string;
    details: string;
    professorId: number;
}

interface IAddLikeRequest {
    opinion: number;
    type: 'DOWN' | 'UP';
}

interface IProfessor {
    id: number;
    firstName: string;
    lastName: string;
    academicTitle: string;
    createdBy: number;
}

interface ISortable<T> {
    content: T;
    pageable: string;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: ISortable;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}
interface IGetAllProfessorsResponse {
    content: IProfessor[];
    pageable: string;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: ISortable;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

interface IOpinion {
    id: number;
    professorID: number;
    userID: number;
    content: string;
    details: string;
}

type IOpinionDetails = {
    opinion: number;
    key: 'ATR' | 'COM' | 'PAS' | 'FRI';
}[];

interface ILogin {
    email: string;
    password: string;
}
