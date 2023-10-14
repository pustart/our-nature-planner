import { Button, SlideButtons } from '../src/components/core';
import { Header } from '../src/components/modules';
import { Appearance } from '../src/components/core/Button/Button.props';
import { withDefaultLayout } from '../src/layouts/Default/Layout';

function Home(): JSX.Element {
  return (
    <>
      Hello world
    </>
  );
}

export default withDefaultLayout(Home, true);
