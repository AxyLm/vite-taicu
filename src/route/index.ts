import { createRouter, createWebHistory } from "vue-router";
const routes = [
	{
		name: "Layout",
		path: "/",
		component: () => import("../views/Index.vue"),
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
