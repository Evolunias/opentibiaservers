import WithTrainersLaunchUsaKeywordPage, { generateMetadata } from './with-trainers-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersLaunchUsaKeywordPage />;
}
