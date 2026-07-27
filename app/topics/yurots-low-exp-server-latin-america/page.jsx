import YurotsLowExpServerLatinAmericaKeywordPage, { generateMetadata } from './yurots-low-exp-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsLowExpServerLatinAmericaKeywordPage />;
}
