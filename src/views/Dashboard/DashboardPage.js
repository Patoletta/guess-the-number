import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "../../components/Button";
import { randomNumber } from "../../utils/helpers/random.helpers";

export const DashboardPage = (props) => {

    const [mounted, setMounted] = useState(false);
    const [currentNumber, setCurrentNumber] = useState(null);
    const [insertedNumber, setInsertedNumber] = useState(null);
    const [result, setResult] = useState(null);
    const [arrayNumbers, setArrayNumbers] = useState([]);

    const {testNumber} = props;

    useEffect(() => {
        const rnd = randomNumber();
        if (!mounted) {
            setCurrentNumber(testNumber ? testNumber : rnd);
            setMounted(true);
        }
    }, [mounted, testNumber]);

    const handleChange = (e) => {
        setInsertedNumber(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        setArrayNumbers([...arrayNumbers, insertedNumber]);
        setResult("Oops, ritenta! era " + currentNumber)
        if (parseInt(insertedNumber) === parseInt(currentNumber)) {
            setResult("EVVIVA hai vinto!");
        }
    }
    
    return (
        <>
            <h2>Storico tentativi: {arrayNumbers.map(e => e + " ")}</h2>
            <h2>Ora hai inserito il numero: {insertedNumber}</h2>
            <h2>La soluzione è: {currentNumber}</h2>
            <Form>
                <Form.Group controlId="formGTN">
                    <Form.Label>Guess the number:</Form.Label>
                    <Form.Control type="text" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClick} label="Is it?" />
            </Form>
            <h1>{result}</h1>
        </>
    )
}


export default DashboardPage;