import fetch from 'auth/FetchInterceptor'


const usersService = {}

usersService.getUsers = function (params) {
    return fetch({
        url: '/users',
        method: 'get',
        params
    })
}

export default usersService