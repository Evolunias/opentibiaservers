import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot-forum');
}

export default function WithScreenshotsThaisotForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot-forum" />;
}
