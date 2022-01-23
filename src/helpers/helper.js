export const normoliseUser = (users) => {
    return users.map(user => {
       return {name: user.name,
       username: user.username,
       email: user.email,
       city: user.address.city,
       website: user.website,
       company: user.company.name}
    });
}