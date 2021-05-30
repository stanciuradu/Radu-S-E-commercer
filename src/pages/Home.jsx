// import componenta Layout care are heder si footer in home
import React from "react";
import Layout from "../components/layout/Layout";
import HomeCategory from "../components/home-category/HomeCategory";
// import fiserul JSON in care am datele
import products from "../utils/products.json";

// aici in home am nevoie sa fac request catre back-end pentru a primi datele despre produse si a le afisa sub o anumita forma
// practic cer datele din vectorul din products.json printr-un request, urmând să le afisez sub formă de lista de produse
// deci am nevoie de class , pentru ca am metoda componentDidMount

class Home extends React.Component {
  constructor() {
    super();
    // campul din state va fi un array gol initial
    // categories reprezinta toate informatiile despre produce
    // categoriesNames reprzinta toate numele categoriilor
    this.state = {
      categories: [],
      categoryNames: [],
    };
  }
  // vreau sa iau datele de la server, inseamna ca fac un request o singura data cu metoda componentDidMount
  // nu mai fac partea cu fetch deoarece nu am linkul serverului, pornesc dirct de la JSON
  componentDidMount() {
    // aici folosesc JSON creat
    // scopul pirnicpal este sa extrag numele categoriei, iamginea si descrierea pentu fiecar categorie in parte
    // obiectul nostru este un obiect, dar categoriile din interior sa fie puse intr-un array pentru ca informatia e repetitiva
    // exista o metoda de a itera prin obiecte-sunt doua metode noi-pentru a transforma obiectele in array-uri: Object.keys() și Object.values(). Folosesc aceste metode deoarece JSON este un obiect si am nevoie din obiect sa iau cheile si valorile si sa le pun într-un array

    // iau valorile din obiectul products si le pun intr-un array
    const categories = Object.values(products);
    const categoriesNames = Object.keys(products);
    // actualizez state-ul
    this.setState({ categories });
    // actualizez categoriesNames
    this.setState({ categoriesNames });
  }
  render() {
    // pun this.props pentu ca sunt in interiorul unei clase
    return (
      <div>
        {/* props-rulie vor fi pasate catre Layout, deaorece acesta este urmatorul punct pana la header */}
        <Layout>
          {/* vreau sa pun 4 componente de HomeCategory, dar eu vreau sa am doua HomeCategory pe același rand */}
          {/* pentru a grupa pe linii si coloean ma folosesc de containerul de la Boostrapt */}
          {/* utilizez container si coloane pentru a aseza in pagina categoriile de produse */}
          {/* eu nu o sa stiu de la inceput cate randuri de produse o sa am deoarece ele vin bin back-end iar eu printr-un map le parcurg si le afisez */}
          {/* mapez pir vector pentru a afisa produsele sib forma de lista */}
          <div className="container">
            <div className="row">
              {
                // toate datele despre categorii sunt tinute in state, iar deci :this.state.categories
                this.state.categories.map((category, index) => {
                  return (
                    <HomeCategory
                      image={category.image}
                      title={category.name}
                      description={category.description}
                      key={index}
                      // pasez numele rutei
                      routeName={this.state.categoriesNames[index]}
                    />
                  );
                })
              }
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Home;
