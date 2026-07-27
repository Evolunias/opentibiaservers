import WithTrainersCyntaraServerKeywordPage, { generateMetadata } from './with-trainers-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersCyntaraServerKeywordPage />;
}
