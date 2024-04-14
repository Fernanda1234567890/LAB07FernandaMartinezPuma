export const WapperList = props => {

   const { children } = props

    return (
        <div>
            <h2>Lista de compras</h2>
            <div>
                {children}
            </div>
            
        </div>
    )
}