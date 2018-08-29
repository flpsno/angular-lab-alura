import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { UserNotTakeValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';


@Component({
    templateUrl: 'signup.component.html',
    providers: [ UserNotTakeValidatorService ]
})
export class SignUpComponent implements OnInit {

    signupForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakeValidatorService,
        private signUpService: SignUpService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService
    ) {

    }

    ngOnInit(): void {
        const fn = this.userNotTakenValidatorService.checkUserNameTaken();
        this.signupForm = this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            fullName: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(40)
            ]]
            ,
            userName: ['', [
                Validators.required,
                lowerCaseValidator,
                Validators.minLength(2),
                Validators.maxLength(30)
            ],
            this.userNotTakenValidatorService.checkUserNameTaken()
        ],
            password: ['', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(14)]]
        });

        this.platformDetectorService.isPlatformBrowser && 
            this.emailInput.nativeElement.focus();
    }

    signup() {

        const newUser = this.signupForm.getRawValue() as NewUser;
        this.signUpService
            .signup(newUser)
            .subscribe(() => this.router.navigate(['']),
            err => console.log(err)

        );
    }
}