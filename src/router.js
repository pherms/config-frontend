import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import SettingsView from './views/SettingsView';
import BackupConfig from './components/gui/BackupConfig';
import BackupSources from './components/gui/BackupSources';
import NotFound from './views/NotFound';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/register', component: RegisterView },
        { path: '/login', component: LoginView },
        { path: '/config', component: SettingsView },
        { path: '/backupconfig', component: BackupConfig },
        { path: '/backupsources', component: BackupSources },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

export default router;