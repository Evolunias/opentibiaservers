import WhispersOfSolitudePage, { generateMetadata } from './whispers-of-solitude';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WhispersOfSolitudePage />;
}
