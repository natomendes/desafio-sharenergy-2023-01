import { UserModel } from '../../domain/models/user'

export const mapUsers = (data: any[]): UserModel[] => {
  return data.map((user: any) => ({
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    username: user.login.username,
    age: user.dob.age,
    image: user.picture.large
  }))
}
