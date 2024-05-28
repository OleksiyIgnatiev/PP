import create from 'zustand';

interface State {
    isLoggedIn: boolean;
    userId: number | null;
    role: string | null;
    theme: 'white' | 'black';
    loginState: (userId: number, role: string) => void;
    logout: () => void;
    setTheme: (theme: 'white' | 'black') => void;
}

const useStore = create<State>((set) => ({
    isLoggedIn: false,
    userId: null,
    role: null,
    theme: 'white',

    loginState: (userId: number, role: string) => {
        localStorage.setItem('userId', String(userId))
        localStorage.setItem('role', String(role))
        set({ isLoggedIn: true, userId, role })

        },
    logout: () => {
        localStorage.removeItem('userId')
        localStorage.removeItem('role')
        set({ isLoggedIn: false, userId: null, role: null })
    },
    setTheme: (theme: 'white' | 'black') => set({ theme }),
}));

export default useStore;
