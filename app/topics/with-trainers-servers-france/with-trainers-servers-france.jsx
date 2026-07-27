import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-servers-france');
}

export default function WithTrainersServersFranceKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-servers-france" />;
}
