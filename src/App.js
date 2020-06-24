import React from 'react';
import poems from './poems.json'
import { PoemForm } from './PoemForm';
import { PoemList } from './PoemList';


class App extends React.Component {
  
  state = {
    poems: poems
  }

  deleteCard = (deletedPoem)=>{
    // console.log("working")
    console.log(deletedPoem)
    const result = this.state.poems.filter(poem => poem != deletedPoem)
    this.setState({
      poems: result
    })
  }

  createCard = (input) =>{
    
    this.setState({
      poems: [...this.state.poems, input]
    })

  }

  editCard = (poem, content) => {
    console.log(poem, content)
    const front = this.state.poems.slice(0,poem.id-1)
    const back = this.state.poems.slice(poem.id)
    poem.content = content 

    console.log([...front, poem, ...back])

    this.setState({
      poems: [...front, poem, ...back]
    })

  }

  
  render(){
    return (
      <div className="ui container">
        <PoemForm create={this.createCard} />
        <PoemList poems={this.state.poems} delete={this.deleteCard} edit={this.editCard}/>
      </div>
    );
  }
}

export default App;
