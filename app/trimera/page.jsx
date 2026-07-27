import TrimeraPage, { generateMetadata } from './trimera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrimeraPage />;
}
