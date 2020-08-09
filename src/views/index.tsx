import React from "react";
import Loading from "@components/Loading";

const DashboardView = React.lazy(() => import("./Dashboard"));
const NotFoundView = React.lazy(() => import("./NotFound"));

const Dashboard = () => (
	<React.Suspense fallback={<Loading />}>
		<DashboardView />
	</React.Suspense>
);

const NotFound = () => (
	<React.Suspense fallback={<Loading />}>
		<NotFoundView />
	</React.Suspense>
);

export { Dashboard, NotFound };
