import YurotsWithTrainersServerFranceKeywordPage, { generateMetadata } from './yurots-with-trainers-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsWithTrainersServerFranceKeywordPage />;
}
