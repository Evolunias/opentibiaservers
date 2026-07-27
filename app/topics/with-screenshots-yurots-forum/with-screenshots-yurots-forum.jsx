import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots-forum');
}

export default function WithScreenshotsYurotsForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots-forum" />;
}
