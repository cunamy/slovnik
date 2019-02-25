import React,{Component} from 'react';

class Game extends Component{

    componentDidMount(){
        const {
            type,
            wordService
        } = this.props;
        console.log(type);
    }

    render = () =>{
        return (
            <div className="game">
                All our life is the game.
            </div>
        );
    };
}

// const mapStateToProps = ({bookList:{books,loading,error}}) => {
//     return {
//         books,
//         loading,
//         error
//     }
// }

// const mapDispatchToProps = (dispatch,{bookstoreService}) => {       
//     return bindActionCreators({
//         fetchBooks:fetchBooks(bookstoreService),
//         onAddedToCart:bookAddedToCart
//     },dispatch);
// }

// export default compose(
//     withBookstoreService(),
//     connect(mapStateToProps,mapDispatchToProps)
// )(BookListContainer);

export default  Game;