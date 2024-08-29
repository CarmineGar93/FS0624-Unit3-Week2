import BookList from "../components/BookList";
import CommentArea from "../components/CommentArea";
import App from '../App'
import {fireEvent, render, screen} from  '@testing-library/react'

describe('Comment Area without any book selected', ()=>{
    it('should appear only a heading explaing that no book has been selected', ()=>{
        render(<App>
            <BookList>
                <CommentArea></CommentArea>
            </BookList>
        </App>)
        const heading = screen.getByText(/Nessun libro selezionato/)
        expect(heading).toBeInTheDocument()
    })
})

describe('Comment area with a book selected', ()=>{
    it('Should appear a list comment and a form for adding comments', async()=>{
        render(<App>
            <BookList>
                <CommentArea></CommentArea>
            </BookList>
        </App>)
        const imgs = screen.getAllByRole('img')
        fireEvent.click(imgs[1])
        const inviaBtn = await screen.findByText(/Invia recensione/)
        expect(inviaBtn).toBeInTheDocument()

    })
})