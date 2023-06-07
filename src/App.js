import '../src/sass/main.scss'
import Header from './components/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDollarSign, faFireFlameCurved, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import Card from './components/Card';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addOrderid } from './slices';
library.add(faTruckFast, faFireFlameCurved, faDollarSign)

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const order = useSelector(state => state.data.orders)

  const createNewOrder = () => {
    dispatch(addId)
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="home">
          <Card
            className="bgBlue wrapperCard"
            icon={faTruckFast}
            size="4x"
            title="Nouvelle commande"
            text="Créer et enregistrer une nouvelle commande"
            action={() => navigate("/order ")}
          />
          <Card
            className="bgRed wrapperCard"
            icon={faFireFlameCurved}
            title="Commandes en cours"
            text="Voir le détail des commandes en cours"
            action={() => navigate("/currentOrder")}
          />
          <Card
            className="bgGreen wrapperCard"
            icon={faDollarSign}
            title="Paiement commande"
            text="Encaisser une commande"
            action={() => navigate("/paid")}
          />
        </div>
      </div>
    </div>
  );
}

export default App;