import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    li: {
        borderRadius: 25,
        border: 'solid',
        borderColor: 'black',
        padding: 5,
        margin: 5
    },
    bg: {
        backgroundColor: 'cyan'
    }
})

export default useStyles