import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginPageForm } from "./login.page.form";

describe('Login form page', () => {
    let loginPageForm: LoginPageForm;
    let form: FormGroup;
    beforeEach(() => {
        loginPageForm = new LoginPageForm(new FormBuilder());
        form = loginPageForm.createForm();
    });
    it('should create login form empty', () => {
        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email')?.value).toEqual("")
        expect(form.get('email')?.valid).toBeFalse()

        expect(form.get('password')).not.toBeNull();
        expect(form.get('password')?.value).toEqual("")
        expect(form.get('password')?.valid).toBeFalse()

    });

    it('should have email invalid if email is not valid', () => {
        form.get('email')?.setValue('Invalid email');
        expect(form.get('email')?.valid).toBeFalsy();

    });

    it('should have a valid email if email is valid', () => {
        form.get('email')?.setValue('mahmoud@gmail.com');
        expect(form.get('email')?.valid).toBeTruthy();
    });

    it('should have a valid form', () => {
        form.get('email')?.setValue('mahmoud@gmail.com');
        form.get('password')?.setValue('123456');

        expect(form.valid).toBeTruthy();

    });
});
