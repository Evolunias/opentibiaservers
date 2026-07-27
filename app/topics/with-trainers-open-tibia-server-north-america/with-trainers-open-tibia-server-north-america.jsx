import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-open-tibia-server-north-america');
}

export default function WithTrainersOpenTibiaServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-open-tibia-server-north-america" />;
}
