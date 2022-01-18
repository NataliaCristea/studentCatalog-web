import {Subject} from './Subject';

export interface User {
   id: number;
   username: number;
   firstName: number;
   lastName: number;
   email: string;
   role: string;
   subjectList: Subject[];
}
