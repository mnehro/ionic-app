import { AppInitialState } from "../AppInitialState";
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./login.actions";
import { loginReducer } from "./login.reducers";
import { LoginState } from "./LoginState";

describe("Login Store", () => {
    it('recover password', () => {
        const initialState: LoginState = AppInitialState.login;
        const newState = loginReducer(initialState, recoverPassword());
        expect(newState).toEqual({
            ...initialState,
            error: null,
            isRecoveredPassword: false,
            isRecoveringPassword: true
        });

    });
    it('recover password success', () => {
        const initialState: LoginState = AppInitialState.login;
        const newState = loginReducer(initialState, recoverPasswordSuccess());
        expect(newState).toEqual({
            ...initialState,
            error: null,
            isRecoveredPassword: true,
            isRecoveringPassword: false
        });

    });

    it('recover password fail', () => {
        const initialState: LoginState = AppInitialState.login;
        const newState = loginReducer(initialState, recoverPasswordFail({ error: 'Failed' }));
        expect(newState).toEqual({
            ...initialState,
            error: 'Failed',
            isRecoveredPassword: false,
            isRecoveringPassword: false
        });

    });

})