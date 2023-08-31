import { render, screen } from "@testing-library/react"
import { Dashboard } from "../../../pages";


// Essa é minha teste suite para englobar os teste cases
describe("ButtonWithRoundedBorderTestSuite", () => {

    //Primeiro teste case
    //Descrição pode ser qualquer nome que descreva o que está sendo testado
    //Nesse caso, está testando se o componente foi renderizado corretamente
    it('should render correctly', () => {
        render(<Dashboard/>)

        // A test libery tem um utilitário chamado screen. ele cria uma dom virtual onde ele injeta
        //os componentes do componente que você renderizou. Através dele que podemos acessar

        //Estou usando o toBeInTheDocument para verificar se o elemento está renderizado na tela
        expect(screen.getByText("LOG IN")).toBeInTheDocument()



    })

    //Outra forma de fazer o test case é com test que é a mesma coisa
    //ex: 
    // test("should render correctly", () => {
        
    // })





})


