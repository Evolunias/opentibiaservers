import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-launch-latin-america');
}

export default function WithTrainersLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-launch-latin-america" />;
}
