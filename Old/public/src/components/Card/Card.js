import React from 'react'

import './Card.css'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            added: false,
            active: '',
            expand: false
        }
        this.expandIngredients = this.expandIngredients.bind(this)
    }
    expandIngredients() {
        console.log(1)
        this.setState((prevState, props) => {
            return {
                expand: !prevState.expand
            }
        })
    }

    render() {
        const { index, name, type, cook_time, ingredients } = this.props.recipe
        return (
            <div className={'card ' + this.state.active}>
                <div
                    className="toggle"
                    onClick={() => {
                        if (!this.state.added) {
                            this.props.addToCart({
                                name,
                                ingredients: [name, ...ingredients]
                            })
                            this.setState({
                                added: true,
                                active: 'active'
                            })
                        } else {
                            this.props.removeFromCart({
                                name
                            })
                            this.setState({
                                added: false,
                                active: ''
                            })
                        }
                    }}
                >
                    {this.state.added ? (
                        <span>
                            Remove <i className="fas fa-minus-circle" />
                        </span>
                    ) : (
                        <span>
                            Add <i className="fas fa-plus-circle" />
                        </span>
                    )}
                </div>
                <div className="image-wrapper">
                    <img
                        src={'http://lorempixel.com/400/200/food/' + index}
                        alt=""
                    />
                </div>
                <h2>{name}</h2>
                <div className="info">
                    <div>
                        <span>Type:</span>
                        {type}
                    </div>
                    <div>
                        <span>Prep Time: </span>
                        {cook_time} mins
                    </div>
                </div>

                <div
                    className="ingredients-title"
                    onClick={this.expandIngredients}
                >
                    See Ingredients
                </div>
                <p
                    className={
                        this.state.expand ? 'ingredients active' : 'ingredients'
                    }
                >
                    {ingredients.reduce((acc, cur, index) => {
                        return index < ingredients.length - 1
                            ? acc + cur + ', '
                            : acc + cur
                    }, '')}
                </p>
            </div>
        )
    }
}
export default Card
