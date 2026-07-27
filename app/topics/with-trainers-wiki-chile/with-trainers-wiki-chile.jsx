import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-wiki-chile');
}

export default function WithTrainersWikiChileKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-wiki-chile" />;
}
