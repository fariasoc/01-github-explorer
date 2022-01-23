type User = {
  name: string,
  email: string,
  address: {
    city: string, 
    state?: string
  }
}

function showWelcomeMessage(user: User){
  return `Welcome ${user.name}, your e-mail is ${user.email}. Yout city is  ${user.address.city} and your state is ${user.address.state}`

}

const user = {
  name: 'John Doe',
  email: 'celso.farias@gmail.com',
  address: {
    city: 'New York',
    state: 'Ny'
  }
}

const message = showWelcomeMessage(user)