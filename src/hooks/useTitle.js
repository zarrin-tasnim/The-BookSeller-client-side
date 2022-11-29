import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - The-BookSeller`;
    }, [title])
};

export default useTitle;