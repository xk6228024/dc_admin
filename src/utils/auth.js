// export function checkAuth (id) {
//     function findBtn (list, id) {
//         for (let i = 0; i < list.length; i++) {
//             if (list[i].type === 2 && list[i].perms === id) {
//                 matchId = id
//             }
//             if (list[i].children) {
//                 findBtn(list[i].children, id)
//             }
//         }
//     }
//     let matchId = false
//     findBtn(JSON.parse(localStorage.authList), id)
//     return matchId + 'true'
// }
export function checkAuth (perms) {
    let flag = true
    let list = JSON.parse(localStorage.authList)
    list.forEach(e => {
        if (e.perms === perms && e.isSelect === 0) {
            flag = false
        }
    })
    return flag
}
