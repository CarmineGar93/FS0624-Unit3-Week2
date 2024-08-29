import BookList from "../components/BookList";
import App from '../App'
import {render, screen, fireEvent} from  '@testing-library/react'

describe('Cards', ()=>{
    it('should render 40 cards', ()=>{
        render(<App>
            <BookList></BookList>
        </App>)
        const cards = screen.queryAllByRole('img')
        expect(cards).toHaveLength(40)
    })
})

describe('Book selected', ()=>{
    it('Should appear a red border on a card once selected', async()=>{
        render(<App>
            <BookList>
            </BookList>
        </App>)
        const imgs = screen.getAllByRole('img')
        fireEvent.click(imgs[1])
        const cards = screen.getAllByTestId('cards')
        expect(cards[1]).toHaveStyle('border: 3px solid red !important')

    })
})