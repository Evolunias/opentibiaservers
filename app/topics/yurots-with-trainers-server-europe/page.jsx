import YurotsWithTrainersServerEuropeKeywordPage, { generateMetadata } from './yurots-with-trainers-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsWithTrainersServerEuropeKeywordPage />;
}
