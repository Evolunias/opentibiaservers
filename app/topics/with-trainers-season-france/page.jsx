import WithTrainersSeasonFranceKeywordPage, { generateMetadata } from './with-trainers-season-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersSeasonFranceKeywordPage />;
}
