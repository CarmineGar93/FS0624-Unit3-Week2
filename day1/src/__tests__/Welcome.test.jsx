import Welcome from "../components/Welcome";
import { fireEvent, render, screen, waitFor} from  '@testing-library/react'


describe('Alert function', () => {
    it('should render when the component is mounted', () => {
        render(<Welcome />)
        const alert = screen.getByRole('alert')
        expect(alert).toBeInTheDocument()
    });
    it('should disappear once the button is clicked', async() => {
        render(<Welcome></Welcome>)
        fireEvent.click(screen.getByText(/Close me/i));
        await waitFor(() => {
            expect(screen.queryByText(/Benvenuto\/a/i)).toBeNull();
        })
    })
    it('should re-appear if i click twice', async() => {
        render(<Welcome></Welcome>)
        fireEvent.click(screen.getByText(/Close me/i));
        fireEvent.click(screen.getByText(/Show Alert/i));
        await waitFor(() => {
            expect(screen.getByText(/Benvenuto\/a/i)).toBeTruthy();
        })
    })
});

describe('Heading', () => {
    it('should be rendered when component is mounted', ()=>{
        render(<Welcome></Welcome>)
        expect(screen.getByText(/Bacheca libri/i)).toBeInTheDocument()
    })
})