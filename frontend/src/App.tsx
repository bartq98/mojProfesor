import { Component } from 'react';
import {
    Switch,
    Route,
    RouteComponentProps,
    withRouter,
} from 'react-router-dom';
import {
    ComponentsView,
    ProfesorDetailsView,
    LoginView,
    LandingView,
    RegisterView,
    AddOpinionView,
    ProfessorsView,
    AddProfessorView,
} from 'views';
import { Layout } from 'components/common/Layout';
import * as dal from 'dal';
import { authSlice } from 'store/slices/authSlice';
import { store } from 'store';

type Props = {} & RouteComponentProps;

type State = {};

class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    async componentDidUpdate(prevProps: Props) {
        const {
            location: { pathname },
        } = this.props;
        if (prevProps.location.pathname !== pathname) {
            await dal.auth
                .getMe()
                .catch(() =>
                    store.default.dispatch(authSlice.actions.setLogOut())
                );
        }
    }

    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/welcome" component={ComponentsView} />
                    <Route path="/register" component={RegisterView} />
                    <Route path="/login" component={LoginView} />
                    <Route path="/professors" component={ProfessorsView} />
                    <Route
                        exact
                        path="/professor/:id"
                        component={ProfesorDetailsView}
                    />
                    <Route
                        path="/professor/add"
                        component={ProfesorDetailsView} // todo
                    />
                    <Route
                        path="/professor/:id/add-opinion"
                        component={AddOpinionView}
                    />
                    <Route path="/add-professor" component={AddProfessorView} />

                    <Route path="/" component={LandingView} />
                </Switch>
            </Layout>
        );
    }
}

export default withRouter(App);
