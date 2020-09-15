import AppLayout from '../layout/default/AppLayout.vue';

import NotFoundPage from '../pages/errors/NotFoundPage.vue';
import Dashboard from '../pages/dashboard/Dashboard.vue';
import PermissionsPage from '../pages/permissions/PermissionsPage.vue';
import PermissionListPage from '../pages/permissions/list/PermissionListPage.vue';
import PermissionPage from '../pages/permissions/permission/PermissionPage.vue';

const routes = [{
    path: '',
    component: AppLayout,
    redirect: 'dashboard',
    children: [{
            path: 'dashboard',
            component: Dashboard
        },
        {
            path: "permissions",
            component: PermissionsPage,
            redirect: '',
            children: [{
                    path: '',
                    component: PermissionListPage,
                },
                {
                    path: 'add',
                    component: PermissionPage
                }, 
                {
                    path: ':id',
                    component: PermissionPage
                }
            ]
        }

    ]
},
{
    path: '*',
    component: NotFoundPage
}
];


export default routes;