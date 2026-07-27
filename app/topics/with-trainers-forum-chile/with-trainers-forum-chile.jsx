import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-forum-chile');
}

export default function WithTrainersForumChileKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-forum-chile" />;
}
