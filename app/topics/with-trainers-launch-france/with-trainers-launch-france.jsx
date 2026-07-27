import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-launch-france');
}

export default function WithTrainersLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-launch-france" />;
}
