import { Paj } from "../styled";
import { Link } from "react-router-dom";

export default function Paj4() {

  return (
    <Paj>

      <div className="paj4">
        <Link to={'/'}>
          <button>Voltar</button>
        </Link>

        <h1>Paj4</h1>
      </div>

    </Paj>
  );
}