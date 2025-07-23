import { IUser } from '../../../databases/mongodb/model/user.model';

export interface ILoginBody extends Pick<IUser, 'email' | 'password'> {}

export interface ISignupBody
    extends Pick<
        IUser,
        'firstName' | 'lastName' | 'email' | 'password' | 'phoneNumber'
    > {}
