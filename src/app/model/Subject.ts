import {User} from './User';

export interface Subject {
  id: number;
  name: string;
  usersList: User[];
  exams: string;
  semester: number;
  average: number;
  credits: number;
  hours: number;
}

