import WithTrainersXanteriaServerKeywordPage, { generateMetadata } from './with-trainers-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersXanteriaServerKeywordPage />;
}
