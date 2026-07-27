import YurotsWithTrainersServerLatinAmericaKeywordPage, { generateMetadata } from './yurots-with-trainers-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsWithTrainersServerLatinAmericaKeywordPage />;
}
