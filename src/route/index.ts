import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes:RouteRecordRaw[] = [
	{
		name: "Layout",
		path: "/",
		component: () => import("../layout/Index.vue"),
		redirect:"home",
		children: [
			{
				name: "Home",
				path: "home",
				component: () => import("~/views/Home/Index.vue")
			}
		]
	},
];
const router = createRouter({
	routes,
	history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
	next();
});

export { router };
