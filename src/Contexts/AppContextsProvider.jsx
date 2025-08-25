import { AppContextProvider } from "./AppContext";

function AppContextsProvider({ children }) {
    return (
        <div className="app-contexts-provider">
            <AppContextProvider>
                {children}
            </AppContextProvider>
        </div>
    )
}

export default AppContextsProvider;