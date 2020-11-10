import { createContext } from 'react';

type User = null | {
    
};

interface ContextProps {
    user: User;
};

export const UserContext = createContext<ContextProps>({
    user: Object,
});

