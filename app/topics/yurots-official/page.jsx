import YurotsOfficialKeywordPage, { generateMetadata } from './yurots-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsOfficialKeywordPage />;
}
