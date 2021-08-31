import { Container } from "./styles";

export function TransactionsTable() {

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit"> 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>31/8/21</td>
                    </tr>
                    <tr>
                        <td>Pagamento Aluguel</td>
                        <td className="withdraw">2.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>31/8/21</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>
    )
}