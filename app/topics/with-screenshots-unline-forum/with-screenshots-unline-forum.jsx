import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline-forum');
}

export default function WithScreenshotsUnlineForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline-forum" />;
}
