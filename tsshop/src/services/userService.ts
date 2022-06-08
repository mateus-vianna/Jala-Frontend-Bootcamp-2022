import { Service } from './service';
import IUser from '../interfaces/IUser';
import { USER_API, API_ENDPOINT } from '../config';

const url = API_ENDPOINT + USER_API;
export class UserService {
  constructor(private service: Service) { }

  public login = async (user: IUser): Promise<any> => {
    return this.service
      .post(url + '/login', user)
      .then(response => response.data)
      .catch(err => {
        console.log('user service login error:', err);
      })
  };

  public signup = async (user: IUser) => {
    return this.service
      .post(url + '/signup', user)
      .then(response => response.data)
      .catch(err => {
        console.log('user service signup error:', err);
      })
  };
}


const service = new Service();
const userService = new UserService(service);
export default userService;