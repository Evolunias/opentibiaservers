import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-wiki-europe');
}

export default function WithTrainersWikiEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-wiki-europe" />;
}
