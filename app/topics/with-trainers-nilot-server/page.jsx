import WithTrainersNilotServerKeywordPage, { generateMetadata } from './with-trainers-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersNilotServerKeywordPage />;
}
