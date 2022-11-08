import { Paj } from "../styled";
import { Link } from "react-router-dom";

export default function Paj3() {

  return (
    <Paj>

      <div className="paj3">
        <Link to={'/'}>
          <button>Voltar</button>
        </Link>

        <h1>Paj3</h1>
      </div>

    </Paj>
  );
}