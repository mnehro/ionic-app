import { createReducer, on } from "@ngrx/store";
import { LoginState } from "./LoginState";
import { AppInitialState } from "../AppInitialState";
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./login.actions";

const initialState: LoginState =  AppInitialState.login;
const reducer = createReducer(initialState,
    on(recoverPassword, currentState => {
        return { ...currentState, error: null, isRecoveredPassword: false, isRecoveringPassword: true };
    }),
    on(recoverPasswordSuccess, currentState => {
        return { ...currentState, error: null, isRecoveringPassword: false, isRecoveredPassword: true };
    }),
    on(recoverPasswordFail, (currentState, action) => {
        return { ...currentState, error: action?.error, isRecoveredPassword: false, isRecoveringPassword: false }
    })
);

export function loginReducer(state: LoginState, action: any) {
    return reducer(state, action);
}