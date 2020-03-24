// OPTION Z
//Forms event.preventdefault()
<input type="text" className="form-control" placeholder={props.pizzaToEdit.topping} 
value={// props.pizzaToEdit.topping} onChange={(e)=>props.handlePatchPizzaTopping(e.target.value)}/>

<select value={null} className="form-control"
          onChange={(e)=>props.handlePatchPizzaSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
</select>

<div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" 
            checked={props.pizzaToEdit.vegetarian}
            onChange={props.handleVegetarianOptionSelect}
            />
            <label className="form-check-label"> Vegetarian</label>
</div>

<div className="col">
          <button type="submit" className="btn btn-success" 
          onClick={props.handleSubmitAKAPatch}>Submit</button>
</div>
<button >Submit my offer</button> //Standalone button
render(){
    return(
        <form onSubmit={Something}>
            <label>Enter your offer: 
                <input onChange={this.handleEnteredOffer} type='text' 
                name='offer' placeholder={this.props.offerIsForThisProduct.price}></input>
            </label>
            <button >Submit my offer</button>
        </form>
    )
}
// ============

<div className="field">
<div className="ui checkbox">
  <input
    id="brown-rice"
    type="checkbox"
    value="Brown Rice"
    name="fillings"
    checked={ props.fillings.includes('Brown Rice') }
    onChange={ props.handleChange }
  />
  <img src={ require('../images/fillings/brown-rice.png') } height="100px" width="100px" alt="brown rice" />
  <label htmlFor="brown-rice">Brown Rice</label>
</div>
</div>

//Sorting, Filtering, Includes

list.map((currElement, index) => {

<PokemonCollection pokemons={
          this.state.alphabeticalSort
          ? this.getFilteredPokemons().sort((a,b)=>a.name>b.name ? 1 :-1)
          : this.getFilteredPokemons()
          }/>

          createList = () =>{
            let theListToShow = [...this.props.pigs]
            // Step-1: 
            let theFinalList
            if (this.props.onPigType==='all'){
                theFinalList = theListToShow
            } else {
                theFinalList = theListToShow.filter(item=>item.greased)
            }
            //Step-2: Further order the list // 
            if (this.props.onSortType==='weight') {
                theFinalList.sort((a,b)=>(a.weight > b.weight) ? 1: -1)
            } else if (this.props.onSortType==='alphabetical'){
                theFinalList.sort((a,b)=>(a.name > b.name) ? 1: -1)
            }
            //
            return theFinalList
        }

let newCurrentBatch = [...this.state.currentBatchOfSushisOnDisplay].filter(item=>item.id!==receivedSushi.id)

let targetIndex = this.state.pizzas.indexOf(this.state.pizzas.find(currentPizza=>currentPizza.id===pizza.id))

getFilteredPokemons = () => {
    if (this.state.searchTerm==='all') {
      return [...this.state.pokemons]
    } else {
      return [...this.state.pokemons].filter(pokemon=>pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
  }

//Fetch Types  componentDidMount(){this.getAllTheSushis()}

getAllTheSushis = () => {
    fetch(API).then(object=>object.json())
    .then(sushis=>this.setState({sushis}))
    .then(()=>this.getNextBatchOfSushis())
  }

  componentDidMount(){this.getAllTheSushis()}

// ======

postNewPokemon = (newPokemonObject) => {
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(newPokemonObject)
      };
    fetch("http://localhost:3000/pokemon/", configObj)
        .then(response=>response.json())
        .then(object=>{
          newPokemonObject.id = object.id;
          this.props.addNewPokemon(newPokemonObject)
          console.log(newPokemonObject)
        })
    }

    function destroy(URI,id){
        let configObj = {
            method: "DELETE"
        }
        return fetch(`${URI}/${id}`,configObj).then(response=>response.json())
    }
    // =======
    handleSubmitAKAPatch = (event) =>{
        event.preventDefault()
        //patch to it with a fetch 1- form the patch object 2-patch
        let patchObject = {
          topping: this.state.pizzaEdited.topping,
          size: this.state.pizzaEdited.size,
          vegetarian: this.state.pizzaEdited.vegetarian
        }
        let patchData = {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
          body: JSON.stringify(patchObject)
          }
        fetch(`${BASE_URL}${this.state.pizzaEdited.id}`,patchData)
        .then(response=>response.json())
        .then(pizza=>{
          //find the pizza from the state.pizza with the matching id
          let targetIndex = this.state.pizzas.indexOf(this.state.pizzas.find(currentPizza=>currentPizza.id===pizza.id))
          let futurePizzas = [...this.state.pizzas]
          futurePizzas[targetIndex]=pizza
          //replace that with the pizza just received
          this.setState({
            pizzas:futurePizzas,
            pizzaEdited: {} //so that we start all over again
          })

//Tenary

<PokemonCollection pokemons={
          this.state.alphabeticalSort
          ? this.getFilteredPokemons().sort((a,b)=>a.name>b.name ? 1 :-1)
          : this.getFilteredPokemons()
          }/>

//   =========

//Array Operations

addSushiToTable = (receivedSushi) => {
    if (this.state.moneyLeft >= receivedSushi.price) 
    {
        //1. remove from the available sushis
        let targetIndex = this.state.sushis.indexOf(receivedSushi)
        let newAvailableSushis = [...this.state.sushis]
        newAvailableSushis.splice(targetIndex,1)
        this.setState({sushis:newAvailableSushis})
        //2. Add the received sushi to sushis on table
        this.setState({sushisOnTable: [...this.state.sushisOnTable,receivedSushi]})
        //2.5 Reduce available money
        this.setState({moneyLeft: this.state.moneyLeft-receivedSushi.price})
        //3. OPTION A - remove from the current batch of sushis on display
        let newCurrentBatch = [...this.state.currentBatchOfSushisOnDisplay].filter(item=>item.id!==receivedSushi.id)
        this.setState({currentBatchOfSushisOnDisplay:newCurrentBatch})
    } else return
  }

//return/=> notes

//this.setState({}) examples:
handleFormElementChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    // ====

    addNewPokemon = (newPokemonObject) =>{
        this.setState({pokemons: [...this.state.pokemons,newPokemonObject]})
      }
    //   =====================

    handlePatchPizzaTopping = (patch_PizzaTopping) => this.setState({
        pizzaEdited:{
          ...this.state.pizzaEdited,
          topping: patch_PizzaTopping
        }
      })
    // ===========

handleChange = (event) => {
    // event.preventDefault()
    const itemType = event.target.name
    const item = event.target.value
    // debugger
    !this.state[`${itemType}`].includes(item) ?
      this.setState({
        [itemType]: this.state[`${itemType}`].concat(item)
      })
    :
      this.setState({
        [itemType]: this.state[`${itemType}`].filter(
          ingr => ingr !== item
        )
      })
  }

// Goodies:
handleFrontBackImageToggle = () => this.setState({showFront: !this.state.showFront})

// ====
    render(){

        const {initiateSearch, updateSearchTerm} = this.props

        return(
            <form onSubmit={(e)=>initiateSearch(e)}>
                <input onChange={(e)=>updateSearchTerm(e.target.value)} type='text' placeholder='enter...'></input>
                <button>Search!</button>
            </form>
        )
    }

// ==
{this.props.pokemon.stats.find(item=>item.name==='hp').value} hp
// ==
handleFormElementChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
