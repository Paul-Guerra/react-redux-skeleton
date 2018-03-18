import { connect } from 'react-redux';
import ready from '../actions/app.actions';
import AppComponent from '../components/app.component';

// map state to a prop of the component
function mapStateToProps(state) {
    return {};
}

// map actions you want a component to dispatch to a prop of the component
function mapDispatchToProps(dispatch) {
    return {
        onAppReady: (url) => {
            console.log('ready!');
            dispatch(ready());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
