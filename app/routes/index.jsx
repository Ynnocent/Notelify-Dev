import { Link } from '@remix-run/react';
import Title3D from '~/components/Title3D';

import homeStyles from '~/styles/home.css';

export default function Index() {
  return (
    <main id="content">
      <Title3D id="title3D"/>
      <h1>Take a look at my wonderful note taking app!</h1>
      <p>Never lose track of your notes ever again!</p>
      <p id="cta">
        <Link to="/notes">Try Now!</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: homeStyles }];
}
