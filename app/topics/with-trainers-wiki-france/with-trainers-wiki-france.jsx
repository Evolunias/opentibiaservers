import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-wiki-france');
}

export default function WithTrainersWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-wiki-france" />;
}
