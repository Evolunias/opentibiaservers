import XanteriaUkServersKeywordPage, { generateMetadata } from './xanteria-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaUkServersKeywordPage />;
}
