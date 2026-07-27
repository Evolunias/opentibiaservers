import ZuneraPage, { generateMetadata } from './zunera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraPage />;
}
