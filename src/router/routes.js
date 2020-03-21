import UsersTable from "../components/UsersTable";
import UsersEdit from "../components/UsersEdit";

export default [
    {
        path: '/',
        component: UsersTable
    },
    {
        path: '/users-edit/:id',
        name: 'users-edit',
        component: UsersEdit
    },
    {
        path: '/users-new',
        name: 'users-new',
        component: UsersEdit
    }
];
