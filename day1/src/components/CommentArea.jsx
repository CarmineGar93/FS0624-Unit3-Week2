import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import { Alert } from 'react-bootstrap'

function CommentArea({ selected }) {
    const[comments, setComments] = useState([])
    const[isLoaded, setIsLoaded] = useState(false)
    const[isError, setIsError] = useState(false)
    const[reload, setReload] = useState(false)
    const[hasMounted, setHasMounted] = useState(false);

/*     componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.selected !== this.props.selected) {
            this.setState({
                isLoaded: false
            })
            this.fetchComments()
        }
        if (prevState.reload !== this.state.reload) {
            this.fetchComments()
            this.setState({
                isLoaded: false
            })
        }
    } */
    
    const reloadComments = () => {
        setReload(!reload)
    }
    const fetchComments = async () => {
        try {
            const URL = 'https://striveschool-api.herokuapp.com/api/comments/'
            const response = await fetch(URL + selected, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MmM3NDI4YWI5NjAwMTU2NjRmMGUiLCJpYXQiOjE3MjQzMjkwNzYsImV4cCI6MTcyNTUzODY3Nn0.Si6MDHOC4QOt-RT6rUZF7zUYk6RqmKdoPXyQKANzAYw"
                }
            })
            if (response.ok) {
                const commentsRetrieved = await response.json()
                console.log(commentsRetrieved)
                setComments(commentsRetrieved)
                setIsLoaded(true)
            } else {
                throw new Error('Errore')
            }
        } catch (err) {
            alert(err)
            setIsError(true)
            setIsLoaded(true)
        }
    }

    useEffect(() => {
        if(!hasMounted) {
            setHasMounted(true)
            return
        }
        setIsLoaded(false)
        fetchComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected, reload])
    return (
        <div className="my-3">
            {
                !selected ? (
                    <div>
                        <h1>Nessun libro selezionato</h1>
                    </div>
                ) : !isLoaded ? <Loading /> : isError ? (
                    <Alert variant='danger'>
                        Oops. Something went wrong
                        <i className="bi bi-exclamation-triangle"></i>
                    </Alert>
                ) : (
                    <>
                        <CommentsList array={comments} reload={reloadComments} />
                        <AddComment id={selected} reload={reloadComments} />
                    </>
                )
            }
        </div>
    )
}


export default CommentArea