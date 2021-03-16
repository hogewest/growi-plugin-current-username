import CurrentUsernameInterceptor from './client/js/util/Interceptor/CurrentUsernameInterceptor';

export default (appContainer) => {
  appContainer.originRenderer.preProcessors.unshift(new CurrentUsernameInterceptor(appContainer));
};
