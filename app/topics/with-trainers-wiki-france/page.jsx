import WithTrainersWikiFranceKeywordPage, { generateMetadata } from './with-trainers-wiki-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersWikiFranceKeywordPage />;
}
