"use client";

import { useEffect } from "react";

interface RootErrorProps{
    error: Error & { digest?: string }
    reset: () => void
}

// docs: https://nextjs.org/docs/app/api-reference/file-conventions/error#error
function RootError({error, reset}: RootErrorProps){
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
      }, [error])
    
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button
            onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
            }
            >
                Try again
            </button>
        </div>
    )
}

export default RootError;