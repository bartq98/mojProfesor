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
} from 'views';
import { Layout } from 'components/common/Layout';
import * as dal from 'dal';

type Props = {} & RouteComponentProps;

type State = {};

class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    async scomponentDidUpdate(prevProps: Props) {
        const {
            location: { pathname },
        } = this.props;
        if (prevProps.location.pathname !== pathname) {
            const { data } = await dal.auth.getMe();
        }
    }

    render() {
        return (
            <Layout>
                <Switch>
                    {/* <Route path="/components" component={ComponentsView} /> */}
                    <Route path="/welcome" component={ComponentsView} />
                    <Route path="/register" component={RegisterView} />
                    <Route path="/login" component={LoginView} />
                    <Route path="/professors" component={ProfessorsView} />
                    <Route
                        exact
                        path="/profesor/:id"
                        component={ProfesorDetailsView}
                    />
                    <Route
                        path="/profesor/add"
                        component={ProfesorDetailsView} // todo
                    />
                    <Route
                        path="/profesor/:id/add-opinion"
                        component={AddOpinionView}
                    />

                    <Route path="/" component={LandingView} />
                </Switch>
            </Layout>
        );
    }
}

export default withRouter(App);
