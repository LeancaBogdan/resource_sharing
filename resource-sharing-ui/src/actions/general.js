export const LOGIN_PAGE_MOUNTED = "HOME_PAGE_MOUNTED";

export const loginPageMounted = (currentUser, userId) => ({
    type: LOGIN_PAGE_MOUNTED,
    currentUser,
    userId
});