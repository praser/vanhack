export const APP_IS_LOADING = 'APP_IS_LOADING';

export function appIsLoading(bool) {
  return {
    type: APP_IS_LOADING,
    loading: bool,
  };
}
