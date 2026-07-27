import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-servers-uk');
}

export default function WithTrainersServersUkKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-servers-uk" />;
}
