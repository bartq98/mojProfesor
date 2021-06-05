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

interface ILogin {
    email: string;
    password: string;
}
