import ZnotePage, { generateMetadata } from './znote';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnotePage />;
}
