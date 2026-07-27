import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-miracle-forum');
}

export default function WithScreenshotsMiracleForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-miracle-forum" />;
}
