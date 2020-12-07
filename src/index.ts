import { Main } from './pages/Main';

function app() {
    const app = document.createElement('div');

    app.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return app;
  }

  document.body.appendChild(app());