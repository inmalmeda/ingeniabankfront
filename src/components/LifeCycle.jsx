import React, {useState, useEffect} from 'react';

const LifeCycle = () => {

    //* HOOK para componentDidMount()
    const [contador, setContador] = useState(0)
    const [contador2, setContador2] = useState(0)

    //Con el [] solo se ejecutará como callback en el mount
    useEffect(()=>{
        console.log('componentDidMount')
    }, [])

    // * HOOK para componentDidUpdate()
    //Sin [] se ejecutará con CUALQUIER render/actualización
    useEffect(()=>{
        console.log('componentDidUpdate')
    })
    //Con [variable] se ejecutará cada vez que se actualice el contador
    useEffect(()=>{
        console.log('componentDidUpdate')
    }, [contador])

    // * HOOK para componentWillUnmount() 
    //Para destruir el componente
    useEffect(()=>{
        return () =>{
            console.log('componentWillUnmount()')
        }
    })

    // * HOOK para shouldComponentUpdate() -> Hacer uso de memo
    // Función que devuelva true / false para emular el comportamiento del lifecycle
    const debeActualizar = (prevProps, nextProps) => {
        //Logica que teniendo en cuenta las prevProps y las nextProps para decidir si se debe renderizar o no
      
    }

    // ** HOOKs para:
    /**
     * -shouldComponentUpdate() 
     * -getDerivedStateFromProps()
     */

    /**
     * Existen métodos del LifeCycle qe tienen reemplazo con Hooks
     * 
     * -componentDidCatch()
     * -getSnapshotBeforeUpdate()
     * -getDerivedStateFromError()
     * 
     */


    return (
        <div>
            <h6>Contador = {contador}</h6>
            <button onClick={()=>setContador(contador + 1)}>
                Aumentar
            </button>
        </div>
    );
}

export default LifeCycle;
//export  React.memo(LifeCycle, debeActualizar); esto para shouldCompoenntUpdate
