import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user:User = new User();
  errorMessage: string;

  constructor(
    public alertController: AlertController,
    private authService: AuthService,
    private router: Router
  ) {}

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Welcome to CorkBoard',
      subHeader: 'Subtitle',
      message: 'Please sign in.',
      buttons: ['Login', 'Register']
    });

    await alert.present();
  }
}
//   ngOnInit() {}

//   response(response): void{
//     if(response.success===false){
//       this.errorMessage = 'Invalid Credentials';
//     }

//     if(response.success===true){
//       this.router.navigate(['/home']);
//     }
//   }

//   public onSubmit(): void{
//     this.authService.logIn(this.user).subscribe(
//       (response:any) => {
//        this.response(response);
//       }
//     );
//   }
// }
