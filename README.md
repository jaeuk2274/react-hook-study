## react-hooks-study

- React-hooks으로 다양한 컴포넌트를 직접 만들어 보면서 학습
- npm 배포 방법 학습

- useState, useEffect 예시
```
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
```

```
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });

    const [trigger, setTrigger] = useState(0);

    const refectch = () => {
        setState({
            ...state,
            loading: true,
        });
        setTrigger(Date.now());
    }

    useEffect(()=>{
        axiosInstance(opts)
            .then(data => {
                setState({
                    ...state,
                    loading: false,
                    data
                });
            })
            .catch(error => {
                setState({...state, loading: false, error});
            })
    }, [trigger]); // trigger가 바뀌면 재실행 
```

- 최신 js 문법 
```
// ...로 해당 전체 내용 풀기 
<input {...name} />

// 이름 같으면 동일 이름으로 사용 
{
    data: data 
    // 동일하다.
    data
}

// {} 으로 안에 내용 바로 꺼내쓰기
const { loading, error, data, refectch } = useAxios({
        url:"http://....",
    })
```

- Notification
    - 이건 잘 활용하면 쓸만할 것 같은데?

- npm init

@wook/use-title
