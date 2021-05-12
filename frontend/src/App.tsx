import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ReactView, ComponentsView, ProfesorDetailsView } from 'views';

type Props = {};

type State = {};

export default class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Switch>
                <Route path="/components" component={ComponentsView} />
                <Route path="/profesor/:id" component={ProfesorDetailsView} />
                <Route path="/" component={ReactView} />
            </Switch>
        );
    }
}
