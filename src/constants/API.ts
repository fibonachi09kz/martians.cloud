const PROTOCOL = 'https';
const HOST = 'fibonachi.kz';
const API_POINT = '/wp-json/wp/v2';

export const API_ENDPOINTS = {
	TECHNOLOGIES_POINT: `${PROTOCOL}://${HOST}${API_POINT}/technology`,
	TECHNOLOGIES_CATEGORIES_POINT: `${PROTOCOL}://${HOST}${API_POINT}/tech-type`,
	TEAM_MEMBERS_POINT: `${PROTOCOL}://${HOST}${API_POINT}/team-members`,
	ARTICLES: `${PROTOCOL}://${HOST}${API_POINT}/articles`,
	PROJECTS: `${PROTOCOL}://${HOST}${API_POINT}/projects`,
	PROJECTS_CATEGORIES: `${PROTOCOL}://${HOST}${API_POINT}/project-categories`,
}
