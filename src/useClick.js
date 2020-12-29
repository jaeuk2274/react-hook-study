import React, { useEffect, useRef } from "react";

export const useClick = onClick => {
    const element = useRef();
    useEffect(() => {
        // componentDidMount() 1회성 
        if(element.current){ // 값 update 시에는 미실행, depence
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if(element.current){
            // componentWillUnmount(): 컴포넌트를 DOM에서 제거하기 전에 실행
            // 이벤트 제거 및 정리 작업 수행 가능
            element.current.removeEventListener("click", onClick);
            }
        }
    }, []); // depence 없기 때문에 1회성

    if(typeof onClick !== "function") {
        return;
    }

    return element;
}