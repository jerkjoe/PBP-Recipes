import React from 'react'
import Card from '../Card/Card'

class RecipeList extends React.Component {
    render() {
        return (
            <div className="all-recipes">
                {this.props.recipes.map((e, index) => {
                    return <Card recipe={e} key={index}/>
                })}
            </div>
        )
    }
}

export default RecipeList
