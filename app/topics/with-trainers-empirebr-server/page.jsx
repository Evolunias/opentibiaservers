import WithTrainersEmpirebrServerKeywordPage, { generateMetadata } from './with-trainers-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersEmpirebrServerKeywordPage />;
}
