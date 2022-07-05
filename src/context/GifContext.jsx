import { createContext, useState } from "react"

const GifContext = createContext();

export const GifContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    const clearSearch = () => {
        setCategories([])
    }

    return(
        <GifContext.Provider value={{
            clearSearch
        }}>
            {children}
        </GifContext.Provider>
    )

}

export default GifContext