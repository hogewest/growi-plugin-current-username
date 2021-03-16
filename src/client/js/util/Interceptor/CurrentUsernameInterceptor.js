export default class CurrentUsernameInterceptor {

  constructor(appContainer) {
    this.appContainer = appContainer;
  }

  process(markdown) {
    return markdown.replaceAll('{{CURRENT_USERNAME}}', this.getCurrentUsername());
  }

  getCurrentUsername() {
    if (this.appContainer.currentUser) {
      return this.appContainer.currentUser.username;
    }
    return '';
  }

}
