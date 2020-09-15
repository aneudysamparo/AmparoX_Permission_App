import AppLayout from '../layout/default/AppLayout.vue';

import NotFoundPage from '../pages/errors/NotFoundPage.vue';
import Dashboard from '../pages/dashboard/Dashboard.vue';
import PermissionsPage from '../pages/permissions/PermissionsPage.vue';
import PermissionListPage from '../pages/permissions/list/PermissionListPage.vue';
import AddPermissionPage from '../pages/permissions/add/AddPermissionPage.vue';

import PermissionTypesPage from '../pages/permission-types/PermissionTypesPage.vue';
import PermissionTypeListPage from '../pages/permission-types/list/PermissionTypeListPage.vue';
import AddPermissionTypePage from '../pages/permission-types/add/AddPermissionTypePage.vue';

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
                    component: AddPermissionPage
                }
            ]
        },
        {
            path: "permission-types",
            component: PermissionTypesPage,
            redirect: '',
            children: [{
                    path: '',
                    component: PermissionTypeListPage,
                },
                {
                    path: 'add',
                    component: AddPermissionTypePage
                }
            ]
        },

    ]
},
{
    path: '*',
    component: NotFoundPage
}
];


export default routes;