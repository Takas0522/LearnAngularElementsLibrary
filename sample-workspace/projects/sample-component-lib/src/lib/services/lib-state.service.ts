
interface LibState {
    state: string;
    userId: string;
    userName: string;
}

export class LibStateService implements LibState {
    state = '';
    userId = '';
    userName = '';

    setting(state: LibState) {
        this.state = state.state;
        this.userId = state.userId;
        this.userName = state.userName;
    }

}
