export type UserCreateType = {
  lastName?: string
  firstName: string
}

export type UserUpdateType = Partial<UserCreateType>
