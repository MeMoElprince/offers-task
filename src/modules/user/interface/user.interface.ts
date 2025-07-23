import { IUser } from '../../../databases/mongodb/model/user.model';

export interface ICreateNewCustomer
    extends Pick<
        IUser,
        'firstName' | 'lastName' | 'email' | 'password' | 'phoneNumber'
    > {}
