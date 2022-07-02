import React, {Component} from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import MoviesContainer from '../layout/Spinner';
export class LAnding extends Component {
    render() {
        const{ loading } = this.props;
        return(
            <div classNAme="container">
                <searchForm />
                {loading ? <spinner /> : <MoviesContainer/>}
                
            </div>
        );

        }
    }
    const mapStateToProps = state => ({
        loading: state.movies.loading
    });
 export default connect(mapStateToProps)(Landing);
