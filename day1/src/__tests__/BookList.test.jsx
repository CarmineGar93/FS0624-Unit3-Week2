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
    it('Should appear a red border on a card once selected', ()=>{
        render(<App>
            <BookList>
            </BookList>
        </App>)
        const imgs = screen.getAllByRole('img')
        fireEvent.click(imgs[1])
        const cards = screen.getAllByTestId('cards')
        expect(cards[1]).toHaveStyle('border: 3px solid red !important')

    })
    it('Should return normal if clicked again', ()=>{
        render(<App>
            <BookList>
            </BookList>
        </App>)
        const imgs = screen.getAllByRole('img')
        fireEvent.click(imgs[1])
        fireEvent.click(imgs[2])
        const cards = screen.getAllByTestId('cards')
        expect(cards[1]).not.toHaveClass('shadowing')

    })
})

describe('Input field', ()=>{
    it('Should filter the cards based on what is written', ()=>{
        render(<App>
            <BookList>
            </BookList>
        </App>)
        const searchField = screen.getByTestId('ricerca')
        fireEvent.change(searchField, {target: {value: 'fire'}})
        const imgs = screen.getAllByRole('img')
        expect(imgs.length).toBeLessThan(40)
    })
})