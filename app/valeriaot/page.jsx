import ValeriaotPage, { generateMetadata } from './valeriaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ValeriaotPage />;
}
