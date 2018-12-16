import React from 'react'
import Card from '../../components/Card/Card'
import axios from 'axios'
import './Archive.css'
import { addToCart, removeFromCart } from '../../redux/reducer'
import { connect } from 'react-redux'

class Archive extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            uniqueIngredients: [],
            selected: 0
        }
        this.updateList = this.updateList.bind(this)
    }

    updateList() {
        var all = this.props.requiredIngredients
            .map(e => {
                return e.filter((el, index) => {
                    return index !== 0
                })
            })
            .reduce((acc, cur) => {
                console.log(acc)
                return acc.concat(cur)
            }, [])

        all = all
            .filter((e, index) => {
                return all.indexOf(e) === index
            })
            .sort()
        // console.dir(all)
        return all
    }

    componentDidMount() {
        const devUrl = './recipes.json'
        // get data from json file
        axios
            .get(devUrl)
            .then(res => {
                console.log(res.data)
                this.setState({
                    recipes: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="container">
                <div className="all-recipes">
                    {console.log(this.props)}
                    {this.state.recipes.map((e, index) => {
                        return (
                            <Card
                                recipe={Object.assign({}, e, { index: index })}
                                key={index}
                                addToCart={this.props.addToCart}
                                removeFromCart={this.props.removeFromCart}
                                selectedRecipes={this.props.selectedRecipes}
                            />
                        )
                    })}
                </div>
                <div className="ingredient-list">
                    <h2>All Ingredients You Need</h2>
                    {this.props.selectedRecipes.length === 0
                        ? 'You have not selected any recipes'
                        : 'For Recipes'}
                    <ul className="selected-recipes">
                        {this.props.selectedRecipes.map((e, index) => {
                            return <li key={index}>{e}</li>
                        })}
                    </ul>
                    <ol>
                        {this.state.selected !==
                        this.props.selectedRecipes.length
                            ? this.updateList().map((e, index) => {
                                  return <li key={index}>{e}</li>
                              })
                            : ''}
                    </ol>
                </div>
            </div>
        )
    }
}

Archive = connect(
    state => state,
    { addToCart, removeFromCart }
)(Archive)
export default Archive
