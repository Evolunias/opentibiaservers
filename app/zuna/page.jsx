import ZunaPage, { generateMetadata } from './zuna';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZunaPage />;
}
