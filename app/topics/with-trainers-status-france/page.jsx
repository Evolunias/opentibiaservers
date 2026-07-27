import WithTrainersStatusFranceKeywordPage, { generateMetadata } from './with-trainers-status-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersStatusFranceKeywordPage />;
}
