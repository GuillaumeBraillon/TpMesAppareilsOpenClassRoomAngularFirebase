export class AuthService {

    isAuth = false;
  
    signIn() {
      return new Promise(
        (resolve, reject) => {
          setTimeout(
            () => {
              this.isAuth = true;
              resolve(true);
              console.log('Sign in successful!', this.isAuth );

            }, 1000
          );
        }
      );
    }
  
    signOut() {
      this.isAuth = false;
      console.log('Sign out successful!', this.isAuth );

    }
    
  }