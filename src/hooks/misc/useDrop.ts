import { useEffect, useRef, useState } from 'react';

const useDrop = () => {
    const [state, setState] = useState(false);
    const ref = useRef<any>(null);
    
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setState(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return { ref, state, setState };
}

export default useDrop;