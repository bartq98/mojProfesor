import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    ReactView,
    ComponentsView,
    ProfesorDetailsView,
    LoginView,
    RegisterView,
} from 'views';
import { Layout } from 'components/common/Layout';

type Props = {};

type State = {};

export default class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Layout>
                <Switch>
                    {/* <Route path="/components" component={ComponentsView} /> */}
                    <Route path="/welcome" component={ComponentsView} />
                    <Route path="/register" component={RegisterView} />
                    <Route path="/login" component={LoginView} />
                    <Route path="/profesors" component={ComponentsView} />
                    <Route
                        path="/profesor/:id"
                        component={ProfesorDetailsView}
                    />
                    <Route
                        path="/profesor/add"
                        component={ProfesorDetailsView} // todo
                    />
                    <Route
                        path="/profesor/:id/add-opinion"
                        component={ProfesorDetailsView} // todo
                    />

                    <Route path="/" component={ReactView} />
                </Switch>
            </Layout>
        );
    }
}
