import ZaneraTibiaKeywordPage, { generateMetadata } from './zanera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZaneraTibiaKeywordPage />;
}
