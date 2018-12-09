export const HOME_PAGE_MOUNTED = "HOME_PAGE_MOUNTED";

export const loginPageMounted = (currentLoggedInUser) => ({
    type: HOME_PAGE_MOUNTED,
    currentLoggedInUser: currentLoggedInUser,
});