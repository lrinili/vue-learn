<template>
	<div>
		这是home
	</div>
	<h3>子路由</h3>
	<div>
        <ul class="nav nav-tabs">
            <li>
                <a v-link="{ path: '/home/news'}">News</a>
            </li>
            <li>
                <a v-link="{ path: '/home/message'}">Messages</a>
            </li>
        </ul>
        <router-view></router-view>
	</div>
</template>