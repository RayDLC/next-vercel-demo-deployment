import { FC, PropsWithChildren }  from "react"

const WhiteLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '50px',
    }}>
        <h4 style={{ color: 'black' }}>Dark-layout</h4>
        <div>
            { children }
        </div>
    </div>
  )
}

export default WhiteLayout
