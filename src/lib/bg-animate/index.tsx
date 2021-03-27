import React from 'react'
import useStyle from './styles.jss'

const RawBackgroundAnimation = (props : any)=>{
    const classes = useStyle()
    const {children} = props
    return (
        <div className={classes.bg}>
            {children}
        </div>
    )
}

export { RawBackgroundAnimation }

