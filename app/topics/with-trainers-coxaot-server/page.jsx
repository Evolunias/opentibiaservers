import WithTrainersCoxaotServerKeywordPage, { generateMetadata } from './with-trainers-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersCoxaotServerKeywordPage />;
}
