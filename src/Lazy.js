import React, { Suspense, lazy } from 'react';

const HealthDashboard = lazy(() => import('./pages/HealthDashboard/HealthDashboardReal'));
const Settings = lazy(() => import('./pages/Settings/Settings'));
const UserReview = lazy(() => import('./pages/UserReview/UserReviews'));

root.render(
    <React.StrictMode>
        <ThemeProvider theme={dashboardTheme}>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/health-dashboard" element={<HealthDashboard />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/user-review" element={<UserReview />} />
                        <Route path="/*" element={<div>404 - Page Not Found</div>} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
