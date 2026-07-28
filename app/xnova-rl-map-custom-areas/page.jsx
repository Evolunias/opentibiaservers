import XnovaRlMapCustomAreasPage, { generateMetadata } from './xnova-rl-map-custom-areas';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XnovaRlMapCustomAreasPage />;
}
